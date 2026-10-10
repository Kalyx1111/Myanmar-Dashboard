# Myanmar Dashboard - v1

Covers **Myanmar** (the focus), with the **region around it**: Thailand, Laos, Cambodia, Malaysia,
Indonesia, the **Malacca Strait**, the **Bay of Bengal**, the **Andaman Sea**, and the neighbours
Bangladesh, India's north-east, and China's Yunnan border. A local production server (waitress)
with auto-restart, real open-data map layers, and 15 headings fed from clear-web news, Telegram,
Instagram (official route) and dark-web sources. Built on the same architecture as the China
Dashboard v6 and the other regional builds.

## Local address

The dashboard runs at **http://127.0.0.1:8790/**. It used to use port 8787, which the other
dashboards also use, so the two could not run together. Windows does not bind the other 127.x
loopback addresses by default, so this dashboard keeps 127.0.0.1 and uses its own port. To change
it, edit `PORT` in `run.py` and the matching value in `start.bat`.

## Start (Windows)

Double-click `start.bat`. It creates the virtual environment, installs the packages, runs a
self-check, starts the server under `supervisor.py` (restarts it after a crash), and opens
http://127.0.0.1:8790/. The page opens at once and fills in as sources answer. The first pass
takes a minute or two, because GDELT asks clients to pace their requests.

## The map: Myanmar in detail

The frame is Myanmar, drawn large, with its 14 states and regions outlined and labelled. The Bay
of Bengal, the Andaman Sea and the Gulf of Martaban are labelled at sea. The Bay of Bengal sits to
the west, and the Andaman Sea to the south-west.

**Plotted points are inside Myanmar or at sea only.** The neighbouring countries (India, Bangladesh,
Thailand, Laos, China, Cambodia, Vietnam and Bhutan) are drawn as plain outlines. Nothing is plotted
in them, and India's Andaman and Nicobar Islands carry no markers. That is by design.

Myanmar has no operating nuclear power plant, so the map has no nuclear layer.

**Map basis.** India's official survey depiction, as in the other South Asia dashboards. Arunachal
Pradesh is shown as India; China claims it as South Tibet. The Bangladesh-Myanmar Bay of Bengal
boundary was settled by the International Court of Justice in March 2012.

**Limits of the drawing.** The Kachin, Shan and Rakhine frontiers are under contested control, and
the map does not show front lines. The map does not settle any dispute. Hover over each marker for
its own tooltip.

## News from the region (not mapped)

News from Thailand, Laos, Cambodia, Malaysia, Indonesia, the Malacca Strait and the Bay of Bengal
comes through the feeds and GDELT. None of those countries or sea areas is drawn on the map.

## The 15 headings

Geopolitical & Diplomatic - Military Operations & Force Posture - Strategic Arms & Nuclear Program -
Naval & Maritime Security - **Malacca, Andaman & Bay of Bengal Chokepoints** - Air Force & Aviation -
Space Tech & AI - Cyber Espionage & APTs - Darkweb & Threat Intel - Economic & Trade - Internal
Security & Intelligence Operations - Social Pulse & Public Sentiment - Happiness & Wellbeing Indices -
Natural Hazards & Environmental Risks.

Headline routing is in `app/classify.py`, as ordered keyword rules that are readable and editable.
Armed-group names (Arakan Army, KIA, KNU, TNLA, MNDAA, UWSA, NUG) are recognised before internal
security wording, and navy terms come before geography. Short keywords are whole-word matches, so
"import" does not match "important", "rial" does not match "material", and "jet" does not match
"jetty".

## The running news feed

It shows the last 72 hours only, always. The All Time switch does not widen it. Undated background
items never count as "latest". The feed shows only news not pinned to a map location.

## Where news comes from, and what each source needs

| Source | Needs | Notes |
|---|---|---|
| GDELT | nothing | 20 English-language queries on Myanmar, its junta and election, the Arakan Army, the KIA, the KNU, airstrikes, scam centres, Thailand and Cambodia, the Thai and Lao railway, Malaysia, Indonesia, the Malacca Strait, the Andaman Sea, the Bay of Bengal, the Rohingya, and the north-east border. Paced 6 seconds apart; on HTTP 429 it waits 20 seconds and retries once. |
| RSS | nothing | See the feed list below. Each feed reports its own status. |
| Telegram public channels | nothing (no account) | Read through t.me/s/<name>. The list is in `data/telegram_channels.json`. |
| Instagram (official Business Discovery) | a Meta developer app, an Instagram Business or Creator account you own, and a token | Only Business and Creator accounts can be read. Personal accounts cannot. |
| Dark web via Tor | Tor on this PC | Only onion sources you verify yourself, in `data/onion_sources.json`. |
| Ransomware.live (leak-site claims) | nothing | Group claims, not verified facts. The filter shows victims in the region. |
| USGS earthquakes | nothing | Map dots when USGS reports events in the box (8.5 to 29.5 N, 89.5 to 103.5 E). |

### RSS feeds in this build

Each address is confirmed from a publisher's own list, a curated list, or a directory that prints it.

- **Myanmar:** Myanmar Gazette News Media Forum Network, Democratic Voice of Burma (DVB) and Thit
  Htoo Lwin, from a curated country list. Their language is not confirmed, so the English-only
  filter decides what shows.
- **Thailand:** Bangkok Post (its own RSS list: `most-recent.xml` and `thailand.xml`) and Thailand News.
- **Indonesia:** ANTARA News in English.
- **Bay of Bengal, Bangladesh and India's north-east** (filtered to region headlines): The Daily
  Star, bdnews24, The Hindu, BBC News India, NDTV top stories and Business Standard top stories.
- **Regional and defence** (filtered): BBC News Asia, Al Jazeera, SCMP World, USNI News,
  Breaking Defense, SpaceNews, Space.com and The Record.

**Flagged, not live-verified from the build sandbox:** Xinhua (World and China) and SCMP China,
carried over from the China build. They are filtered to region headlines.

**Not confirmed in this build, and so not included:**
- **Myanmar's independent outlets:** The Irrawaddy, Frontier Myanmar, Myanmar Now, Mizzima and
  Global New Light of Myanmar are named in listings without confirmed addresses.
- **Malaysia and Singapore:** The Star, The Straits Times and CNA are named without addresses.
- **Cambodia:** Khmer Times and the Phnom Penh Post are named without addresses.
- **Laos:** Vientiane Times has no confirmed address.
- **Indonesia:** The Jakarta Post and Jakarta Globe exist, but their feed addresses were not printed.

**This is the main gap.** Myanmar's independent English outlets and Cambodia, Laos, Malaysia and
Singapore have no confirmed feed. They rely on GDELT and the Telegram channels until feeds are
added. If you send me the feed addresses, I will add and check them.

## Telegram channels

The list is the same as in the other builds. It is not tuned to this region. Add channels for
Burmese, Thai, Khmer and Lao news in `data/telegram_channels.json`.

Excluded on purpose:
- **OffensiveTwitter** (offensive-security and exploit content).
- **HaveIBeenPwnedBreaches** (channels of this type can carry raw breach records; use the official haveibeenpwned.com service instead).

Channels marked `verified: false` have not been confirmed live. Their status line shows whether they answer.

## Layers: only what has data

The layer toggles are generated only for categories Myanmar has data for. A test
(`tests/test_layers_have_data.py`) fails the build if any toggle is empty. The earthquake toggle
is the one live-only exception.

- **Civil airports:** 70 airports in Myanmar (OurAirports, CC0).
- **Air bases:** 5 (4 military-designated air bases from the OurAirports names, plus Mingaladon,
  placed from public information). These are reference points, not base perimeters.
- **Seaports:** 2 in Myanmar (Natural Earth port points). Other ports are sourced individually below.
- **Sites:** 18 sourced sites, all inside Myanmar or at sea: capitals, the Defence Services
  headquarters, conflict zones, pipelines and ports, and the Coco Channel.

## Reference items, and what each one rests on

- **The military seized power on 1 February 2021.** Press reporting and Britannica.
- **The junta-run election (December 2025 to January 2026)** was widely criticised. The UN Special
  Rapporteur called it neither free nor fair. Min Aung Hlaing was elected president on 3 April 2026.
- **Armed groups hold around 38 per cent of the country**, according to a Chatham House analysis
  (January 2026). That is an analytical estimate, not an official figure.
- **China announced a junta-MNDAA ceasefire on 20 January 2025**, as recorded in Wikipedia's 2025
  events, citing press reporting.
- **Thailand and Cambodia clashed from 24 July 2025**, and a ceasefire was agreed on 27 December
  2025. It remained in effect as of May 2026, with incidents.
- **Thailand cut power to Myanmar border towns hosting scam operations (5 February 2025).**
- **The China-Laos railway opened in December 2021**, through the border station at Boten.
- **The Strait of Malacca** is one of the world's busiest shipping lanes, according to the US
  Energy Information Administration.
- **The Bangladesh-Myanmar maritime boundary** was settled by the International Court of Justice in
  its March 2012 judgment.
- **The World Happiness Report 2026** ranks for Myanmar were not verified in this build.

## Dark web: reading onion sources

1. Install **Tor Browser** and open it (SOCKS port **9150**), or install the **Tor service** and start it (port **9050**).
2. Keep it running. The dashboard checks both ports.
3. Add onion RSS sources that you verified on the outlet's **own official website** to `data/onion_sources.json`. Fake onion lookalikes are common. The dashboard rejects any address that is not a well-formed v3 onion (56 characters, a-z and 2-7, then .onion).
4. Press Refresh.

No account is needed for onion RSS sources. The dashboard does not crawl or search the dark web,
does not scrape forums or marketplaces, does not open .onion pages in a browser, and does not read
stealer-log or carding markets.

## Instagram (Meta Business Discovery)

1. Make an Instagram **Business or Creator** account that you own, and link it to a Facebook Page.
2. Create a Meta developer app and add the Instagram/Facebook Login product.
3. Generate a Facebook user access token with `instagram_basic` and `pages_read_engagement` (and `instagram_manage_insights` if Meta requires it). Use a long-lived token.
4. Enter the numeric ID of your account and the token in the gear icon. They are stored encrypted with AES-256.
5. List target usernames in `data/instagram_accounts.json`.

Check Meta's current requirements before you rely on this route, because they can change.

## Security

- Keys and tokens are encrypted with AES-256-GCM. The token is removed from every error message before it is displayed.
- The server listens on 127.0.0.1 only, on port 8790.
- Strict Content-Security-Policy. No third-party scripts, fonts or trackers.
- Hostile text (headlines, channel posts, marker labels) is escaped before display. Only http and https links become clickable.
- Telegram handles and Instagram usernames are validated before any URL is built.
- Clear-web requests can go through a proxy you choose (`PROXY_URL`, e.g. a VPN's local proxy). Dark-web requests go through Tor only, never direct.

A dashboard **cannot** secure your whole PC or phone from attack. That takes current OS updates, a
firewall, endpoint protection and sensible accounts. It also cannot hide your IP address or location
from the sites it fetches from, unless you route traffic through a VPN or Tor. Even then, the VPN or
Tor provider can see your traffic.

## Tests

`pip install -r requirements.txt pytest`, then `python -m pytest tests/` (36 tests).
Browser-side tests: `npm install` and `npm test`. They load the shipped `dashboard.js` into a real DOM.

## Honest limitations

- **Live sources were not reachable from the build sandbox.** Every external connector reported a connection error there, so no live news appears in this build. The status panel shows the real result on your machine. Check it on the first run.
- **Feed gaps** (see above): Myanmar's independent English outlets, and Cambodia, Laos, Malaysia and Singapore.
- **Front lines change.** The Arakan Army's position in Rakhine, the fighting around Myitkyina, the control of Lashio, and the situation in the Kachin and Shan frontiers all change. Verify the latest before you rely on any of them.
- **Reported, not confirmed.** The Coco Islands listening-facility reports are press-reported and not officially confirmed. Kyaukphyu's status and terms are press-reported. Dawei's project status is not verified.
- **Approximate locations.** Muse, Laiza, Lashio, Mingaladon, the Defence Services headquarters, Thilawa, Dawei and the Coco Channel mark places named in reporting, not surveyed positions.
- **Air bases** are reference points from a civil airport dataset, not base perimeters. Operational status is unknown for most of them.
- **No garrison-level sites, ammunition depots or submarine positions.** No open dataset publishes them, and none were invented.
- **Single-user, local.** It runs on your machine while it is open.
