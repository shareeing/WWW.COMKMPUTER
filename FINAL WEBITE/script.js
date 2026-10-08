/* =========================================================
   DATA KOMPONEN
   ========================================================= */

const DATA = {
  prosesor: {
    num: "01",
    name: "Prosesor",
    short: "Pengolah utama komputer",
    tag: "CPU",

    intro:
      "Prosesor atau CPU adalah chip yang menjalankan instruksi dan mengolah data yang dibutuhkan komputer.",

    what:
      "Prosesor adalah pusat pemrosesan. Program mengirim instruksi, lalu CPU membaca dan mengolah instruksi tersebut agar tugas bisa dijalankan.",

    func:
      "Menjalankan perintah, melakukan perhitungan, dan mengatur pekerjaan yang harus dilakukan oleh sistem.",

    how:
      "Instruksi diambil dari memori, dibaca dan diterjemahkan, lalu diproses oleh bagian-bagian CPU. Hasilnya kemudian dikirim kembali ke memori atau bagian lain yang membutuhkan.",

    easy:
      "Bayangkan prosesor seperti orang yang menerima daftar tugas. Ia membaca tugas satu per satu, mengerjakannya, lalu memberikan hasilnya."
  },

  ram: {
    num: "02",
    name: "RAM",
    short: "Memori kerja sementara",
    tag: "MEM",

    intro:
      "RAM menyimpan data dan program yang sedang dipakai agar prosesor dapat mengaksesnya dengan cepat.",

    what:
      "RAM adalah memori yang dipakai saat komputer sedang menyala. Isinya bersifat sementara dan berubah sesuai aplikasi yang sedang digunakan.",

    func:
      "Menyediakan ruang kerja cepat untuk data dan program yang sedang berjalan.",

    how:
      "Saat program dibuka, data yang diperlukan dimuat ke RAM. CPU mengambil data kerja dari RAM, lalu setelah komputer dimatikan isi RAM tidak dipertahankan.",

    easy:
      "RAM seperti meja belajar. Buku yang sedang digunakan diletakkan di meja agar mudah diambil tanpa harus membuka lemari setiap saat."
  },

  vga: {
    num: "03",
    name: "VGA",
    short: "Pengolah gambar dan video",
    tag: "GPU",

    intro:
      "VGA atau kartu grafis memakai GPU untuk mengolah tampilan 2D, 3D, video, dan gambar yang akan ditampilkan di monitor.",

    what:
      "VGA adalah perangkat grafis. GPU di dalamnya dirancang untuk mengerjakan banyak perhitungan gambar secara bersamaan.",

    func:
      "Mengolah grafis dan membantu menghasilkan gambar yang ditampilkan pada monitor.",

    how:
      "GPU menerima data grafis dari program, menghitung bentuk, warna, tekstur, dan posisi objek, lalu hasilnya dikirim ke layar.",

    easy:
      "GPU seperti tim khusus yang bertugas menggambar. Ketika gambar semakin rumit, pekerjaan tim ini juga semakin berat."
  },

  motherboard: {
    num: "04",
    name: "Motherboard",
    short: "Pusat penghubung komponen",
    tag: "MAIN",

    intro:
      "Motherboard adalah papan utama tempat berbagai komponen terhubung dan saling bertukar data.",

    what:
      "Di motherboard terdapat soket, slot, jalur listrik, dan konektor yang memungkinkan CPU, RAM, penyimpanan, dan perangkat lain bekerja bersama.",

    func:
      "Menghubungkan komponen, menyediakan jalur komunikasi, dan membantu menyalurkan daya ke bagian yang membutuhkannya.",

    how:
      "Data dan sinyal listrik melewati jalur pada motherboard. Jalur itu menghubungkan komponen sehingga informasi bisa berpindah dari satu bagian ke bagian lain.",

    easy:
      "Motherboard seperti jalan utama. Berbagai komponen punya jalur untuk saling terhubung dan berkomunikasi."
  },

  ssd: {
    num: "05",
    name: "SSD",
    short: "Penyimpanan cepat",
    tag: "STORE",

    intro:
      "SSD menyimpan data menggunakan chip memori flash sehingga tidak membutuhkan piringan yang berputar.",

    what:
      "SSD digunakan untuk menyimpan sistem operasi, aplikasi, foto, video, game, dan file lainnya.",

    func:
      "Menyimpan data serta membuat proses membaca dan menulis data dapat berlangsung dengan cepat.",

    how:
      "Controller SSD mengatur data yang dibaca dan ditulis pada chip flash. Karena tidak ada bagian mekanis yang harus berputar, akses data dapat berlangsung cepat.",

    easy:
      "SSD seperti lemari elektronik. Data disimpan di chip dan dapat dicari tanpa menunggu piringan berputar."
  },

  hdd: {
    num: "06",
    name: "HDD",
    short: "Penyimpanan berbasis piringan",
    tag: "STORE",

    intro:
      "HDD menyimpan data pada piringan magnetik yang berputar di dalam perangkat.",

    what:
      "HDD adalah media penyimpanan yang bisa digunakan untuk menyimpan sistem, aplikasi, dokumen, foto, video, dan file lainnya.",

    func:
      "Menyediakan ruang penyimpanan dengan kapasitas besar untuk berbagai jenis data.",

    how:
      "Piringan berputar saat bekerja. Kepala baca-tulis bergerak ke posisi tertentu untuk membaca atau menulis data pada permukaan piringan.",

    easy:
      "HDD seperti piringan yang berputar. Kepala baca-tulis harus bergerak mencari bagian tempat data berada."
  },

  fan: {
    num: "07",
    name: "Fan Cooler",
    short: "Membantu menjaga suhu",
    tag: "COOL",

    intro:
      "Fan cooler membantu mengalirkan udara supaya panas dari prosesor dan komponen lain dapat dibuang.",

    what:
      "Fan cooler adalah kipas yang biasanya bekerja bersama heatsink untuk memindahkan panas dari komponen ke udara.",

    func:
      "Membantu menjaga suhu komponen agar tetap pada kondisi kerja yang aman.",

    how:
      "Panas dari prosesor berpindah ke heatsink. Kipas kemudian mengalirkan udara melewati sirip heatsink sehingga panas lebih mudah dilepas ke udara sekitar.",

    easy:
      "Fan cooler seperti kipas di kamar. Udara yang bergerak membantu membawa panas pergi."
  }
};


/* =========================================================
   FOTO
   ========================================================= */

const PHOTOS = {
  prosesor: "prosesor.png",
  ram: "ram.png",
  vga: "vga.png",
  motherboard: "motherboard.png",
  ssd: "ssd.png",
  hdd: "hdd.png",
  fan: "fan.png"
};


/* =========================================================
   ELEMENT
   ========================================================= */

const cardsRoot =
  document.getElementById("cards");

const selectorsRoot =
  document.getElementById("selectors");

const stage =
  document.getElementById("stage");

const detailOverlay =
  document.getElementById("detailOverlay");

const detailClose =
  document.getElementById("detailClose");

const detailImage =
  document.getElementById("detailImage");

const detailKicker =
  document.getElementById("detailKicker");

const detailTag =
  document.getElementById("detailTag");

const detailTitle =
  document.getElementById("detailTitle");

const detailIntro =
  document.getElementById("detailIntro");

const detailWhat =
  document.getElementById("detailWhat");

const detailFunc =
  document.getElementById("detailFunc");

const detailHow =
  document.getElementById("detailHow");

const detailEasy =
  document.getElementById("detailEasy");


/* =========================================================
   STATE
   ========================================================= */

const order =
  Object.keys(DATA);

let activeIndex = 0;

let detailsOpen = false;

let startX = 0;
let startY = 0;

let pointerId = null;

let movedByGesture = false;

let suppressClickUntil = 0;

let transitionLock = false;

let lastTrigger = null;


/* =========================================================
   HOLOGRAM / LIQUID GLASS DETAIL
   Hanya memengaruhi layar informasi.
   ========================================================= */
(function addHologramStyles(){
  if (document.getElementById("componentHologramStyle")) return;

  const style = document.createElement("style");
  style.id = "componentHologramStyle";

  style.textContent = `
    #stage{touch-action:pan-y;}

    .detail-overlay{
      background:
        radial-gradient(circle at 50% 45%,rgba(73,220,255,.12),transparent 34%),
        rgba(2,8,14,.94) !important;
      backdrop-filter:blur(28px) saturate(160%) !important;
      -webkit-backdrop-filter:blur(28px) saturate(160%) !important;
    }

    .detail-screen{
      position:relative;
      isolation:isolate;
      background:
        radial-gradient(circle at 50% 16%,rgba(76,222,255,.11),transparent 28%),
        radial-gradient(circle at 14% 72%,rgba(120,94,255,.09),transparent 25%),
        radial-gradient(circle at 86% 68%,rgba(63,255,216,.07),transparent 24%),
        linear-gradient(145deg,#02090f,#07151d 50%,#02070c) !important;
    }

    .detail-screen::before{
      content:"";
      position:fixed;
      inset:0;
      z-index:-2;
      pointer-events:none;
      background:
        linear-gradient(rgba(83,220,255,.055) 1px,transparent 1px),
        linear-gradient(90deg,rgba(83,220,255,.055) 1px,transparent 1px);
      background-size:42px 42px;
      mask-image:radial-gradient(ellipse at center,black 0%,rgba(0,0,0,.72) 48%,transparent 88%);
      animation:holoGridMove 10s linear infinite;
    }

    .detail-screen::after{
      content:"";
      position:fixed;
      inset:0;
      z-index:-1;
      pointer-events:none;
      background:repeating-linear-gradient(to bottom,transparent 0,transparent 5px,rgba(104,225,255,.028) 6px,transparent 7px);
      animation:holoScanMove 5.5s ease-in-out infinite;
    }

    @keyframes holoGridMove{
      from{transform:translate3d(0,0,0);}
      to{transform:translate3d(42px,42px,0);}
    }

    @keyframes holoScanMove{
      0%,100%{opacity:.35;transform:translateY(-2%);}
      50%{opacity:.85;transform:translateY(2%);}
    }

    .detail-photo-wrap{
      position:relative;
      background:linear-gradient(145deg,rgba(71,221,255,.055),rgba(255,255,255,.025),rgba(125,95,255,.055)) !important;
      border:1px solid rgba(101,221,255,.22) !important;
      box-shadow:
        inset 0 0 35px rgba(80,215,255,.055),
        inset 0 1px 0 rgba(255,255,255,.15),
        0 0 45px rgba(63,188,255,.07),
        0 30px 85px rgba(0,0,0,.38) !important;
      backdrop-filter:blur(20px) saturate(150%) !important;
      -webkit-backdrop-filter:blur(20px) saturate(150%) !important;
    }

    .detail-photo-wrap::before{
      content:"";
      position:absolute;
      inset:14px;
      border:1px solid rgba(99,220,255,.12);
      border-radius:20px;
      pointer-events:none;
      box-shadow:inset 0 0 24px rgba(70,215,255,.04);
      animation:holoFrameMove 3.8s ease-in-out infinite;
    }

    @keyframes holoFrameMove{
      0%,100%{opacity:.35;}
      50%{opacity:1;}
    }

    .detail-title{
      text-shadow:0 0 15px rgba(95,220,255,.20),0 0 38px rgba(90,150,255,.08);
    }

    .detail-tag{
      color:#9cecff !important;
      text-shadow:0 0 14px rgba(80,218,255,.25);
    }

    .detail-info-box{
      position:relative;
      overflow:hidden;
      background:linear-gradient(135deg,rgba(76,214,255,.075),rgba(255,255,255,.035) 45%,rgba(122,103,255,.055)) !important;
      border:1px solid rgba(103,221,255,.18) !important;
      box-shadow:
        inset 0 1px 0 rgba(255,255,255,.14),
        inset 0 0 25px rgba(82,218,255,.035),
        0 12px 30px rgba(0,0,0,.18) !important;
      backdrop-filter:blur(17px) saturate(145%) !important;
      -webkit-backdrop-filter:blur(17px) saturate(145%) !important;
    }

    .detail-info-box::before{
      content:"";
      position:absolute;
      top:0;
      left:-120%;
      width:65%;
      height:100%;
      background:linear-gradient(100deg,transparent,rgba(128,232,255,.11),transparent);
      transform:skewX(-18deg);
      pointer-events:none;
    }

    .detail-overlay.show .detail-info-box{
      animation:holoFloatMove 4.8s ease-in-out infinite;
    }

    .detail-overlay.show .detail-info-box::before{
      animation:holoShineMove 4s ease-in-out infinite;
    }

    .detail-overlay.show .detail-info-box:nth-child(1){animation-delay:0s;}
    .detail-overlay.show .detail-info-box:nth-child(2){animation-delay:.25s;}
    .detail-overlay.show .detail-info-box:nth-child(3){animation-delay:.50s;}
    .detail-overlay.show .detail-info-box:nth-child(4){animation-delay:.75s;}

    @keyframes holoFloatMove{
      0%,100%{transform:translateY(0);}
      50%{transform:translateY(-5px);}
    }

    @keyframes holoShineMove{
      0%,35%{left:-120%;}
      70%,100%{left:150%;}
    }

    .detail-info-box small{
      color:#8feaff !important;
      text-shadow:0 0 12px rgba(91,221,255,.20);
    }

    .detail-info-box h3{color:#f1fbff !important;}
    .detail-info-box p{color:#9eb9c2 !important;}

    .detail-close{
      background:rgba(76,205,255,.055) !important;
      border-color:rgba(104,220,255,.22) !important;
      box-shadow:inset 0 1px 0 rgba(255,255,255,.14),0 0 18px rgba(78,211,255,.05) !important;
    }

    .detail-close:hover{
      background:rgba(88,220,255,.12) !important;
      border-color:rgba(112,229,255,.42) !important;
      box-shadow:0 0 22px rgba(77,214,255,.12),inset 0 1px 0 rgba(255,255,255,.20) !important;
    }

    @media(prefers-reduced-motion:reduce){
      .detail-screen::before,
      .detail-screen::after,
      .detail-photo-wrap::before,
      .detail-info-box,
      .detail-info-box::before{
        animation:none !important;
      }
    }
  `;

  document.head.appendChild(style);
})();


/* =========================================================
   AUDIO
   ========================================================= */

let audioCtx = null;


/*
  Membuat audio setelah interaksi pengguna.
  Ini menghindari blokir autoplay browser.
*/

function initAudio() {

  if (!audioCtx) {

    const AudioContext =
      window.AudioContext ||
      window.webkitAudioContext;

    if (!AudioContext) {
      return;
    }

    try {

      audioCtx =
        new AudioContext();

    } catch (error) {

      audioCtx = null;

    }

  }


  if (
    audioCtx &&
    audioCtx.state === "suspended"
  ) {

    audioCtx
      .resume()
      .catch(() => {});

  }

}


/*
  =========================================================
  SUARA PILIH / GESER KOMPONEN
  =========================================================

  Nuansanya dibuat seperti feedback UI konsol modern:
  pendek, bersih, lembut, dan tidak terlalu ramai.

  direction:
  1  = ke kanan
  -1 = ke kiri
*/

function playSelectSound(direction = 1) {

  if (!audioCtx) {
    return;
  }


  if (
    audioCtx.state === "suspended"
  ) {

    audioCtx
      .resume()
      .catch(() => {});

  }


  const now =
    audioCtx.currentTime;


  /*
    MASTER
  */

  const master =
    audioCtx.createGain();


  master.gain.setValueAtTime(
    0.0001,
    now
  );

  master.gain.exponentialRampToValueAtTime(
    0.055,
    now + 0.007
  );

  master.gain.exponentialRampToValueAtTime(
    0.0001,
    now + 0.17
  );


  master.connect(
    audioCtx.destination
  );


  /*
    FREKUENSI sedikit berbeda
    berdasarkan arah perpindahan.
  */

  const base =
    direction >= 0
      ? 640
      : 590;

  const high =
    direction >= 0
      ? 980
      : 920;


  /*
    NADA UTAMA
  */

  const tone1 =
    audioCtx.createOscillator();

  const gain1 =
    audioCtx.createGain();


  tone1.type =
    "triangle";


  tone1.frequency.setValueAtTime(
    base,
    now
  );

  tone1.frequency.exponentialRampToValueAtTime(
    high,
    now + 0.065
  );


  gain1.gain.setValueAtTime(
    0.0001,
    now
  );

  gain1.gain.exponentialRampToValueAtTime(
    0.78,
    now + 0.008
  );

  gain1.gain.exponentialRampToValueAtTime(
    0.0001,
    now + 0.115
  );


  tone1.connect(
    gain1
  );

  gain1.connect(
    master
  );


  tone1.start(now);

  tone1.stop(
    now + 0.13
  );


  /*
    NADA KEDUA
  */

  const tone2 =
    audioCtx.createOscillator();

  const gain2 =
    audioCtx.createGain();


  tone2.type =
    "sine";


  tone2.frequency.setValueAtTime(
    high,
    now + 0.035
  );

  tone2.frequency.exponentialRampToValueAtTime(
    direction >= 0
      ? 1210
      : 1150,
    now + 0.085
  );


  gain2.gain.setValueAtTime(
    0.0001,
    now
  );

  gain2.gain.exponentialRampToValueAtTime(
    0.028,
    now + 0.042
  );

  gain2.gain.exponentialRampToValueAtTime(
    0.0001,
    now + 0.16
  );


  tone2.connect(
    gain2
  );

  gain2.connect(
    master
  );


  tone2.start(
    now + 0.035
  );

  tone2.stop(
    now + 0.17
  );


  /*
    KILAP KECIL
  */

  const sparkle =
    audioCtx.createOscillator();

  const sparkleGain =
    audioCtx.createGain();


  sparkle.type =
    "sine";


  sparkle.frequency.setValueAtTime(
    direction >= 0
      ? 1660
      : 1570,
    now + 0.075
  );


  sparkleGain.gain.setValueAtTime(
    0.0001,
    now
  );

  sparkleGain.gain.exponentialRampToValueAtTime(
    0.010,
    now + 0.08
  );

  sparkleGain.gain.exponentialRampToValueAtTime(
    0.0001,
    now + 0.145
  );


  sparkle.connect(
    sparkleGain
  );

  sparkleGain.connect(
    master
  );


  sparkle.start(
    now + 0.07
  );

  sparkle.stop(
    now + 0.16
  );


  /*
    Bersihkan node.
  */

  window.setTimeout(
    () => {

      try {

        tone1.disconnect();
        gain1.disconnect();

        tone2.disconnect();
        gain2.disconnect();

        sparkle.disconnect();
        sparkleGain.disconnect();

        master.disconnect();

      } catch (error) {}

    },
    350
  );

}


/*
  =========================================================
  SUARA MASUK DETAIL
  =========================================================
*/

function playOpenSound() {

  if (!audioCtx) {
    return;
  }


  if (
    audioCtx.state === "suspended"
  ) {

    audioCtx
      .resume()
      .catch(() => {});

  }


  const now =
    audioCtx.currentTime;


  const master =
    audioCtx.createGain();


  master.gain.setValueAtTime(
    0.0001,
    now
  );

  master.gain.exponentialRampToValueAtTime(
    0.045,
    now + 0.035
  );

  master.gain.exponentialRampToValueAtTime(
    0.0001,
    now + 0.46
  );


  master.connect(
    audioCtx.destination
  );


  /*
    Whoosh sintetis menggunakan
    oscillator yang naik frekuensinya.
  */

  const sweep =
    audioCtx.createOscillator();

  const sweepGain =
    audioCtx.createGain();

  const sweepFilter =
    audioCtx.createBiquadFilter();


  sweep.type =
    "sine";


  sweep.frequency.setValueAtTime(
    250,
    now
  );

  sweep.frequency.exponentialRampToValueAtTime(
    880,
    now + 0.28
  );


  sweepFilter.type =
    "lowpass";


  sweepFilter.frequency.setValueAtTime(
    700,
    now
  );

  sweepFilter.frequency.exponentialRampToValueAtTime(
    2800,
    now + 0.28
  );


  sweepGain.gain.setValueAtTime(
    0.0001,
    now
  );

  sweepGain.gain.exponentialRampToValueAtTime(
    0.52,
    now + 0.045
  );

  sweepGain.gain.exponentialRampToValueAtTime(
    0.0001,
    now + 0.42
  );


  sweep.connect(
    sweepFilter
  );

  sweepFilter.connect(
    sweepGain
  );

  sweepGain.connect(
    master
  );


  sweep.start(now);

  sweep.stop(
    now + 0.44
  );


  /*
    Nada kecil di akhir.
  */

  const sparkle =
    audioCtx.createOscillator();

  const sparkleGain =
    audioCtx.createGain();


  sparkle.type =
    "sine";


  sparkle.frequency.setValueAtTime(
    1150,
    now + 0.19
  );

  sparkle.frequency.exponentialRampToValueAtTime(
    1500,
    now + 0.30
  );


  sparkleGain.gain.setValueAtTime(
    0.0001,
    now
  );

  sparkleGain.gain.exponentialRampToValueAtTime(
    0.018,
    now + 0.22
  );

  sparkleGain.gain.exponentialRampToValueAtTime(
    0.0001,
    now + 0.39
  );


  sparkle.connect(
    sparkleGain
  );

  sparkleGain.connect(
    master
  );


  sparkle.start(
    now + 0.19
  );

  sparkle.stop(
    now + 0.42
  );


  window.setTimeout(
    () => {

      try {

        sweep.disconnect();
        sweepGain.disconnect();
        sweepFilter.disconnect();

        sparkle.disconnect();
        sparkleGain.disconnect();

        master.disconnect();

      } catch (error) {}

    },
    650
  );

}


/*
  =========================================================
  SUARA KELUAR DETAIL
  =========================================================
*/

function playCloseSound() {

  if (!audioCtx) {
    return;
  }


  if (
    audioCtx.state === "suspended"
  ) {

    audioCtx
      .resume()
      .catch(() => {});

  }


  const now =
    audioCtx.currentTime;


  const master =
    audioCtx.createGain();


  master.gain.setValueAtTime(
    0.0001,
    now
  );

  master.gain.exponentialRampToValueAtTime(
    0.040,
    now + 0.012
  );

  master.gain.exponentialRampToValueAtTime(
    0.0001,
    now + 0.38
  );


  master.connect(
    audioCtx.destination
  );


  /*
    Sweep turun.
  */

  const sweep =
    audioCtx.createOscillator();

  const sweepGain =
    audioCtx.createGain();

  const sweepFilter =
    audioCtx.createBiquadFilter();


  sweep.type =
    "sine";


  sweep.frequency.setValueAtTime(
    900,
    now
  );

  sweep.frequency.exponentialRampToValueAtTime(
    270,
    now + 0.25
  );


  sweepFilter.type =
    "lowpass";


  sweepFilter.frequency.setValueAtTime(
    2700,
    now
  );

  sweepFilter.frequency.exponentialRampToValueAtTime(
    500,
    now + 0.26
  );


  sweepGain.gain.setValueAtTime(
    0.0001,
    now
  );

  sweepGain.gain.exponentialRampToValueAtTime(
    0.48,
    now + 0.015
  );

  sweepGain.gain.exponentialRampToValueAtTime(
    0.0001,
    now + 0.34
  );


  sweep.connect(
    sweepFilter
  );

  sweepFilter.connect(
    sweepGain
  );

  sweepGain.connect(
    master
  );


  sweep.start(now);

  sweep.stop(
    now + 0.38
  );


  window.setTimeout(
    () => {

      try {

        sweep.disconnect();
        sweepGain.disconnect();
        sweepFilter.disconnect();

        master.disconnect();

      } catch (error) {}

    },
    550
  );

}


/*
  Audio mulai aktif setelah klik / sentuhan pertama.
*/

document.addEventListener(
  "pointerdown",
  initAudio,
  {
    once: true,
    passive: true
  }
);


/* =========================================================
   PRELOAD FOTO
   ========================================================= */

function preloadPhotos() {

  order.forEach(
    key => {

      const src =
        PHOTOS[key];

      if (!src) {
        return;
      }


      const image =
        new Image();


      image.decoding =
        "async";


      image.src =
        src;

    }
  );

}


/* =========================================================
   POSISI KARTU
   ========================================================= */

function positionClass(i) {

  const diff =
    i - activeIndex;


  if (diff === 0) {
    return "is-center";
  }


  if (diff === -1) {
    return "is-left";
  }


  if (diff === 1) {
    return "is-right";
  }


  return diff < 0
    ? "is-hidden-left"
    : "is-hidden-right";

}


/* =========================================================
   HTML KARTU
   ========================================================= */

function cardHTML(key) {

  const d =
    DATA[key];


  return `
    <div class="card-photo">

      <img
        src="${PHOTOS[key]}"
        alt="Foto contoh ${d.name}"
        draggable="false"
        decoding="async"
        loading="eager"
      >

      <div class="card-caption">
        FOTO CONTOH · ${d.tag}
      </div>

    </div>

    <div class="card-copy card-only-name">

      <div class="card-tag">
        ${d.tag}
      </div>

      <div class="card-title">
        ${d.name}
      </div>

      <div class="card-short">
        ${d.short}
      </div>

      <div class="card-open-label">
        KLIK UNTUK MEMPELAJARI
      </div>

    </div>
  `;

}


/* =========================================================
   RENDER KARTU
   ========================================================= */

function renderCards() {

  detailsOpen =
    false;


  cardsRoot.innerHTML =
    "";


  order.forEach(
    (key, i) => {

      const card =
        document.createElement(
          "article"
        );


      card.className =
        "card " +
        positionClass(i);


      card.dataset.key =
        key;


      card.innerHTML =
        cardHTML(key);


      card.setAttribute(
        "role",
        "button"
      );


      card.setAttribute(
        "tabindex",
        "0"
      );


      card.setAttribute(
        "aria-label",
        `Pelajari ${DATA[key].name}`
      );


      /*
        Klik mouse/touch.
        Kalau sebelumnya swipe,
        jangan dianggap sebagai klik.
      */

      card.addEventListener(
        "click",
        e => {

          if (
            performance.now() <
            suppressClickUntil
          ) {

            e.preventDefault();

            return;

          }


          if (movedByGesture) {

            e.preventDefault();
            e.stopPropagation();

            return;

          }


          selectIndex(i);

        }
      );


      /*
        Keyboard.
      */

      card.addEventListener(
        "keydown",
        e => {

          if (
            e.key === "Enter" ||
            e.key === " "
          ) {

            e.preventDefault();

            initAudio();

            selectIndex(i);

          }

        }
      );


      cardsRoot.appendChild(
        card
      );

    }
  );


  renderSelectors();

}


/* =========================================================
   UPDATE POSISI
   ========================================================= */

function updateCards() {

  requestAnimationFrame(
    () => {

      const cards =
        cardsRoot.children;


      for (
        let i = 0;
        i < cards.length;
        i++
      ) {

        const card =
          cards[i];


        card.classList.remove(
          "is-center",
          "is-left",
          "is-right",
          "is-hidden-left",
          "is-hidden-right"
        );


        card.classList.add(
          positionClass(i)
        );

      }


      renderSelectors();

    }
  );

}


/* =========================================================
   SELECTOR
   ========================================================= */

function renderSelectors() {

  selectorsRoot.innerHTML =
    "";


  order.forEach(
    (key, i) => {

      const button =
        document.createElement(
          "button"
        );


      button.type =
        "button";


      button.className =
        "selector" +
        (
          i === activeIndex
            ? " active"
            : ""
        );


      button.textContent =
        DATA[key].num +
        "  " +
        DATA[key]
          .name
          .toUpperCase();


      button.setAttribute(
        "aria-current",
        i === activeIndex
          ? "true"
          : "false"
      );


      button.addEventListener(
        "click",
        () => {

          selectIndex(i);

        }
      );


      selectorsRoot.appendChild(
        button
      );

    }
  );

}


/* =========================================================
   PILIH KOMPONEN
   ========================================================= */

function selectIndex(i) {

  if (detailsOpen) {
    return;
  }


  if (i < 0) {
    i = order.length - 1;
  }


  if (i >= order.length) {
    i = 0;
  }


  /*
    PILIH KOMPONEN LAIN
    = pindah ke tengah.

    Tidak memakai transitionLock supaya
    komponen tetap bisa diganti berkali-kali.
  */

  if (i !== activeIndex) {

    initAudio();

    const direction =
      i > activeIndex
        ? 1
        : -1;

    playSelectSound(direction);

    activeIndex = i;

    updateCards();

    return;
  }


  /*
    KLIK KEDUA PADA KOMPONEN TENGAH
    = buka detail.
  */

  const selected =
    cardsRoot.children[activeIndex];


  if (selected) {

    openComponentDetails(
      order[activeIndex],
      selected
    );

  }

}


/* =========================================================
   SWIPE — FIX
   ========================================================= */

if (stage) {

  stage.addEventListener(
    "pointerdown",
    e => {

      if (detailsOpen) {
        return;
      }

      pointerId = e.pointerId;

      startX = e.clientX;
      startY = e.clientY;

      movedByGesture = false;

    },
    {
      passive: true
    }
  );


  stage.addEventListener(
    "pointermove",
    e => {

      if (
        detailsOpen ||
        e.pointerId !== pointerId
      ) {
        return;
      }

      const dx =
        e.clientX - startX;

      const dy =
        e.clientY - startY;

      if (
        Math.abs(dx) > 12 &&
        Math.abs(dx) > Math.abs(dy)
      ) {
        movedByGesture = true;
      }

    },
    {
      passive: true
    }
  );


  stage.addEventListener(
    "pointerup",
    e => {

      if (
        detailsOpen ||
        e.pointerId !== pointerId
      ) {
        return;
      }

      const dx =
        e.clientX - startX;

      const dy =
        e.clientY - startY;

      const isSwipe =
        Math.abs(dx) > 70 &&
        Math.abs(dx) > Math.abs(dy) * 1.25;

      if (isSwipe) {

        e.preventDefault();

        /*
          Jangan sampai click setelah pointerup
          membuka informasi.
        */
        movedByGesture = true;

        suppressClickUntil =
          performance.now() + 650;

        selectIndex(
          activeIndex +
          (
            dx < 0
              ? 1
              : -1
          )
        );
      }

      pointerId = null;

      /*
        Reset setelah browser selesai mengirim
        click bawaan pointer.
      */
        setTimeout(
          () => {

            if (
              performance.now() >=
              suppressClickUntil
            ) {
              movedByGesture = false;
            }

          },
          700
        );

    },
    {
      passive: false
    }
  );


  stage.addEventListener(
    "pointercancel",
    () => {

      pointerId = null;
      movedByGesture = false;

    },
    {
      passive: true
    }
  );

}


/* =========================================================
   DETAIL
   ========================================================= */

function openComponentDetails(
  key,
  trigger
) {

  if (detailsOpen) {
    return;
  }

  const d =
    DATA[key];


  if (
    !d ||
    !detailOverlay
  ) {

    return;

  }


  lastTrigger =
    trigger ||
    cardsRoot.children[
      activeIndex
    ];


  const rect =
    lastTrigger &&
    lastTrigger.getBoundingClientRect

      ? lastTrigger
          .getBoundingClientRect()

      : {
          left:
            window.innerWidth / 2,

          top:
            window.innerHeight / 2,

          width:0,

          height:0
        };


  /*
    Titik awal animasi detail
    berasal dari kartu tengah.
  */

  detailOverlay.style.setProperty(
    "--ox",
    `${rect.left +
      rect.width / 2}px`
  );


  detailOverlay.style.setProperty(
    "--oy",
    `${rect.top +
      rect.height / 2}px`
  );


  /*
    Isi informasi.
  */

  detailKicker.textContent =
    `${d.num} / ${d.name.toUpperCase()}`;


  detailTag.textContent =
    `${d.tag} · KOMPONEN`;


  detailTitle.textContent =
    d.name;


  detailIntro.textContent =
    d.intro;


  detailWhat.textContent =
    d.what;


  detailFunc.textContent =
    d.func;


  detailHow.textContent =
    d.how;


  detailEasy.textContent =
    d.easy;


  /*
    Foto detail.
  */

  const img =
    lastTrigger
      ? lastTrigger.querySelector(
          "img"
        )
      : null;


  if (img) {

    detailImage.src =
      img.getAttribute(
        "src"
      );

  }


  detailImage.alt =
    `Foto ${d.name}`;


  /*
    Suara masuk.
  */

  initAudio();

  playOpenSound();


  detailsOpen =
    true;


  detailOverlay.setAttribute(
    "aria-hidden",
    "false"
  );


  document.body.style.overflow =
    "hidden";


  /*
    Jalankan animasi pada frame
    berikutnya.
  */

  requestAnimationFrame(
    () => {

      detailOverlay.classList.add(
        "show"
      );

    }
  );

  window.dispatchEvent(
    new CustomEvent("component3d:change", {
      detail: { key }
    })
  );

}


/* =========================================================
   TUTUP DETAIL
   ========================================================= */

function closeComponentDetails() {

  if (
    !detailOverlay.classList.contains(
      "show"
    )
  ) {

    return;

  }


  /*
    Hitung posisi kartu lagi
    untuk animasi keluar.
  */

  if (lastTrigger) {

    const rect =
      lastTrigger
        .getBoundingClientRect();


    detailOverlay.style.setProperty(
      "--ox",
      `${rect.left +
        rect.width / 2}px`
    );


    detailOverlay.style.setProperty(
      "--oy",
      `${rect.top +
        rect.height / 2}px`
    );

  }


  /*
    Suara keluar.
  */

  initAudio();

  playCloseSound();


  detailsOpen =
    false;


  detailOverlay.classList.remove(
    "show"
  );


  detailOverlay.setAttribute(
    "aria-hidden",
    "true"
  );


  /*
    Kembalikan scroll setelah
    animasi selesai.
  */

  window.setTimeout(
    () => {

      document.body.style.overflow =
        "";

    },
    700
  );

}


/* =========================================================
   TOMBOL CLOSE
   ========================================================= */

if (detailClose) {

  detailClose.addEventListener(
    "click",
    closeComponentDetails
  );

}


/* =========================================================
   KLIK AREA LUAR DETAIL
   ========================================================= */

detailOverlay.addEventListener(
  "click",
  e => {

    if (
      e.target ===
      detailOverlay
    ) {

      closeComponentDetails();

    }

  }
);


/* =========================================================
   ESC
   ========================================================= */

document.addEventListener(
  "keydown",
  e => {

    if (
      e.key === "Escape" &&
      detailOverlay.classList.contains(
        "show"
      )
    ) {

      closeComponentDetails();

    }

  }
);


/* =========================================================
   MULAI
   ========================================================= */

preloadPhotos();

renderCards();

/* =========================================================
   THEME TOGGLE — DARK / LIGHT
   ========================================================= */
(function initThemeToggle(){
  const button=document.getElementById("themeToggle");
  if(!button)return;
  const saved=localStorage.getItem("pc-theme");
  const apply=(theme)=>{
    const light=theme==="light";
    document.documentElement.classList.toggle("light-theme",light);
    button.setAttribute("aria-pressed",String(light));
    button.setAttribute("aria-label",light?"Gunakan mode gelap":"Gunakan mode terang");
  };
  apply(saved==="light"?"light":"dark");
  button.addEventListener("click",()=>{
    const light=!document.documentElement.classList.contains("light-theme");
    apply(light?"light":"dark");
    localStorage.setItem("pc-theme",light?"light":"dark");
  });
})();
