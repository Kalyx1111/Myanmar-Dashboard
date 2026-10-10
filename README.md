# 🇲🇲 MYANMAR DASHBOARD v1.0

***

#### 🌏 REGIONAL INTELLIGENCE & GEOSPATIAL MONITORING

**Myanmar Dashboard** is a locally hosted OSINT platform combining interactive mapping, regional news monitoring, geospatial data and multiple intelligence categories in one interface.

Myanmar is the primary map focus, with the Bay of Bengal, Andaman Sea and surrounding countries shown for geographic context. Regional news is collected separately from neighbouring countries and maritime areas.

**Map Myanmar. Monitor regional developments. Track emerging threats.**

***

#### 🎯 CORE FEATURES

- Detailed interactive map of Myanmar
- All 14 states and regions outlined and labelled
- Bay of Bengal, Andaman Sea and Gulf of Martaban
- Civil airports, military-designated air bases and seaports
- Defence-related locations and headquarters references
- Pipelines, conflict areas and regional flashpoints
- 15 configurable intelligence headings
- Regional news aggregation and headline classification
- Source status monitoring and configurable map layers

***

#### 🗂️ INTELLIGENCE CATEGORIES

- Geopolitical & Diplomatic
- Military Operations & Force Posture
- Strategic Arms & Nuclear Program
- Naval & Maritime Security
- Malacca, Andaman & Bay of Bengal Chokepoints
- Air Force & Aviation
- Space Tech & AI
- Cyber Espionage & APTs
- Darkweb & Threat Intel
- Economic & Trade
- Internal Security & Intelligence Operations
- Social Pulse & Public Sentiment
- Happiness & Wellbeing Indices
- Natural Hazards & Environmental Risks
- Additional category configured within the application

***

#### 📰 DATA & INTELLIGENCE FEEDS

The dashboard supports multiple types of open-source and regional data:

- **GDELT:** Regional news and event reporting
- **RSS / Atom:** Configured regional, international and defence news feeds
- **Public Telegram:** Channel previews and updates
- **Instagram:** Optional official Meta Business Discovery integration
- **Dark-web RSS:** Verified onion RSS sources accessed through Tor
- **Ransomware intelligence:** Regional leak-site claims from Ransomware.live
- **Earthquake data:** USGS earthquake information
- **Geospatial data:** State boundaries, geographic features and populated places
- **Aviation data:** Civil airports and air-base reference points
- **Maritime data:** Seaports, sea areas and chokepoint references
- **Security data:** Conflict-area references, reported sites and pipelines
- **Regional news:** Myanmar and neighbouring countries, including Thailand, Laos, Cambodia, Bangladesh, India, China, Malaysia and Indonesia

Feed availability depends on network connectivity, source configuration and access requirements.

***

#### 🗺️ MAP DATA

The documented build includes:

- 14 Myanmar state and region outlines
- 70 civil airports
- 5 air-base reference points
- 2 seaports
- 18 sourced site references
- 10 map-layer toggles, limited to categories with available data

**Map scope:** Myanmar is shown in detail. Neighbouring countries appear as plain outlines without plotted sites. The Bay of Bengal and Andaman Sea are visible at the map edges.

Myanmar has no operating nuclear power plant, so no nuclear layer is included.

***

#### 🔐 SECURITY & PRIVACY

- Localhost-only web server
- AES-256-GCM encryption for stored API keys and tokens
- Content Security Policy
- No third-party scripts, fonts or trackers
- Validation and escaping of displayed content
- Optional proxy support for clear-web requests
- Tor-only routing for configured onion sources

***

#### ⚙️ INSTALLATION & LAUNCH

**Windows:** Double-click `start.bat`

**Local dashboard:**

`http://127.0.0.1:8790/`

The launcher is designed to prepare the Python environment, install dependencies, run self-checks and start the application with automatic restart support.

The dashboard uses port **8790** to avoid conflicts with other local dashboards.

***

#### 🧪 TESTING

The supplied build notes report:

- 36 Python tests passed
- 3 browser test suites passed
- Production check passed on the new local address
- Map layers checked for available data

These results verify the tested application build, not the live availability of external news services.

***

#### ⚠️ LIMITATIONS

- Live news retrieval was not verified in the build environment.
- Some regional news feeds are missing or not live-verified.
- Several map markers are approximate reference locations.
- Air-base markers do not represent verified base perimeters or operational readiness.
- Conflict areas and territorial control can change rapidly.
- The map does not display current front lines.
- Dark-web RSS requires Tor and verified onion sources.
- The application is designed for local, single-user operation.

***

#### 🛡️ RESPONSIBLE USE

Myanmar Dashboard is intended for lawful OSINT research, regional news monitoring, geospatial analysis and situational awareness. Reported information may be incomplete, disputed or outdated. Verify important developments through reliable, current sources.

***
