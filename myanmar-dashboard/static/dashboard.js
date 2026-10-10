
(function(){
  "use strict";

  const PROJ = {"scale": 1926.4541280165258, "translate": [-2594.616356273635, 1042.8493541391708], "width": 1300, "height": 760};
  const HEADING_KEYS = ["geo", "milops", "arms", "naval", "scs", "air", "space", "tech", "cyber", "econ", "mss", "social", "wellbeing", "hazard"];
  const SEED_DATA = {"updated_at": "offline-snapshot", "items_by_category": {"geo": [{"category": "geo", "label": "Myanmar military seized power (February 2021)", "text": "The Myanmar military seized power on 1 February 2021. A civil war has followed between the military and ethnic armed organisations and anti-regime militias.", "source": "Press reporting; Britannica", "date": "Feb 2021", "url": null, "connector": "reference"}, {"category": "geo", "label": "Junta-run election and presidency (December 2025 to April 2026)", "text": "The military junta held a multistage general election from 28 December 2025 into January 2026, the first since the 2021 coup. The UN Special Rapporteur on Myanmar called it neither free nor fair. The military-backed USDP won. Min Aung Hlaing stepped down as commander-in-chief in March 2026 and was elected president on 3 April 2026.", "source": "Britannica; Wikipedia (2026 Myanmar presidential election); UN Special Rapporteur (as reported)", "date": "Dec 2025 - Apr 2026", "url": null, "connector": "reference"}], "milops": [{"category": "milops", "label": "Armed groups hold large parts of Myanmar (Chatham House, January 2026)", "text": "A Chatham House analysis estimates that ethnic armed organisations and anti-regime militias control around 38 per cent of the country. It also reports that the military retook 26 bases and camps it had lost in 2025. The figures are analytical estimates, not official data.", "source": "Chatham House (Bill Hayton, January 2026)", "date": "Jan 2026", "url": null, "connector": "reference"}, {"category": "milops", "label": "China announces junta-MNDAA ceasefire (January 2025)", "text": "On 20 January 2025 China announced that it had brokered a ceasefire between the junta and the Myanmar National Democratic Alliance Army (MNDAA), as reported in Wikipedia's record of 2025 events in Myanmar.", "source": "Wikipedia: 2025 in Myanmar (citing press reporting)", "date": "Jan 2025", "url": null, "connector": "reference"}, {"category": "milops", "label": "Thailand-Cambodia border clashes and ceasefire (July 2025 to May 2026)", "text": "Armed clashes between Thai and Cambodian forces began on 24 July 2025 and displaced more than 200,000 people. A ceasefire was agreed on 27 December 2025. It remained in effect as of May 2026, with sporadic incidents and deep mistrust.", "source": "Wikipedia: 2025 Cambodian-Thai border crisis (citing Thai PBS and others)", "date": "Jul 2025 - May 2026", "url": null, "connector": "reference"}], "mss": [{"category": "mss", "label": "Thailand cut power to Myanmar border towns hosting scam operations (February 2025)", "text": "On 5 February 2025 Thailand stopped supplying electricity to several Myanmar border towns that are known to host scam operations.", "source": "Wikipedia: 2025 in Myanmar (citing press reporting)", "date": "Feb 2025", "url": null, "connector": "reference"}], "econ": [{"category": "econ", "label": "China-Laos railway opened (December 2021)", "text": "The China-Laos railway, linking Kunming with Vientiane through the border station at Boten, opened in December 2021.", "source": "Press reporting", "date": "Dec 2021", "url": null, "connector": "reference"}], "scs": [{"category": "scs", "label": "Strait of Malacca: a critical chokepoint (EIA)", "text": "The Strait of Malacca is one of the world's busiest shipping lanes and a critical route for energy bound for China, according to the US Energy Information Administration.", "source": "US Energy Information Administration (EIA)", "date": "ongoing", "url": null, "connector": "reference"}, {"category": "scs", "label": "Bangladesh-Myanmar maritime boundary settled by the ICJ (March 2012)", "text": "The International Court of Justice drew the maritime boundary between Bangladesh and Myanmar in the Bay of Bengal in its March 2012 judgment, settling a dispute that had run since 2008.", "source": "International Court of Justice judgment", "date": "Mar 2012", "url": null, "connector": "reference"}], "wellbeing": [{"category": "wellbeing", "label": "World Happiness Report 2026: Myanmar's rank not verified", "text": "The 2026 World Happiness Report ranks for Myanmar and the region around it were not verified in this build. Check the report directly.", "source": "World Happiness Report 2026 (not verified in this build)", "date": "Mar 2026", "url": null, "connector": "reference"}]}, "markers": [{"id": "naypyidaw", "name": "Naypyidaw", "lat": 19.7633, "lon": 96.0785, "cat": "capital", "note": "Capital of Myanmar; seat of the military government since 2005.", "source": "-", "date": "", "linked_items": []}, {"id": "yangon", "name": "Yangon", "lat": 16.8409, "lon": 96.1735, "cat": "capital", "note": "Myanmar's largest city and main commercial port.", "source": "-", "date": "", "linked_items": []}, {"id": "mandalay", "name": "Mandalay", "lat": 21.9588, "lon": 96.0891, "cat": "capital", "note": "Second city and former royal capital.", "source": "-", "date": "", "linked_items": []}, {"id": "taunggyi", "name": "Taunggyi (Shan State)", "lat": 20.7892, "lon": 97.0347, "cat": "capital", "note": "Capital of Shan State.", "source": "-", "date": "", "linked_items": []}, {"id": "mawlamyine", "name": "Mawlamyine (Mon State)", "lat": 16.4907, "lon": 97.6278, "cat": "capital", "note": "Capital of Mon State, on the Gulf of Martaban.", "source": "-", "date": "", "linked_items": []}, {"id": "naypyidaw_hq", "name": "Defence Services (Tatmadaw) headquarters, Naypyidaw", "lat": 19.7, "lon": 96.1, "cat": "cantonment", "note": "Seat of the military government. The military seized power on 1 February 2021. Location approximate.", "source": "background / press reporting (approximate location)", "date": "", "linked_items": []}, {"id": "mingaladon", "name": "Mingaladon Air Base (Yangon)", "lat": 16.9073, "lon": 96.1332, "cat": "air_base", "note": "Myanmar Air Force base beside Yangon International Airport (public information). Location approximate.", "source": "public information (approximate location)", "date": "", "linked_items": []}, {"id": "sittwe", "name": "Sittwe (Rakhine State)", "lat": 20.15, "lon": 92.9, "cat": "flashpoint", "note": "Rakhine State capital. The Arakan Army contests control of much of the state (press reporting). Front lines change; verify the latest situation.", "source": "press reporting (front lines change)", "date": "", "linked_items": []}, {"id": "myitkyina", "name": "Myitkyina (Kachin State)", "lat": 25.3833, "lon": 97.3964, "cat": "flashpoint", "note": "Kachin State capital. Fighting between the Kachin Independence Army and the military has been reported around the city (press reporting).", "source": "press reporting (front lines change)", "date": "", "linked_items": []}, {"id": "laiza", "name": "Laiza (Kachin Independence Army headquarters)", "lat": 24.6, "lon": 97.6, "cat": "flashpoint", "note": "Headquarters of the Kachin Independence Army, on the China border (press reporting). Location approximate.", "source": "press reporting (approximate location)", "date": "", "linked_items": []}, {"id": "lashio", "name": "Lashio (northern Shan State)", "lat": 22.9333, "lon": 97.75, "cat": "flashpoint", "note": "Northern Shan State town. Control has changed hands in 2024 and 2025 (press reporting). Verify the latest situation. Location approximate.", "source": "press reporting (approximate location)", "date": "", "linked_items": []}, {"id": "myawaddy", "name": "Myawaddy (Thai-Myanmar border)", "lat": 16.69, "lon": 98.51, "cat": "flashpoint", "note": "Border town where scam compounds have been reported (press reporting). Thailand cut power to border towns hosting such operations in February 2025.", "source": "press reporting", "date": "", "linked_items": []}, {"id": "coco_islands", "name": "Coco Islands (Myanmar)", "lat": 14.1, "lon": 93.4, "cat": "flashpoint", "note": "Reports of Chinese electronic listening facilities on these islands are press-reported and not officially confirmed by Myanmar or China.", "source": "press reporting (not officially confirmed)", "date": "", "linked_items": []}, {"id": "kyaukphyu", "name": "Kyaukphyu deep-sea port and pipeline terminus", "lat": 19.4, "lon": 93.5, "cat": "pipeline", "note": "China-backed deep-sea port in Rakhine State, reported as the terminus of the China-Myanmar oil and gas pipelines. Status and terms are reported, not independently verified.", "source": "press reporting", "date": "", "linked_items": []}, {"id": "muse_pipeline", "name": "China-Myanmar gas pipeline, Muse crossing", "lat": 23.9, "lon": 97.9, "cat": "pipeline", "note": "Gas pipeline route from the China border at Muse towards Mandalay and Yangon (press reporting). Location approximate.", "source": "press reporting (approximate location)", "date": "", "linked_items": []}, {"id": "thilawa", "name": "Thilawa port and special economic zone", "lat": 16.6667, "lon": 96.2833, "cat": "chokepoint", "note": "Port and special economic zone south of Yangon (public information). Location approximate.", "source": "public information (approximate location)", "date": "", "linked_items": []}, {"id": "dawei", "name": "Dawei deep-sea port project", "lat": 14.0833, "lon": 98.2, "cat": "chokepoint", "note": "Deep-sea port and industrial zone project on the Andaman coast, announced with Thai backing (press reporting). Status not verified.", "source": "press reporting (status not verified)", "date": "", "linked_items": []}, {"id": "coco_channel", "name": "Coco Channel (Andaman Islands to Coco Islands)", "lat": 13.0, "lon": 93.0, "cat": "chokepoint", "note": "Channel between the Andaman Islands and Myanmar's Coco Islands, cited in strategic reporting. Location approximate.", "source": "press reporting (approximate location)", "date": "", "linked_items": []}], "connector_status": [{"name": "offline_seed", "configured": true, "ok": true, "message": "Offline snapshot: reference items and strategic sites only; backend not connected", "item_count": 10}], "total_items": 10};
  const CAT_META = {"military": {"label": "Military & Strategic", "color": "var(--amber)"}, "economic": {"label": "Economic & Trade", "color": "var(--cyan-h)"}, "political": {"label": "Political & Diplomatic", "color": "var(--green)"}, "hazard": {"label": "Natural Hazards", "color": "var(--violet)"}, "aviation": {"label": "Aviation & Maritime Notices", "color": "var(--violet)"}, "strategic": {"label": "Strategic & Arms Monitoring", "color": "var(--magenta)"}, "cyber": {"label": "Cyber & MSS", "color": "var(--red)"}, "space": {"label": "Space Program", "color": "var(--cyan-h)"}, "social_local": {"label": "Social pulse", "color": "var(--gold)"}, "social_global": {"label": "Social pulse (global)", "color": "var(--gold)"}};

  function escapeHtml(s){
    if(s === null || s === undefined) return "";
    return String(s).replace(/[&<>"']/g, function(c){
      return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c];
    });
  }

  function project(lon, lat){
    const lambda = lon * Math.PI/180, phi = lat * Math.PI/180;
    const x = lambda, y = Math.log(Math.tan(Math.PI/4 + phi/2));
    return [PROJ.translate[0] + x*PROJ.scale, PROJ.translate[1] - y*PROJ.scale];
  }

  const MARKER_COLOR = {"capital": "#c9a35c", "flashpoint": "#ef5354", "chokepoint": "#f59e0b", "hazard": "#58c4ff", "submarine_base": "#fb923c", "navy_base": "#f97316", "carrier_port": "#fdba74", "cantonment": "#c084fc", "nuclear_site": "#facc15", "space_site": "#06b6d4", "satellite_station": "#60a5fa", "defense_industry": "#84cc16", "pipeline": "#4ade80", "nuclear_plant": "#eab308", "air_base": "#a78bfa", "airport": "#38bdf8", "seaport": "#22c55e", "custom": "#ffffff"};

  // ---------------- 72h / All-time window ----------------
  let timeWindow = "72h";   // default per request; stays until the user picks otherwise
  const WINDOW_MS = 72 * 3600 * 1000;

  // Robust across the formats the connectors actually emit: ISO, RFC-822 (RSS
  // "published"), GDELT "YYYYMMDDTHHMMSSZ", and USGS epoch-ms as a string.
  function parseItemDate(s){
    if(!s) return null;
    if(/^\d{13}$/.test(String(s))) return new Date(parseInt(s, 10));
    const g = /^(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})Z$/.exec(String(s));
    if(g) return new Date(Date.UTC(+g[1], +g[2]-1, +g[3], +g[4], +g[5], +g[6]));
    const d = new Date(s);
    return isNaN(d.getTime()) ? null : d;
  }
  function inWindow(it){
    if(timeWindow === "all") return true;
    const d = parseItemDate(it.date);
    // Strict by design: an item with no verifiable timestamp (background
    // reference entries dated "ongoing"/"background", or a date string that
    // can't be parsed) is NOT shown in the 72h view - claiming it's "last
    // 72 hours" news when nothing proves that would break the one rule this
    // toggle exists to enforce. Switch to All Time to see them.
    if(!d) return false;
    return (Date.now() - d.getTime()) <= WINDOW_MS;
  }
  function windowedCats(cats){
    const out = {};
    Object.keys(cats).forEach(function(k){ out[k] = (cats[k]||[]).filter(inWindow); });
    return out;
  }

  let currentData = null, isLive = false;
  // start activeLayers from whatever the checkboxes actually show as checked
  // in the HTML (event layers on, infrastructure layers off by default),
  // rather than hardcoding it separately and risking the two going out of sync
  let activeLayers = new Set(
    Array.from(document.querySelectorAll(".layer-cb")).filter(cb => cb.checked).map(cb => cb.dataset.layer)
  );
  let refreshTimer = null;
  let customMarkers = [];

  // ---------------- data loading ----------------
  async function loadData(manual){
    const btn = document.getElementById("refreshBtn");
    if(manual && btn){ btn.classList.add("spinning"); btn.disabled = true; }
    try {
      const url = manual ? "/api/refresh" : "/api/snapshot";
      const opts = manual ? {method:"POST"} : {cache:"no-store"};
      const res = await fetch(url, opts);
      if(!res.ok){
        if(res.status === 429){ const j = await res.json().catch(()=>({})); throw new Error(j.error || "rate limited"); }
        // try to surface the server's own error detail (e.g. a specific
        // connector/rendering failure), not just the bare status code
        const body = await res.json().catch(()=>null);
        throw new Error(body && body.error ? ("HTTP " + res.status + ": " + body.error) : ("HTTP " + res.status));
      }
      const data = await res.json();
      currentData = data; isLive = true;
      render(data, true, null);
    } catch(e) {
      currentData = SEED_DATA; isLive = false;
      render(SEED_DATA, false, e.message);
    } finally {
      if(btn){ btn.classList.remove("spinning"); btn.disabled = false; }
    }
  }

  // ---------------- render orchestration ----------------
  function render(data, live, errMsg){
    // apply the 72h / All-time window ONCE, then everything below (panels,
    // KPIs, map dots) reads from the same filtered view - they can't disagree
    const view = Object.assign({}, data, {items_by_category: windowedCats(data.items_by_category || {})});
    view.markers = (data.markers || []).map(function(m){
      return Object.assign({}, m, {linked_items: (m.linked_items || []).filter(inWindow)});
    });
    renderStatusBar(live, view, errMsg);
    renderKPIs(view);
    renderMarkers(view.markers, view.items_by_category);
    renderPanels(view.items_by_category);
    renderTicker(view);
    renderDarkWeb(view);
    renderConnectorStrip(view.connector_status || [], live);
    applyFilter(); // keep an active search query applied across re-renders
  }

  function renderStatusBar(live, data, errMsg){
    const pill = document.getElementById("statusPill");
    const txt = document.getElementById("statusPillText");
    const banner = document.getElementById("offlineBanner");
    const footerNote = document.getElementById("footerNote");
    const snapDate = document.getElementById("snapDate");
    if(live){
      pill.className = "status-pill live"; txt.textContent = "Live backend";
      banner.classList.remove("show");
      const when = data.updated_at ? new Date(data.updated_at*1000).toLocaleTimeString() : "just now";
      snapDate.textContent = "Backend last polled " + when;
      footerNote.innerHTML = "Live backend connected &middot; " + (data.total_items||0) + " items in feed &middot; not investment/operational advice, verify time-critical items against primary sources";
    } else {
      pill.className = "status-pill offline"; txt.textContent = "Offline snapshot";
      banner.classList.add("show");
      banner.innerHTML = "<b>Backend not reachable" + (errMsg ? " (" + escapeHtml(errMsg) + ")" : "") +
        "</b> &mdash; showing the embedded Aug 10, 2026 research snapshot instead of live data. " +
        "Run <code>python run.py</code> and reload this page to connect the real backend.";
      snapDate.textContent = "Offline snapshot - Aug 10, 2026";
      footerNote.textContent = "Offline snapshot mode - start the Python backend for live data.";
    }
  }

  function countItems(cats, dataObj){
    let n = 0;
    cats.forEach(c => n += (dataObj[c]||[]).length);
    return n;
  }

  function renderKPIs(data){
    const cats = data.items_by_category || {};
    document.getElementById("kpi-markers").textContent = (data.markers||[]).length;
    document.getElementById("kpi-military").textContent = (cats.milops||[]).length;
    document.getElementById("kpi-economic").textContent = (cats.econ||[]).length;
    document.getElementById("kpi-political").textContent = (cats.geo||[]).length;
    document.getElementById("kpi-hazard").textContent = (cats.hazard||[]).length;
    document.getElementById("kpi-darkweb").textContent = (cats.darkweb||[]).length;
    document.getElementById("count-markers").textContent = (data.markers||[]).length + " sites";
    const infraNote = document.getElementById("infraNote");
    if(infraNote){
      const info = data.infrastructure || {};
      if(isLive){
        infraNote.textContent = (info.airport_count||0) + " airports live from OurAirports (CC0 dataset) + " +
          "verified seaports/naval bases/defense HQs. Real-time ship/submarine positions aren't shown - " +
          "no open source publishes that for any navy (see README).";
      } else {
        infraNote.textContent = "Offline snapshot: infrastructure markers frozen from build time, not live.";
      }
    }
  }

  // ---------------- map markers ----------------
  function addMarkerEl(layer, m, color, extra){
    const [x,y] = project(m.lon, m.lat);
    const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    g.setAttribute("class", "marker");
    g.setAttribute("transform", "translate(" + x.toFixed(1) + "," + y.toFixed(1) + ")");
    g.dataset.name = m.name; g.dataset.note = m.note || "";
    g.dataset.source = m.source || ""; g.dataset.date = m.date || "";
    g.dataset.color = color;
    g.dataset.linked = JSON.stringify(m.linked_items || []);
    const pulse = (m.linked_items && m.linked_items.length) || (extra && extra.pulse);
    g.innerHTML = (pulse ? '<circle class="pulse" r="5" fill="none" stroke="'+color+'" stroke-width="1.6"/>' : '') +
                  '<circle class="core" r="3.4" fill="'+color+'"/>';
    layer.appendChild(g);
  }

  function renderMarkers(markers, cats){
    const layer = document.getElementById("markerLayer");
    if(!layer) return;
    layer.innerHTML = "";
    // 1. named strategic sites (pulse when a windowed headline mentions them)
    (markers || []).forEach(function(m){
      if(!activeLayers.has(m.cat)) return;
      addMarkerEl(layer, m, MARKER_COLOR[m.cat] || "#c9a35c");
    });
    // 2. any windowed item that carries its OWN coordinates (USGS quakes) -
    // a real lat/lon from the source, not a guess
    if(activeLayers.has("hazard")){
      Object.keys(cats || {}).forEach(function(k){
        (cats[k] || []).forEach(function(it){
          if(typeof it.lat === "number" && typeof it.lon === "number"){
            addMarkerEl(layer, {name: it.label, note: it.text, source: it.source, date: it.date,
              lat: it.lat, lon: it.lon, linked_items: []}, MARKER_COLOR.hazard, {pulse: true});
          }
        });
      });
    }
    // 3. the user's own plotted markers
    if(activeLayers.has("custom")){
      customMarkers.forEach(function(cm){
        addMarkerEl(layer, {name: cm.label, note: cm.remark || "(no remark)", source: "You",
          date: cm.added, lat: cm.lat, lon: cm.lon, linked_items: []}, MARKER_COLOR.custom, {pulse: true});
      });
    }
    wireMarkerEvents();
  }

  function wireMarkerEvents(){
    const wrap = document.getElementById("mapWrap");
    const tip = document.getElementById("mapTip");
    if(!wrap || !tip) return;
    function hideTip(){ tip.classList.remove("show"); }
    function positionTip(evt){
      const rect = wrap.getBoundingClientRect();
      let cx, cy;
      if(evt.touches && evt.touches[0]){ cx = evt.touches[0].clientX; cy = evt.touches[0].clientY; }
      else { cx = evt.clientX; cy = evt.clientY; }
      let x = cx - rect.left, y = cy - rect.top;
      const tw = 260, th = 130;
      if(x + tw + 24 > rect.width) x = x - tw - 18; else x = x + 16;
      if(y + th + 20 > rect.height) y = Math.max(4, y - th - 10); else y = y + 14;
      tip.style.left = x+"px"; tip.style.top = y+"px";
    }
    function showTip(m, evt){
      const name = m.dataset.name, note = m.dataset.note, source = m.dataset.source,
            date = m.dataset.date, color = m.dataset.color;
      let linked = [];
      try { linked = JSON.parse(m.dataset.linked || "[]"); } catch(e){ linked = []; }
      let html = '<div class="t-name" style="color:'+color+'">'+escapeHtml(name)+'</div>' +
                 '<div>'+escapeHtml(note)+'</div>' +
                 '<div class="t-meta">'+escapeHtml(source)+(date?(" &middot; "+escapeHtml(date)):"")+'</div>';
      if(linked.length){
        html += '<div class="t-meta" style="margin-top:6px;color:var(--text-dim);">Recent related items:</div>';
        linked.slice(0,3).forEach(function(li){
          html += '<div class="marker-tt-link">&bull; ' + escapeHtml((li.label||"").slice(0,60)) + '</div>';
        });
      }
      tip.innerHTML = html;
      positionTip(evt);
      tip.classList.add("show");
    }
    wrap.querySelectorAll(".marker").forEach(function(m){
      m.addEventListener("mouseenter", function(evt){ showTip(m, evt); });
      m.addEventListener("mousemove", positionTip);
      m.addEventListener("mouseleave", hideTip);
      m.addEventListener("click", function(evt){
        if(tip.classList.contains("show")){ hideTip(); } else { showTip(m, evt); }
      });
    });
    wrap.removeEventListener("mouseleave", hideTip);
    wrap.addEventListener("mouseleave", hideTip);
  }

  // layer toggle checkboxes
  document.querySelectorAll(".layer-cb").forEach(function(cb){
    cb.addEventListener("change", function(){
      const cat = cb.dataset.layer;
      if(cb.checked) activeLayers.add(cat); else activeLayers.delete(cat);
      if(currentData) renderMarkers(currentData.markers || []);
    });
  });

  // ---------------- panels ----------------
  // Only http(s) URLs ever become links. A feed-supplied "javascript:" / "data:" URL
  // would otherwise be a click-to-run XSS even though every text field is escaped.
  function safeUrl(u){
    if(!u) return null;
    try { const x = new URL(String(u)); return (x.protocol === "http:" || x.protocol === "https:") ? x.href : null; }
    catch(e){ return null; }
  }
  function fmtDate(s){
    const d = parseItemDate(s);
    return d ? d.toLocaleString([], {dateStyle:"medium", timeStyle:"short"}) : (s || "");
  }
  function itemHtml(it){
    const href = safeUrl(it.url);
    return '<div class="item" data-search="'+escapeHtml(((it.label||"")+" "+(it.text||"")).toLowerCase())+'">' +
      '<div class="lbl">'+escapeHtml(it.label)+'</div>' +
      (it.text && it.text !== it.label ? '<div class="txt">'+escapeHtml(it.text)+'</div>' : '') +
      '<div class="meta">'+escapeHtml(it.source)+(it.date?(" &middot; "+escapeHtml(fmtDate(it.date))):"")+
      (href ? ' &middot; <a href="'+escapeHtml(href)+'" target="_blank" rel="noopener noreferrer">source &#8599;</a>' : '')+
      '</div></div>';
  }

  function renderPanels(cats){
    const ids = HEADING_KEYS;
    ids.forEach(function(cat){
      const container = document.getElementById("items-"+cat);
      const countEl = document.getElementById("count-"+cat);
      if(!container) return;
      const list = (cats[cat] || []).slice(0, 25);
      if(countEl) countEl.textContent = list.length;
      container.innerHTML = list.length
        ? list.map(itemHtml).join("")
        : '<div class="empty-note">' + (timeWindow === "72h"
            ? (isLive
                ? 'Nothing in the last 72 hours for this heading. Switch to <b>All Time</b> (top right) to see older items.'
                : 'Backend offline - the embedded research snapshot is older than 72 hours, so it is hidden in this view. Switch to <b>All Time</b> to read it, or start the backend for live news.')
            : 'No items for this heading yet.') + '</div>';
    });
  }

  // ---------------- connector status strip ----------------
  function renderConnectorStrip(statuses, live){
    const el = document.getElementById("connectorStrip");
    const note = document.getElementById("methodNote");
    if(!live){
      el.innerHTML = '<span class="conn-badge off">offline snapshot - connectors not queried</span>';
      note.textContent = "Backend not connected. Start it with: python run.py  (see README.md)";
      return;
    }
    el.innerHTML = statuses.map(function(s){
      const cls = !s.configured ? "off" : (s.ok ? "ok" : "err");
      const label = s.name + (s.configured ? (s.ok ? " \u2713 " + s.item_count : " \u2717") : " (not set)");
      return '<span class="conn-badge '+cls+'" title="'+escapeHtml(s.message||"")+'">'+escapeHtml(label)+'</span>';
    }).join("");
    const okCount = statuses.filter(s=>s.ok).length;
    note.textContent = okCount + " of " + statuses.length + " connectors returned data this poll. " +
      "Hover a badge for its exact status message. Add API keys in .env or via secure_setup.py to enable more.";
  }

  // ---------------- search filter ----------------
  let lastQuery = "";
  function applyFilter(){
    const q = lastQuery;
    document.querySelectorAll(".item[data-search]").forEach(function(it){
      if(!q){ it.classList.remove("dim"); return; }
      const hay = it.getAttribute("data-search") || "";
      if(hay.indexOf(q) === -1) it.classList.add("dim"); else it.classList.remove("dim");
    });
  }
  const filterInput = document.getElementById("filterInput");
  if(filterInput){
    filterInput.addEventListener("input", function(){
      lastQuery = filterInput.value.trim().toLowerCase();
      applyFilter();
    });
  }

  // ---------------- refresh button ----------------
  const refreshBtn = document.getElementById("refreshBtn");
  if(refreshBtn) refreshBtn.addEventListener("click", function(){ loadData(true); });

  // ---------------- settings modal (API keys) ----------------
  const settingsBackdrop = document.getElementById("settingsBackdrop");
  const settingsBtn = document.getElementById("settingsBtn");
  const closeSettingsBtn = document.getElementById("closeSettingsBtn");
  const saveKeysBtn = document.getElementById("saveKeysBtn");
  const keyFieldsEl = document.getElementById("keyFields");
  const settingsMsg = document.getElementById("settingsMsg");

  async function openSettings(){
    settingsBackdrop.classList.add("show");
    settingsMsg.textContent = ""; settingsMsg.className = "modal-msg";
    keyFieldsEl.innerHTML = "Loading&hellip;";
    try {
      const res = await fetch("/api/keys");
      if(!res.ok) throw new Error("HTTP " + res.status);
      const fields = await res.json();
      keyFieldsEl.innerHTML = Object.keys(fields).map(function(name){
        const f = fields[name];
        return '<div class="key-field">' +
          '<label><span class="kf-status'+(f.configured?" on":"")+'"></span>' + escapeHtml(f.label) +
          (f.configured ? ' <span style="font-weight:400;color:var(--text-faint);">(set via '+escapeHtml(f.source)+')</span>' : '') +
          '</label>' +
          '<div class="kf-help">'+escapeHtml(f.help)+'</div>' +
          '<input type="password" data-key="'+name+'" placeholder="'+
            (f.configured ? "Already set - paste a new value to replace it" : "Paste key here, or leave blank to skip") +
          '" autocomplete="off"/></div>';
      }).join("");
    } catch(e) {
      keyFieldsEl.innerHTML = '<div class="modal-msg err">Could not load key status: ' + escapeHtml(e.message) +
        (isLive ? "" : " (backend not connected - start it with python run.py first)") + '</div>';
    }
  }
  function closeSettings(){ settingsBackdrop.classList.remove("show"); }

  if(settingsBtn) settingsBtn.addEventListener("click", openSettings);
  if(closeSettingsBtn) closeSettingsBtn.addEventListener("click", closeSettings);
  if(settingsBackdrop) settingsBackdrop.addEventListener("click", function(e){
    if(e.target === settingsBackdrop) closeSettings();
  });

  if(saveKeysBtn) saveKeysBtn.addEventListener("click", async function(){
    const inputs = keyFieldsEl.querySelectorAll("input[data-key]");
    const body = {};
    inputs.forEach(function(inp){ if(inp.value.trim()) body[inp.dataset.key] = inp.value.trim(); });
    if(!Object.keys(body).length){
      settingsMsg.textContent = "Nothing to save - all fields blank."; settingsMsg.className = "modal-msg";
      return;
    }
    saveKeysBtn.disabled = true; saveKeysBtn.textContent = "Saving\u2026";
    try {
      const res = await fetch("/api/keys", {method:"POST", headers:{"Content-Type":"application/json"},
        body: JSON.stringify(body)});
      const j = await res.json();
      if(!res.ok) throw new Error(j.error || ("HTTP " + res.status));
      settingsMsg.textContent = "Saved " + j.saved.length + " key(s), encrypted. Reconnecting\u2026";
      settingsMsg.className = "modal-msg ok";
      await loadData(true);
      setTimeout(function(){ openSettings(); }, 400); // refresh the configured/not-configured status shown
    } catch(e) {
      settingsMsg.textContent = "Save failed: " + e.message;
      settingsMsg.className = "modal-msg err";
    } finally {
      saveKeysBtn.disabled = false; saveKeysBtn.textContent = "Save & reconnect";
    }
  });

  // ---------------- live clock ----------------
  function pad(n){ return n<10 ? "0"+n : n; }
  function tickClock(){
    const d = new Date();
    const el = document.getElementById("snapClock");
    if(el) el.textContent = pad(d.getHours())+":"+pad(d.getMinutes())+":"+pad(d.getSeconds())+" local";
  }
  tickClock(); setInterval(tickClock, 1000);

  // ---------------- running news ticker (unlocated news, newest first, bottom->top) ----------------
  function ts(it){ const d = parseItemDate(it.date); return d ? d.getTime() : 0; }
  function wireTickerPause(){
    const viewport = document.getElementById("tickerViewport");
    const track = document.getElementById("tickerTrack");
    if(!viewport || !track) return;
    viewport.onpointerenter = function(){ track.classList.add("paused"); };
    viewport.onpointerleave = function(){ track.classList.remove("paused"); };
    viewport.ontouchstart = function(){ track.classList.add("paused"); };
    viewport.ontouchend = function(){ track.classList.remove("paused"); };
  }
  function in72h(it){
    const d = parseItemDate(it.date);
    if(!d) return false;                       // undated background items never qualify as "latest news"
    return (Date.now() - d.getTime()) <= 72 * 3600 * 1000;
  }
  function renderTicker(view){
    // The running feed is ALWAYS the last 72 hours - it ignores the All-Time toggle.
    const track = document.getElementById("tickerTrack");
    const cnt = document.getElementById("count-ticker");
    if(!track) return;
    const src = (currentData && currentData.items_by_category) || {};
    const all = [];
    Object.keys(src).forEach(function(k){
      (src[k] || []).forEach(function(it){
        if(!(typeof it.lat === "number" && typeof it.lon === "number") && in72h(it)) all.push(it);
      });
    });
    all.sort(function(a, b){ return ts(b) - ts(a); });
    const list = all.slice(0, 80);
    if(cnt) cnt.textContent = list.length + " in 72h";
    if(!list.length){
      track.innerHTML = '<div class="empty-note" style="padding:14px;">No unlocated news in the last 72 hours yet.</div>';
      return;
    }
    const TAG = {geo:["GEO","var(--green)"], milops:["MIL","var(--amber)"], arms:["ARMS","var(--magenta)"],
      naval:["NAVAL","var(--cyan-h)"], scs:["SCS","var(--cyan-h)"], air:["AIR","var(--violet)"], space:["SPACE","var(--cyan-h)"],
      tech:["TECH","var(--gold)"], cyber:["CYBER","var(--red)"], darkweb:["DARK","var(--red)"], econ:["ECON","var(--cyan-h)"],
      mss:["MSS","var(--amber)"], social:["SOC","var(--gold)"], wellbeing:["WELL","var(--magenta)"], hazard:["HAZ","var(--violet)"]};
    const one = list.map(function(it){
      const t = TAG[it.category] || ["NEWS","var(--cyan-h)"];
      return '<div class="tick-item"><span class="tag" style="background:'+t[1]+'">'+t[0]+'</span>' +
        '<span class="txt">'+escapeHtml(it.label)+'</span>' +
        '<div class="meta">'+escapeHtml(it.source)+(it.date ? ' &middot; '+escapeHtml(fmtDate(it.date)) : '')+'</div></div>';
    }).join("");
    track.innerHTML = one + one;
    wireTickerPause();
  }

  function renderDarkWeb(view){
    const el = document.getElementById("items-darkweb");
    if(!el) return;
    const want = document.getElementById("darkwebFilter").value;
    const all = [];
    Object.keys(view.items_by_category || {}).forEach(function(k){
      (view.items_by_category[k] || []).forEach(function(it){
        if(it.category === "darkweb") all.push(it);
      });
    });
    all.sort(function(a, b){ return ts(b) - ts(a); });
    const shown = all.filter(function(it){ return want === "all" || it.in_region; }).slice(0, 80);
    document.getElementById("count-darkweb").textContent = shown.length + " of " + all.length;
    const LABEL = {ransomware_live:"Ransomware.live: ", telegram_public:"Telegram: ", darkweb_tor:"Dark web via Tor: "};
    const st = (view.connector_status || []).filter(function(s){ return LABEL[s.name]; })
      .map(function(s){ return LABEL[s.name] + s.message; });
    document.getElementById("darkwebStatus").textContent = st.join("   |   ");
    el.innerHTML = shown.length ? shown.map(function(it){
      const href = safeUrl(it.url);
      return '<div class="item"><div class="lbl">'+escapeHtml(it.label)+'</div><div class="meta">' +
        escapeHtml(it.source) + (it.country ? ' &middot; '+escapeHtml(it.country) : '') +
        (it.date ? ' &middot; '+escapeHtml(fmtDate(it.date)) : '') +
        (href ? ' &middot; <a href="'+escapeHtml(href)+'" target="_blank" rel="noopener noreferrer">source &#8599;</a>' : '') +
        '</div></div>';
    }).join("") : '<div class="empty-note">No dark-web or threat-intel claims in the current window. ' +
        (timeWindow === "72h" ? 'Switch to All Time (top right) to see older claims.' : '') + '</div>';
  }

  // ---------------- radar sweep: 2D scanner rotating over the map (off for reduced-motion) ----------------
  // Cosmetic only, so it is isolated: a missing animation API or any error here
  // must never stop the data panels from rendering. Falls back to a timer when
  // requestAnimationFrame is unavailable (older or embedded browsers).
  try {
    (function radar(){
      const g = document.getElementById("radarSweep");
      if(!g || (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches)) return;
      const cx = g.getAttribute("data-cx"), cy = g.getAttribute("data-cy");
      const raf = (typeof window.requestAnimationFrame === "function")
        ? function(f){ window.requestAnimationFrame(f); }
        : function(f){ setTimeout(f, 33); };
      let a = 0;
      (function step(){
        a = (a + 0.5) % 360;
        g.setAttribute("transform", "rotate(" + a + " " + cx + " " + cy + ")");
        raf(step);
      })();
    })();
  } catch(e) { /* sweep is decoration; the dashboard works without it */ }

  const dwFilter = document.getElementById("darkwebFilter");
  if(dwFilter) dwFilter.addEventListener("change", function(){ if(currentData) render(currentData, isLive, null); });

  // ---------------- 72h / All-time toggle ----------------
  document.querySelectorAll(".wt-btn").forEach(function(btn){
    btn.addEventListener("click", function(){
      timeWindow = btn.dataset.window;
      document.querySelectorAll(".wt-btn").forEach(b => b.classList.toggle("active", b === btn));
      // re-render from what we already have - no new network call needed
      if(currentData) render(currentData, isLive, null);
    });
  });

  // ---------------- Plot a location (lat/long + remark) ----------------
  const plotBackdrop = document.getElementById("plotBackdrop");
  const plotMsg = document.getElementById("plotMsg");

  async function loadCustomMarkers(){
    try {
      const res = await fetch("/api/custom-markers", {cache:"no-store"});
      if(!res.ok) throw new Error("HTTP " + res.status);
      customMarkers = (await res.json()).markers || [];
    } catch(e) { customMarkers = []; }
  }

  function renderCustomList(){
    const el = document.getElementById("customMarkersList");
    if(!customMarkers.length){ el.innerHTML = ""; return; }
    el.innerHTML = '<div style="font-size:11px;color:var(--text-faint);margin-bottom:6px;">Your plotted markers:</div>' +
      customMarkers.map(function(m, i){
        return '<div class="custom-marker-row"><span><b>'+escapeHtml(m.label)+'</b> ('+m.lat+', '+m.lon+')' +
          (m.remark ? '<br/><span style="color:var(--text-faint);">'+escapeHtml(m.remark)+'</span>' : '') +
          '</span><button data-idx="'+i+'" title="Remove">&times;</button></div>';
      }).join("");
    el.querySelectorAll("button[data-idx]").forEach(function(btn){
      btn.addEventListener("click", async function(){
        try {
          const res = await fetch("/api/custom-markers/" + btn.dataset.idx, {method:"DELETE"});
          const j = await res.json();
          if(!res.ok) throw new Error(j.error || ("HTTP " + res.status));
          customMarkers = j.markers || [];
          renderCustomList();
          if(currentData) render(currentData, isLive, null);
        } catch(e) {
          plotMsg.textContent = "Remove failed: " + e.message; plotMsg.className = "modal-msg err";
        }
      });
    });
  }

  const plotBtn = document.getElementById("plotBtn");
  if(plotBtn) plotBtn.addEventListener("click", async function(){
    plotBackdrop.classList.add("show");
    plotMsg.textContent = ""; plotMsg.className = "modal-msg";
    await loadCustomMarkers();
    renderCustomList();
  });
  document.getElementById("plotCloseBtn").addEventListener("click", () => plotBackdrop.classList.remove("show"));
  plotBackdrop.addEventListener("click", function(e){ if(e.target === plotBackdrop) plotBackdrop.classList.remove("show"); });

  document.getElementById("plotAddBtn").addEventListener("click", async function(){
    const label = document.getElementById("plotLabel").value.trim();
    const remark = document.getElementById("plotRemark").value.trim();
    const lat = parseFloat(document.getElementById("plotLat").value);
    const lon = parseFloat(document.getElementById("plotLon").value);
    if(!label || isNaN(lat) || isNaN(lon) || lat < -90 || lat > 90 || lon < -180 || lon > 180){
      plotMsg.textContent = "Enter a label and valid lat (-90 to 90) / lon (-180 to 180)."; plotMsg.className = "modal-msg err";
      return;
    }
    try {
      const res = await fetch("/api/custom-markers", {method:"POST", headers:{"Content-Type":"application/json"},
        body: JSON.stringify({label: label, remark: remark, lat: lat, lon: lon})});
      const j = await res.json();
      if(!res.ok) throw new Error(j.error || ("HTTP " + res.status));
      customMarkers = j.markers || [];
      ["plotLabel","plotRemark","plotLat","plotLon"].forEach(id => document.getElementById(id).value = "");
      plotMsg.textContent = "Added."; plotMsg.className = "modal-msg ok";
      renderCustomList();
      if(currentData) render(currentData, isLive, null);
    } catch(e) {
      plotMsg.textContent = "Add failed: " + e.message; plotMsg.className = "modal-msg err";
    }
  });

  // ---------------- boot ----------------
  loadCustomMarkers().then(function(){ loadData(false); });
  // auto-update news & data every 3 minutes, per request
  refreshTimer = setInterval(function(){ loadData(false); }, 3*60*1000);

  // Test hooks (harmless in production) so the DOM regression test can drive
  // the real code paths instead of re-implementing them
  window.__TEST = {render: function(){ if(currentData) render(currentData, isLive, null); },
                   setData: function(d){ currentData = d; isLive = true; },
                   setWindow: function(w){ timeWindow = w; },
                   parseItemDate: parseItemDate, inWindow: inWindow};
})();
