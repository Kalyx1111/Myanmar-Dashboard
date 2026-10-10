"""Routes every headline into one of the 15 dashboard headings (Myanmar and the region around it).

Plain ordered keyword rules - readable and editable. Order matters: the most specific headings are tested
first. Short keywords are whole-word matches (padded with spaces), so "import" does not match "important",
"rial" does not match "material", "rand" does not match "random", "jet" does not match "jetty", and "poll"
does not match "pollution". Armed-group names are recognised before internal-security wording, and navy
terms before geography. A headline that matches no rule goes to "geo".

Heading keys match the other builds. The "scs" key means the Malacca, Andaman and Bay of Bengal chokepoints
heading for this region (its title is set in the build script).
"""

HEADINGS = ["geo", "milops", "arms", "naval", "scs", "air", "space", "tech", "cyber",
            "darkweb", "econ", "mss", "social", "wellbeing", "hazard"]

RULES = [
    ("darkweb", ["dark web", "darknet", "onion", "ransomware", "leak site", "infostealer", "stealer",
                 "data breach", "data leak", "breached", "threat intel", "threat intelligence", "initial access broker"]),
    ("cyber", ["cyber", "hacker", "hacked", "hacking", "malware", "vulnerabilit", "intrusion", "zero-day",
               " apt ", " apt-", "backdoor", "phishing", "ddos", "cyberattack", "spear-phish", "espionage campaign"]),
    ("hazard", ["earthquake", "tremor", "cyclone", "flood", "monsoon", "landslide", "haze", "wildfire", "drought",
                "tsunami", "volcano", "eruption", "heatwave", "storm"]),
    ("milops", ["arakan army", "kachin independence army", " kia ", " knu ", "karen national", "tnla", "mndaa", "uwsa",
                " nug ", "people's defence force"]),
    ("mss", ["scam compound", "scam centre", "scam center", "online scam", "scam operation", "organised crime",
             "organized crime", "crackdown", "detained", "arrested", "sentenced", "dissident", "intelligence agency",
             "espionage", " spy ", "spying", "internal security", "police", "protest", "surveillance", "trafficking",
             "smuggling", "militant", "insurgent", "insurgency"]),
    ("naval", ["navy", "naval", "warship", "destroyer", "frigate", "submarine", "aircraft carrier", "naval fleet",
               "coast guard", "shipyard", "cruiser", "amphibious", "marine corps", " sub "]),
    ("scs", ["malacca", "andaman", "bay of bengal", "indian ocean", "kra canal", "kra isthmus", "singapore strait",
             "coco channel", "sabang", "natuna", "south china sea", "chokepoint", "sea lane", "shipping lane",
             "maritime boundary", "port call", "tanker", "kyaukphyu", "kyaukpyu", "dawei", "thilawa", "gulf of martaban"]),
    ("air", ["air force", "fighter", " jet ", " jets ", "drone", "airspace", "airport", "air base", "airbase", "aviation",
             "aircraft", "helicopter", "uav ", "sortie"]),
    ("space", ["satellite", "space", "rocket", "launch", "orbit", "spacecraft", "beidou"]),
    ("arms", ["nuclear", "warhead", "missile", "reactor", "uranium", "enrichment", "ballistic"]),
    ("tech", ["artificial intelligence", " ai ", "chips", "semiconductor", "export control", "huawei", "digital", "5g",
              " tech "]),
    ("milops", ["junta", "tatmadaw", "military", "troops", "army", "soldier", "soldiers", "clash", "ceasefire", "offensive",
                "exercise", " drill ", "deploy", "garrison", "airstrike", "air strike", "border clash", "operation",
                "live-fire"]),
    ("econ", [" trade ", "tariff", " export ", " exports ", " import ", " imports ", "kyat", "baht", "ringgit", "rupiah",
              "riel", " kip ", " dong ", "economy", "economic", "investment", "sanction", "debt", " imf ", "inflation",
              "remittance", " deal ", "railway", "rare earth", "electricity", "fuel"]),
    ("social", ["social media", "facebook", "tiktok", "public opinion", " poll ", "viral", "netizen", "youth", "students",
                "rally", "refugee", "rohingya", "women", "online debate", "trending"]),
    ("wellbeing", ["happiness", "wellbeing", "well-being", "life expectancy", "poverty", "human development index"]),
]


def classify(text: str) -> str:
    t = " " + (text or "").lower() + " "
    for heading, words in RULES:
        if any(w in t for w in words):
            return heading
    return "geo"
