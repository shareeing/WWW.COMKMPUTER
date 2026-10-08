/* =========================================================
   REAL WEB 3D VIEWERS — Sketchfab embeds
   Each component loads its own detailed 3D model.
   ========================================================= */
(function () {
  "use strict";

  const MODELS = {
    prosesor: {
      title: "3D · Prosesor",
      status: "INTEL CPU · HIGH DETAIL",
      creator: "Kuat-Entralla 3D Engineering",
      source: "https://sketchfab.com/3d-models/intel-cpu-ec11f729b05848488522ba6f8c6f254f",
      embed: "https://sketchfab.com/models/ec11f729b05848488522ba6f8c6f254f/embed?autostart=1&autospin=0.18&ui_infos=0&ui_controls=1&ui_annotations=0"
    },
    ram: {
      title: "3D · RAM",
      status: "DDR3 RAM · TEXTURED",
      creator: "CommunicationNode",
      source: "https://sketchfab.com/3d-models/random-access-memory-ram-ddr3-d2715d60f139421eb6028efd5153fdaf",
      embed: "https://sketchfab.com/models/d2715d60f139421eb6028efd5153fdaf/embed?autostart=1&autospin=0.18&ui_infos=0&ui_controls=1&ui_annotations=0"
    },
    vga: {
      title: "3D · VGA",
      status: "RADEON RX 570 · DETAILED",
      creator: "jiet17",
      source: "https://sketchfab.com/3d-models/powercolor-radeon-rx-570-graphics-card-5a8b14b3d3cd4ae3acd6532e4ec505aa",
      embed: "https://sketchfab.com/models/5a8b14b3d3cd4ae3acd6532e4ec505aa/embed?autostart=1&autospin=0.16&ui_infos=0&ui_controls=1&ui_annotations=0"
    },
    motherboard: {
      title: "3D · Motherboard",
      status: "MAINBOARD · HIGH DETAIL",
      creator: "Wan Ahmad Ramzi",
      source: "https://sketchfab.com/3d-models/motherboard-mainboard-4e0834261b66497e936a30476fb2f660",
      embed: "https://sketchfab.com/models/4e0834261b66497e936a30476fb2f660/embed?autostart=1&autospin=0.12&ui_infos=0&ui_controls=1&ui_annotations=0"
    },
    ssd: {
      title: "3D · SSD",
      status: "SAMSUNG SSD · TEXTURED",
      creator: "jcbinet",
      source: "https://sketchfab.com/3d-models/samsung-ssd-25in-dirty-dcc1150ede274cccb7f2ddc0f2345dcb",
      embed: "https://sketchfab.com/models/dcc1150ede274cccb7f2ddc0f2345dcb/embed?autostart=1&autospin=0.18&ui_infos=0&ui_controls=1&ui_annotations=0"
    },
    hdd: {
      title: "3D · HDD",
      status: "TRANSCEND HDD · DETAILED",
      creator: "ivan_jp",
      source: "https://sketchfab.com/3d-models/external-hdd-transcend-9625601a08ae4d56980d62dd314bc8ca",
      embed: "https://sketchfab.com/models/9625601a08ae4d56980d62dd314bc8ca/embed?autostart=1&autospin=0.14&ui_infos=0&ui_controls=1&ui_annotations=0"
    },
    fan: {
      title: "3D · Fan Cooler",
      status: "PC FAN · ANIMATED",
      creator: "Temoor",
      source: "https://sketchfab.com/3d-models/computer-fan-5360bd331c5848eeb9338b4f894e78e5",
      embed: "https://sketchfab.com/models/5360bd331c5848eeb9338b4f894e78e5/embed?autostart=1&autospin=0.20&ui_infos=0&ui_controls=1&ui_annotations=0"
    }
  };

  let currentKey = "prosesor";
  let autoRotate = true;

  const viewer = () => document.getElementById("component3DViewer");
  const title = () => document.getElementById("component3DTitle");
  const status = () => document.getElementById("component3DStatus");
  const badge = () => document.getElementById("component3DBadge");
  const angle = () => document.getElementById("component3DAngle");
  const hint = () => document.getElementById("component3DHint");
  const autoBtn = () => document.getElementById("component3DAuto");
  const resetBtn = () => document.getElementById("component3DReset");

  function buildEmbed(url) {
    const parsed = new URL(url);
    parsed.searchParams.set("autospin", autoRotate ? "0.18" : "0");
    return parsed.toString();
  }

  function mount(key) {
    const data = MODELS[key] || MODELS.prosesor;
    currentKey = MODELS[key] ? key : "prosesor";

    if (title()) title().textContent = data.title;
    if (status()) status().textContent = data.status;
    if (badge()) badge().textContent = "SKETCHFAB · REAL-TIME 3D";
    if (angle()) angle().textContent = "360°";
    if (hint()) hint().innerHTML = "DRAG · PUTAR 360° &nbsp;•&nbsp; SCROLL / PINCH · ZOOM &nbsp;•&nbsp; RIGHT DRAG · PAN";

    const host = viewer();
    if (!host) return;

    host.innerHTML = "";

    const frame = document.createElement("iframe");
    frame.className = "web-3d-frame";
    frame.title = `3D ${data.title.replace("3D · ", "")}`;
    frame.loading = "lazy";
    frame.allow = "autoplay; fullscreen; xr-spatial-tracking";
    frame.allowFullscreen = true;
    frame.referrerPolicy = "strict-origin-when-cross-origin";
    frame.src = buildEmbed(data.embed);

    const source = document.createElement("a");
    source.className = "component-3d-source";
    source.href = data.source;
    source.target = "_blank";
    source.rel = "noopener noreferrer";
    source.textContent = `MODEL 3D · ${data.creator} · LIHAT SUMBER`; 

    host.appendChild(frame);
    host.appendChild(source);
  }

  function reloadCurrent() {
    mount(currentKey);
  }

  function setAuto(next) {
    autoRotate = Boolean(next);
    const btn = autoBtn();
    if (btn) {
      btn.classList.toggle("active", autoRotate);
      btn.setAttribute("aria-pressed", String(autoRotate));
      btn.textContent = `AUTO ROTATE · ${autoRotate ? "ON" : "OFF"}`;
    }
    reloadCurrent();
  }

  window.addEventListener("component3d:change", (event) => {
    const key = event && event.detail ? event.detail.key : null;
    if (key) mount(key);
  });

  document.addEventListener("DOMContentLoaded", () => {
    mount(currentKey);

    const btn = autoBtn();
    const reset = resetBtn();

    if (btn) btn.addEventListener("click", () => setAuto(!autoRotate));
    if (reset) reset.addEventListener("click", reloadCurrent);
  });

  window.Component3DWebModels = { MODELS, mount, setAuto };
})();
