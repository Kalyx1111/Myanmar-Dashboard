"""
Fixed geographic reference points for Myanmar and its coasts (Bay of Bengal, Andaman Sea, Gulf of Martaban).
Plotted on the map only inside Myanmar and at sea. Neighbouring countries are drawn as plain outlines and
receive no markers. Each entry has a `source`, shown in the map tooltip. Real, sourced, city and facility
level, from public information and press reporting. Not precision targeting data.

Honest scope notes:
- Where a status cannot be verified from open sources, the note says so: front lines in Rakhine, Kachin and
  northern Shan change; the Coco Islands report is not officially confirmed; Lashio's control has changed.
- Approximate sites (Muse, Laiza, Lashio, Mingaladon, the Naypyidaw HQ, Thilawa, Dawei, Coco Channel) mark the
  place named in reporting, not a surveyed location.
- Not included: garrison-level sites, ammunition depots, precise cyber-unit sites, submarine positions, and most
  minor air bases. The list covers the well-documented tier only.
"""

MARKERS = [
    # --- Myanmar: capitals and cities ---
    {"id": "naypyidaw", "name": "Naypyidaw", "lat": 19.7633, "lon": 96.0785, "cat": "capital",
     "aliases": ["naypyidaw", "naypyitaw"], "note": "Capital of Myanmar; seat of the military government since 2005.", "source": "-"},
    {"id": "yangon", "name": "Yangon", "lat": 16.8409, "lon": 96.1735, "cat": "capital",
     "aliases": ["yangon", "rangoon"], "note": "Myanmar's largest city and main commercial port.", "source": "-"},
    {"id": "mandalay", "name": "Mandalay", "lat": 21.9588, "lon": 96.0891, "cat": "capital",
     "aliases": ["mandalay"], "note": "Second city and former royal capital.", "source": "-"},
    {"id": "taunggyi", "name": "Taunggyi (Shan State)", "lat": 20.7892, "lon": 97.0347, "cat": "capital",
     "aliases": ["taunggyi"], "note": "Capital of Shan State.", "source": "-"},
    {"id": "mawlamyine", "name": "Mawlamyine (Mon State)", "lat": 16.4907, "lon": 97.6278, "cat": "capital",
     "aliases": ["mawlamyine", "moulmein"], "note": "Capital of Mon State, on the Gulf of Martaban.", "source": "-"},

    # --- Military and state security (public information and press reporting) ---
    {"id": "naypyidaw_hq", "name": "Defence Services (Tatmadaw) headquarters, Naypyidaw", "lat": 19.7000, "lon": 96.1000, "cat": "cantonment",
     "aliases": ["tatmadaw", "defence services", "myanmar army headquarters"],
     "note": "Seat of the military government. The military seized power on 1 February 2021. Location approximate.",
     "source": "background / press reporting (approximate location)"},
    {"id": "mingaladon", "name": "Mingaladon Air Base (Yangon)", "lat": 16.9073, "lon": 96.1332, "cat": "air_base",
     "aliases": ["mingaladon", "mingalardon"],
     "note": "Myanmar Air Force base beside Yangon International Airport (public information). Location approximate.",
     "source": "public information (approximate location)"},

    # --- Conflict zones (status changes; verify) ---
    {"id": "sittwe", "name": "Sittwe (Rakhine State)", "lat": 20.1500, "lon": 92.9000, "cat": "flashpoint",
     "aliases": ["sittwe", "rakhine", "arakan"],
     "note": "Rakhine State capital. The Arakan Army contests control of much of the state (press reporting). Front lines change; verify the latest situation.",
     "source": "press reporting (front lines change)"},
    {"id": "myitkyina", "name": "Myitkyina (Kachin State)", "lat": 25.3833, "lon": 97.3964, "cat": "flashpoint",
     "aliases": ["myitkyina"],
     "note": "Kachin State capital. Fighting between the Kachin Independence Army and the military has been reported around the city (press reporting).",
     "source": "press reporting (front lines change)"},
    {"id": "laiza", "name": "Laiza (Kachin Independence Army headquarters)", "lat": 24.6000, "lon": 97.6000, "cat": "flashpoint",
     "aliases": ["laiza", "kachin independence army", "kia"],
     "note": "Headquarters of the Kachin Independence Army, on the China border (press reporting). Location approximate.",
     "source": "press reporting (approximate location)"},
    {"id": "lashio", "name": "Lashio (northern Shan State)", "lat": 22.9333, "lon": 97.7500, "cat": "flashpoint",
     "aliases": ["lashio"],
     "note": "Northern Shan State town. Control has changed hands in 2024 and 2025 (press reporting). Verify the latest situation. Location approximate.",
     "source": "press reporting (approximate location)"},
    {"id": "myawaddy", "name": "Myawaddy (Thai-Myanmar border)", "lat": 16.6900, "lon": 98.5100, "cat": "flashpoint",
     "aliases": ["myawaddy", "kk park", "scam compound", "scam centre", "scam center"],
     "note": "Border town where scam compounds have been reported (press reporting). Thailand cut power to border towns hosting such operations in February 2025.",
     "source": "press reporting"},
    {"id": "coco_islands", "name": "Coco Islands (Myanmar)", "lat": 14.1000, "lon": 93.4000, "cat": "flashpoint",
     "aliases": ["coco islands", "cocos islands"],
     "note": "Reports of Chinese electronic listening facilities on these islands are press-reported and not officially confirmed by Myanmar or China.",
     "source": "press reporting (not officially confirmed)"},

    # --- Pipelines and ports ---
    {"id": "kyaukphyu", "name": "Kyaukphyu deep-sea port and pipeline terminus", "lat": 19.4000, "lon": 93.5000, "cat": "pipeline",
     "aliases": ["kyaukphyu", "kyaukpyu"],
     "note": "China-backed deep-sea port in Rakhine State, reported as the terminus of the China-Myanmar oil and gas pipelines. Status and terms are reported, not independently verified.",
     "source": "press reporting"},
    {"id": "muse_pipeline", "name": "China-Myanmar gas pipeline, Muse crossing", "lat": 23.9000, "lon": 97.9000, "cat": "pipeline",
     "aliases": ["muse", "china-myanmar pipeline", "china-myanmar gas pipeline"],
     "note": "Gas pipeline route from the China border at Muse towards Mandalay and Yangon (press reporting). Location approximate.",
     "source": "press reporting (approximate location)"},
    {"id": "thilawa", "name": "Thilawa port and special economic zone", "lat": 16.6667, "lon": 96.2833, "cat": "chokepoint",
     "aliases": ["thilawa"], "note": "Port and special economic zone south of Yangon (public information). Location approximate.",
     "source": "public information (approximate location)"},
    {"id": "dawei", "name": "Dawei deep-sea port project", "lat": 14.0833, "lon": 98.2000, "cat": "chokepoint",
     "aliases": ["dawei", "tavoy"],
     "note": "Deep-sea port and industrial zone project on the Andaman coast, announced with Thai backing (press reporting). Status not verified.",
     "source": "press reporting (status not verified)"},

    # --- Bay of Bengal and Andaman Sea ---
    {"id": "coco_channel", "name": "Coco Channel (Andaman Islands to Coco Islands)", "lat": 13.0000, "lon": 93.0000, "cat": "chokepoint",
     "aliases": ["coco channel"],
     "note": "Channel between the Andaman Islands and Myanmar's Coco Islands, cited in strategic reporting. Location approximate.",
     "source": "press reporting (approximate location)"},
]
