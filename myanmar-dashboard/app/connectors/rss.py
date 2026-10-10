"""RSS aggregator - free, no key. English-language feeds only.

Feed URLs are either confirmed from a publisher's own feed (SpaceNews returned
live items during verification), or listed in a feed directory (FeedSpot)
pending the connector's own live check. Each feed reports its own status and
fails independently. World-wide feeds keep only region-relevant headlines.
"""
from __future__ import annotations
import re
from .base import Item, ConnectorResult
from ..classify import classify

NAME = "rss"

FEEDS = [
    # Myanmar (curated country list; language not confirmed, so the English-only filter decides what shows)
    {"url": "http://myanmargazette.net/feed", "source": "Myanmar Gazette News Media Forum Network"},
    {"url": "http://www.dvb.no/feed", "source": "Democratic Voice of Burma (DVB)"},
    {"url": "http://www.thithtoolwin.com/feeds/posts/default", "source": "Thit Htoo Lwin (Myanmar)"},
    # Thailand (Bangkok Post publishes its own RSS list; Thailand News prints its address)
    {"url": "https://www.bangkokpost.com/rss/data/most-recent.xml", "source": "Bangkok Post (Thailand)"},
    {"url": "https://www.bangkokpost.com/rss/data/thailand.xml", "source": "Bangkok Post - Thailand"},
    {"url": "https://thailandnews.co/feed/", "source": "Thailand News"},
    # Indonesia (ANTARA English)
    {"url": "https://www.antaranews.com/en/rss/news", "source": "ANTARA News (Indonesia, English)"},
    # Bay of Bengal, Bangladesh and India's north-east (from the earlier verified builds)
    {"url": "https://www.thedailystar.net/frontpage/rss.xml", "source": "The Daily Star (Bangladesh)"},
    {"url": "https://bdnews24.com/?widgetName=rssfeed&widgetId=1150&getXmlFeed=true", "source": "bdnews24 (Bangladesh)"},
    {"url": "https://www.thehindu.com/feeder/default.rss", "source": "The Hindu (India)"},
    {"url": "http://feeds.bbci.co.uk/news/world/asia/india/rss.xml", "source": "BBC News - India"},
    {"url": "https://feeds.feedburner.com/ndtvnews-top-stories", "source": "NDTV (India, top stories)"},
    {"url": "https://www.business-standard.com/rss/home_page_top_stories.rss", "source": "Business Standard (India)"},
    # China side: NOT live-verified from the build sandbox (carried over from the China build)
    {"url": "https://www.xinhuanet.com/english/rss/worldrss.xml", "source": "Xinhua (state media) - World"},
    {"url": "https://www.xinhuanet.com/english/rss/chinarss.xml", "source": "Xinhua (state media) - China"},
    {"url": "https://www.scmp.com/rss/4/feed", "source": "SCMP - China"},
    # Regional and world-wide (filtered to region-relevant headlines)
    {"url": "https://feeds.bbci.co.uk/news/world/asia/rss.xml", "source": "BBC News - Asia"},
    {"url": "https://www.aljazeera.com/xml/rss/all.xml", "source": "Al Jazeera"},
    {"url": "https://www.scmp.com/rss/5/feed", "source": "SCMP - World"},
    # Naval and defence (Indo-Pacific fleet tracking, defence, space, cyber; filtered)
    {"url": "https://news.usni.org/feed", "source": "USNI News (US naval, Indo-Pacific fleet tracking)"},
    {"url": "https://breakingdefense.com/feed", "source": "Breaking Defense (military, space, tech)"},
    {"url": "https://spacenews.com/feed/", "source": "SpaceNews (space business and policy)"},
    {"url": "https://www.space.com/feeds.xml", "source": "Space.com"},
    {"url": "https://therecord.media/feed", "source": "The Record (cyber, Recorded Future News)"},
]

WORLD_WIDE_SOURCES = ("The Hindu (India)", "BBC News - India", "NDTV (India, top stories)", "Business Standard (India)",
                      "BBC News - Asia", "Al Jazeera", "SCMP - World", "SCMP - China", "Xinhua (state media) - World",
                      "Xinhua (state media) - China", "USNI News (US naval, Indo-Pacific fleet tracking)",
                      "Breaking Defense (military, space, tech)", "SpaceNews (space business and policy)", "Space.com",
                      "The Record (cyber, Recorded Future News)")
REGION_TERMS = ["myanmar", "burma", "burmese", "yangon", "naypyidaw", "mandalay", "rakhine", "arakan", "sittwe", "kachin",
                "karen", "kayah", "shan", "chin state", "mon state", "rohingya", "myawaddy", "laiza", "myitkyina", "lashio",
                "kyaukphyu", "muse", "taunggyi", "mawlamyine", "tatmadaw", "junta", "mndaa", "tnla", "uwsa", "nug", "thailand",
                "thai", "bangkok", "phuket", "cambodia", "cambodian", "phnom penh", "preah vihear", "laos", "lao", "vientiane",
                "boten", "malaysia", "malaysian", "kuala lumpur", "singapore", "indonesia", "indonesian", "jakarta", "sumatra",
                "sabang", "malacca", "andaman", "nicobar", "bay of bengal", "indian ocean", "coco", "dawei", "thilawa",
                "bangladesh", "dhaka", "chattogram", "chittagong", "cox's bazar", "manipur", "mizoram", "nagaland", "arunachal",
                "assam", "kolkata", "yunnan", "kunming", "asean", "natuna", "south china sea"]


def configured() -> bool:
    return True


def _looks_english(text: str) -> bool:
    if not text:
        return False
    latin = sum(1 for c in text if c.isascii() and c.isalpha())
    letters = sum(1 for c in text if c.isalpha())
    if letters == 0:
        return True
    return (latin / letters) > 0.6


def _relevant(title: str, source: str) -> bool:
    if not source.startswith(WORLD_WIDE_SOURCES):
        return True
    t = title.lower()
    return any(re.search(r'\b' + re.escape(term) + r'\b', t) for term in REGION_TERMS)


def fetch(per_feed_limit: int = 15) -> ConnectorResult:
    from .. import safe_http
    import feedparser
    all_items, errors, ok_feeds = [], [], 0
    for feed in FEEDS:
        try:
            r = safe_http.safe_get(feed["url"])
            if r.status_code != 200:
                errors.append(f"{feed['source']}: HTTP {r.status_code}")
                continue
            parsed = feedparser.parse(r.content)
            if parsed.bozo and not parsed.entries:
                errors.append(f"{feed['source']}: not a readable feed")
                continue
            ok_feeds += 1
            count = 0
            for entry in parsed.entries:
                title = getattr(entry, "title", "").strip()
                if not title or not _looks_english(title) or not _relevant(title, feed["source"]):
                    continue
                all_items.append(Item(
                    category=classify(title), label=title[:90] if len(title) > 90 else title,
                    text=title, source=feed["source"],
                    date=getattr(entry, "published", "") or getattr(entry, "updated", ""),
                    url=getattr(entry, "link", None), connector=NAME,
                ).to_dict())
                count += 1
                if count >= per_feed_limit:
                    break
        except safe_http.FetchError as e:
            errors.append(f"{feed['source']}: blocked ({e})")
        except Exception as e:
            errors.append(f"{feed['source']}: {type(e).__name__}")
    if not all_items and errors:
        return ConnectorResult(NAME, True, False, "; ".join(errors)[:300])
    msg = f"{len(all_items)} items from {ok_feeds} of {len(FEEDS)} feeds"
    if errors:
        msg += f" ({len(errors)} failed: {'; '.join(errors)[:200]})"
    return ConnectorResult(NAME, True, True, msg, all_items)
