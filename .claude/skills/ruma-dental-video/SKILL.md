---
name: ruma-dental-video
description: Identitas dan pedoman brand untuk video Klinik Gigi Ruma Dental (Makassar): gaya visual, warna, logo, suara narator, data resmi dan harga, aturan, pola naskah, footage, dan contoh iklan yang sudah di-ACC. Gunakan setiap kali membuat ide, naskah, papan gambar, atau video untuk Ruma Dental, bersama skill produksi-video-klinik untuk teknik render, dan saat memastikan konten Ruma tidak tertukar dengan UPG Dental Care.
---

# Pedoman Video Ruma Dental

Versi: **1.3 (17 November 2026)**.
Status:
- **Iklan bleaching v2 di-ACC** → contoh acuan iklan MOFU/BOFU (bagian 10).
- **Akun TOFU `@dalamgigi` aktif** (detail lengkap di skill `dalamgigi`): #01 "160 Permukaan Gigi" v3 terbit; #02 "Lubang Gua" dan #03 "Efek Domino" v1 jadi dan lulus QC (`references/naskah-lubang-gua-02.md`, `references/naskah-domino-03.md`).
- Alur wajib (semua video Ruma, TOFU maupun iklan): naskah → validasi Pak Dir → **Gerbang Audit 4 Lapis** (3 sebelum render + QC otomatis setelah encode) → paket kirim. Lihat skill `produksi-video-klinik` bagian 2, 9, 9c, 11.

Label status:
- **[DISEPAKATI]**: sudah dipilih atau di-ACC Pak Dir.
- **[USULAN]**: rekomendasi yang belum dipilih secara tegas.
- **[TERBUKA]**: belum dibahas atau menunggu data.

Persetujuan atas satu bagian hanya berlaku untuk bagian itu.

---

## 1. Hubungan dengan Skill Lain

- **Teknik produksi** (alur kerja, narasi ElevenLabs satu napas, gambar mengikuti suara, render 3D, footage, komposisi, audio, encode) ada di skill **`produksi-video-klinik`**. Selalu pakai keduanya bersamaan.
- Skill ini hanya berisi **identitas Ruma**: semua yang membuat video terasa "Ruma" dan berbeda dari UPG.
- Aset brand untuk render ada di `assets/`: `mug_logo.png` (logo tanpa tagline, untuk mug 3D), `card_logo.png` (logo transparan), dan `logo.jpg` (logo asli). `font2.woff2` (Outfit) adalah aset render lama. Untuk produksi baru, ikuti tipografi bagian 7.

## 2. Konteks Brand

- **Tujuan:** membuat lebih banyak orang mengenal dan mengingat Ruma Dental.
- **Target:** pekerja dan profesional (25–45 tahun), Makassar.
- **Positioning:** klinik gigi baru, middle-high, nyaman, clean, ramah, dapat dipercaya.
- Layanan dan segmen beririsan dengan UPG Dental Care. **Video Ruma harus terasa berbeda dari UPG** (UPG = serial karakter Ijal–Dinda, dialog, humor bersambung).
- **Jangan mengarang keunggulan** atau menjanjikan pengalaman yang belum terverifikasi (cepat, tanpa antre, tidak sakit, dan sebagainya).
- Tagline resmi: **"Tempat Nyaman untuk Kembali Tersenyum"**.
- Layanan yang tersedia dan boleh dipromosikan [DISEPAKATI, per 17 Nov 2026]: scaling, behel, bleaching (sudah termasuk scaling), tambal gigi (sewarna gigi, mulai Rp250.000, garansi setelah perawatan), perawatan saluran akar (PSA), crown, veneer, gigi palsu, perawatan gigi anak, cabut gigi, cabut gigi bungsu. Camilan di ruang tunggu **selalu ada**.
- Layanan yang belum dikonfirmasi: implan. Jangan dipromosikan sebelum Pak Dir konfirmasi.

## 3. Aturan yang Tidak Boleh Dilanggar

1. Jangan memakai nomor, alamat, logo, seragam, atau atribut UPG untuk Ruma.
2. Karakter manusia hasil gambar/3D **tidak boleh punya mata dalam bentuk apa pun**. Ilustrasi senyum (bibir + gigi tanpa wajah) diperbolehkan.
3. **Tanpa musik.** Suara latar ruangan yang sangat pelan dan efek suara benda boleh.
4. Logo tidak dibuat atau digambar oleh AI. Pakai file logo resmi saat editing/render.
5. Wajah pasien hanya dengan **izin pasien**. Footage yang sudah dikirim Pak Dir **sudah atas izin pasien**. **Konten organik: wajah pasien di-blur** bila berpotensi terlihat. **Iklan: wajah pasien TIDAK di-blur** (keputusan Pak Dir 21 Nov 2026, iklan scaling). Wajah dokter/staf tidak di-blur.
11. **STANDAR SEMUA VIDEO RUMA (keputusan Pak Dir 21 Nov 2026, pelajaran 2 konten drg. Ainun):**
   - **Logo pojok kiri atas sepanjang video** (kecuali penutup): `assets/penutup/logo-pojok.html` → logo transparan 72 px, x 72 / y 262, **TANPA latar/kapsul putih** (koreksi Pak Dir setelah iklan scaling v1: "ada latar putihnya, waduh"); keterbacaan lewat bayangan lembut. Iklan scaling v1 & konten sebelumnya tidak diperbaiki (keputusan Pak Dir), berlaku untuk konten berikutnya. Judul hook dan label langkah mulai **y ≥ 360** (di bawah logo).
   - **Penutup seragam 4 dtk** di semua video (organik maupun iklan): `assets/penutup/penutup.html?pesan=...|...&ig=...` → pesan penutup video (opsional) → logo → tagline → Instagram · WhatsApp 0898-7735-463 · Jl. Rusa No. 65, Maricaya, Makassar. Ini pengecualian aturan no. 10: WA dan alamat **boleh/wajib** di penutup standar.
   - Akun Instagram Ruma: **@rumadentalmks** (dari Pak Dir, 21 Nov 2026) → `penutup.html?ig=@rumadentalmks`.
   - **Testimoni pasien (keputusan Pak Dir 28 Nov 2026):** wajah pasien BOLEH tampil di bagian testimoni bila pasien sudah izin (Pak Dir mengonfirmasi per pasien). Klip tindakan di kursi tetap blur. Pertanyaan pewawancara ditampilkan sebagai kartu pertanyaan; ucapan pasien hanya yang konsisten di ≥2 model transkrip.
   - **Suara transisi = "kertas dibalik" (UJI COBA, keputusan Pak Dir 26 Nov 2026, opsi D dari `contoh-suara-transisi.mp4`):** mulai konten setelah "Gigi bungsu dicabut, drg. Akbar", ganti whoosh dengan `produksi-video-klinik/scripts/sfx/sfx_book.mp3` di setiap perpindahan adegan (−12 dB, mulai 0,18 dtk sebelum batas) dan di punch-in antar-kalimat (−19 dB). Pop label, suara ruangan, shimmer penutup tetap. Video sebelumnya tetap whoosh (tidak dirender ulang). Opsi lain yang ditawarkan: B swish lembut, C klik halus, E chime pendek, F tanpa suara. Kalau Pak Dir menilai hasilnya, catat keputusan final di sini.
   - Dua konten drg. Ainun (konsultasi tambal v1, alat tambal v2) dibuat sebelum standar ini dan **tidak dirender ulang** (keputusan Pak Dir); standar berlaku untuk video berikutnya. Cek wajib sebelum papan gambar: logo pojok ada, judul/label di bawah logo, penutup memakai template ini.
10. **Tujuan bawaan = konten organik** (Reels/TikTok akun Ruma). Perlakukan sebagai iklan Meta **hanya bila Pak Dir menyebut iklan** (keputusan 21 Nov 2026). Organik: tanpa harga/WA kecuali diminta, nada edukasi/cerita, close-up klinis boleh (wajah pasien tetap blur); aturan no. 8 hanya untuk iklan.
6. **Casting footage:** orang yang tampil sebagai pasien **tidak boleh** muncul juga sebagai admin/resepsionis dalam video yang sama. Pelajaran iklan scaling v3 (Pak Dir: "admin di meja sama yang di-scaling sama, kesannya konten ala-ala"): folder Scalling Agustus (`1ieZcNOg…`) memakai **satu orang sebagai resepsionis (4422/4427) sekaligus pasien (4324–4341)** → jangan dipakai bersamaan. Cek wajah semua orang lintas klip sebelum papan gambar.
12. **Iklan boleh memakai close-up tindakan** bila Pak Dir memintanya (iklan scaling 21 Nov 2026: "kalau bisa ada video close-up pasien di-scaling"); risiko penolakan Meta disampaikan sekali, keputusan Pak Dir.
7. Jangan menambahkan logo ke benda yang aslinya polos, dan jangan memakai stok video klinik lain seolah-olah Ruma.
8. Iklan Meta: jangan menyiratkan tahu kondisi kesehatan penonton ("Gigimu berlubang?") dan jangan memancing rasa malu/tidak percaya diri. Tanpa foto sebelum-sesudah, tanpa janji tingkat putih tertentu, tanpa close-up klinis mulut asli.
9. Angka dan fakta medis wajib masuk akal secara klinis; Pak Dir (dokter gigi) memvalidasi bila ragu.

## 4. Data Resmi Ruma [DISEPAKATI]

| Data | Isi |
|---|---|
| Nama di narasi | **Klinik Gigi Ruma Dental** (bukan hanya "Ruma Dental") |
| Alamat lengkap | Jl. Rusa No. 65, Maricaya, Kec. Makassar, Kota Makassar, Sulawesi Selatan |
| Alamat singkat (video) | Jl. Rusa No. 65, Maricaya, Makassar |
| Nomor admin | WA 0898-7735-463 |
| Instagram | **@rumadentalmks** |
| Bleaching | Rp1.700.000, diskon 10% = **Rp1.530.000**, **sudah termasuk scaling**, tanpa batas waktu |
| Tambal gigi | sewarna gigi, **mulai Rp250.000**, garansi setelah perawatan, dikerjakan dokter gigi |
| Scaling | Normal **Rp250.000–350.000**; **promo Rp200.000, kuota terbatas** (Pak Dir, 21 Nov 2026; batas waktu/kuota belum disebut) |
| Behel | **mulai Rp6 jutaan untuk rahang atas & bawah**, **Rp3 jt per rahang**, **cicilan Rp2 jt/bln × 3, tanpa bunga** (dikonfirmasi 18 Nov 2026). Sudah termasuk: pemasangan atas & bawah, scaling, cetak gigi, foto intra & ekstra oral, konsultasi dokter gigi, ortho kit |
| SOP kunjungan | Biaya **selalu dijelaskan sebelum tindakan**; pasien boleh pulang tanpa tindakan (dikonfirmasi 18 Nov 2026) |

Bahasa paket: **"bleaching sudah termasuk scaling"**. Hindari "free/gratis scaling" dan istilah "included".
Bahasa harga Ruma: tenang dan jelas ("Behel dengan tenang, cicilan tanpa bunga"). **Hindari** "tanpa harus lunas", "murah", "promo gila" (terkesan murah, tidak sesuai positioning premium).

**Aturan orang di visual Ruma [DISEPAKATI 18 Nov 2026]:**
- Poster/desain: **wajah dokter tidak ditampilkan** (pakai dari belakang/bahu, tangan bekerja, atau close-up gigi berbehel); MOFU menonjolkan dokter **sedang bekerja/konsul**.
- Staf berseragam bertuliskan UPG di footage Ruma → **blur lokal logo** (bukan pita); syuting berikutnya pakai seragam Ruma/polos.
- Data pasien di footage (label film rontgen, layar, rekam medis) → **wajib blur per frame**.
- Wajah orang di desain tidak boleh terpotong elemen (kartu, teks).

## 5. Logo

- Simbol: gigi teal dengan atap rumah teal dan rumah/pintu abu-abu (rumah di dalam gigi).
- Tulisan "Ruma Dental" pada logo resmi berwarna teal, geometris tebal, dengan huruf "a" satu ruang. Gunakan aset logo resmi di atas footage, kartu penutup, dan papan gambar, dengan latar transparan.
- **Logo tampil alami di dalam adegan**, tidak ditempel seperti stempel: mug kopi 3D berlogo, papan logo asli di dinding klinik (IMG_4420), kartu penutup. Terlihat dalam ±4 detik pertama dan minimal 3 kali per video.

## 6. Gaya Visual [DISEPAKATI]

**Format:** kombinasi **3D explainer bersih** + **footage asli Ruma**.

- **Dunia 3D:** latar putih hangat/krem (#F4EFE6), meja kayu terang, aksen sage, matte, cahaya lembut dari kiri atas, bayangan halus. Gaya referensi yang disukai Pak Dir: explainer 3D Studio AnakArsi (lihat `references/referensi-visual.md`).
- **Satu warna aksen saja: teal** (#2CCDBD) untuk fokus, gel, label, wipe. Teks/label gelap: teal tua (#0F4F4B).
- **Menjelaskan lewat perubahan bentuk/objek**, kamera terus bergerak pelan, angka sebagai judul (contoh: "365 cangkir kopi" dengan angka berjalan).
- **Benang cerita lewat benda** (meja kerja, mug kopi tiap pagi, ponsel, gelas air), tanpa tokoh berwajah.
- **Ilustrasi gigi = senyum 3D** (bibir + deretan gigi depan atas dan sedikit gigi bawah), lalu **zoom ke satu gigi** untuk menunjukkan proses (noda menempel → meresap → potongan gigi, lapisan dalam kuning). Jangan menampilkan satu gigi berdiri sendiri.
- **Footage asli** dikoreksi hangat dan menyatu dengan sage. Interior Ruma: dinding sage organik, garis daun, panel kayu, papan logo menyala.
- **Ciri transisi Ruma:** wipe teal dengan tepi bawah berbentuk **atap** (dari logo) untuk masuk dari dunia 3D ke footage klinik. Selebihnya crossfade lembut ±8 frame.
- **Kartu penutup:** latar #FBF8F3, logo, nama layanan, chip "sudah termasuk scaling", harga coret → harga promo besar, tagline, alamat singkat, WA.

## 7. Teks Layar [DISEPAKATI]

- Ikuti [panduan tipografi resmi Ruma](../desain-grafis-ruma/references/panduan-visual-ruma.md#4-tipografi-resmi): **Neue Montreal Bold** untuk judul dan angka harga utama, **Neue Montreal Regular** untuk subjudul, dan **Montserrat** untuk isi, subtitle, dan label pendukung. Selama file Neue Montreal berlisensi belum tersedia, pakai Montserrat untuk semua teks render lokal.
- **Teks dua tingkat** di kiri atas (±20–30% dari atas layar):
  - Baris 1: label kecil, kotak teal tua, teks putih (Montserrat 500, ±58 px pada 1080 lebar).
  - Baris 2: poin utama, kotak teal, teks teal sangat gelap (#06332F), tebal (Neue Montreal Bold atau Montserrat 700, ±92 px).
- Singkat (2–5 kata per baris), satu fokus per layar, muncul dengan gerakan naik.
- Video harus tetap jelas tanpa suara. Hindari ±15% atas dan ±35% bawah layar untuk informasi penting.

## 8. Suara dan Audio [DISEPAKATI]

- **Narator: ElevenLabs "Ricky – Soft & Authentic Indonesian"** (voice_id `2VMRgGhWXuHXWN2xNHM8`), model **eleven_v4**.
- **Buat seluruh narasi dalam SATU generasi yang mengalir.** Jangan pakai `[long pause]` dan jangan memotong per kalimat untuk diatur per adegan, karena hasilnya kaku dan patah-patah (pelajaran dari v1).
- Arahan nada: `[conversational] [warmly]` di awal, `[cheerfully]` saat "kabar baiknya", `[warmly]` untuk gambaran hasil.
- Bahasa: santai, sopan, "kamu", kata sehari-hari ("nempel", "pas lihat foto", "ya"). Angka ditulis dengan kata.
- **Gambar dipotong mengikuti suara**: deteksi jeda antarkalimat (±0,2–0,5 dtk) dari audio, lalu pasang batas adegan di sana.
- Suara latar ruangan sangat pelan (brown noise low-pass) sepanjang video. Efek kecil boleh (getar ponsel). Tanpa musik.
- Loudness narasi -16 LUFS.
- Cadangan suara bila Ricky terasa kaku: Vivan (`ZowYWFat3iypr7PwKMPb`), Baron (`gQQvBatMocMgEreeSqHb`). Ditolak: Finn (terlalu jualan).

## 9. Pola Naskah

Pakai pola MOFU/BOFU di skill `produksi-video-klinik` (bagian 3). Penerapan khusus Ruma:
- Nama di narasi: **"Klinik Gigi Ruma Dental"**, disebut di tengah video dan saat tawaran.
- Ajakan penutup: "Chat admin, konsultasi dulu, ya." Harga diucapkan dengan kata.
- Kalimat paket: "bleaching sudah termasuk scaling".

## 10. Contoh Acuan: Iklan Bleaching v2 [DISEPAKATI]

File: `iklan-bleaching-ruma-v2.mp4` (51 detik, 9:16). Naskah final: `references/naskah-bleaching-01.md`.

| Detik | Adegan | Sumber |
|---|---|---|
| 0–7,6 | 365 cangkir bermunculan → meja kerja (Senin–Jumat) → kamera terjun ke kopi | 3D |
| 7,6–12,3 | Senyum → zoom ke gigi seri: noda nempel → meresap → potongan gigi | 3D |
| 12,3–14,7 | Mundur ke senyum yang menguning | 3D |
| 14,7–16,5 | Ponsel di meja, galeri foto diburamkan ("pas lihat foto") | 3D |
| 16,5–19,6 | "Kabar baiknya" → senyum, cahaya menghangat | 3D |
| 19,6–28,6 | Klinik Gigi Ruma Dental, 2 langkah: noda hilang (scaling) → gel teal dan gigi cerah (bleaching) → wipe atap | 3D |
| 28,6–31,6 | Pasien datang, disapa resepsionis | IMG_4427 dtk 8,8+ |
| 31,6–33,0 | Camilan ruang tunggu | IMG_4381 (crop kiri) |
| 33,0–34,4 | Dokter mengerjakan | IMG_4338 (crop tangan) |
| 34,4–37,4 | Pasien berkumur dan tersenyum | IMG_4341 |
| 37,4–41,3 | Papan logo menyala, "Bleaching diskon 10%" | IMG_4420 |
| 41,3–51 | Kartu harga, tagline, alamat, WA | HTML |

## 10a. Daftar Iklan Meta (MOFU/BOFU) dan Status [per 18 Nov 2026]

Setiap iklan baru: rumus 8 ketukan (`produksi-video-klinik` bagian 3) → checklist 3a dijalankan sendiri → OK naskah → papan gambar → ACC → suara → audit → render.

| Iklan | Harga | Status | File naskah | Yang ditunggu |
|---|---|---|---|---|
| Bleaching | Rp1.700.000 → Rp1.530.000 (diskon 10%), sudah termasuk scaling | ✅ ACC v2 | `naskah-bleaching-01.md` | – |
| Tambal gigi | mulai Rp250.000, garansi setelah perawatan | Render v2, menunggu OK Pak Dir → paket kirim (15 dtk, sampul, teks Meta) | `naskah-tambal-01.md` | OK video v2 |
| PSA | tanpa harga | Draf naskah v1 | `naskah-psa-01.md` | bius lokal, crown disebut/tidak, kunjungan & garansi, footage |
| Scaling | normal Rp250–350 rb, promo Rp200.000 kuota terbatas | **Render v1** (`iklan-scaling-ruma-v1.mp4`, 51,6 dtk, full footage Mei + Ricky) | `naskah-scaling-iklan-03-sadar.md` | review Pak Dir |
| Kunjungan pertama di Ruma (evergreen, semua layanan) | tanpa harga | Render v2 (49,5 dtk, `iklan-kunjungan-pertama-ruma-v2.mp4`): pemeriksaan di kursi dental ditambahkan | `naskah-kunjungan-pertama-01.md` | OK video v2 → paket kirim |
| Behel "Spil Harga" (admin bicara, 1 rekaman → 3 jenis edit) | mulai Rp6 jutaan, cicilan Rp2 jt/bln × 3 tanpa bunga | Jenis C v1 dirender (`iklan-behel-spil-harga-C-v1.mp4`, dibuka cuplikan 4416); Jenis A dilewati (arahan Pak Dir). Render Jenis B v2 (36,8 dtk, `iklan-behel-spil-harga-B-v2.mp4`): transisi halus, SFX, suara ruangan, subtitle pendek, Montserrat + warna resmi | `transkrip-behel-admin.md` | OK video → Jenis A & C |
| Behel MOFU caption kinetik + stiker (narasi Ricky, tanpa harga) | – | Render v1 (40,8 dtk, `iklan-behel-mofu-kinetik-v1.mp4`), suara Ricky versi B ±717 kredit/versi | `naskah-behel-kinetik-01.md` | ACC papan gambar → suara Ricky → render |
| Crown, cabut gigi bungsu, cabut gigi, veneer, perawatan gigi anak, behel, gigi palsu | – | Antrean | – | data per layanan: harga, kunjungan, garansi, footage |

Hambatan utama per layanan ada di `produksi-video-klinik` bagian 3, aturan 4.

**Acuan revisi Behel "Spil Harga".** Pak Dir memilih versi terbaru di repo sebagai dasar revisi. Untuk Jenis B, mulai dari [EDL Jenis B](references/edl-behel-spil-harga-B.json) dan papan gambar `papan-gambar-behel-spil-harga-B-v2.png`. Untuk Jenis C, mulai dari [EDL Jenis C](references/edl-behel-spil-harga-C.json) dan papan gambar `papan-gambar-behel-spil-harga-C-v1.png`. Pertahankan suara asli admin dan status review masing-masing versi. MP4 `ruma-01-behel-v1-review.mp4` yang dikirim lewat Drive Saya adalah arsip review lama.

## 10b. Konten TOFU [DISEPAKATI]

- Konten TOFU = **edukasi murni**: tanpa ajakan ke klinik, tanpa "chat admin", tanpa harga. Brand cukup hadir lewat **kartu penutup logo + tagline** (seperti credit Studio AnakArsi).
- Format yang disukai: gaya jktlagi "Bayangin…" (pengandaian → rantai angka → "sisanya?" → manfaat pribadi), angka besar di pojok kanan atas, subtitle kinetik per kata. Pegangan isi: **"Value dulu, baru konten"** + Uji Value 5 poin (skill `dalamgigi` bagian 1b). Contoh: #01–#03 di `references/`.
- Durasi 50–70 detik.

## 10d. Gaya 3 versi Ruma: cerita kasus / POV dari rekaman asli [DISEPAKATI 21 Nov 2026]
Format POV/cerita yang meniru **struktur** konten "POV Nur FO" UPG (Gaya 3), tetapi **tampilan Ruma** (panduan melarang campur font/palet antar-brand):
| Unsur Gaya 3 UPG | Versi Ruma |
|---|---|
| Judul retro slab krem-cokelat diketik + bunyi ketik | Judul Montserrat Deep Teal di label putih, kata kunci blok Turquoise, muncul pop + bunyi pop |
| Coretan tangan Caveat + panah | Garis tipis + label kecil Montserrat (tanpa stroke) |
| Penghitung lencana | Penanda langkah "1/3 · 2/3 · 3/3" |
| Kartu checklist berlabel | Kartu putih berlabel (mis. "pasien 20 th · tambal ulang"), video dokter mengecil di pojok |
| SFX padat + backsound | Suara asli dokter (dibersihkan) + suara ruangan terus-menerus; tanpa musik; **crossfade + whoosh tiap perpindahan, pop saat teks muncul, punch-in antar-kalimat** (keputusan Pak Dir 21 Nov: v1 cut bersih dinilai kaku) |
- Ucapan dokter = ucapan asli dari transkrip (tidak dikarang); label/teks tidak boleh melebihi ucapan atau yang terlihat di gambar.
- Name tag cukup "drg. Nama". Penutup organik: logo Ruma + 1 ajakan ringan (mis. "Simpan untuk nanti"), tanpa harga/WA.
- Proyek pertama: **Tambal ulang drg. Ainun** (`references/naskah-tambal-ulang-ainun-01.md`).
- **Pelajaran v1–v2 (Pak Dir 21 Nov: "tidak menarik, kayak asal bikin yang penting jadi")**: editing rapi tidak menyelamatkan isi yang lemah. Sebelum menulis naskah dari footage, **wajib uji isi dulu** dan laporkan jujur ke Pak Dir bila bahan tidak cukup:
  1. **Ada nilai?** Penonton pulang tahu sesuatu (kenapa terjadi, apa bedanya, apa yang harus dijaga). Ucapan dokter yang hanya laporan kasus ("hari ini pasien 20 tahun…") = bukan nilai.
  2. **Ada ketegangan + jawaban?** Pertanyaan di hook harus dijawab di video.
  3. **Hook detik 0–1 = gambar/kalimat terkuat**, bukan pembukaan pelan atau dokter memperkenalkan kasus.
  4. **Ada visual puncak** (hasil akhir, momen paling jelas). Close-up gelap berulang tidak cukup.
  6. **Hook harus mewakili SELURUH isi** (koreksi Pak Dir, konten 2 drg. Ainun: hook "Kenapa dokter gigi pakai kacamata ini?" padahal isi 5 alat → "tidak nyambung"). Uji: setiap poin di isi video harus menjawab pertanyaan hook; kalau hook hanya cocok untuk poin pertama, ganti hook (contoh v2: "Saat menambal gigi, dokter pakai apa saja?").
  5. Kalau ada yang gagal → usulkan **rekam tambahan singkat** (dokter menjawab 2–3 pertanyaan penonton, mic kerah, 5 menit) sebelum produksi, jangan dipaksakan.

**Thumbnail otomatis (keputusan Pak Dir 25 Nov 2026):** begitu video Ruma/@dalamgigi final (tidak ada revisi / pindah ke konten berikutnya), Claude langsung membuat dan mengirim thumbnail sebelum lanjut. Aturan: skill bersama `produksi-video-klinik` 9 + 9a, palet/font Ruma. Template thumbnail organik Ruma: `assets/thumbnail/thumb.html` (**ACC Pak Dir 25 Nov 2026**: "Keren sekali… thumbnailnya begini, saya suka"; dipakai: konsultasi tambal, alat tambal, hak pasien drg. Ainun → `ruma-dental-video/thumbnail/`). Rumus: frame bersih dari base video (organik: wajah pasien & nama di monitor sudah blur) → gradasi Deep Teal bawah → judul 2 baris rata tengah ≤6 kata (putih + blok Turquoise, tanpa huruf kapital semua) → logo kiri atas tanpa latar putih → teks di zona grid 3:4 (y 240–1680). Pilih frame dengan objek/aksi yang jelas (mis. dokter menunjuk rontgen, dokter ber-loupe menghadap kamera, pasien mengangkat cermin), bukan gestur canggung. Judul = versi ringkas hook video. Render: `python3 -m http.server` di folder kerja berisi thumb.html + logo + font + frame, lalu tangkap `thumb.html?img=..&l1=..&l2=..&pos=..` 1080×1920.

## 10e. Pilar & format konten organik Ruma, dibedakan dari UPG [keputusan Pak Dir 25 Nov 2026]
Pilar resmi per funnel dari `panduan-visual-terpadu` §7 (terkunci). Setiap analisis footage Ruma WAJIB memilih salah satu baris ini; jangan memakai pilar/format UPG ("Sehari di Klinik", pill emoji, caption per kata oranye, mosaik) dan jangan mengarang format baru.
| Pilar Ruma | Funnel · CTA | Format | Contoh yang sudah ada | Syarat bahan |
|---|---|---|---|---|
| **Ruma Menjelaskan** | TOFU · Simpan untuk nanti | dokter menjelaskan/konsultasi dari rekaman asli: hook potongan ucapan → penjelasan dokter → pesan sesudahnya (model `produksi-video-klinik/scripts/konsultasi-dokter`) | Konsultasi Tambal drg. Ainun | ucapan dokter jelas, mic dekat |
| **Kalau Ditunda** | TOFU · Simpan untuk nanti | cerita kasus Gaya 3 Ruma (§10d): kondisi yang ditunda → akibat → yang dilakukan dokter | Tambal Ulang drg. Ainun | kasus nyata + penjelasan sebab-akibat dari dokter |
| **Disiapkan untukmu / Tur Klinik** | MOFU · Tanyakan langsung | "Di Balik …": langkah n/5 + nama alat/persiapan, suara asli alat | Di Balik Loupe drg. Ainun · Hak Pasien drg. Ainun | footage alat/ruangan/persiapan jelas, label dicek dokter |
| **Cerita Pasien lintas usia / Before-After + konteks** | BOFU · Jadwalkan konsultasi | testimoni/hasil dengan konteks, tanpa klaim berlebihan | belum ada | izin tertulis pasien wajib |
**Tidak dipakai untuk Ruma (sama dengan UPG):** montase jam rekam ("Berapa lama sih…?").
**Rasa Ruma vs UPG:** Ruma = tenang, bersih, premium; Montserrat Deep Teal + blok Turquoise; blur halus (bukan mosaik); suara ruangan terus-menerus + crossfade/whoosh; penutup seragam 4 dtk dengan WA & alamat. UPG = ramah, hangat, ramai klinik nyata; pill emoji, caption per kata oranye, mosaik, penutup oranye tanpa WA.

## 10c. Akun TOFU Ruma [DISEPAKATI, 16 Nov 2026; detail terkini di skill `dalamgigi`]

- **Platform utama: Instagram**, unggah ulang ke TikTok (dan YouTube Shorts bila sempat). Alasan: iklan Ruma berjalan di Meta, jadi penonton akun TOFU di IG bisa di-retarget ke iklan MOFU/BOFU (audiens interaksi IG, filter lokasi Makassar). Penonton TikTok tidak bisa di-retarget ke Meta.
- **Niche tunggal:** "kenapa/gimana/bayangin" soal gigi dan mulut, dijelaskan dengan 3D bersih. Tidak ada promo, harga, atau ajakan ke klinik.
- **Pola judul:** pertanyaan pendek ("Kenapa…?", "Gimana…?", "Bayangin…", "Gigimu punya…?").
- **Nama akun [DISEPAKATI]: Dalam Gigi** — handle `@dalamgigi` (cadangan bila terpakai: `@dalamgigi.id`, `@dalam.gigi`). Makna: menjelaskan yang terjadi di dalam gigi dan yang tidak kelihatan dari luar.
- **Akun sudah dibuat: `@dalamgigi`** (16 Nov 2026).
- **Bio [DISEPAKATI, opsi 3]:**
  ```
  Hal-hal kecil soal gigi yang jarang dibahas 🦷
  Dijelasin simpel, tanpa ribet
  oleh Klinik Gigi Ruma Dental · Makassar
  ```
  Tautan/mention ke akun utama Ruma (handle menunggu Pak Dir). Tanpa promo.
- **Foto profil [DISEPAKATI B]:** geraham 3D putih + tanda tanya mint di latar teal gelap (`profil-B-gigi-tanya.png`). Opsi lain: A (cincin mint), C (simbol Ruma; perlu file vektor).
- **Risiko:** jangkauan bisa nasional, padahal pasien dari Makassar. Imbangi dengan retarget Meta berfilter lokasi dan sesekali konteks lokal.
- **Cover:** latar 3D bersih, gradasi teal gelap (#072624), baris 1 putih (Outfit 700), baris 2 mint #5FE3D3 HURUF BESAR (Outfit 800), simbol Ruma kecil di lingkaran krem pojok kiri atas (`assets/sym.png`). Contoh: `cover-160-a/b/c.png`.

## 11. Produksi

Ikuti skill `produksi-video-klinik`. Nilai khusus Ruma yang dipakai di skrip:
- Latar 3D #F4EFE6, meja kayu #D8C09A, sage #A9BFA6, teal #2CCDBD, teal tua #0F4F4B, teks gelap #06332F, kartu #FBF8F3.
- Wipe 3D → footage: teal dengan tepi bawah berbentuk atap (dari logo).
- Kartu penutup: logo, "Bleaching", chip "sudah termasuk scaling", ~~Rp1.700.000~~ Rp1.530.000, "diskon 10%", tagline, alamat singkat, WA 0898-7735-463 (teks ada di `extra.js` skill produksi; ganti sesuai layanan/promo).

- **Standar kualitas (sejak 17 Nov 2026):** semua video Ruma, termasuk iklan MOFU/BOFU, wajib lulus `qc.sh` (bagian 11 skill produksi). Di iklan: teks dua tingkat muncul tepat saat kata kuncinya diucapkan (timestamp Scribe), harga dan "Klinik Gigi Ruma Dental" diberi pop; wipe atap 3D → footage diberi motion blur.

## 12. Footage

Inventaris dan penilaian per klip: `references/footage.md`. Klip yang dipakai di contoh acuan ada di bagian 10. Klip yang **tidak** dipakai: 4327 (close-up mulut), 4421 (helm/APAR), 4423 (password WiFi terlihat), 4325 (latar ramai), 4422 (resepsionis = orang yang sama dengan pasien), 4380 (terlalu pendek).

## 13. Pembeda dari UPG

| Aspek | UPG | Ruma |
|---|---|---|
| Pembawa cerita | Karakter tetap, dialog | Narator tunggal (Ricky) |
| Visual | Manusia dan ekspresi | Benda, senyum 3D, ruang klinik asli |
| Warna | — | Putih hangat, sage, kayu, satu aksen teal |
| Tempo | Ramai, bersambung | Mengalir, satu video satu pesan |
| Bunyi | Dialog, kemungkinan musik | Narasi + suara ruangan pelan, tanpa musik |

## 14. Masih Terbuka

- [ ] File vektor logo, kode warna resmi, nama font resmi.
- [ ] Logo UPG untuk perbandingan.
- [ ] Konten organik: tema "Di Sela Sibuk" belum dibahas lanjut.
- [ ] Hook TOFU lama (Kalender/Snooze, `references/naskah-iklan-01.md`) belum diproduksi.
- [ ] Footage behel dan bleaching (folder di Drive masih kosong).
- [ ] Iklan MOFU/BOFU berikutnya (scaling, behel) belum dibuat; wajib pakai standar kualitas baru (QC, teks kinetik, motion blur).
