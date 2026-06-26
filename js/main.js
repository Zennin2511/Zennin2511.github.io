// =============================================
//  main.js – Logika Utama LombaKita
//  Berisi:
//  1. Render kartu lomba dari data.js
//  2. Render kartu tips dari data.js
//  3. Render Galeri Lomba
//  4. Fitur filter kategori
//  5. Fitur search / pencarian
//  6. Modal detail lomba
//  7. Animasi counter statistik
//  8. Hamburger menu mobile
// =============================================

// ── Jalankan setelah HTML selesai dimuat ──
document.addEventListener("DOMContentLoaded", function () {
  renderLomba(datLomba);
  renderTips(dataTips);
  renderGaleri(dataGaleri);  // Render galeri
  initFilter();
  initGaleriFilter();        // Filter galeri
  initSearch();
  initModal();
  initCounter();
  initHamburger();
  initHeroSlideshow();
});

// =============================================
//  1. RENDER KARTU LOMBA
// =============================================
function renderLomba(data) {
  const grid = document.getElementById("cardsGrid");
  grid.innerHTML = ""; // kosongkan dulu sebelum render

  if (data.length === 0) {
    document.getElementById("noResult").style.display = "block";
    updateCount(0);
    return;
  }

  document.getElementById("noResult").style.display = "none";

  data.forEach(function (lomba) {
    // Buat elemen kartu
    const card = document.createElement("div");
    card.className = "card";
    card.setAttribute("data-cat", lomba.kategori);
    card.setAttribute("data-id", lomba.id);

    // Badge kategori & label baru
    const badgeKat = `<span class="badge badge-${lomba.kategori}">${capitalize(lomba.kategori)}</span>`;
    const badgeNew = lomba.isNew ? `<span class="badge badge-new">Baru</span>` : "";

    // Badge level & deadline
    const badgeLevel = `<span class="badge badge-${lomba.level.toLowerCase()}">${lomba.level}</span>`;
    const deadlineJarak = hitungSisaHari(lomba.deadline);
    const badgeDeadline =
      deadlineJarak !== null
        ? `<span class="badge badge-deadline">Deadline: ${deadlineJarak}</span>`
        : "";

    // Isi HTML kartu
    card.innerHTML = `
      <div class="card-image">
        <img src="${lomba.gambar}" alt="${lomba.nama}" loading="lazy">
        <div class="card-top ${lomba.warna}"></div>
      </div>
      <div class="card-body">
        <div class="card-badges">
          ${badgeKat}
          ${badgeNew}
        </div>
        <h3>${lomba.nama}</h3>
        <div class="card-org">
          <i class="ti ti-building"></i> ${lomba.org}
        </div>
        <div class="card-meta">
          <span><i class="ti ti-calendar"></i> ${lomba.tanggal}</span>
          <span><i class="ti ti-users"></i> ${lomba.tim}</span>
        </div>
        <div class="prize-label">Total Hadiah</div>
        <div class="prize" style="color:${lomba.warnaHex};">${lomba.hadiah}</div>
        <div class="card-badges">
          ${badgeLevel}
          ${badgeDeadline}
        </div>
        <button
          class="card-btn"
          style="border-color:${lomba.warnaHex}; color:${lomba.warnaHex};"
          data-id="${lomba.id}"
        >
          Lihat Detail →
        </button>
      </div>
    `;

    // Klik tombol → buka modal
    const btn = card.querySelector(".card-btn");
    btn.addEventListener("click", function () {
      bukaModal(lomba);
    });

    grid.appendChild(card);
  });

  updateCount(data.length);
}

// =============================================
//  2. RENDER KARTU TIPS
// =============================================
function renderTips(data) {
  const grid = document.getElementById("tipsGrid");
  grid.innerHTML = "";

  data.forEach(function (tip) {
    const div = document.createElement("div");
    div.className = "tip-card";
    div.innerHTML = `
      <div class="tip-icon"><i class="ti ${tip.icon}"></i></div>
      <h4>${tip.judul}</h4>
      <p>${tip.isi}</p>
    `;
    grid.appendChild(div);
  });
}

// =============================================
//  3. RENDER GALERI LOMBA
// =============================================
function renderGaleri(data) {
  const grid = document.getElementById("galeriGrid");
  grid.innerHTML = "";
  
  if (data.length === 0) {
    grid.innerHTML = '<p style="text-align:center;color:#999;grid-column:1/-1;">Belum ada data galeri</p>';
    return;
  }
  
  data.forEach(function(galeri) {
    const card = document.createElement("div");
    card.className = "galeri-card";
    
    card.innerHTML = `
      <img src="${galeri.gambar}" alt="${galeri.nama}" class="galeri-image">
      <div class="galeri-body">
        <div class="galeri-title">${galeri.nama}</div>
        <div class="galeri-meta">
          <span><i class="ti ti-calendar"></i> ${galeri.tanggal}</span>
          <span><i class="ti ti-users"></i> ${galeri.peserta}</span>
        </div>
        <div class="galeri-pemenang">
          <div class="galeri-pemenang-title">Pemenang</div>
          <div class="galeri-juara juara1">${galeri.pemenang1}</div>
          <div class="galeri-juara juara2">${galeri.pemenang2}</div>
          <div class="galeri-juara juara3">${galeri.pemenang3}</div>
        </div>
      </div>
    `;
    
    grid.appendChild(card);
  });
}

// =============================================
//  9. FILTER GALERI
// =============================================
function initGaleriFilter() {
  const galeriFilter = document.getElementById("galeriFilter");
  if (!galeriFilter) return;
  
  const tabs = galeriFilter.querySelectorAll(".tab");
  
  tabs.forEach(function(tab) {
    tab.addEventListener("click", function() {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      
      const kategori = tab.getAttribute("data-cat");
      
      if (kategori === "semua") {
        renderGaleri(dataGaleri);
      } else {
        const hasil = dataGaleri.filter(g => g.kategori === kategori);
        renderGaleri(hasil);
      }
    });
  });
}

// =============================================
//  4. SEARCH / PENCARIAN 
// =============================================
function initSearch() {
  const input = document.getElementById("searchInput");
  const btn = document.getElementById("searchBtn");

  // Klik tombol cari
  btn.addEventListener("click", function () {
    jalankanSearch();
  });

  // Tekan Enter di input
  input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      jalankanSearch();
    }
  });
}

function jalankanSearch() {
  const query = document
    .getElementById("searchInput")
    .value.toLowerCase()
    .trim();

  // Reset semua tab filter ke "Semua"
  document.querySelectorAll(".tab").forEach(function (t) {
    t.classList.remove("active");
  });
  const tabSemua = document.querySelector('.tab[data-cat="semua"]');
  if (tabSemua) tabSemua.classList.add("active");

  if (!query) {
    // Kosong → tampilkan semua
    renderLomba(datLomba);
    return;
  }

  // Filter berdasarkan query
  const hasil = datLomba.filter(function (l) {
    return (
      l.nama.toLowerCase().includes(query) ||
      l.org.toLowerCase().includes(query) ||
      l.kategori.toLowerCase().includes(query) ||
      l.deskripsi.toLowerCase().includes(query)
    );
  });

  renderLomba(hasil);

  // Update label count khusus search
  const label = document.getElementById("countLabel");
  label.textContent =
    hasil.length > 0
      ? `Hasil pencarian: ${hasil.length} lomba`
      : "Tidak ada hasil";
}

// =============================================
//  5. MODAL DETAIL
// =============================================
function initModal() {
  const overlay = document.getElementById("modalOverlay");
  const closeBtn = document.getElementById("modalClose");

  // Klik di luar modal → tutup
  overlay.addEventListener("click", function (e) {
    if (e.target === overlay) {
      tutupModal();
    }
  });

  // Tombol X → tutup
  closeBtn.addEventListener("click", function () {
    tutupModal();
  });

  // Tekan Escape → tutup
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      tutupModal();
    }
  });
}

function bukaModal(lomba) {
  document.getElementById("modalNama").textContent = lomba.nama;
  document.getElementById("modalOrg").innerHTML =
    `<i class="ti ti-building"></i> ${lomba.org}`;
  document.getElementById("modalHadiah").textContent = lomba.hadiah;
  document.getElementById("modalTanggal").textContent = lomba.tanggal;
  document.getElementById("modalDeadline").textContent = lomba.deadline;
  document.getElementById("modalTim").textContent = lomba.tim;
  document.getElementById("modalLevel").textContent = lomba.level;
  document.getElementById("modalSyarat").textContent = lomba.syarat;
  document.getElementById("modalDeskripsi").textContent = lomba.deskripsi;

  document.getElementById("modalOverlay").classList.add("open");
  document.body.style.overflow = "hidden"; // cegah scroll background
}

function tutupModal() {
  document.getElementById("modalOverlay").classList.remove("open");
  document.body.style.overflow = "";
}

// =============================================
//  6. ANIMASI COUNTER STATISTIK
// =============================================
function initCounter() {
  const nums = document.querySelectorAll(".stat-num");

  nums.forEach(function (el) {
    const target = parseInt(el.getAttribute("data-target"));
    const prefix = el.getAttribute("data-prefix") || "";
    const suffix = el.getAttribute("data-suffix") || "";
    let current = 0;
    const durasi = 1200; // ms
    const langkah = target / (durasi / 16); // ~60fps

    const interval = setInterval(function () {
      current += langkah;
      if (current >= target) {
        current = target;
        clearInterval(interval);
      }

      // Format angka
      let tampil;
      if (target >= 1000 && suffix === "K+") {
        tampil = Math.floor(current / 1000);
      } else {
        tampil = Math.floor(current);
      }

      el.textContent = prefix + tampil + suffix;
    }, 16);
  });
}

// =============================================
//  7. HAMBURGER MENU MOBILE
// =============================================
function initHamburger() {
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");

  hamburger.addEventListener("click", function () {
    mobileMenu.classList.toggle("open");
  });
}

// =============================================
//  HERO SLIDESHOW
// =============================================
function initHeroSlideshow() {
  const slides = document.querySelectorAll(".hero-slide");
  const dots = document.querySelectorAll(".dot");
  const btnPrev = document.getElementById("slidePrev");
  const btnNext = document.getElementById("slideNext");
  
  let currentIndex = 0;
  const totalSlides = slides.length;
  const intervalTime = 5000; // 5 detik
  let slideInterval;

  // Fungsi ganti slide
  function goToSlide(index) {
    // Hapus active dari semua
    slides.forEach(s => s.classList.remove("active"));
    dots.forEach(d => d.classList.remove("active"));
    
    // Normalisasi index (looping)
    if (index >= totalSlides) currentIndex = 0;
    else if (index < 0) currentIndex = totalSlides - 1;
    else currentIndex = index;
    
    // Tambah active ke slide & dot yang aktif
    slides[currentIndex].classList.add("active");
    dots[currentIndex].classList.add("active");
  }

  // Next slide
  function nextSlide() {
    goToSlide(currentIndex + 1);
  }

  // Prev slide
  function prevSlide() {
    goToSlide(currentIndex - 1);
  }

  // Auto play
  function startAutoSlide() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  // Stop auto play (saat user interaksi)
  function stopAutoSlide() {
    clearInterval(slideInterval);
  }

  // Reset auto play (mulai ulang setelah interaksi)
  function resetAutoSlide() {
    stopAutoSlide();
    startAutoSlide();
  }

  // Event listener tombol next/prev
  if (btnNext) {
    btnNext.addEventListener("click", function() {
      nextSlide();
      resetAutoSlide();
    });
  }

  if (btnPrev) {
    btnPrev.addEventListener("click", function() {
      prevSlide();
      resetAutoSlide();
    });
  }

  // Pause saat hover
  const heroSection = document.querySelector(".hero");
  if (heroSection) {
    heroSection.addEventListener("mouseenter", stopAutoSlide);
    heroSection.addEventListener("mouseleave", startAutoSlide);
  }

  // Mulai slideshow
  startAutoSlide();
}

// =============================================
//  HELPER FUNCTIONS
// =============================================

// Kapitalkan huruf pertama
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Hitung sisa hari menuju deadline
function hitungSisaHari(deadlineStr) {
  // Format input: "30 Juni 2025"
  const bulan = {
    Januari: 0, Februari: 1, Maret: 2, April: 3,
    Mei: 4, Juni: 5, Juli: 6, Agustus: 7,
    September: 8, Oktober: 9, November: 10, Desember: 11,
  };

  const parts = deadlineStr.split(" ");
  if (parts.length < 3) return null;

  const tgl = parseInt(parts[0]);
  const bln = bulan[parts[1]];
  const thn = parseInt(parts[2]);

  if (isNaN(tgl) || bln === undefined || isNaN(thn)) return null;

  const deadline = new Date(thn, bln, tgl);
  const sekarang = new Date();
  sekarang.setHours(0, 0, 0, 0);

  const selisih = Math.ceil((deadline - sekarang) / (1000 * 60 * 60 * 24));

  if (selisih < 0) return "Tutup";
  if (selisih === 0) return "Hari ini!";
  if (selisih <= 7) return selisih + " hari lagi";

  // Tampilkan tanggal singkat jika masih jauh
  return parts[0] + " " + parts[1];
}

// Update label jumlah lomba
function updateCount(n) {
  const label = document.getElementById("countLabel");
  label.textContent = "Menampilkan " + n + " lomba";
}