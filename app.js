(function () {
  'use strict';

  var STORAGE_KEY = 'fastrack_vanilla_v1';

  var ASSET_IMAGES = {
    splashCity:
      'https://lh3.googleusercontent.com/aida/ALJJyrBSQ_Wex4SQMEV47WP4AJ9NytQsLvxzDqzly0tA3cKJA1mLvzh4_1wSvir-ZWG1hb8LRytDHmQsCbMCwn-qwREhsXslkue8P-THdSncInL-XOFlbJMxV48Pj4FAnvNy4GTB54hU9ZVhrdRPGLmySZ1GT9QGp8V6gKvkunrxNhb8nd3PHB1WVQRqZg4jCjhwjAUZxwAu_W4bxTjowMUyGZGayqp6Su3s4yr_6wmQA0YDt5VVzpa0tdxzdA',
    citizenAvatar:
      'https://lh3.googleusercontent.com/aida/ALJJyrAzQYanjJEdRiE0l59fT8O-2iepMhapS-jtblL0A15tXTw-LvYkrCYUuSp6efv_Sjv6GQKzbaT7kAwnL2XEOMbV3zThsECctUbGxksvHfqv03IuqCqtV7LJfgJIUh4qGPqLFaWCDDi0PXMT1y10n25jw-QWUudFUs29e6zwKGNeeNWloIDbuSQNpmEKOHQMykXqLFQgRS9-9XRts6qK-A8PM1oEOQTWB7lV3lTPv8VvBgkGKyRR11rt',
    profileAvatar:
      'https://lh3.googleusercontent.com/aida/ALJJyrCbpbryq1mI_Ii3YBlIlsrzP-TZY7PNfmbD82Dst4jAZEYRjZG3fdDnWnpV4f2OAWDxuriXog3LTZre4vucrhcU9FVL1Px_u_fAPOfPxKqbOUnTPwoWwmZJn_1Y3O4s2MgHS0AT-nE2IOK45JPkMJ7BoZdCx7W3BYvj0C9QnhKaC3_fXkJNnXly98KA4CjI4MdXmgdk9olf4urhILzx-6T2uCE4RuvQdpqr14U_BnrBaIS2fM1ob0ck',
    adminAvatar:
      'https://lh3.googleusercontent.com/aida/ALJJyrAYxAxqDQ_5qQ_vdFKxCd0kZdNxZz5WStEk-7RL14-9ZYLPzGNoHoAc5AO0Su6PMpWVywP1-UjRThKvBVQsDHHz7T-KOLlFTRDtFJXEagM-pjv467rH_IGbfwAjfcK3HcaszqPCABD32iV4lxFQb8iDFA5KRLYcG4ucdZjK-RVsKK9AFjCt0Nsqzgrr-WRDeFGDPOmVwihjDSHINw3U3XirC-fbAcF3UhQLIMpoVWXVA4ACJc4ygA',
    techAvatar:
      'https://lh3.googleusercontent.com/aida/ALJJyrClyhRF6bpJT_v7yQv_pYjTEi4BZ4rAC1aAIkuBYoVh5Q30WVWL1BSjAJlueZD2OOZcapplmRwEk1UgbZluTXjIV44g8aQBK_UjFqPhLrY4nu1e4tjiqYfamBxLFAC4YgF7CIlO6kEBeyAYHkXl5OnAPyulq4iF0FUwUlZNeqvFeW9IOB0gvYz2A6ECAQlhtv9YCBTRT-PAA5ARvWpldRBVaTze0Hn0skuJ0ihcrNSaPZhXM1I',
    damageRoad:
      'https://lh3.googleusercontent.com/aida/ALJJyrC1hsXQMPtV2ljZs22TzsQeydBXUevI9Rs0dcAdyuN1N6iYUS0kL_SD6CfgVp7PSJyDDvzXGhZtGFjuj-iZe49KO4En8cBT9eIR4-Ip9wUq_EOgv8YyZoZSSNnNOMxcYMCZOAAW-RUDWLjRuzEgUl-CKzIKqrDwwEmoV_UHv4oadr8M6vk6_9bFfcaTIOnZpi16KolocBe8GGrId36w5uqmVYSVV25seDUW4etISNJwcdnw2OWI',
    damageLamp:
      'https://lh3.googleusercontent.com/aida/ALJJyrCowJ2VhBIjecsFtBIVLFccXujvqTeCPaMU-11ZTPpEbTK-TOMzAHqoFdWVAsHXhzdrr_S_bSV24Oo4GfGMMS7OdGGpmMMi63RZ6naGY037csPTOBqKP7GGva6ZHDr5Ohe3mDjl1aHkaWzEHMTuZCufgcLm_3RC7IABAwcbJB7zD50SWmhSsaEsx3RQOENI9Qk0Xo80_DsPPtbwd8MU0BFZYEnqg6DxvqaCJd82JqWgcXbsSixmUBltH_RWCnE',
    damageDrain:
      'https://lh3.googleusercontent.com/aida/ALJJyrDnu6NZ1BToEMOLot1rxNGVNKqQgrZANqoqBEcZ7NPfFKHp_cyq4fQuhY9wTP3NEfUcasqiN1fRYgau4H4LWpvyfkd_GClHB50Wx-UZqoKKyu_zCEl8ZRej_-ZgjuVFa-6hin4aBWr8KIFlTbZiaicYNXFwpTTTyGkzNucwWThQMMDxFmtHK4q3kF9832B1jZCuvx8lqvePNP8D1-hlNXZ8JBlx_wV2koDb8dsrwKwCuzqefJHqPg',
  };

  var DEFAULT_PROFILES = {
    citizen: {
      role: 'citizen',
      name: 'Budi Santoso',
      email: 'budi.santoso@warga.id',
      phone: '0812-3456-7890',
      roleLabel: 'Warga Terdaftar',
      avatarUrl: ASSET_IMAGES.citizenAvatar,
    },
    admin: {
      role: 'admin',
      name: 'Siti Aminah',
      email: 'admin@fastrack.go.id',
      phone: '0811-2233-4455',
      roleLabel: 'Admin Dinas',
      avatarUrl: ASSET_IMAGES.adminAvatar,
    },
    tech: {
      role: 'tech',
      name: 'Andi Pratama',
      email: 'andi.teknisi@fastrack.go.id',
      phone: '0813-9876-5432',
      roleLabel: 'Petugas Lapangan',
      avatarUrl: ASSET_IMAGES.techAvatar,
    },
  };

  var TECHNICIANS = [
    {
      id: 'tech-andi',
      name: 'Andi Pratama',
      availability: 'Tersedia • Spesialis Jalan & Drainase',
      isBusy: false,
      avatarUrl: ASSET_IMAGES.techAvatar,
    },
    {
      id: 'tech-dedi',
      name: 'Dedi Kurniawan',
      availability: 'Tersedia • Spesialis PJU & Kelistrikan',
      isBusy: false,
      avatarUrl: ASSET_IMAGES.techAvatar,
    },
    {
      id: 'tech-hendra',
      name: 'Hendra Wijaya',
      availability: 'Sedang Bertugas (2 tugas aktif)',
      isBusy: true,
      avatarUrl: ASSET_IMAGES.techAvatar,
    },
  ];

  var INITIAL_REPORTS = [
    {
      id: 'FT-2026-014',
      title: 'Jalan Berlubang Depan SDN 03',
      category: 'Jalan Rusak',
      description:
        'Lubang berdiameter sekitar 60 cm di lajur kiri jalan tepat di depan gerbang sekolah, membahayakan pengendara motor saat hujan.',
      location: 'Jl. Ahmad Yani No. 45, Bekasi',
      additionalInfo: 'Rawan macet saat jam pulang sekolah',
      dateLabel: '24 Nov 2026',
      shortDate: '24 Nov',
      status: 'menunggu',
      priority: 'Tinggi',
      reporterName: 'Budi Santoso',
      reporterPhone: '0812-3456-7890',
      reporterAvatar: ASSET_IMAGES.citizenAvatar,
      photoUrl: ASSET_IMAGES.damageRoad,
      photoType: 'road',
      estimatedTime: 'Menunggu',
      timeline: [
        { title: 'Laporan Dikirim', timestamp: '24 Nov, 07:45', description: 'Dikirim oleh Budi Santoso beserta foto lokasi.', state: 'done' },
        { title: 'Sedang Ditinjau', timestamp: '24 Nov, 08:00', description: 'Menunggu verifikasi kelengkapan data oleh Admin Dinas.', state: 'active' },
        { title: 'Laporan Diterima', description: 'Persetujuan tindak lanjut oleh tim teknis.', state: 'pending' },
        { title: 'Teknisi Ditugaskan', description: 'Penunjukan petugas lapangan terdekat.', state: 'pending' },
        { title: 'Sedang Dikerjakan', description: 'Perbaikan fisik fasilitas di lokasi.', state: 'pending' },
        { title: 'Perbaikan Selesai', description: 'Konfirmasi penyelesaian dari petugas.', state: 'pending' },
      ],
    },
    {
      id: 'FT-2026-015',
      title: 'Atap Halte Transjakarta Bocor',
      category: 'Fasilitas Umum Lainnya',
      description:
        'Atap seng halte bagian timur lepas sebagian sehingga air hujan menggenangi area tunggu penumpang.',
      location: 'Halte Dukuh Atas, Jakarta Pusat',
      dateLabel: '24 Nov 2026',
      shortDate: '24 Nov',
      status: 'menunggu',
      priority: 'Sedang',
      reporterName: 'Rina Kusuma',
      reporterPhone: '0819-3344-5566',
      reporterAvatar: ASSET_IMAGES.profileAvatar,
      photoUrl: ASSET_IMAGES.damageLamp,
      photoType: 'shelter',
      estimatedTime: 'Menunggu',
      timeline: [
        { title: 'Laporan Dikirim', timestamp: '24 Nov, 08:20', description: 'Dikirim oleh Rina Kusuma beserta foto kondisi halte.', state: 'done' },
        { title: 'Sedang Ditinjau', timestamp: '24 Nov, 08:30', description: 'Admin memverifikasi titik lokasi halte dan urgensi.', state: 'active' },
        { title: 'Laporan Diterima', description: 'Persetujuan tindak lanjut oleh tim teknis.', state: 'pending' },
        { title: 'Teknisi Ditugaskan', description: 'Penunjukan petugas lapangan.', state: 'pending' },
        { title: 'Sedang Dikerjakan', description: 'Perbaikan atap halte.', state: 'pending' },
        { title: 'Perbaikan Selesai', description: 'Menunggu konfirmasi penyelesaian.', state: 'pending' },
      ],
    },
    {
      id: 'FT-2026-011',
      title: 'Lampu PJU Simpang Menteng',
      category: 'Lampu Jalan Mati',
      description:
        'Tiga tiang lampu penerangan jalan umum di sisi utara simpang padam total sejak pukul 18.30 WIB sehingga jalanan gelap dan rawan kecelakaan.',
      location: 'Jl. HOS Cokroaminoto, Jakarta Pusat',
      dateLabel: '22 Nov 2026',
      shortDate: '22 Nov',
      status: 'diproses',
      priority: 'Tinggi',
      reporterName: 'Budi Santoso',
      reporterPhone: '0812-3456-7890',
      reporterAvatar: ASSET_IMAGES.citizenAvatar,
      photoUrl: ASSET_IMAGES.damageLamp,
      photoType: 'lamp',
      assignedTechId: 'tech-andi',
      assignedTechName: 'Andi Pratama',
      estimatedTime: 'Est. 16:00',
      taskId: 'TGS-042',
      timeline: [
        { title: 'Laporan Dikirim', timestamp: '22 Nov, 08:15', description: 'Dikirim oleh Budi Santoso beserta foto lokasi.', state: 'done' },
        { title: 'Sedang Ditinjau', timestamp: '22 Nov, 09:40', description: 'Admin memverifikasi kelengkapan data dan titik lokasi.', state: 'done' },
        { title: 'Laporan Diterima', timestamp: '22 Nov, 10:05', description: 'Disetujui untuk ditindaklanjuti oleh tim teknis.', state: 'done' },
        { title: 'Teknisi Ditugaskan', timestamp: '23 Nov, 08:30', description: 'Andi Pratama membawa peralatan pengganti lampu.', state: 'done' },
        { title: 'Sedang Dikerjakan', timestamp: '24 Nov, 09:15', description: 'Pengecekan jaringan kabel dan penggantian unit LED.', state: 'active' },
        { title: 'Perbaikan Selesai', description: 'Menunggu konfirmasi penyelesaian dari petugas.', state: 'pending' },
      ],
    },
    {
      id: 'FT-2026-008',
      title: 'Saluran Drainase Tersumbat Sampah',
      category: 'Drainase Tersumbat',
      description:
        'Saluran air di tepi jalan penuh endapan lumpur dan sampah plastik sehingga meluap ke badan jalan setiap kali turun hujan.',
      location: 'Jl. Kemang Raya No. 18, Jakarta Selatan',
      dateLabel: '19 Nov 2026',
      shortDate: '19 Nov',
      status: 'selesai',
      priority: 'Sedang',
      reporterName: 'Budi Santoso',
      reporterPhone: '0812-3456-7890',
      reporterAvatar: ASSET_IMAGES.citizenAvatar,
      photoUrl: ASSET_IMAGES.damageDrain,
      photoType: 'drain',
      assignedTechId: 'tech-andi',
      assignedTechName: 'Andi Pratama',
      estimatedTime: 'Selesai',
      taskId: 'TGS-039',
      completionNote: 'Saluran sudah dibersihkan dan aliran air kembali lancar.',
      timeline: [
        { title: 'Laporan Dikirim', timestamp: '19 Nov, 07:30', description: 'Dikirim oleh Budi Santoso beserta foto lokasi.', state: 'done' },
        { title: 'Sedang Ditinjau', timestamp: '19 Nov, 08:45', description: 'Admin memverifikasi lokasi saluran drainase.', state: 'done' },
        { title: 'Laporan Diterima', timestamp: '19 Nov, 09:10', description: 'Disetujui untuk pembersihan saluran.', state: 'done' },
        { title: 'Teknisi Ditugaskan', timestamp: '19 Nov, 11:00', description: 'Andi Pratama menuju titik Kemang Raya.', state: 'done' },
        { title: 'Sedang Dikerjakan', timestamp: '20 Nov, 08:15', description: 'Pengangkatan endapan lumpur dan sampah plastik.', state: 'done' },
        { title: 'Perbaikan Selesai', timestamp: '20 Nov, 14:20', description: 'Saluran sudah dibersihkan dan aliran air kembali lancar.', state: 'done' },
      ],
    },
  ];

  var INITIAL_TASKS = [
    {
      id: 'TGS-043',
      reportId: 'FT-2026-014',
      title: 'Jalan Berlubang di Depan SDN 03',
      category: 'Jalan Rusak',
      location: 'Jl. Ahmad Yani No. 45, Bekasi',
      dateLabel: '24 Nov 2026',
      status: 'menunggu',
      priority: 'Prioritas',
      deadline: '13:00 WIB',
      adminName: 'Siti A.',
      adminNote: 'Prioritaskan penambalan aspal sebelum jam pulang sekolah pukul 13.00 WIB.',
      description:
        'Lubang berdiameter sekitar 60 cm di lajur kiri jalan tepat di depan gerbang sekolah, membahayakan pengendara motor saat hujan.',
      photoUrl: ASSET_IMAGES.damageRoad,
    },
    {
      id: 'TGS-042',
      reportId: 'FT-2026-011',
      title: 'Lampu PJU Mati di Simpang Menteng',
      category: 'Lampu Jalan Mati',
      location: 'Jl. HOS Cokroaminoto, Jakarta Pusat',
      dateLabel: '23 Nov 2026',
      status: 'dikerjakan',
      priority: 'Tinggi',
      deadline: '16:00 WIB',
      adminName: 'Siti A.',
      adminNote: 'Bawa unit lampu LED 90W dan periksa panel saklar otomatis di tiang utara.',
      description:
        'Tiga tiang lampu penerangan jalan umum di sisi utara simpang padam total sejak pukul 18.30 WIB sehingga jalanan gelap.',
      photoUrl: ASSET_IMAGES.damageLamp,
    },
    {
      id: 'TGS-039',
      reportId: 'FT-2026-008',
      title: 'Saluran Drainase Tersumbat Sampah',
      category: 'Drainase Tersumbat',
      location: 'Jl. Kemang Raya No. 18, Jakarta Selatan',
      dateLabel: '20 Nov 2026',
      status: 'selesai',
      priority: 'Sedang',
      deadline: '15:00 WIB',
      adminName: 'Siti A.',
      adminNote: 'Bersihkan saringan got dan angkut sedimentasi lumpur.',
      description:
        'Saluran air di tepi jalan penuh endapan lumpur dan sampah plastik sehingga meluap ke badan jalan.',
      photoUrl: ASSET_IMAGES.damageDrain,
      completionNote: 'Saluran sudah dibersihkan dan aliran air kembali lancar.',
    },
  ];

  var CATEGORY_STATS_BASE = [
    { label: 'Jalan Rusak', count: 47, color: 'var(--primary)' },
    { label: 'Lampu Jalan Mati', count: 31, color: 'var(--primary-navy)' },
    { label: 'Drainase Tersumbat', count: 23, color: 'var(--warning)' },
    { label: 'Fasilitas Pendidikan & Kesehatan', count: 14, color: 'var(--success)' },
    { label: 'Fasilitas Umum Lainnya', count: 9, color: 'var(--outline-strong)' },
  ];

  /* ---------------- SVG ICONS ---------------- */
  function svg(paths, cls) {
    return (
      '<svg class="icon ' +
      (cls || '') +
      '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      paths +
      '</svg>'
    );
  }

  var ICONS = {
    shield: svg('<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>', 'icon-sm'),
    arrowRight: svg('<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>', ''),
    arrowLeft: svg('<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>', ''),
    mail: svg('<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>', ''),
    lock: svg('<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>', ''),
    eye: svg('<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>', ''),
    eyeOff: svg('<path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" x2="22" y1="2" y2="22"/>', ''),
    phone: svg('<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>', ''),
    home: svg('<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>', ''),
    list: svg('<rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/>', ''),
    plusCircle: svg('<circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8"/>', ''),
    plus: svg('<path d="M5 12h14"/><path d="M12 5v14"/>', 'icon-sm'),
    user: svg('<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>', ''),
    bell: svg('<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>', ''),
    hardhat: svg('<path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z"/><path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"/><path d="M4 15v-3a6 6 0 0 1 6-6h0"/><path d="M14 6h0a6 6 0 0 1 6 6v3"/>', ''),
    clock: svg('<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>', 'icon-sm'),
    wrench: svg('<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>', ''),
    checkCircle: svg('<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/>', ''),
    check: svg('<path d="M20 6 9 17l-5-5"/>', 'icon-sm'),
    camera: svg('<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/>', ''),
    image: svg('<rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>', ''),
    upload: svg('<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/>', ''),
    pin: svg('<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>', ''),
    history: svg('<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l4 2"/>', ''),
    search: svg('<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>', ''),
    tune: svg('<line x1="21" x2="14" y1="4" y2="4"/><line x1="10" x2="3" y1="4" y2="4"/><line x1="21" x2="12" y1="12" y2="12"/><line x1="8" x2="3" y1="12" y2="12"/><line x1="21" x2="16" y1="20" y2="20"/><line x1="12" x2="3" y1="20" y2="20"/><line x1="14" x2="14" y1="2" y2="6"/><line x1="8" x2="8" y1="10" y2="14"/><line x1="16" x2="16" y1="18" y2="22"/>', ''),
    alert: svg('<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/>', ''),
    flag: svg('<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" x2="4" y1="22" y2="15"/>', 'icon-sm'),
    xCircle: svg('<circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/>', ''),
    factCheck: svg('<rect width="18" height="18" x="3" y="3" rx="2"/><path d="m9 12 2 2 4-4"/>', ''),
    userPlus: svg('<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" x2="19" y1="8" y2="14"/><line x1="22" x2="16" y1="11" y2="11"/>', ''),
    chart: svg('<line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/>', ''),
    edit: svg('<path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>', ''),
    logout: svg('<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/>', ''),
    package: svg('<path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>', 'icon-sm'),
    gauge: svg('<path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/>', ''),
    play: svg('<polygon points="6 3 20 12 6 21 6 3"/>', ''),
    layers: svg('<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>', 'icon-sm'),
  };

  function logoSvg(cls) {
    return (
      '<svg viewBox="0 0 64 64" class="' +
      (cls || 'w-14 h-14') +
      '" style="width:' +
      (cls === 'sm' ? '32px;height:32px' : '56px;height:56px') +
      '" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Logo FasTrack">' +
      '<rect x="6" y="6" width="52" height="52" rx="14" fill="#DBEAFE"></rect>' +
      '<path d="M22 44V20H42V26H29V30H39V36H29V44H22Z" fill="#0F2A56"></path>' +
      '<circle cx="44" cy="40" r="6" fill="#1D4ED8"></circle>' +
      '<path d="M41.5 40L43.2 41.7L46.8 38.1" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>' +
      '</svg>'
    );
  }

  /* ---------------- HELPERS ---------------- */
  function esc(str) {
    return String(str == null ? '' : str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

  function loadState() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        var parsed = JSON.parse(raw);
        if (parsed && parsed.reports && parsed.tasks && parsed.profiles) {
          return parsed;
        }
      }
    } catch (e) {}
    return {
      role: 'citizen',
      profiles: clone(DEFAULT_PROFILES),
      reports: clone(INITIAL_REPORTS),
      tasks: clone(INITIAL_TASKS),
    };
  }

  var persisted = loadState();
  var state = {
    screen: 'splash',
    role: persisted.role || 'citizen',
    profiles: persisted.profiles,
    reports: persisted.reports,
    tasks: persisted.tasks,
    selectedReportId: 'FT-2026-011',
    selectedTaskId: 'TGS-043',
    listFilter: 'semua',
    searchQuery: '',
    notifOpen: false,
    loginRole: 'citizen',
    loginEmail: DEFAULT_PROFILES.citizen.email,
    loginShowPwd: false,
    loginResetSent: false,
    createPhotoMode: 'road',
    createCustomPhoto: '',
    createSuccessId: '',
    assignReportId: 'FT-2026-014',
    assignTechId: 'tech-andi',
    assignSuccessMsg: '',
    modal: null,
  };

  function saveState() {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          role: state.role,
          profiles: state.profiles,
          reports: state.reports,
          tasks: state.tasks,
        })
      );
    } catch (e) {}
  }

  window.ftImgError = function (imgEl, mode) {
    if (!imgEl || !imgEl.parentNode) return;
    var alt = imgEl.getAttribute('alt') || 'Foto';
    var cls = imgEl.className || '';
    var div = document.createElement('div');
    if (mode === 'avatar') {
      div.className = cls + ' avatar-fallback';
      div.innerHTML = ICONS.user;
    } else if (mode === 'city') {
      div.className = cls;
      div.style.background = 'linear-gradient(135deg, #0F2A56 0%, #173B75 55%, #1D4ED8 100%)';
    } else {
      div.className = cls + ' img-fallback-box';
      div.innerHTML = ICONS.image + '<span style="font-size:12px;font-weight:600;">' + esc(alt) + '</span>';
    }
    imgEl.parentNode.replaceChild(div, imgEl);
  };

  function imgTag(src, alt, cls, mode) {
    return (
      '<img src="' +
      esc(src) +
      '" alt="' +
      esc(alt) +
      '" class="' +
      esc(cls) +
      '" referrerpolicy="no-referrer" onerror="window.ftImgError(this, \'' +
      (mode || 'photo') +
      '\')" />'
    );
  }

  function reportBadge(status, isAdmin) {
    var map = {
      menunggu: { cls: 'badge-warning', label: isAdmin ? 'Laporan Baru' : 'Menunggu' },
      diterima: { cls: 'badge-success', label: 'Diterima' },
      diproses: { cls: 'badge-info', label: 'Diproses' },
      selesai: { cls: 'badge-success', label: 'Selesai' },
      ditolak: { cls: 'badge-danger', label: 'Ditolak' },
    };
    var cfg = map[status] || map.menunggu;
    return '<span class="status-badge ' + cfg.cls + '">' + cfg.label + '</span>';
  }

  function taskBadge(status) {
    var map = {
      menunggu: { cls: 'badge-warning', label: 'Menunggu' },
      dikerjakan: { cls: 'badge-info', label: 'Dikerjakan' },
      selesai: { cls: 'badge-success', label: 'Selesai' },
    };
    var cfg = map[status] || map.menunggu;
    return '<span class="status-badge ' + cfg.cls + '">' + cfg.label + '</span>';
  }

  function navigate(screen, opts) {
    opts = opts || {};
    if (opts.reportId) state.selectedReportId = opts.reportId;
    if (opts.taskId) state.selectedTaskId = opts.taskId;
    state.listFilter = opts.filter !== undefined ? opts.filter : 'semua';
    state.searchQuery = '';
    state.notifOpen = false;
    state.assignSuccessMsg = '';
    state.screen = screen;
    render();
    window.scrollTo(0, 0);
  }

  /* ---------------- SHELL NAVIGATION ---------------- */
  function getNavItems(role) {
    if (role === 'admin') {
      return [
        { screen: 'admin-home', label: 'Beranda', short: 'Beranda', icon: ICONS.home, active: ['admin-home'] },
        { screen: 'admin-reports', label: 'Kelola Laporan', short: 'Laporan', icon: ICONS.factCheck, active: ['admin-reports', 'admin-review'] },
        { screen: 'admin-assign', label: 'Penugasan', short: 'Penugasan', icon: ICONS.hardhat, active: ['admin-assign'] },
        { screen: 'admin-statistics', label: 'Statistik', short: 'Statistik', icon: ICONS.chart, active: ['admin-statistics'] },
        { screen: 'profile', label: 'Profil', short: 'Profil', icon: ICONS.user, active: ['profile'] },
      ];
    }
    if (role === 'tech') {
      return [
        { screen: 'tech-home', label: 'Beranda', short: 'Beranda', icon: ICONS.home, active: ['tech-home'] },
        { screen: 'tech-tasks', label: 'Tugas Saya', short: 'Tugas Saya', icon: ICONS.hardhat, active: ['tech-tasks', 'tech-task-detail'] },
        { screen: 'tech-tasks', filter: 'selesai', label: 'Riwayat', short: 'Riwayat', icon: ICONS.history, active: [] },
        { screen: 'profile', label: 'Profil', short: 'Profil', icon: ICONS.user, active: ['profile'] },
      ];
    }
    return [
      { screen: 'citizen-home', label: 'Beranda', short: 'Beranda', icon: ICONS.home, active: ['citizen-home'] },
      { screen: 'my-reports', label: 'Laporan Saya', short: 'Laporan', icon: ICONS.list, active: ['my-reports', 'report-detail'] },
      { screen: 'create-report', label: 'Buat Laporan', short: 'Buat', icon: ICONS.plusCircle, active: ['create-report'] },
      { screen: 'profile', label: 'Profil', short: 'Profil', icon: ICONS.user, active: ['profile'] },
    ];
  }

  function wrapShell(contentHtml, hideMobileNav) {
    var profile = state.profiles[state.role];
    var navItems = getNavItems(state.role);

    var sidebarLinks = navItems
      .map(function (item) {
        var isActive = item.active.indexOf(state.screen) !== -1;
        return (
          '<button type="button" data-nav="' +
          item.screen +
          '" data-filter="' +
          (item.filter || 'semua') +
          '" class="sidebar-link ' +
          (isActive ? 'active' : '') +
          '">' +
          item.icon +
          '<span>' +
          esc(item.label) +
          '</span></button>'
        );
      })
      .join('');

    var mobileLinks = navItems
      .map(function (item) {
        var isActive = item.active.indexOf(state.screen) !== -1;
        if (isActive) {
          return (
            '<button type="button" data-nav="' +
            item.screen +
            '" data-filter="' +
            (item.filter || 'semua') +
            '" class="bottom-nav-pill" aria-current="page">' +
            item.icon +
            '<span>' +
            esc(item.short) +
            '</span></button>'
          );
        }
        return (
          '<button type="button" data-nav="' +
          item.screen +
          '" data-filter="' +
          (item.filter || 'semua') +
          '" class="bottom-nav-icon" aria-label="' +
          esc(item.label) +
          '">' +
          item.icon +
          '</button>'
        );
      })
      .join('');

    var roleButtons = [
      { key: 'citizen', label: 'Warga' },
      { key: 'admin', label: 'Admin' },
      { key: 'tech', label: 'Petugas' },
    ]
      .map(function (r) {
        return (
          '<button type="button" data-switch-role="' +
          r.key +
          '" class="role-btn ' +
          (state.role === r.key ? 'active' : '') +
          '" style="min-height:36px;">' +
          r.label +
          '</button>'
        );
      })
      .join('');

    return (
      '<div class="app-shell">' +
      '<aside class="desktop-sidebar">' +
      '<div class="sidebar-brand">' +
      '<div style="width:40px;height:40px;border-radius:12px;background:rgba(219,234,254,0.6);display:flex;align-items:center;justify-content:center;">' +
      logoSvg('sm') +
      '</div>' +
      '<div><div style="font-family:var(--font-display);font-size:17px;font-weight:700;color:var(--primary-navy);">FasTrack</div>' +
      '<div style="font-size:12px;color:var(--on-surface-variant);">Layanan Publik Digital</div></div>' +
      '</div>' +
      '<nav class="sidebar-nav">' +
      sidebarLinks +
      '<div class="sidebar-role-box">' +
      '<div style="font-size:12px;font-weight:600;color:var(--on-surface-variant);margin-bottom:8px;padding:0 4px;">Ganti Peran Demo</div>' +
      '<div class="role-grid">' +
      roleButtons +
      '</div></div></nav>' +
      '<div class="sidebar-footer">' +
      '<button type="button" data-nav="profile" style="display:flex;align-items:center;gap:10px;text-align:left;min-width:0;">' +
      imgTag(profile.avatarUrl, profile.name, 'avatar-sm', 'avatar') +
      '<div style="min-width:0;"><div style="font-size:13px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">' +
      esc(profile.name) +
      '</div><div style="font-size:12px;color:var(--on-surface-variant);">' +
      esc(profile.roleLabel) +
      '</div></div></button>' +
      '<button type="button" id="btn-sidebar-logout" class="icon-circle-btn" aria-label="Keluar Akun" title="Keluar Akun">' +
      ICONS.logout +
      '</button>' +
      '</div></aside>' +
      '<div class="app-main-wrap ' +
      (hideMobileNav ? 'no-bottom-pad' : '') +
      '">' +
      contentHtml +
      '</div>' +
      (hideMobileNav
        ? ''
        : '<div class="mobile-bottom-nav-wrap"><nav class="mobile-bottom-nav" aria-label="Navigasi">' +
          mobileLinks +
          '</nav></div>') +
      '</div>'
    );
  }

  /* ---------------- RENDER SCREENS ---------------- */
  function renderSplash() {
    return (
      '<main class="splash-screen">' +
      imgTag(ASSET_IMAGES.splashCity, 'Latar perkotaan modern Indonesia', 'splash-bg', 'city') +
      '<div class="splash-scrim"></div>' +
      '<div class="splash-top"><span class="splash-badge">' +
      ICONS.shield +
      ' Layanan Publik Digital</span></div>' +
      '<section class="splash-center">' +
      '<div class="splash-logo-box">' +
      logoSvg('') +
      '</div>' +
      '<div style="display:flex;flex-direction:column;gap:8px;">' +
      '<h1 class="splash-title">FasTrack</h1>' +
      '<p class="splash-tagline">Lapor Mudah, Fasilitas Terjaga</p>' +
      '<p class="splash-desc">Pantau dan laporkan kerusakan fasilitas umum di sekitar Anda secara cepat dan transparan.</p>' +
      '</div></section>' +
      '<footer class="splash-footer">' +
      '<button type="button" id="btn-splash-start" class="btn-splash"><span>Mulai Sekarang</span>' +
      ICONS.arrowRight +
      '</button>' +
      '<p class="splash-version">Versi 1.0 • Pemerintah Daerah Terintegrasi</p>' +
      '</footer></main>'
    );
  }

  function renderLogin() {
    return (
      '<main class="auth-login-layout">' +
      '<header class="auth-hero-panel">' +
      '<div class="auth-hero-orb"></div>' +
      '<div class="auth-brand-row"><div class="auth-brand-icon">' +
      ICONS.factCheck +
      '</div><span class="auth-brand-name">FasTrack</span></div>' +
      '<div class="auth-hero-copy"><h1>Selamat Datang di FasTrack</h1>' +
      '<p>Laporkan kerusakan fasilitas umum dengan mudah, pantau progres perbaikan secara transparan hingga tuntas.</p></div>' +
      '<div class="auth-hero-foot">' +
      ICONS.shield +
      '<span>Terintegrasi dengan Dinas Pekerjaan Umum &amp; Petugas Lapangan</span></div>' +
      '</header>' +
      '<section class="auth-form-panel">' +
      '<div class="auth-card">' +
      '<div class="field-group"><span class="field-label">Pilih Peran Akun (Demo)</span>' +
      '<div class="role-grid">' +
      ['citizen', 'admin', 'tech']
        .map(function (r) {
          var label = r === 'citizen' ? 'Warga' : r === 'admin' ? 'Admin' : 'Petugas';
          return (
            '<button type="button" data-login-role="' +
            r +
            '" class="role-btn ' +
            (state.loginRole === r ? 'active' : '') +
            '">' +
            label +
            '</button>'
          );
        })
        .join('') +
      '</div></div>' +
      '<form id="form-login" style="display:flex;flex-direction:column;gap:14px;">' +
      '<label class="field-group"><span class="field-label">Email</span>' +
      '<div class="input-wrap"><span class="input-icon-left">' +
      ICONS.mail +
      '</span><input id="login-email" type="email" value="' +
      esc(state.loginEmail) +
      '" placeholder="nama@email.com" required class="input-control has-left-icon" /></div></label>' +
      '<label class="field-group"><span class="field-label">Kata Sandi</span>' +
      '<div class="input-wrap"><span class="input-icon-left">' +
      ICONS.lock +
      '</span><input id="login-pwd" type="' +
      (state.loginShowPwd ? 'text' : 'password') +
      '" value="fastrack123" placeholder="Masukkan kata sandi" required class="input-control has-left-icon has-right-btn" />' +
      '<button type="button" id="btn-toggle-pwd" class="eye-btn" aria-label="Tampilkan kata sandi">' +
      (state.loginShowPwd ? ICONS.eyeOff : ICONS.eye) +
      '</button></div></label>' +
      '<div class="auth-row"><label class="checkbox-label"><input type="checkbox" checked /><span>Ingat saya</span></label>' +
      '<button type="button" id="btn-forgot-pwd" class="link-btn">Lupa kata sandi?</button></div>' +
      (state.loginResetSent
        ? '<div class="notice-box">Tautan atur ulang kata sandi telah dikirim ke email Anda.</div>'
        : '') +
      '<button type="submit" class="btn-primary">Masuk</button>' +
      '</form></div>' +
      '<footer class="auth-footer">Belum punya akun? <button type="button" id="btn-go-register" class="link-btn" style="font-size:14px;">Daftar di sini</button></footer>' +
      '</section></main>'
    );
  }

  function renderRegister() {
    return (
      '<div style="min-height:100vh;display:flex;flex-direction:column;background:var(--surface);">' +
      '<header class="register-header"><button type="button" id="btn-reg-back" class="icon-circle-btn" aria-label="Kembali">' +
      ICONS.arrowLeft +
      '</button><h1 style="font-size:18px;font-weight:700;">Daftar Akun Warga</h1></header>' +
      '<main style="flex:1;padding:24px 16px;display:flex;flex-direction:column;justify-content:center;gap:18px;max-width:440px;width:100%;margin:0 auto;">' +
      '<div style="text-align:center;display:flex;flex-direction:column;gap:4px;">' +
      '<h2 style="font-size:20px;font-weight:700;color:var(--primary-navy);">Buat Akun Baru</h2>' +
      '<p style="color:var(--on-surface-variant);">Lengkapi data diri Anda untuk mulai melaporkan fasilitas umum.</p></div>' +
      '<form id="form-register" class="auth-card">' +
      '<label class="field-group"><span class="field-label">Nama Lengkap</span><input id="reg-name" type="text" placeholder="Contoh: Budi Santoso" required class="input-control" /></label>' +
      '<label class="field-group"><span class="field-label">Email</span><div class="input-wrap"><span class="input-icon-left">' +
      ICONS.mail +
      '</span><input id="reg-email" type="email" placeholder="budi.santoso@warga.id" required class="input-control has-left-icon" /></div></label>' +
      '<label class="field-group"><span class="field-label">Nomor Telepon</span><div class="input-wrap"><span class="input-icon-left">' +
      ICONS.phone +
      '</span><input id="reg-phone" type="tel" placeholder="0812-3456-7890" required class="input-control has-left-icon" /></div></label>' +
      '<label class="field-group"><span class="field-label">Kata Sandi</span><input id="reg-pwd" type="password" placeholder="Minimal 6 karakter" required class="input-control" /></label>' +
      '<label class="field-group"><span class="field-label">Konfirmasi Kata Sandi</span><input id="reg-pwd2" type="password" placeholder="Ulangi kata sandi" required class="input-control" /></label>' +
      '<div id="reg-error" class="error-box hidden"></div>' +
      '<button type="submit" class="btn-primary">Daftar Sekarang</button></form>' +
      '<p class="auth-footer" style="padding-top:0;">Sudah punya akun? <button type="button" id="btn-reg-login" class="link-btn" style="font-size:14px;">Masuk di sini</button></p>' +
      '</main></div>'
    );
  }

  function renderCitizenHome() {
    var profile = state.profiles.citizen;
    var waiting = state.reports.filter(function (r) { return r.status === 'menunggu'; }).length;
    var process = state.reports.filter(function (r) { return r.status === 'diproses' || r.status === 'diterima'; }).length;
    var done = state.reports.filter(function (r) { return r.status === 'selesai'; }).length;
    var activeTotal = waiting + process;
    var activeRep =
      state.reports.find(function (r) { return r.status === 'diproses'; }) ||
      state.reports.find(function (r) { return r.status === 'menunggu'; }) ||
      state.reports[0];
    var latestRep = state.reports[0];

    var notifHtml = state.notifOpen
      ? '<div class="notif-popover">' +
        '<div style="display:flex;justify-content:space-between;align-items:center;"><strong style="font-size:13px;">Pembaruan Laporan</strong>' +
        '<button type="button" id="btn-close-notif" class="link-btn">Tutup</button></div>' +
        state.reports
          .slice(0, 3)
          .map(function (r) {
            return (
              '<button type="button" data-open-report="' +
              r.id +
              '" style="text-align:left;padding:10px;border-radius:12px;background:var(--surface);display:flex;flex-direction:column;gap:4px;">' +
              '<div style="display:flex;justify-content:space-between;align-items:center;"><span class="font-mono" style="font-size:11px;color:var(--primary);">' +
              esc(r.id) +
              '</span>' +
              reportBadge(r.status) +
              '</div><span style="font-size:12px;font-weight:600;">' +
              esc(r.title) +
              '</span></button>'
            );
          })
          .join('') +
        '</div>'
      : '';

    var bentoCards = state.reports
      .slice(0, 2)
      .map(function (r, idx) {
        var extraCls = idx === 1 ? ' hidden-mobile-only' : '';
        return (
          '<button type="button" data-open-report="' +
          r.id +
          '" class="bento-photo-card' +
          extraCls +
          '">' +
          imgTag(r.photoUrl, r.title, '', 'photo') +
          '<div class="bento-scrim"></div>' +
          '<div class="bento-bottom"><div class="bento-text">' +
          '<span style="font-size:11px;font-weight:600;color:var(--light-blue);">' +
          esc(r.category) +
          ' • ' +
          esc(r.status === 'menunggu' ? 'Menunggu' : r.status === 'diproses' ? 'Diproses' : r.status === 'selesai' ? 'Selesai' : r.status) +
          '</span><h3 class="bento-title">' +
          esc(r.title) +
          '</h3><span class="bento-meta tabular-nums">' +
          esc(r.location.split(',')[0]) +
          ' • ' +
          esc(r.dateLabel) +
          '</span></div><span class="hero-circle-white">' +
          ICONS.arrowRight +
          '</span></div></button>'
        );
      })
      .join('');

    return wrapShell(
      '<div class="page-container">' +
        '<header class="top-user-bar">' +
        '<div class="user-greet-wrap">' +
        imgTag(profile.avatarUrl, profile.name, 'avatar-sm', 'avatar') +
        '<div><div class="greet-sub">Selamat Pagi,</div><h1 class="greet-name">' +
        esc(profile.name) +
        '</h1></div></div>' +
        '<div style="position:relative;"><button type="button" id="btn-toggle-notif" class="notif-btn" aria-label="Notifikasi">' +
        ICONS.bell +
        (activeTotal > 0 ? '<span class="notif-dot"></span>' : '') +
        '</button>' +
        notifHtml +
        '</div></header>' +
        '<main class="content-stack">' +
        '<div class="hero-overview-grid">' +
        (activeRep
          ? '<button type="button" data-open-report="' +
            activeRep.id +
            '" class="navy-hero-card">' +
            '<div style="display:flex;flex-direction:column;gap:6px;">' +
            '<span class="hero-kicker">Laporan Aktif Anda</span>' +
            '<span class="hero-big-num tabular-nums">' +
            String(activeTotal).padStart(2, '0') +
            '</span>' +
            '<div><div class="hero-sub-title">' +
            esc(activeRep.title) +
            '</div><div class="hero-sub-meta tabular-nums">' +
            (activeRep.assignedTechName
              ? 'Ditangani ' + esc(activeRep.assignedTechName.split(' ')[0]) + ' • ' + esc(activeRep.estimatedTime || 'Aktif')
              : esc(activeRep.location.split(',')[0]) + ' • ' + esc(activeRep.shortDate)) +
            '</div></div></div>' +
            '<div class="hero-right-col"><span class="hero-circle-translucent">' +
            ICONS.hardhat +
            '</span><span class="hero-circle-white">' +
            ICONS.arrowRight +
            '</span></div></button>'
          : '') +
        '<section class="ice-overview-card">' +
        '<div class="overview-header"><h2 class="section-title">Ringkasan Laporan</h2><span class="pill-soft-white">Bulan Ini</span></div>' +
        '<div class="overview-stats-grid">' +
        '<div class="overview-stat-cell"><span class="stat-label">Menunggu</span><div class="stat-val-row"><span class="stat-num tabular-nums">' +
        waiting +
        '</span><span style="color:var(--warning);">' +
        ICONS.clock +
        '</span></div></div>' +
        '<div class="overview-stat-cell"><span class="stat-label">Diproses</span><div class="stat-val-row"><span class="stat-num tabular-nums">' +
        process +
        '</span><span style="color:var(--primary);">' +
        ICONS.wrench +
        '</span></div></div>' +
        '<div class="overview-stat-cell"><span class="stat-label">Selesai</span><div class="stat-val-row"><span class="stat-num tabular-nums">' +
        (done + 2) +
        '</span><span style="color:var(--success);">' +
        ICONS.checkCircle +
        '</span></div></div>' +
        '</div></section></div>' +
        '<section class="surface-card"><h2 class="section-title">Akses Cepat</h2>' +
        '<div class="quick-grid">' +
        '<button type="button" data-nav="create-report" class="quick-item"><span class="quick-circle primary">' +
        ICONS.camera +
        '</span><span class="quick-label">Buat</span></button>' +
        '<button type="button" data-nav="my-reports" class="quick-item"><span class="quick-circle">' +
        ICONS.list +
        '</span><span class="quick-label">Laporan</span></button>' +
        '<button type="button" data-open-report="' +
        (latestRep ? latestRep.id : '') +
        '" class="quick-item"><span class="quick-circle">' +
        ICONS.pin +
        '</span><span class="quick-label">Lacak</span></button>' +
        '<button type="button" data-nav="my-reports" data-filter="selesai" class="quick-item"><span class="quick-circle">' +
        ICONS.history +
        '</span><span class="quick-label">Riwayat</span></button>' +
        '</div></section>' +
        '<section style="display:flex;flex-direction:column;gap:12px;">' +
        '<div class="overview-header"><h2 class="section-title">Laporan Terbaru</h2>' +
        '<button type="button" data-nav="my-reports" class="link-btn">Lihat Semua</button></div>' +
        '<div class="bento-grid-2">' +
        bentoCards +
        '</div></section></main></div>',
      false
    );
  }

  function renderCreateReport() {
    var previewUrl =
      state.createCustomPhoto ||
      (state.createPhotoMode === 'drain' ? ASSET_IMAGES.damageDrain : ASSET_IMAGES.damageRoad);

    return wrapShell(
      '<div>' +
        '<header class="navy-page-header"><div class="navy-header-inner">' +
        '<div class="header-bar-row"><button type="button" data-nav="citizen-home" class="glass-circle-btn" aria-label="Kembali">' +
        ICONS.arrowLeft +
        '</button><span class="glass-pill">Warga</span></div>' +
        '<h1 class="page-headline">Buat Laporan Baru</h1></div></header>' +
        '<main class="sheet-overlap"><form id="form-create-report" style="max-width:760px;margin:0 auto;display:flex;flex-direction:column;gap:16px;">' +
        '<div class="surface-card">' +
        '<label class="field-group"><span class="field-label">Kategori Kerusakan</span>' +
        '<select id="cr-category" class="input-control">' +
        ['Jalan Rusak', 'Lampu Jalan Mati', 'Drainase Tersumbat', 'Fasilitas Pendidikan', 'Fasilitas Kesehatan', 'Fasilitas Umum Lainnya']
          .map(function (c) { return '<option value="' + c + '">' + c + '</option>'; })
          .join('') +
        '</select></label>' +
        '<label class="field-group"><span class="field-label">Judul Laporan</span>' +
        '<input id="cr-title" type="text" value="Jalan Berlubang di Depan SDN 03" required class="input-control" /></label>' +
        '<label class="field-group"><span class="field-label">Deskripsi Kerusakan</span>' +
        '<textarea id="cr-desc" required class="input-control">Lubang berdiameter sekitar 60 cm di lajur kiri jalan tepat di depan gerbang sekolah, membahayakan pengendara motor saat hujan.</textarea></label>' +
        '<label class="field-group"><span class="field-label">Lokasi Kejadian</span>' +
        '<div class="input-wrap"><span class="input-icon-left" style="color:var(--primary);">' +
        ICONS.pin +
        '</span><input id="cr-loc" type="text" value="Jl. Ahmad Yani No. 45, Bekasi" required class="input-control has-left-icon" /></div></label>' +
        '</div>' +
        '<div class="surface-card">' +
        '<div><div class="field-label">Unggah Foto Bukti</div><div style="font-size:13px;color:var(--on-surface-variant);">Sertakan foto jelas untuk mempercepat verifikasi petugas.</div></div>' +
        '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;">' +
        '<button type="button" data-photo-mode="road" class="role-btn ' +
        (!state.createCustomPhoto && state.createPhotoMode === 'road' ? 'active' : '') +
        '" style="display:inline-flex;align-items:center;justify-content:center;gap:6px;">' +
        ICONS.camera +
        '<span>Kamera</span></button>' +
        '<button type="button" data-photo-mode="drain" class="role-btn ' +
        (!state.createCustomPhoto && state.createPhotoMode === 'drain' ? 'active' : '') +
        '" style="display:inline-flex;align-items:center;justify-content:center;gap:6px;">' +
        ICONS.image +
        '<span>Galeri</span></button>' +
        '<button type="button" id="btn-upload-photo" class="role-btn ' +
        (state.createCustomPhoto ? 'active' : '') +
        '" style="display:inline-flex;align-items:center;justify-content:center;gap:6px;">' +
        ICONS.upload +
        '<span>Unggah</span></button>' +
        '<input id="cr-file-input" type="file" accept="image/*" class="hidden" />' +
        '</div>' +
        '<div style="position:relative;border-radius:14px;overflow:hidden;border:1px solid var(--outline);">' +
        imgTag(previewUrl, 'Pratinjau foto bukti kerusakan', '', 'photo') +
        '<span style="position:absolute;bottom:10px;left:10px;padding:4px 10px;border-radius:9999px;background:rgba(15,23,42,0.75);color:#fff;font-size:11px;font-weight:600;">Pratinjau Foto Bukti</span>' +
        '</div></div>' +
        '<div class="surface-card"><label class="field-group"><span class="field-label">Informasi Tambahan (Opsional)</span>' +
        '<input id="cr-extra" type="text" placeholder="Contoh: Rawan macet saat jam pulang sekolah" class="input-control" /></label></div>' +
        '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;padding-bottom:20px;">' +
        '<button type="button" data-nav="citizen-home" class="btn-secondary">Batal</button>' +
        '<button type="submit" class="btn-primary">Kirim Laporan</button>' +
        '</div></form></main></div>',
      true
    );
  }

  function renderMyReports() {
    var filtered = state.reports.filter(function (r) {
      var mStatus =
        state.listFilter === 'semua' ||
        (state.listFilter === 'diproses' ? r.status === 'diproses' || r.status === 'diterima' : r.status === state.listFilter);
      var q = state.searchQuery.trim().toLowerCase();
      var mQuery =
        !q ||
        r.id.toLowerCase().indexOf(q) !== -1 ||
        r.title.toLowerCase().indexOf(q) !== -1 ||
        r.location.toLowerCase().indexOf(q) !== -1;
      return mStatus && mQuery;
    });

    var chips = [
      { id: 'semua', label: 'Semua' },
      { id: 'menunggu', label: 'Menunggu' },
      { id: 'diproses', label: 'Diproses' },
      { id: 'selesai', label: 'Selesai' },
    ];
    if (state.reports.some(function (r) { return r.status === 'ditolak'; })) {
      chips.push({ id: 'ditolak', label: 'Ditolak' });
    }

    var first = filtered[0];
    var rest = filtered.slice(1);

    return wrapShell(
      '<div>' +
        '<header class="navy-page-header"><div class="navy-header-inner">' +
        '<div class="header-bar-row"><button type="button" data-nav="citizen-home" class="glass-circle-btn" aria-label="Kembali">' +
        ICONS.arrowLeft +
        '</button><button type="button" data-nav="create-report" class="glass-pill">' +
        ICONS.plus +
        '<span>Buat Baru</span></button></div>' +
        '<h1 class="page-headline">Laporan Saya</h1>' +
        '<div class="search-row"><div class="input-wrap" style="flex:1;"><span class="input-icon-left">' +
        ICONS.search +
        '</span><input id="search-citizen-reports" type="search" value="' +
        esc(state.searchQuery) +
        '" placeholder="Cari judul, ID, atau lokasi..." class="search-pill-input" /></div>' +
        '<button type="button" id="btn-reset-citizen-filter" class="icon-circle-btn" style="width:44px;height:44px;color:var(--primary-navy);" aria-label="Reset filter">' +
        ICONS.tune +
        '</button></div></div></header>' +
        '<main class="sheet-overlap"><div class="page-container" style="display:flex;flex-direction:column;gap:16px;">' +
        '<div class="chip-scroll-row">' +
        chips
          .map(function (c) {
            return (
              '<button type="button" data-chip="' +
              c.id +
              '" class="filter-chip ' +
              (state.listFilter === c.id ? 'active' : '') +
              '">' +
              c.label +
              '</button>'
            );
          })
          .join('') +
        '</div>' +
        (filtered.length === 0
          ? '<div class="surface-card" style="text-align:center;align-items:center;padding:32px;"><strong>Tidak ada laporan ditemukan</strong><span style="color:var(--on-surface-variant);">Coba ubah filter status atau kata kunci pencarian Anda.</span></div>'
          : (first
              ? '<button type="button" data-open-report="' +
                first.id +
                '" class="bento-photo-card">' +
                imgTag(first.photoUrl, first.title, '', 'photo') +
                '<div class="bento-scrim"></div>' +
                '<div style="position:absolute;top:12px;left:12px;">' +
                reportBadge(first.status) +
                '</div><div class="bento-bottom"><div class="bento-text"><span class="font-mono" style="font-size:12px;color:var(--light-blue);">' +
                esc(first.id) +
                ' • ' +
                esc(first.category) +
                '</span><h2 class="bento-title">' +
                esc(first.title) +
                '</h2><span class="bento-meta tabular-nums">' +
                esc(first.location.split(',')[0]) +
                ' • ' +
                esc(first.dateLabel) +
                '</span></div><span class="hero-circle-white">' +
                ICONS.arrowRight +
                '</span></div></button>'
              : '') +
            (rest.length > 0
              ? '<div class="bento-mini-grid">' +
                rest
                  .map(function (r) {
                    return (
                      '<button type="button" data-open-report="' +
                      r.id +
                      '" class="bento-mini-card">' +
                      imgTag(r.photoUrl, r.title, '', 'photo') +
                      '<div class="bento-scrim"></div>' +
                      '<div style="position:absolute;top:10px;left:10px;">' +
                      reportBadge(r.status) +
                      '</div><div class="bento-bottom" style="padding:12px;"><div class="bento-text"><span class="bento-title" style="font-size:14px;">' +
                      esc(r.title) +
                      '</span><span class="font-mono" style="font-size:11px;color:var(--light-blue);">' +
                      esc(r.shortDate) +
                      '</span></div><span class="hero-circle-white" style="width:32px;height:32px;">' +
                      ICONS.arrowRight +
                      '</span></div></button>'
                    );
                  })
                  .join('') +
                '</div>'
              : '')) +
        '<button type="button" data-nav="create-report" class="ice-overview-card" style="flex-direction:row;align-items:center;text-align:left;">' +
        '<div><div style="font-family:var(--font-display);font-size:16px;font-weight:600;color:var(--primary-navy);">Temukan Kerusakan Baru?</div>' +
        '<div style="font-size:13px;color:var(--on-light-blue);">Laporkan cepat agar segera ditangani petugas.</div></div>' +
        '<span class="hero-circle-white">' +
        ICONS.arrowRight +
        '</span></button></div></main></div>',
      false
    );
  }

  function renderReportDetail() {
    var rep =
      state.reports.find(function (r) { return r.id === state.selectedReportId; }) ||
      state.reports[0];

    var techShort = rep.assignedTechName
      ? rep.assignedTechName.split(' ')[0] + ' ' + (rep.assignedTechName.split(' ')[1] ? rep.assignedTechName.split(' ')[1][0] + '.' : '')
      : 'Belum Ada';

    var timelineHtml = rep.timeline
      .map(function (step, idx) {
        var isLast = idx === rep.timeline.length - 1;
        var dotIcon =
          step.state === 'done'
            ? ICONS.check
            : step.state === 'active'
            ? ICONS.wrench
            : step.state === 'rejected'
            ? ICONS.xCircle
            : ICONS.flag;
        return (
          '<li class="timeline-item">' +
          '<div class="timeline-rail"><span class="timeline-dot ' +
          step.state +
          '">' +
          dotIcon +
          '</span>' +
          (isLast ? '' : '<span class="timeline-line ' + (step.state === 'done' ? 'done' : '') + '"></span>') +
          '</div>' +
          '<div style="flex:1;display:flex;flex-direction:column;gap:2px;">' +
          '<div style="display:flex;justify-content:space-between;align-items:center;gap:8px;">' +
          '<strong style="font-size:14px;color:' +
          (step.state === 'active' ? 'var(--primary-navy)' : step.state === 'rejected' ? 'var(--danger)' : step.state === 'pending' ? 'var(--on-surface-variant)' : 'var(--on-surface)') +
          ';">' +
          esc(step.title) +
          '</strong>' +
          (step.timestamp
            ? '<span class="font-mono tabular-nums" style="font-size:12px;color:var(--on-surface-variant);">' +
              esc(step.timestamp) +
              '</span>'
            : '') +
          '</div><p style="font-size:13px;color:var(--on-surface-variant);">' +
          esc(step.description) +
          '</p></div></li>'
        );
      })
      .join('');

    return wrapShell(
      '<div>' +
        '<div class="detail-hero-wrap">' +
        imgTag(rep.photoUrl, rep.title, '', 'photo') +
        '<div class="detail-hero-overlay"></div>' +
        '<div class="detail-hero-topbar"><button type="button" data-nav="my-reports" class="icon-circle-btn" aria-label="Kembali">' +
        ICONS.arrowLeft +
        '</button>' +
        reportBadge(rep.status) +
        '</div></div>' +
        '<main class="detail-sheet"><div class="page-container" style="display:flex;flex-direction:column;gap:20px;">' +
        '<section style="display:flex;flex-direction:column;gap:4px;">' +
        '<div style="display:flex;justify-content:space-between;align-items:center;"><span class="font-mono" style="font-size:12px;color:var(--primary);">' +
        esc(rep.id) +
        '</span><span class="tabular-nums" style="font-size:13px;color:var(--on-surface-variant);">' +
        esc(rep.dateLabel) +
        '</span></div>' +
        '<h1 style="font-size:21px;font-weight:700;">' +
        esc(rep.title) +
        '</h1>' +
        '<div style="display:flex;align-items:center;gap:6px;font-size:13px;color:var(--on-surface-variant);padding-top:2px;"><span style="color:var(--primary);">' +
        ICONS.pin +
        '</span><span>' +
        esc(rep.location) +
        '</span></div></section>' +
        '<section class="attr-4col">' +
        '<div class="attr-item"><span class="attr-circle">' + ICONS.wrench + '</span><span style="font-size:11px;font-weight:600;color:var(--on-surface-variant);">' + esc(rep.category.split(' ').slice(0, 2).join(' ')) + '</span></div>' +
        '<div class="attr-item"><span class="attr-circle">' + ICONS.hardhat + '</span><span style="font-size:11px;font-weight:600;color:var(--on-surface-variant);">' + esc(techShort) + '</span></div>' +
        '<div class="attr-item"><span class="attr-circle">' + ICONS.alert + '</span><span style="font-size:11px;font-weight:600;color:var(--on-surface-variant);">' + esc(rep.priority) + '</span></div>' +
        '<div class="attr-item"><span class="attr-circle">' + ICONS.clock + '</span><span style="font-size:11px;font-weight:600;color:var(--on-surface-variant);">' + esc(rep.estimatedTime || 'Menunggu') + '</span></div>' +
        '</section>' +
        '<div class="detail-split-grid" style="display:flex;flex-direction:column;gap:18px;">' +
        '<div style="display:flex;flex-direction:column;gap:12px;">' +
        '<section><h2 class="section-title" style="margin-bottom:6px;">Ringkasan Laporan</h2><p style="color:var(--on-surface-variant);line-height:1.6;">' +
        esc(rep.description) +
        '</p></section>' +
        (rep.rejectionReason
          ? '<div class="error-box"><div>Alasan Penolakan Admin:</div><div style="font-weight:400;margin-top:2px;">' +
            esc(rep.rejectionReason) +
            '</div></div>'
          : '') +
        (rep.completionNote
          ? '<div class="success-box"><div>Catatan Penyelesaian Petugas:</div><div style="font-weight:400;margin-top:2px;">' +
            esc(rep.completionNote) +
            '</div></div>'
          : '') +
        '</div>' +
        '<section class="surface-card"><h3 class="section-title">Linimasa Progres</h3><ol class="timeline-list">' +
        timelineHtml +
        '</ol></section></div></div></main></div>',
      false
    );
  }

  function renderProfile() {
    var profile = state.profiles[state.role];
    return wrapShell(
      '<div class="page-container" style="max-width:760px;">' +
        '<header style="padding:24px 16px 14px;"><div class="ice-overview-card" style="align-items:center;text-align:center;padding:24px;">' +
        imgTag(profile.avatarUrl, profile.name, 'avatar-lg', 'avatar') +
        '<div style="display:flex;flex-direction:column;align-items:center;gap:6px;"><h1 style="font-size:20px;font-weight:700;">' +
        esc(profile.name) +
        '</h1><span class="status-badge" style="background:var(--primary-navy);color:#fff;">' +
        esc(profile.roleLabel) +
        '</span></div></div></header>' +
        '<main class="content-stack">' +
        '<section class="surface-card"><h2 class="section-title">Informasi Akun</h2>' +
        '<div style="display:flex;align-items:center;gap:12px;padding:8px 0;border-bottom:1px solid var(--outline);"><span style="color:var(--primary);">' +
        ICONS.user +
        '</span><div><div style="font-size:11px;font-weight:600;color:var(--on-surface-variant);">Nama Lengkap</div><div>' +
        esc(profile.name) +
        '</div></div></div>' +
        '<div style="display:flex;align-items:center;gap:12px;padding:8px 0;border-bottom:1px solid var(--outline);"><span style="color:var(--primary);">' +
        ICONS.mail +
        '</span><div><div style="font-size:11px;font-weight:600;color:var(--on-surface-variant);">Email</div><div>' +
        esc(profile.email) +
        '</div></div></div>' +
        '<div style="display:flex;align-items:center;gap:12px;padding:4px 0;"><span style="color:var(--primary);">' +
        ICONS.phone +
        '</span><div><div style="font-size:11px;font-weight:600;color:var(--on-surface-variant);">Nomor Telepon</div><div class="tabular-nums">' +
        esc(profile.phone) +
        '</div></div></div></section>' +
        '<section class="surface-card"><div style="font-size:12px;font-weight:600;color:var(--on-surface-variant);">Ganti Peran Demo Cepat</div>' +
        '<div class="role-grid">' +
        ['citizen', 'admin', 'tech']
          .map(function (r) {
            var label = r === 'citizen' ? 'Warga' : r === 'admin' ? 'Admin' : 'Petugas';
            return (
              '<button type="button" data-switch-role="' +
              r +
              '" class="role-btn ' +
              (state.role === r ? 'active' : '') +
              '">' +
              label +
              '</button>'
            );
          })
          .join('') +
        '</div></section>' +
        '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">' +
        '<button type="button" id="btn-edit-profile" class="btn-secondary">' +
        ICONS.edit +
        '<span>Ubah Profil</span></button>' +
        '<button type="button" id="btn-logout" class="btn-danger">' +
        ICONS.logout +
        '<span>Keluar Akun</span></button>' +
        '</div></main></div>',
      false
    );
  }

  function renderAdminHome() {
    var profile = state.profiles.admin;
    var incoming = state.reports.filter(function (r) { return r.status === 'menunggu'; });
    var process = state.reports.filter(function (r) { return r.status === 'diproses' || r.status === 'diterima'; });
    var done = state.reports.filter(function (r) { return r.status === 'selesai'; });
    var latest = incoming[0] || state.reports[0];

    return wrapShell(
      '<div class="page-container">' +
        '<header class="top-user-bar">' +
        '<div class="user-greet-wrap">' +
        imgTag(profile.avatarUrl, profile.name, 'avatar-sm', 'avatar') +
        '<div><div class="greet-sub">Halo, Admin</div><h1 class="greet-name">' +
        esc(profile.name) +
        '</h1></div></div>' +
        '<button type="button" data-nav="admin-reports" data-filter="baru" class="notif-btn" aria-label="Laporan baru masuk">' +
        ICONS.bell +
        (incoming.length > 0 ? '<span class="notif-count tabular-nums">' + incoming.length + '</span>' : '') +
        '</button></header>' +
        '<main class="content-stack">' +
        '<div class="hero-overview-grid">' +
        '<button type="button" data-nav="admin-reports" data-filter="baru" class="navy-hero-card">' +
        '<div style="display:flex;flex-direction:column;gap:6px;"><span class="hero-kicker">Laporan Masuk Baru</span>' +
        '<span class="hero-big-num tabular-nums">' +
        String(incoming.length + 12).padStart(2, '0') +
        '</span><div><div class="hero-sub-title">Menunggu Verifikasi Dinas</div><div class="hero-sub-meta">' +
        incoming.length +
        ' laporan prioritas hari ini</div></div></div>' +
        '<div class="hero-right-col"><span class="hero-circle-translucent">' +
        ICONS.factCheck +
        '</span><span class="hero-circle-white">' +
        ICONS.arrowRight +
        '</span></div></button>' +
        '<section class="ice-overview-card"><div class="overview-header"><h2 class="section-title">Ringkasan Operasional</h2><span class="pill-soft-white">Nov 2026</span></div>' +
        '<div class="overview-stats-grid">' +
        '<div class="overview-stat-cell"><span class="stat-label">Total</span><div class="stat-val-row"><span class="stat-num tabular-nums">' +
        (124 + state.reports.length) +
        '</span><span style="color:var(--primary);">' +
        ICONS.package +
        '</span></div></div>' +
        '<div class="overview-stat-cell"><span class="stat-label">Diproses</span><div class="stat-val-row"><span class="stat-num tabular-nums">' +
        (26 + process.length) +
        '</span><span style="color:var(--warning);">' +
        ICONS.hardhat +
        '</span></div></div>' +
        '<div class="overview-stat-cell"><span class="stat-label">Selesai</span><div class="stat-val-row"><span class="stat-num tabular-nums">' +
        (80 + done.length) +
        '</span><span style="color:var(--success);">' +
        ICONS.checkCircle +
        '</span></div></div></div></section></div>' +
        '<section class="surface-card"><h2 class="section-title">Aksi Cepat</h2>' +
        '<div class="quick-grid">' +
        '<button type="button" data-nav="admin-reports" class="quick-item"><span class="quick-circle primary">' + ICONS.factCheck + '</span><span class="quick-label">Tinjau</span></button>' +
        '<button type="button" data-nav="admin-assign" class="quick-item"><span class="quick-circle">' + ICONS.userPlus + '</span><span class="quick-label">Tugaskan</span></button>' +
        '<button type="button" data-nav="admin-statistics" class="quick-item"><span class="quick-circle">' + ICONS.chart + '</span><span class="quick-label">Statistik</span></button>' +
        '<button type="button" data-nav="profile" class="quick-item"><span class="quick-circle">' + ICONS.user + '</span><span class="quick-label">Profil</span></button>' +
        '</div></section>' +
        (latest
          ? '<section style="display:flex;flex-direction:column;gap:12px;">' +
            '<div class="overview-header"><h2 class="section-title">Laporan Masuk Terbaru</h2><button type="button" data-nav="admin-reports" class="link-btn">Kelola Semua</button></div>' +
            '<button type="button" data-review-report="' +
            latest.id +
            '" class="bento-photo-card">' +
            imgTag(latest.photoUrl, latest.title, '', 'photo') +
            '<div class="bento-scrim"></div>' +
            '<div class="bento-bottom"><div class="bento-text"><span class="font-mono" style="font-size:12px;color:var(--light-blue);">' +
            esc(latest.id) +
            ' • ' +
            (latest.status === 'menunggu' ? 'Baru' : esc(latest.status)) +
            '</span><h3 class="bento-title">' +
            esc(latest.title) +
            '</h3><span class="bento-meta">' +
            esc(latest.reporterName) +
            ' • ' +
            esc(latest.location.split(',')[0]) +
            '</span></div><span class="hero-circle-white">' +
            ICONS.arrowRight +
            '</span></div></button></section>'
          : '') +
        '</main></div>',
      false
    );
  }

  function renderAdminReports() {
    var filtered = state.reports.filter(function (r) {
      var mStatus =
        state.listFilter === 'semua' ||
        (state.listFilter === 'baru' ? r.status === 'menunggu' || r.status === 'diterima' : r.status === state.listFilter);
      var q = state.searchQuery.trim().toLowerCase();
      var mQuery =
        !q ||
        r.id.toLowerCase().indexOf(q) !== -1 ||
        r.title.toLowerCase().indexOf(q) !== -1 ||
        r.reporterName.toLowerCase().indexOf(q) !== -1 ||
        r.location.toLowerCase().indexOf(q) !== -1;
      return mStatus && mQuery;
    });

    var chips = [
      { id: 'semua', label: 'Semua' },
      { id: 'baru', label: 'Laporan Baru' },
      { id: 'diproses', label: 'Diproses' },
      { id: 'selesai', label: 'Selesai' },
    ];
    if (state.reports.some(function (r) { return r.status === 'ditolak'; })) {
      chips.push({ id: 'ditolak', label: 'Ditolak' });
    }

    return wrapShell(
      '<div>' +
        '<header class="navy-page-header"><div class="navy-header-inner">' +
        '<div class="header-bar-row"><button type="button" data-nav="admin-home" class="glass-circle-btn" aria-label="Kembali">' +
        ICONS.arrowLeft +
        '</button><span class="glass-pill">Admin Dinas</span></div>' +
        '<h1 class="page-headline">Kelola Laporan</h1>' +
        '<div class="search-row"><div class="input-wrap" style="flex:1;"><span class="input-icon-left">' +
        ICONS.search +
        '</span><input id="search-admin-reports" type="search" value="' +
        esc(state.searchQuery) +
        '" placeholder="Cari ID, pelapor, atau lokasi..." class="search-pill-input" /></div>' +
        '<button type="button" id="btn-reset-admin-filter" class="icon-circle-btn" style="width:44px;height:44px;color:var(--primary-navy);" aria-label="Reset filter">' +
        ICONS.tune +
        '</button></div></div></header>' +
        '<main class="sheet-overlap"><div class="page-container" style="display:flex;flex-direction:column;gap:16px;">' +
        '<div class="chip-scroll-row">' +
        chips
          .map(function (c) {
            return '<button type="button" data-chip="' + c.id + '" class="filter-chip ' + (state.listFilter === c.id ? 'active' : '') + '">' + c.label + '</button>';
          })
          .join('') +
        '</div>' +
        '<div class="cards-grid-2">' +
        filtered
          .map(function (r) {
            var isAssign = r.status === 'diproses' || r.status === 'diterima';
            return (
              '<article class="list-card"><div>' +
              '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;"><span class="font-mono" style="font-size:12px;color:var(--primary);">' +
              esc(r.id) +
              '</span>' +
              reportBadge(r.status, true) +
              '</div><h2 style="font-size:16px;font-weight:600;margin-bottom:8px;">' +
              esc(r.title) +
              '</h2><div style="display:flex;flex-direction:column;gap:4px;font-size:13px;color:var(--on-surface-variant);">' +
              '<span style="display:inline-flex;align-items:center;gap:6px;">' + ICONS.user + ' ' + esc(r.reporterName) + ' • ' + esc(r.category) + '</span>' +
              '<span style="display:inline-flex;align-items:center;gap:6px;">' + ICONS.pin + ' ' + esc(r.location) + '</span>' +
              '</div></div><footer class="list-card-footer"><span class="tabular-nums" style="font-size:11px;font-weight:600;color:var(--on-surface-variant);">' +
              esc(r.dateLabel) +
              '</span>' +
              (isAssign
                ? '<button type="button" data-assign-report="' + r.id + '" class="pill-action-btn soft"><span>Penugasan</span>' + ICONS.arrowRight + '</button>'
                : '<button type="button" data-review-report="' + r.id + '" class="pill-action-btn"><span>Tinjau</span>' + ICONS.arrowRight + '</button>') +
              '</footer></article>'
            );
          })
          .join('') +
        '</div></div></main></div>',
      false
    );
  }

  function renderAdminReview() {
    var rep =
      state.reports.find(function (r) { return r.id === state.selectedReportId; }) ||
      state.reports[0];

    return wrapShell(
      '<div>' +
        '<div class="detail-hero-wrap">' +
        imgTag(rep.photoUrl, rep.title, '', 'photo') +
        '<div class="detail-hero-overlay"></div>' +
        '<div class="detail-hero-topbar"><button type="button" data-nav="admin-reports" class="icon-circle-btn" aria-label="Kembali">' +
        ICONS.arrowLeft +
        '</button>' +
        reportBadge(rep.status, true) +
        '</div></div>' +
        '<main class="detail-sheet"><div class="page-container" style="max-width:860px;display:flex;flex-direction:column;gap:18px;">' +
        '<section style="display:flex;flex-direction:column;gap:4px;">' +
        '<div style="display:flex;justify-content:space-between;"><span class="font-mono" style="font-size:12px;color:var(--primary);">' +
        esc(rep.id) +
        '</span><span class="tabular-nums" style="font-size:13px;color:var(--on-surface-variant);">' +
        esc(rep.dateLabel) +
        '</span></div>' +
        '<h1 style="font-size:21px;font-weight:700;">' +
        esc(rep.title) +
        '</h1>' +
        '<div style="display:flex;align-items:center;gap:6px;font-size:13px;color:var(--on-surface-variant);"><span style="color:var(--primary);">' +
        ICONS.pin +
        '</span><span>' +
        esc(rep.location) +
        '</span></div></section>' +
        '<section class="attr-4col">' +
        '<div class="attr-item"><span class="attr-circle">' + ICONS.wrench + '</span><span style="font-size:11px;font-weight:600;color:var(--on-surface-variant);">' + esc(rep.category.split(' ').slice(0, 2).join(' ')) + '</span></div>' +
        '<div class="attr-item"><span class="attr-circle">' + ICONS.user + '</span><span style="font-size:11px;font-weight:600;color:var(--on-surface-variant);">' + esc(rep.reporterName.split(' ')[0]) + '.</span></div>' +
        '<div class="attr-item"><span class="attr-circle">' + ICONS.alert + '</span><span style="font-size:11px;font-weight:600;color:var(--on-surface-variant);">' + esc(rep.priority) + '</span></div>' +
        '<div class="attr-item"><span class="attr-circle">' + ICONS.camera + '</span><span style="font-size:11px;font-weight:600;color:var(--on-surface-variant);">1 Foto</span></div>' +
        '</section>' +
        '<section class="ice-overview-card" style="flex-direction:row;justify-content:flex-start;align-items:center;gap:14px;">' +
        imgTag(rep.reporterAvatar, rep.reporterName, 'avatar-md', 'avatar') +
        '<div><div style="font-size:11px;font-weight:600;color:var(--on-light-blue);">Pelapor Terverifikasi</div>' +
        '<div style="font-family:var(--font-display);font-size:16px;font-weight:600;color:var(--primary-navy);">' +
        esc(rep.reporterName) +
        '</div><div class="tabular-nums" style="font-size:13px;color:var(--on-light-blue);">' +
        esc(rep.reporterPhone) +
        '</div></div></section>' +
        '<section><h2 class="section-title" style="margin-bottom:6px;">Deskripsi Kerusakan</h2><p style="color:var(--on-surface-variant);line-height:1.6;">' +
        esc(rep.description) +
        '</p></section>' +
        (rep.rejectionReason ? '<div class="error-box">Alasan Penolakan: ' + esc(rep.rejectionReason) + '</div>' : '') +
        (rep.status !== 'ditolak' && rep.status !== 'selesai'
          ? '<section style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">' +
            '<button type="button" id="btn-open-reject" class="btn-danger">' +
            ICONS.xCircle +
            '<span>Tolak Laporan</span></button>' +
            '<button type="button" id="btn-approve-report" data-id="' +
            rep.id +
            '" class="btn-success">' +
            ICONS.checkCircle +
            '<span>Terima Laporan</span></button></section>'
          : '') +
        '</div></main></div>',
      false
    );
  }

  function renderAdminAssign() {
    var assignable = state.reports.filter(function (r) { return r.status !== 'ditolak'; });
    var activeRep =
      assignable.find(function (r) { return r.id === state.assignReportId; }) ||
      assignable[0] ||
      state.reports[0];
    var tech =
      TECHNICIANS.find(function (t) { return t.id === state.assignTechId; }) ||
      TECHNICIANS[0];

    return wrapShell(
      '<div>' +
        '<header class="navy-page-header"><div class="navy-header-inner">' +
        '<div class="header-bar-row"><button type="button" data-nav="admin-home" class="glass-circle-btn" aria-label="Kembali">' +
        ICONS.arrowLeft +
        '</button><span class="status-badge badge-success">Diterima</span></div>' +
        '<div><span class="font-mono" style="font-size:12px;color:var(--light-blue);">' +
        esc(activeRep ? activeRep.id : '') +
        '</span><h1 class="page-headline">Tugaskan Teknisi</h1></div></div></header>' +
        '<main class="sheet-overlap"><div class="page-container" style="max-width:860px;display:flex;flex-direction:column;gap:18px;">' +
        '<section class="surface-card">' +
        '<div style="display:flex;justify-content:space-between;align-items:center;gap:8px;">' +
        '<span style="font-size:12px;font-weight:600;color:var(--on-surface-variant);">Laporan Terpilih</span>' +
        '<select id="assign-report-select" style="font-family:var(--font-mono);font-size:12px;font-weight:600;color:var(--primary);background:rgba(219,234,254,0.6);border:1px solid var(--light-blue);border-radius:9999px;padding:4px 10px;">' +
        assignable
          .map(function (r) {
            return '<option value="' + r.id + '" ' + (activeRep && r.id === activeRep.id ? 'selected' : '') + '>' + esc(r.id) + ' — ' + esc(r.title.slice(0, 24)) + '</option>';
          })
          .join('') +
        '</select></div>' +
        '<h2 style="font-size:16px;font-weight:600;">' + esc(activeRep ? activeRep.title : '') + '</h2>' +
        '<p style="font-size:13px;color:var(--on-surface-variant);">' + esc(activeRep ? activeRep.location + ' • ' + activeRep.category : '') + '</p>' +
        '</section>' +
        '<form id="form-assign-tech" class="surface-card">' +
        '<label class="field-group"><span class="field-label">Pilih Teknisi Lapangan</span>' +
        '<select id="assign-tech-select" class="input-control">' +
        TECHNICIANS.map(function (t) {
          return '<option value="' + t.id + '" ' + (t.id === tech.id ? 'selected' : '') + '>' + esc(t.name) + ' — ' + (t.isBusy ? 'Sibuk' : 'Tersedia') + '</option>';
        }).join('') +
        '</select></label>' +
        '<div class="ice-overview-card" style="flex-direction:row;justify-content:flex-start;align-items:center;gap:12px;padding:14px;">' +
        imgTag(tech.avatarUrl, tech.name, 'avatar-sm', 'avatar') +
        '<div><div style="font-size:12px;font-weight:600;color:var(--primary-navy);">' +
        esc(tech.name) +
        '</div><div style="font-size:13px;color:var(--on-light-blue);">' +
        esc(tech.availability) +
        '</div></div></div>' +
        '<label class="field-group"><span class="field-label">Catatan Penugasan</span>' +
        '<textarea id="assign-note" class="input-control">Prioritaskan penambalan aspal sebelum jam pulang sekolah pukul 13.00 WIB.</textarea></label>' +
        '<button type="submit" class="pill-cta-bar"><span>Tugaskan Sekarang</span><span class="pill-cta-circle">' +
        ICONS.arrowRight +
        '</span></button>' +
        (state.assignSuccessMsg ? '<div class="success-box">' + esc(state.assignSuccessMsg) + '</div>' : '') +
        '</form>' +
        '<section style="display:flex;flex-direction:column;gap:12px;"><h3 class="section-title">Riwayat Penugasan Sebelumnya</h3>' +
        '<div class="cards-grid-2">' +
        state.tasks
          .map(function (t) {
            return (
              '<div class="list-card"><div style="display:flex;justify-content:space-between;align-items:center;">' +
              '<span class="font-mono" style="font-size:12px;color:var(--primary);">' +
              esc(t.id) +
              ' • ' +
              esc(t.reportId) +
              '</span>' +
              taskBadge(t.status) +
              '</div><p style="font-size:16px;font-weight:600;">' +
              esc(t.title) +
              '</p><p style="font-size:13px;color:var(--on-surface-variant);">Teknisi: Andi Pratama • ' +
              esc(t.dateLabel) +
              '</p></div>'
            );
          })
          .join('') +
        '</div></section></div></main></div>',
      false
    );
  }

  function renderAdminStatistics() {
    var totalLive = 124 + state.reports.length;
    var doneLive = 80 + state.reports.filter(function (r) { return r.status === 'selesai'; }).length;
    var rejectedLive = 6 + state.reports.filter(function (r) { return r.status === 'ditolak'; }).length;
    var processLive = Math.max(0, totalLive - doneLive - rejectedLive);

    var barsHtml = CATEGORY_STATS_BASE.map(function (b) {
      var extra = state.reports.filter(function (r) {
        if (b.label === 'Fasilitas Pendidikan & Kesehatan') {
          return r.category === 'Fasilitas Pendidikan' || r.category === 'Fasilitas Kesehatan';
        }
        return r.category === b.label;
      }).length;
      var cnt = b.count + extra;
      var pct = Math.round((cnt / totalLive) * 100);
      return (
        '<div style="display:flex;flex-direction:column;gap:6px;">' +
        '<div style="display:flex;justify-content:space-between;font-size:13px;"><span style="font-weight:600;">' +
        esc(b.label) +
        '</span><span class="tabular-nums" style="color:var(--on-surface-variant);">' +
        cnt +
        ' (' +
        pct +
        '%)</span></div>' +
        '<div class="progress-track"><div class="progress-fill" style="width:' +
        pct +
        '%;background:' +
        b.color +
        ';"></div></div></div>'
      );
    }).join('');

    return wrapShell(
      '<div>' +
        '<header class="navy-page-header"><div class="navy-header-inner">' +
        '<div class="header-bar-row"><button type="button" data-nav="admin-home" class="glass-circle-btn" aria-label="Kembali">' +
        ICONS.arrowLeft +
        '</button><span class="glass-pill">Nov 2026</span></div>' +
        '<h1 class="page-headline">Statistik Laporan</h1></div></header>' +
        '<main class="sheet-overlap"><div class="page-container" style="max-width:860px;display:flex;flex-direction:column;gap:18px;">' +
        '<section class="kpi-grid">' +
        '<div class="kpi-card"><div class="kpi-icon-circle" style="background:var(--light-blue);color:var(--on-light-blue);">' + ICONS.package + '</div><div><div class="stat-num tabular-nums" style="font-size:20px;color:var(--primary-navy);">' + totalLive + '</div><div style="font-size:13px;color:var(--on-surface-variant);">Total</div></div></div>' +
        '<div class="kpi-card"><div class="kpi-icon-circle" style="background:var(--success-container);color:var(--on-success-container);">' + ICONS.checkCircle + '</div><div><div class="stat-num tabular-nums" style="font-size:20px;color:var(--success);">' + doneLive + '</div><div style="font-size:13px;color:var(--on-surface-variant);">Selesai</div></div></div>' +
        '<div class="kpi-card"><div class="kpi-icon-circle" style="background:var(--warning-container);color:var(--on-warning-container);">' + ICONS.clock + '</div><div><div class="stat-num tabular-nums" style="font-size:20px;color:var(--on-warning-container);">' + processLive + '</div><div style="font-size:13px;color:var(--on-surface-variant);">Diproses</div></div></div>' +
        '<div class="kpi-card"><div class="kpi-icon-circle" style="background:var(--danger-container);color:var(--on-danger-container);">' + ICONS.xCircle + '</div><div><div class="stat-num tabular-nums" style="font-size:20px;color:var(--danger);">' + rejectedLive + '</div><div style="font-size:13px;color:var(--on-surface-variant);">Ditolak</div></div></div>' +
        '</section>' +
        '<section class="ice-overview-card" style="flex-direction:row;align-items:center;">' +
        '<div><div style="font-size:13px;color:var(--on-light-blue);">Rata-rata Waktu Penyelesaian</div><div class="tabular-nums" style="font-family:var(--font-display);font-size:24px;font-weight:700;color:var(--primary-navy);">2,4 Hari</div></div>' +
        '<span class="hero-circle-white" style="width:44px;height:44px;">' +
        ICONS.gauge +
        '</span></section>' +
        '<section class="surface-card"><h2 class="section-title">Laporan Berdasarkan Kategori</h2>' +
        '<div style="display:flex;flex-direction:column;gap:14px;">' +
        barsHtml +
        '</div></section></div></main></div>',
      false
    );
  }

  function renderTechnicianHome() {
    var profile = state.profiles.tech;
    var waiting = state.tasks.filter(function (t) { return t.status === 'menunggu'; }).length;
    var working = state.tasks.filter(function (t) { return t.status === 'dikerjakan'; }).length;
    var done = state.tasks.filter(function (t) { return t.status === 'selesai'; }).length;
    var priorityTask = state.tasks.find(function (t) { return t.status === 'menunggu'; }) || state.tasks[0];

    return wrapShell(
      '<div class="page-container">' +
        '<header class="top-user-bar">' +
        '<div class="user-greet-wrap">' +
        imgTag(profile.avatarUrl, profile.name, 'avatar-sm', 'avatar') +
        '<div><div class="greet-sub">Halo, Petugas</div><h1 class="greet-name">' +
        esc(profile.name) +
        '</h1></div></div>' +
        '<span class="status-badge badge-success">Aktif</span></header>' +
        '<main class="content-stack">' +
        '<div class="hero-overview-grid">' +
        (priorityTask
          ? '<button type="button" data-open-task="' +
            priorityTask.id +
            '" class="navy-hero-card">' +
            '<div style="display:flex;flex-direction:column;gap:6px;"><span class="hero-kicker">Tugas Aktif Anda</span>' +
            '<span class="hero-big-num tabular-nums">' +
            String(waiting + working + 1).padStart(2, '0') +
            '</span><div><div class="hero-sub-title">' +
            esc(priorityTask.title) +
            '</div><div class="hero-sub-meta">' +
            esc(priorityTask.priority) +
            ' • ' +
            esc(priorityTask.location.split(',')[0]) +
            '</div></div></div>' +
            '<div class="hero-right-col"><span class="hero-circle-translucent">' +
            ICONS.wrench +
            '</span><span class="hero-circle-white">' +
            ICONS.arrowRight +
            '</span></div></button>'
          : '') +
        '<section class="ice-overview-card"><div class="overview-header"><h2 class="section-title">Ringkasan Tugas</h2><span class="pill-soft-white">Minggu Ini</span></div>' +
        '<div class="overview-stats-grid">' +
        '<div class="overview-stat-cell"><span class="stat-label">Menunggu</span><div class="stat-val-row"><span class="stat-num tabular-nums">' +
        (waiting + 1) +
        '</span><span style="color:var(--warning);">' +
        ICONS.clock +
        '</span></div></div>' +
        '<div class="overview-stat-cell"><span class="stat-label">Dikerjakan</span><div class="stat-val-row"><span class="stat-num tabular-nums">' +
        working +
        '</span><span style="color:var(--primary);">' +
        ICONS.wrench +
        '</span></div></div>' +
        '<div class="overview-stat-cell"><span class="stat-label">Selesai</span><div class="stat-val-row"><span class="stat-num tabular-nums">' +
        (done + 14) +
        '</span><span style="color:var(--success);">' +
        ICONS.checkCircle +
        '</span></div></div></div></section></div>' +
        '<section style="display:flex;flex-direction:column;gap:12px;">' +
        '<div class="overview-header"><h2 class="section-title">Penugasan Terbaru</h2><button type="button" data-nav="tech-tasks" class="link-btn">Lihat Semua</button></div>' +
        '<div class="bento-grid-2">' +
        state.tasks
          .slice(0, 2)
          .map(function (t, idx) {
            return (
              '<button type="button" data-open-task="' +
              t.id +
              '" class="bento-photo-card' +
              (idx === 0 && state.tasks.length > 1 ? ' hidden-mobile-only' : '') +
              '">' +
              imgTag(t.photoUrl, t.title, '', 'photo') +
              '<div class="bento-scrim"></div>' +
              '<div class="bento-bottom"><div class="bento-text"><span class="font-mono" style="font-size:12px;color:var(--light-blue);">' +
              esc(t.id) +
              ' • ' +
              esc(t.status === 'menunggu' ? 'Menunggu' : t.status === 'dikerjakan' ? 'Dikerjakan' : 'Selesai') +
              '</span><h3 class="bento-title">' +
              esc(t.title) +
              '</h3><span class="bento-meta tabular-nums">' +
              esc(t.location.split(',')[0]) +
              ' • ' +
              esc(t.dateLabel) +
              '</span></div><span class="hero-circle-white">' +
              ICONS.arrowRight +
              '</span></div></button>'
            );
          })
          .join('') +
        '</div></section></main></div>',
      false
    );
  }

  function renderTechnicianTasks() {
    var profile = state.profiles.tech;
    var filtered = state.tasks.filter(function (t) {
      return state.listFilter === 'semua' || t.status === state.listFilter;
    });

    return wrapShell(
      '<div>' +
        '<header class="navy-page-header"><div class="navy-header-inner">' +
        '<div class="header-bar-row"><button type="button" data-nav="tech-home" class="glass-circle-btn" aria-label="Kembali">' +
        ICONS.arrowLeft +
        '</button><span class="glass-pill">' +
        esc(profile.name) +
        '</span></div>' +
        '<h1 class="page-headline">Tugas Saya</h1></div></header>' +
        '<main class="sheet-overlap"><div class="page-container" style="display:flex;flex-direction:column;gap:16px;">' +
        '<div class="chip-scroll-row">' +
        [
          { id: 'semua', label: 'Semua' },
          { id: 'menunggu', label: 'Menunggu' },
          { id: 'dikerjakan', label: 'Dikerjakan' },
          { id: 'selesai', label: 'Selesai' },
        ]
          .map(function (c) {
            return '<button type="button" data-chip="' + c.id + '" class="filter-chip ' + (state.listFilter === c.id ? 'active' : '') + '">' + c.label + '</button>';
          })
          .join('') +
        '</div>' +
        '<div class="cards-grid-2">' +
        filtered
          .map(function (t) {
            return (
              '<article class="list-card"><div>' +
              '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;"><span class="font-mono" style="font-size:12px;color:var(--primary);">' +
              esc(t.id) +
              ' • ' +
              esc(t.reportId) +
              '</span>' +
              taskBadge(t.status) +
              '</div><h2 style="font-size:16px;font-weight:600;margin-bottom:8px;">' +
              esc(t.title) +
              '</h2><div style="display:flex;flex-direction:column;gap:4px;font-size:13px;color:var(--on-surface-variant);">' +
              '<span style="display:inline-flex;align-items:center;gap:6px;">' + ICONS.layers + ' ' + esc(t.category) + '</span>' +
              '<span style="display:inline-flex;align-items:center;gap:6px;">' + ICONS.pin + ' ' + esc(t.location) + '</span>' +
              '</div></div><footer class="list-card-footer"><span class="tabular-nums" style="font-size:11px;font-weight:600;color:var(--on-surface-variant);">' +
              esc(t.dateLabel) +
              '</span><button type="button" data-open-task="' +
              t.id +
              '" class="pill-action-btn ' +
              (t.status === 'selesai' ? 'soft' : '') +
              '"><span>' +
              (t.status === 'selesai' ? 'Lihat Detail' : 'Buka Tugas') +
              '</span>' +
              ICONS.arrowRight +
              '</button></footer></article>'
            );
          })
          .join('') +
        '</div></div></main></div>',
      false
    );
  }

  function renderTechnicianTaskDetail() {
    var task =
      state.tasks.find(function (t) { return t.id === state.selectedTaskId; }) ||
      state.tasks[0];

    return wrapShell(
      '<div>' +
        '<div class="detail-hero-wrap">' +
        imgTag(task.photoUrl, task.title, '', 'photo') +
        '<div class="detail-hero-overlay"></div>' +
        '<div class="detail-hero-topbar"><button type="button" data-nav="tech-tasks" class="icon-circle-btn" aria-label="Kembali">' +
        ICONS.arrowLeft +
        '</button>' +
        taskBadge(task.status) +
        '</div></div>' +
        '<main class="detail-sheet"><div class="page-container" style="max-width:860px;display:flex;flex-direction:column;gap:18px;">' +
        '<section style="display:flex;flex-direction:column;gap:4px;">' +
        '<div style="display:flex;justify-content:space-between;"><span class="font-mono" style="font-size:12px;color:var(--primary);">' +
        esc(task.id) +
        ' • ' +
        esc(task.reportId) +
        '</span><span class="tabular-nums" style="font-size:13px;color:var(--on-surface-variant);">' +
        esc(task.dateLabel) +
        '</span></div>' +
        '<h1 style="font-size:21px;font-weight:700;">' +
        esc(task.title) +
        '</h1>' +
        '<div style="display:flex;align-items:center;gap:6px;font-size:13px;color:var(--on-surface-variant);"><span style="color:var(--primary);">' +
        ICONS.pin +
        '</span><span>' +
        esc(task.location) +
        '</span></div></section>' +
        '<section class="attr-4col">' +
        '<div class="attr-item"><span class="attr-circle">' + ICONS.wrench + '</span><span style="font-size:11px;font-weight:600;color:var(--on-surface-variant);">' + esc(task.category.split(' ').slice(0, 2).join(' ')) + '</span></div>' +
        '<div class="attr-item"><span class="attr-circle">' + ICONS.alert + '</span><span style="font-size:11px;font-weight:600;color:var(--on-surface-variant);">' + esc(task.priority) + '</span></div>' +
        '<div class="attr-item"><span class="attr-circle">' + ICONS.clock + '</span><span style="font-size:11px;font-weight:600;color:var(--on-surface-variant);">' + esc(task.deadline) + '</span></div>' +
        '<div class="attr-item"><span class="attr-circle">' + ICONS.shield + '</span><span style="font-size:11px;font-weight:600;color:var(--on-surface-variant);">' + esc(task.adminName) + '</span></div>' +
        '</section>' +
        '<section><h2 class="section-title" style="margin-bottom:6px;">Detail Lapangan</h2><p style="color:var(--on-surface-variant);line-height:1.6;">' +
        esc(task.description) +
        '</p></section>' +
        '<section class="ice-overview-card" style="gap:6px;"><span style="font-size:12px;font-weight:600;color:var(--primary-navy);">Catatan Admin (Siti Aminah)</span>' +
        '<p style="color:var(--on-light-blue);">' +
        esc(task.adminNote) +
        '</p></section>' +
        (task.completionNote
          ? '<div class="success-box"><div>Laporan Penyelesaian:</div><div style="font-weight:400;margin-top:2px;">' +
            esc(task.completionNote) +
            '</div></div>'
          : '') +
        (task.status !== 'selesai'
          ? '<section style="display:flex;flex-direction:column;gap:12px;">' +
            (task.status === 'menunggu'
              ? '<button type="button" id="btn-start-task" data-id="' +
                task.id +
                '" class="pill-cta-bar"><span>Mulai Pengerjaan</span><span class="pill-cta-circle">' +
                ICONS.play +
                '</span></button>'
              : '') +
            '<button type="button" id="btn-open-complete" class="pill-cta-bar success"><span>Tandai Selesai</span><span class="pill-cta-circle">' +
            ICONS.checkCircle +
            '</span></button></section>'
          : '') +
        '</div></main></div>',
      false
    );
  }

  function renderModal() {
    if (!state.modal) return '';
    if (state.modal.type === 'register-success') {
      return (
        '<div class="modal-backdrop"><div class="modal-card" style="align-items:center;text-align:center;">' +
        '<div style="width:56px;height:56px;border-radius:50%;background:var(--success-container);color:var(--on-success-container);display:flex;align-items:center;justify-content:center;">' +
        ICONS.checkCircle +
        '</div><h3 style="font-size:18px;font-weight:700;">Pendaftaran Berhasil</h3>' +
        '<p style="color:var(--on-surface-variant);">Akun Anda telah terdaftar. Silakan masuk untuk mulai melapor.</p>' +
        '<button type="button" id="btn-modal-reg-done" class="btn-primary">Lanjut ke Beranda</button></div></div>'
      );
    }
    if (state.modal.type === 'create-success') {
      return (
        '<div class="modal-backdrop"><div class="modal-card" style="align-items:center;text-align:center;">' +
        '<div style="width:56px;height:56px;border-radius:50%;background:var(--success-container);color:var(--on-success-container);display:flex;align-items:center;justify-content:center;">' +
        ICONS.checkCircle +
        '</div><h2 style="font-size:18px;font-weight:700;">Laporan Terkirim!</h2>' +
        '<p style="color:var(--on-surface-variant);">Laporan Anda dengan ID <span class="font-mono" style="color:var(--primary);font-weight:600;">' +
        esc(state.modal.reportId) +
        '</span> telah diterima sistem dan menunggu peninjauan admin.</p>' +
        '<button type="button" id="btn-modal-create-done" class="btn-primary">Lihat Laporan Saya</button></div></div>'
      );
    }
    if (state.modal.type === 'edit-profile') {
      var p = state.profiles[state.role];
      return (
        '<div class="modal-backdrop"><form id="form-edit-profile" class="modal-card">' +
        '<h3 style="font-size:18px;font-weight:700;">Ubah Profil</h3>' +
        '<label class="field-group"><span class="field-label">Nama Lengkap</span><input id="edit-prof-name" type="text" value="' +
        esc(p.name) +
        '" required class="input-control" style="min-height:44px;" /></label>' +
        '<label class="field-group"><span class="field-label">Nomor Telepon</span><input id="edit-prof-phone" type="tel" value="' +
        esc(p.phone) +
        '" required class="input-control" style="min-height:44px;" /></label>' +
        '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;padding-top:4px;">' +
        '<button type="button" id="btn-close-modal" class="btn-secondary" style="min-height:44px;">Batal</button>' +
        '<button type="submit" class="btn-primary" style="min-height:44px;">Simpan</button></div></form></div>'
      );
    }
    if (state.modal.type === 'reject-report') {
      return (
        '<div class="modal-backdrop sheet-mobile"><form id="form-reject-report" class="modal-card">' +
        '<h3 style="font-size:18px;font-weight:700;">Alasan Penolakan Laporan</h3>' +
        '<p style="font-size:13px;color:var(--on-surface-variant);">Berikan alasan yang jelas agar warga memahami keputusan penolakan.</p>' +
        '<label class="field-group"><span class="field-label">Alasan Penolakan (Wajib)</span>' +
        '<textarea id="reject-reason-input" required placeholder="Contoh: Lokasi berada di luar wilayah wewenang atau foto tidak jelas." class="input-control"></textarea></label>' +
        '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">' +
        '<button type="button" id="btn-close-modal" class="btn-secondary">Batal</button>' +
        '<button type="submit" class="btn-danger">Kirim Penolakan</button></div></form></div>'
      );
    }
    if (state.modal.type === 'complete-task') {
      return (
        '<div class="modal-backdrop"><form id="form-complete-task" class="modal-card">' +
        '<h3 style="font-size:18px;font-weight:700;">Selesaikan Tugas?</h3>' +
        '<p style="font-size:13px;color:var(--on-surface-variant);">Pastikan perbaikan telah selesai dilakukan sebelum menandai tugas ini selesai.</p>' +
        '<label class="field-group"><span class="field-label">Catatan Perbaikan (Opsional)</span>' +
        '<textarea id="complete-note-input" placeholder="Contoh: Lubang sudah ditambal aspal dingin dan diratakan." class="input-control"></textarea></label>' +
        '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">' +
        '<button type="button" id="btn-close-modal" class="btn-secondary" style="min-height:44px;">Batal</button>' +
        '<button type="submit" class="btn-success" style="min-height:44px;">Konfirmasi</button></div></form></div>'
      );
    }
    return '';
  }

  /* ---------------- EVENT BINDING ---------------- */
  function render() {
    var root = document.getElementById('app');
    if (!root) return;

    var html = '';
    if (state.screen === 'splash') html = renderSplash();
    else if (state.screen === 'login') html = renderLogin();
    else if (state.screen === 'register') html = renderRegister();
    else if (state.screen === 'citizen-home') html = renderCitizenHome();
    else if (state.screen === 'create-report') html = renderCreateReport();
    else if (state.screen === 'my-reports') html = renderMyReports();
    else if (state.screen === 'report-detail') html = renderReportDetail();
    else if (state.screen === 'profile') html = renderProfile();
    else if (state.screen === 'admin-home') html = renderAdminHome();
    else if (state.screen === 'admin-reports') html = renderAdminReports();
    else if (state.screen === 'admin-review') html = renderAdminReview();
    else if (state.screen === 'admin-assign') html = renderAdminAssign();
    else if (state.screen === 'admin-statistics') html = renderAdminStatistics();
    else if (state.screen === 'tech-home') html = renderTechnicianHome();
    else if (state.screen === 'tech-tasks') html = renderTechnicianTasks();
    else if (state.screen === 'tech-task-detail') html = renderTechnicianTaskDetail();

    root.innerHTML = html + renderModal();
    bindEvents();
  }

  function bindEvents() {
    var byId = function (id) { return document.getElementById(id); };

    if (byId('btn-splash-start')) {
      byId('btn-splash-start').onclick = function () { navigate('login'); };
    }

    document.querySelectorAll('[data-login-role]').forEach(function (btn) {
      btn.onclick = function () {
        var r = btn.getAttribute('data-login-role');
        state.loginRole = r;
        state.loginEmail = DEFAULT_PROFILES[r].email;
        state.loginResetSent = false;
        render();
      };
    });

    if (byId('btn-toggle-pwd')) {
      byId('btn-toggle-pwd').onclick = function () {
        state.loginShowPwd = !state.loginShowPwd;
        render();
      };
    }

    if (byId('btn-forgot-pwd')) {
      byId('btn-forgot-pwd').onclick = function () {
        state.loginResetSent = true;
        render();
      };
    }

    if (byId('form-login')) {
      byId('form-login').onsubmit = function (e) {
        e.preventDefault();
        var emailVal = (byId('login-email').value || '').trim();
        var lower = emailVal.toLowerCase();
        var role = state.loginRole;
        if (lower.indexOf('admin') !== -1) role = 'admin';
        else if (lower.indexOf('teknisi') !== -1 || lower.indexOf('petugas') !== -1) role = 'tech';
        state.role = role;
        state.profiles[role].email = emailVal || state.profiles[role].email;
        saveState();
        navigate(role === 'admin' ? 'admin-home' : role === 'tech' ? 'tech-home' : 'citizen-home');
      };
    }

    if (byId('btn-go-register')) {
      byId('btn-go-register').onclick = function () { navigate('register'); };
    }

    if (byId('btn-reg-back')) byId('btn-reg-back').onclick = function () { navigate('login'); };
    if (byId('btn-reg-login')) byId('btn-reg-login').onclick = function () { navigate('login'); };

    if (byId('form-register')) {
      byId('form-register').onsubmit = function (e) {
        e.preventDefault();
        var p1 = byId('reg-pwd').value;
        var p2 = byId('reg-pwd2').value;
        var err = byId('reg-error');
        if (p1.length < 6) {
          err.textContent = 'Kata sandi minimal 6 karakter.';
          err.classList.remove('hidden');
          return;
        }
        if (p1 !== p2) {
          err.textContent = 'Konfirmasi kata sandi tidak cocok.';
          err.classList.remove('hidden');
          return;
        }
        state.modal = {
          type: 'register-success',
          name: byId('reg-name').value.trim(),
          email: byId('reg-email').value.trim(),
          phone: byId('reg-phone').value.trim(),
        };
        render();
      };
    }

    if (byId('btn-modal-reg-done')) {
      byId('btn-modal-reg-done').onclick = function () {
        state.role = 'citizen';
        state.profiles.citizen.name = state.modal.name || state.profiles.citizen.name;
        state.profiles.citizen.email = state.modal.email || state.profiles.citizen.email;
        state.profiles.citizen.phone = state.modal.phone || state.profiles.citizen.phone;
        state.modal = null;
        saveState();
        navigate('citizen-home');
      };
    }

    document.querySelectorAll('[data-nav]').forEach(function (el) {
      el.onclick = function () {
        var target = el.getAttribute('data-nav');
        var filter = el.getAttribute('data-filter') || 'semua';
        navigate(target, { filter: filter });
      };
    });

    document.querySelectorAll('[data-switch-role]').forEach(function (el) {
      el.onclick = function () {
        var nextRole = el.getAttribute('data-switch-role');
        state.role = nextRole;
        saveState();
        navigate(nextRole === 'admin' ? 'admin-home' : nextRole === 'tech' ? 'tech-home' : 'citizen-home');
      };
    });

    if (byId('btn-sidebar-logout')) byId('btn-sidebar-logout').onclick = function () { navigate('login'); };
    if (byId('btn-logout')) byId('btn-logout').onclick = function () { navigate('login'); };

    if (byId('btn-toggle-notif')) {
      byId('btn-toggle-notif').onclick = function () {
        state.notifOpen = !state.notifOpen;
        render();
      };
    }
    if (byId('btn-close-notif')) {
      byId('btn-close-notif').onclick = function () {
        state.notifOpen = false;
        render();
      };
    }

    document.querySelectorAll('[data-open-report]').forEach(function (el) {
      el.onclick = function () {
        var id = el.getAttribute('data-open-report');
        if (id) navigate('report-detail', { reportId: id });
      };
    });

    document.querySelectorAll('[data-review-report]').forEach(function (el) {
      el.onclick = function () {
        var id = el.getAttribute('data-review-report');
        if (id) navigate('admin-review', { reportId: id });
      };
    });

    document.querySelectorAll('[data-assign-report]').forEach(function (el) {
      el.onclick = function () {
        var id = el.getAttribute('data-assign-report');
        if (id) {
          state.assignReportId = id;
          navigate('admin-assign', { reportId: id });
        }
      };
    });

    document.querySelectorAll('[data-open-task]').forEach(function (el) {
      el.onclick = function () {
        var id = el.getAttribute('data-open-task');
        if (id) navigate('tech-task-detail', { taskId: id });
      };
    });

    document.querySelectorAll('[data-chip]').forEach(function (el) {
      el.onclick = function () {
        state.listFilter = el.getAttribute('data-chip');
        render();
      };
    });

    if (byId('search-citizen-reports')) {
      byId('search-citizen-reports').oninput = function (e) {
        state.searchQuery = e.target.value;
        render();
        var inp = document.getElementById('search-citizen-reports');
        if (inp) { inp.focus(); inp.setSelectionRange(inp.value.length, inp.value.length); }
      };
    }
    if (byId('btn-reset-citizen-filter')) {
      byId('btn-reset-citizen-filter').onclick = function () {
        state.listFilter = 'semua';
        state.searchQuery = '';
        render();
      };
    }

    if (byId('search-admin-reports')) {
      byId('search-admin-reports').oninput = function (e) {
        state.searchQuery = e.target.value;
        render();
        var inp = document.getElementById('search-admin-reports');
        if (inp) { inp.focus(); inp.setSelectionRange(inp.value.length, inp.value.length); }
      };
    }
    if (byId('btn-reset-admin-filter')) {
      byId('btn-reset-admin-filter').onclick = function () {
        state.listFilter = 'semua';
        state.searchQuery = '';
        render();
      };
    }

    /* Create Report */
    document.querySelectorAll('[data-photo-mode]').forEach(function (btn) {
      btn.onclick = function () {
        state.createCustomPhoto = '';
        state.createPhotoMode = btn.getAttribute('data-photo-mode');
        render();
      };
    });

    if (byId('btn-upload-photo') && byId('cr-file-input')) {
      byId('btn-upload-photo').onclick = function () { byId('cr-file-input').click(); };
      byId('cr-file-input').onchange = function (e) {
        var file = e.target.files && e.target.files[0];
        if (!file) return;
        var reader = new FileReader();
        reader.onload = function () {
          if (typeof reader.result === 'string') {
            state.createCustomPhoto = reader.result;
            render();
          }
        };
        reader.readAsDataURL(file);
      };
    }

    if (byId('form-create-report')) {
      byId('form-create-report').onsubmit = function (e) {
        e.preventDefault();
        var cat = byId('cr-category').value;
        var nextNum = 16 + Math.max(0, state.reports.length - INITIAL_REPORTS.length);
        var newId = 'FT-2026-0' + nextNum;
        var citizen = state.profiles.citizen;
        var photoUrl =
          state.createCustomPhoto ||
          (state.createPhotoMode === 'drain' ? ASSET_IMAGES.damageDrain : ASSET_IMAGES.damageRoad);

        state.reports.unshift({
          id: newId,
          title: byId('cr-title').value.trim(),
          category: cat,
          description: byId('cr-desc').value.trim(),
          location: byId('cr-loc').value.trim(),
          additionalInfo: byId('cr-extra').value.trim(),
          dateLabel: '25 Nov 2026',
          shortDate: '25 Nov',
          status: 'menunggu',
          priority: 'Tinggi',
          reporterName: citizen.name,
          reporterPhone: citizen.phone,
          reporterAvatar: citizen.avatarUrl,
          photoUrl: photoUrl,
          estimatedTime: 'Menunggu',
          timeline: [
            { title: 'Laporan Dikirim', timestamp: '25 Nov, 00:17', description: 'Dikirim oleh ' + citizen.name + ' beserta foto lokasi.', state: 'done' },
            { title: 'Sedang Ditinjau', timestamp: '25 Nov, 00:18', description: 'Menunggu verifikasi kelengkapan data oleh Admin Dinas.', state: 'active' },
            { title: 'Laporan Diterima', description: 'Persetujuan tindak lanjut oleh tim teknis.', state: 'pending' },
            { title: 'Teknisi Ditugaskan', description: 'Penunjukan petugas lapangan terdekat.', state: 'pending' },
            { title: 'Sedang Dikerjakan', description: 'Perbaikan fisik fasilitas di lokasi.', state: 'pending' },
            { title: 'Perbaikan Selesai', description: 'Konfirmasi penyelesaian dari petugas.', state: 'pending' },
          ],
        });
        saveState();
        state.modal = { type: 'create-success', reportId: newId };
        render();
      };
    }

    if (byId('btn-modal-create-done')) {
      byId('btn-modal-create-done').onclick = function () {
        state.modal = null;
        navigate('my-reports', { filter: 'semua' });
      };
    }

    /* Profile Edit */
    if (byId('btn-edit-profile')) {
      byId('btn-edit-profile').onclick = function () {
        state.modal = { type: 'edit-profile' };
        render();
      };
    }
    if (byId('form-edit-profile')) {
      byId('form-edit-profile').onsubmit = function (e) {
        e.preventDefault();
        state.profiles[state.role].name = byId('edit-prof-name').value.trim();
        state.profiles[state.role].phone = byId('edit-prof-phone').value.trim();
        state.modal = null;
        saveState();
        render();
      };
    }

    /* Admin Review */
    if (byId('btn-open-reject')) {
      byId('btn-open-reject').onclick = function () {
        state.modal = { type: 'reject-report' };
        render();
      };
    }
    if (byId('form-reject-report')) {
      byId('form-reject-report').onsubmit = function (e) {
        e.preventDefault();
        var reason = byId('reject-reason-input').value.trim();
        state.reports = state.reports.map(function (r) {
          if (r.id !== state.selectedReportId) return r;
          r.status = 'ditolak';
          r.rejectionReason = reason;
          r.estimatedTime = 'Ditolak';
          r.timeline = [
            r.timeline[0],
            { title: 'Sedang Ditinjau', timestamp: '25 Nov, 09:00', description: 'Admin meninjau laporan dan bukti foto.', state: 'done' },
            { title: 'Laporan Ditolak', timestamp: '25 Nov, 09:05', description: reason, state: 'rejected' },
          ];
          return r;
        });
        state.modal = null;
        saveState();
        render();
      };
    }
    if (byId('btn-approve-report')) {
      byId('btn-approve-report').onclick = function () {
        var id = byId('btn-approve-report').getAttribute('data-id');
        state.reports = state.reports.map(function (r) {
          if (r.id !== id) return r;
          r.status = 'diterima';
          r.timeline = r.timeline.map(function (step, idx) {
            if (idx <= 2) { step.state = 'done'; step.timestamp = step.timestamp || '25 Nov, 09:00'; }
            else if (idx === 3) { step.state = 'active'; }
            return step;
          });
          return r;
        });
        state.assignReportId = id;
        saveState();
        navigate('admin-assign', { reportId: id });
      };
    }

    /* Admin Assign */
    if (byId('assign-report-select')) {
      byId('assign-report-select').onchange = function (e) {
        state.assignReportId = e.target.value;
        state.assignSuccessMsg = '';
        render();
      };
    }
    if (byId('assign-tech-select')) {
      byId('assign-tech-select').onchange = function (e) {
        state.assignTechId = e.target.value;
        state.assignSuccessMsg = '';
        render();
      };
    }
    if (byId('form-assign-tech')) {
      byId('form-assign-tech').onsubmit = function (e) {
        e.preventDefault();
        var tech = TECHNICIANS.find(function (t) { return t.id === state.assignTechId; }) || TECHNICIANS[0];
        var note = byId('assign-note').value.trim();
        var rep = state.reports.find(function (r) { return r.id === state.assignReportId; });
        var taskId = 'TGS-0' + (44 + state.tasks.length);

        state.reports = state.reports.map(function (r) {
          if (r.id !== state.assignReportId) return r;
          r.status = 'diproses';
          r.assignedTechName = tech.name;
          r.estimatedTime = 'Est. 16:00';
          r.timeline = r.timeline.map(function (step, idx) {
            if (idx <= 3) {
              step.state = 'done';
              step.timestamp = step.timestamp || '25 Nov, 09:30';
              if (idx === 3) step.description = tech.name + ' ditugaskan menuju lokasi.';
            } else if (idx === 4) {
              step.state = 'active';
              step.timestamp = '25 Nov, 10:00';
            }
            return step;
          });
          return r;
        });

        if (rep && !state.tasks.some(function (t) { return t.reportId === rep.id; })) {
          state.tasks.unshift({
            id: taskId,
            reportId: rep.id,
            title: rep.title,
            category: rep.category,
            location: rep.location,
            dateLabel: rep.dateLabel,
            status: 'menunggu',
            priority: rep.priority,
            deadline: '16:00 WIB',
            adminName: 'Siti A.',
            adminNote: note || 'Segera tindak lanjuti laporan di lapangan.',
            description: rep.description,
            photoUrl: rep.photoUrl,
          });
        }
        state.assignSuccessMsg = 'Tugas berhasil dikirim ke ' + tech.name + '!';
        saveState();
        render();
      };
    }

    /* Technician Task Detail */
    if (byId('btn-start-task')) {
      byId('btn-start-task').onclick = function () {
        var tid = byId('btn-start-task').getAttribute('data-id');
        var target = state.tasks.find(function (t) { return t.id === tid; });
        state.tasks = state.tasks.map(function (t) {
          if (t.id === tid) t.status = 'dikerjakan';
          return t;
        });
        if (target) {
          state.reports = state.reports.map(function (r) {
            if (r.id !== target.reportId) return r;
            r.status = 'diproses';
            r.timeline = r.timeline.map(function (step, idx) {
              if (idx <= 3) step.state = 'done';
              else if (idx === 4) {
                step.state = 'active';
                step.timestamp = '25 Nov, 10:15';
                step.description = 'Petugas sedang melakukan perbaikan di lokasi.';
              }
              return step;
            });
            return r;
          });
        }
        saveState();
        render();
      };
    }

    if (byId('btn-open-complete')) {
      byId('btn-open-complete').onclick = function () {
        state.modal = { type: 'complete-task' };
        render();
      };
    }

    if (byId('form-complete-task')) {
      byId('form-complete-task').onsubmit = function (e) {
        e.preventDefault();
        var note = byId('complete-note-input').value.trim() || 'Perbaikan selesai dilakukan dengan baik.';
        var target = state.tasks.find(function (t) { return t.id === state.selectedTaskId; });
        state.tasks = state.tasks.map(function (t) {
          if (t.id === state.selectedTaskId) {
            t.status = 'selesai';
            t.completionNote = note;
          }
          return t;
        });
        if (target) {
          state.reports = state.reports.map(function (r) {
            if (r.id !== target.reportId) return r;
            r.status = 'selesai';
            r.estimatedTime = 'Selesai';
            r.completionNote = note;
            r.timeline = r.timeline.map(function (step, idx) {
              step.state = 'done';
              step.timestamp = step.timestamp || '25 Nov, 14:30';
              if (idx === 5) step.description = note;
              return step;
            });
            return r;
          });
        }
        state.modal = null;
        saveState();
        render();
      };
    }

    if (byId('btn-close-modal')) {
      byId('btn-close-modal').onclick = function () {
        state.modal = null;
        render();
      };
    }
  }

  render();
})();
