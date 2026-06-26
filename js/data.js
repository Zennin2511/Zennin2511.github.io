// =============================================
//  data.js – Data Lomba & Tips untuk LombaKita
//  File ini berisi semua data yang digunakan
//  oleh main.js untuk merender kartu lomba
//  dan kartu tips.
// =============================================

// ── DATA LOMBA ──
// Setiap objek = 1 kartu lomba
const datLomba = [
  {
    id: 1,
    nama: "National App Innovation Challenge 2025",
    org: "Kemendikbudristek",
    kategori: "teknologi",
    gambar: "Asset/Lomba1.jpg",
    warna: "orange",        // warna garis atas kartu
    warnaHex: "#FF6B35",    // warna tombol & prize
    tanggal: "15 Juli 2025",
    deadline: "30 Juni 2025",
    tim: "Tim 3–5 orang",
    level: "Nasional",
    hadiah: "Rp 150.000.000",
    syarat: "Mahasiswa aktif S1/D4 semua jurusan, maks. usia 25 tahun",
    deskripsi:
      "Kompetisi pengembangan aplikasi inovatif tingkat nasional yang diselenggarakan oleh Kemendikbudristek. Peserta membuat solusi digital untuk permasalahan nyata di masyarakat.",
    isNew: true,
  },
  {
    id: 2,
    nama: "Startup Business Plan Competition UI",
    org: "Universitas Indonesia",
    kategori: "bisnis",
      gambar: "Asset/Lomba2.jpg",
    warna: "blue",
    warnaHex: "#3B82F6",
    tanggal: "20 Juni 2025",
    deadline: "5 Juni 2025",
    tim: "Tim 2–4 orang",
    level: "Nasional",
    hadiah: "Rp 75.000.000",
    syarat: "Mahasiswa aktif S1/S2 seluruh Indonesia, belum pernah mendirikan PT",
    deskripsi:
      "Kompetisi rencana bisnis startup yang diselenggarakan oleh Universitas Indonesia. Peserta mempresentasikan ide bisnis inovatif di hadapan panel investor dan akademisi.",
    isNew: false,
  },
  {
    id: 3,
    nama: "Olimpiade Penelitian Mahasiswa Indonesia (OPMI)",
    org: "Belmawa Dikti",
    kategori: "sains",
      gambar: "Asset/Lomba3.jpg",
    warna: "green",
    warnaHex: "#22C55E",
    tanggal: "10 Agustus 2025",
    deadline: "1 Juli 2025",
    tim: "Individu",
    level: "Nasional",
    hadiah: "Rp 200.000.000",
    syarat: "Mahasiswa aktif S1/D4, memiliki hasil penelitian orisinal",
    deskripsi:
      "Ajang bergengsi penelitian mahasiswa tingkat nasional. Peserta mempresentasikan karya ilmiah di berbagai bidang: MIPA, Teknologi, Sosial Humaniora, dan Kesehatan.",
    isNew: false,
  },
];
const dataGaleri = [
  {
    id: 101,
    nama: "National App Innovation Challenge 2024",
    kategori: "teknologi",
    gambar: "Asset/galeri1.png",
    warna: "orange",
    pemenang1: "Tim CodeMaster - Universitas Indonesia",
    pemenang2: "Tim Innovators - ITB",
    pemenang3: "Tim TechGenius - UGM",
    tanggal: "15 Juli 2024",
    peserta: "127 tim"
  },
  {
    id: 102,
    nama: "Startup Business Plan Competition 2024",
    kategori: "bisnis",
    gambar: "Asset/galeri2.png",
    warna: "blue",
    pemenang1: "Tim StartupHub - Universitas Brawijaya",
    pemenang2: "Tim BizDev - Universitas Airlangga",
    pemenang3: "Tim Entrepreneurs - IPB",
    tanggal: "20 Juni 2024",
    peserta: "85 tim"
  },
  {
    id: 103,
    nama: "Olimpiade Penelitian Mahasiswa 2024",
    kategori: "sains",
    gambar: "Asset/galeri3.png",
    warna: "green",
    pemenang1: "Tim Researcher - ITB",
    pemenang2: "Tim Scientists - UGM",
    pemenang3: "Tim Innovators - UI",
    tanggal: "10 Agustus 2024",
    peserta: "156 tim"
  }
];

// ── DATA TIPS ──
// Setiap objek = 1 kartu tips
const dataTips = [
  {
    icon: "ti-clock",
    judul: "Daftar Lebih Awal",
    isi: "Daftar jauh sebelum deadline agar punya waktu persiapan matang dan tidak terburu-buru.",
  },
  {
    icon: "ti-users",
    judul: "Pilih Tim yang Solid",
    isi: "Pastikan anggota tim memiliki keahlian yang saling melengkapi dan komitmen tinggi.",
  },
  {
    icon: "ti-file-description",
    judul: "Baca Panduan Teliti",
    isi: "Pahami aturan dan format lomba dengan seksama sebelum mulai mengerjakan karya.",
  },
  {
    icon: "ti-trophy",
    judul: "Fokus pada Inovasi",
    isi: "Juri menghargai solusi kreatif dan orisinal yang benar-benar menjawab permasalahan.",
  },
  {
    icon: "ti-presentation",
    judul: "Latih Presentasi",
    isi: "Karya bagus tapi presentasi buruk bisa menurunkan penilaian. Latihan rutin sangat penting.",
  },
  {
    icon: "ti-network",
    judul: "Bangun Jaringan",
    isi: "Lomba bukan hanya soal menang, tapi juga kesempatan bertemu peserta dari kampus lain.",
  },
];
