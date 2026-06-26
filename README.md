# Zennin2511.github.io
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>LombaKita – Platform Info Lomba Mahasiswa</title>

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Lora:ital@0;1&display=swap"
    rel="stylesheet"
  />

  <!-- Tabler Icons -->
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css"
  />

  <!-- CSS Utama -->
  <link rel="stylesheet" href="css/style.css" />

</head>
<body>

  <!-- ======================== NAVBAR ======================== -->
  <nav class="navbar">
    <div class="nav-logo">Lomba<span>Kita</span></div>
    <ul class="nav-links">
      <li><a href="#">Beranda</a></li>
      <li><a href="#lomba">Lomba</a></li>
      <li><a href="#galeri" id="navGaleri">Galeri</a></li>
      <li><a href="#tips">Tips</a></li>
      <li><a href="#tentang">Tentang</a></li>
    </ul>
    <a href="#" class="nav-cta">Daftar Sekarang</a>
    <button class="hamburger" id="hamburger" aria-label="Menu">
      <i class="ti ti-menu-2"></i>
    </button>
  </nav>

  <!-- Mobile Menu -->
  <div class="mobile-menu" id="mobileMenu">
    <a href="#">Beranda</a>
    <a href="#lomba">Lomba</a>
    <a href="#galeri" id="mobilenavGaleri">Galeri</a>
    <a href="#tips">Tips</a>
    <a href="#tentang">Tentang</a>
  </div>

<!-- ======================== HERO ======================== -->
<section class="hero">
  <!-- Slideshow Background -->
  <div class="hero-slideshow">
    <div class="hero-slide active" style="background-image: url('Asset/hero1.png')"></div>
    <div class="hero-slide" style="background-image: url('Asset/hero2.png')"></div>
    <div class="hero-slide" style="background-image: url('Asset/hero3.png')"></div>
    <div class="hero-overlay"></div>
  </div>

  <!-- Tombol Navigasi -->
  <button class="slide-btn slide-prev" id="slidePrev">
    <i class="ti ti-chevron-left"></i>
  </button>
  <button class="slide-btn slide-next" id="slideNext">
    <i class="ti ti-chevron-right"></i>
  </button>

  <!-- Konten Hero (tetap sama) -->
  <div class="hero-content">
    <div class="hero-badge">Platform Info Lomba Mahasiswa</div>
    <h1>Lomba<span>Kita</span></h1>
    <p>
      Temukan kompetisi terbaik untuk mengasah skill dan meraih prestasi
      bersama ribuan mahasiswa Indonesia.
    </p>
    <div class="search-bar">
      <input
        type="text"
        id="searchInput"
        placeholder="Cari lomba, penyelenggara, atau bidang..."
      />
      <button class="search-btn" id="searchBtn">
        <i class="ti ti-search"></i> Cari
      </button>
    </div>
  </div>
</section>

  <!-- ======================== STATS ======================== -->
  <div class="stats-bar">
    <div class="stat-item">
      <div class="stat-num" data-target="127">0</div>
      <div class="stat-label">Lomba Aktif</div>
    </div>
    <div class="stat-item">
      <div class="stat-num" data-target="48">0</div>
      <div class="stat-label">Penyelenggara</div>
    </div>
    <div class="stat-item">
      <div class="stat-num" data-target="32000" data-suffix="K+">0</div>
      <div class="stat-label">Peserta Terdaftar</div>
    </div>
    <div class="stat-item">
      <div class="stat-num" data-prefix="Rp " data-target="2" data-suffix="M+">0</div>
      <div class="stat-label">Total Hadiah</div>
    </div>
  </div>

  <!-- ======================== MAIN ======================== -->
  <main class="main" id="lomba">

    <!-- Section Header -->
    <div class="section-header">
      <div class="section-title">Lomba <span>Terkini</span></div>
      <div class="count-label" id="countLabel">Menampilkan 6 lomba</div>
    </div>

    <!-- Filter Tabs -->
    <div class="filter-tabs">
      <button class="tab active" data-cat="semua">Semua</button>
      <button class="tab" data-cat="teknologi">Teknologi</button>
      <button class="tab" data-cat="bisnis">Bisnis</button>
      <button class="tab" data-cat="sains">Sains</button>
      <button class="tab" data-cat="desain">Desain</button>
      <button class="tab" data-cat="sosial">Sosial</button>
    </div>

    <!-- Cards Grid -->
    <div class="cards-grid" id="cardsGrid">
      <!-- Dirender oleh JavaScript dari data/lomba.js -->
    </div>

    <!-- No Result -->
    <div class="no-result" id="noResult">
      <i class="ti ti-mood-sad"></i>
      <p>Lomba tidak ditemukan. Coba kata kunci lain.</p>
    </div>

      <!-- ======================== GALERI ======================== -->
<section class="galeri-section" id="galeri">
  <div class="section-header">
    <div class="section-title">
      Galeri <span>Lomba</span>
    </div>
    <div class="count-label">
      Lomba yang telah terlaksana
    </div>
  </div>

  <div class="filter-tabs" id="galeriFilter">
    <button class="tab active" data-cat="semua">Semua</button>
    <button class="tab" data-cat="teknologi">Teknologi</button>
    <button class="tab" data-cat="bisnis">Bisnis</button>
    <button class="tab" data-cat="sains">Sains</button>
    <button class="tab" data-cat="desain">Desain</button>
  </div>

  <div class="galeri-grid" id="galeriGrid">
    <!-- JavaScript -->
  </div>
</section>

    <!-- ======================== TIPS ======================== -->
    <div class="tips-section" id="tips">
      <div class="tips-title">
        <i class="ti ti-bulb"></i> Tips Mengikuti Lomba
      </div>
      <div class="tips-grid" id="tipsGrid">
        <!-- Dirender oleh JavaScript dari data/tips.js -->
      </div>
    </div>
</main>
  <!-- ======================== MODAL ======================== -->
  <div class="modal-overlay" id="modalOverlay">
    <div class="modal" id="modalBox">
      <button class="modal-close" id="modalClose">
        <i class="ti ti-x"></i>
      </button>
      <h2 id="modalNama"></h2>
      <div class="modal-org" id="modalOrg"></div>
      <div class="modal-prize" id="modalHadiah"></div>
      <div class="modal-row"><span>Tanggal Pelaksanaan</span><span id="modalTanggal"></span></div>
      <div class="modal-row"><span>Deadline Pendaftaran</span><span id="modalDeadline"></span></div>
      <div class="modal-row"><span>Format Tim</span><span id="modalTim"></span></div>
      <div class="modal-row"><span>Level</span><span id="modalLevel"></span></div>
      <div class="modal-row">
        <span>Syarat</span>
        <span id="modalSyarat" style="text-align:right; max-width:240px;"></span>
      </div>
      <p class="modal-desc" id="modalDeskripsi"></p>
      <button class="modal-btn">Daftar Sekarang</button>
    </div>
  </div>

  <!-- ======================== TENTANG ======================== -->
<section class="tentang-section" id="tentang">
  <div class="section-header">
    <div class="section-title">Tentang <span>Kami</span></div>
  </div>
  <div class="tentang-content">
    <p>
      <strong>LombaKita</strong> adalah platform informasi lomba mahasiswa terbesar di Indonesia. 
      Kami berkomitmen membantu mahasiswa menemukan kompetisi terbaik untuk mengasah skill, 
      memperluas jaringan, dan meraih prestasi bersama ribuan mahasiswa lainnya.
    </p>
    <div class="tentang-stats">
      <div class="tentang-stat-item">
        <span class="tentang-num">100+</span>
        <span class="tentang-label">Lomba Terdaftar</span>
      </div>
      <div class="tentang-stat-item">
        <span class="tentang-num">50+</span>
        <span class="tentang-label">Kampus Mitra</span>
      </div>
      <div class="tentang-stat-item">
        <span class="tentang-num">10K+</span>
        <span class="tentang-label">Pengguna Aktif</span>
      </div>
    </div>
  </div>
</section>

  <!-- ======================== FOOTER ======================== -->
  <footer class="footer">
    <div class="footer-links">
      <a href="#">Beranda</a>
      <a href="#">Semua Lomba</a>
      <a href="#">Tentang Kami</a>
      <a href="#">Kontak</a>
      <a href="#">Kebijakan Privasi</a>
    </div>
    <p>&copy; 2025 <strong>LombaKita</strong> — Platform Informasi Lomba Mahasiswa Indonesia</p>
    <p class="footer-sub">Dibuat dengan ❤️ untuk mahasiswa Indonesia berprestasi</p>
  </footer>

  <!-- JavaScript -->
  <script src="js/data.js"></script>
  <script src="js/main.js"></script>

</body>
</html>
