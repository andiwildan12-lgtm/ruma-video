---
name: dalamgigi
description: Semua tentang akun TOFU @dalamgigi (Instagram + TikTok) milik Klinik Gigi Ruma Dental, Makassar. Gunakan SETIAP KALI Pak Dir menyebut Dalam Gigi, @dalamgigi, konten TOFU Ruma, konten edukasi gigi 3D, video "Kenapa/Gimana/Bayangin", sampul/caption/jadwal unggah akun ini, atau meminta konten berikutnya (#02, #03, …). Berisi identitas akun, aturan isi, formula video, gaya visual, sampul, caption, alur kerja, rencana 9 konten, dan log unggahan, supaya konten baru bisa langsung dikerjakan tanpa mengulang diskusi.
---

# Akun @dalamgigi

Panggil pengguna **"Pak Dir"** (dokter gigi, owner Ruma Dental & UPG Dental Care). Bahasa Indonesia tegas dan praktis. Kritis, audit sendiri sebelum mengirim.

Skill pendamping (wajib dibaca bersama):
- `produksi-video-klinik` → teknik render 3D, narasi ElevenLabs, SFX, audit 3 lapis, paket kirim, sampul.
- `ruma-dental-video` → identitas brand Ruma (warna, logo, suara Ricky, aturan iklan kesehatan).

---

## 1. Identitas Akun [DISEPAKATI]

| Unsur | Isi |
|---|---|
| Handle | `@dalamgigi` (Instagram + TikTok) |
| Nama tampilan | Dalam Gigi |
| Jenis akun IG | Kreator (kategori Kreator digital / Pendidikan) |
| Foto profil | Geraham 3D putih + tanda tanya mint di latar teal gelap (`ruma-dental-video/assets/profil-B-gigi-tanya.png`) |
| Bio | `Hal-hal kecil soal gigi yang jarang dibahas 🦷` / `Dijelasin simpel, tanpa ribet` / `oleh Klinik Gigi Ruma Dental · Makassar` |
| Platform utama | Instagram (agar penonton bisa di-retarget iklan Meta Ruma, filter lokasi Makassar); unggah ulang ke TikTok |
| Fungsi | **TOFU murni**: Ruma dikenal dan diingat lewat edukasi |

## 2. Aturan Isi [WAJIB]

1. **Tanpa ajakan ke klinik, tanpa "chat admin", tanpa harga.** Brand hanya hadir lewat kartu penutup logo Ruma + tagline, dan baris bio.
2. Niche tunggal: **"Kenapa / Gimana / Bayangin"** soal gigi dan mulut, dijelaskan dengan 3D bersih.
3. **Hook = fakta paling mengejutkan di detik 0–3**, visual sudah bergerak sejak frame pertama.
4. **Setiap anjuran wajib disertai cara singkat**; **setiap istilah klinis dijelaskan satu kalimat**; **jangan pakai angka yang membingungkan**.
5. Durasi **50–70 detik**.
6. Fakta medis **divalidasi Pak Dir** sebelum render. Tanpa menakut-nakuti, tanpa memancing rasa minder, tanpa janji hasil, tanpa foto klinis mulut asli.
7. Ajakan yang boleh: "simpan", "kirim ke teman", pertanyaan di komentar.

## 3. Formula Video

Gaya isi mengikuti referensi yang disukai Pak Dir:
- **jktlagi** ("Bayangin kalau seluruh Jakarta tinggal di menara"): pengandaian → **rantai angka** → **"sisanya?"** → manfaat pribadi.
- **Studio AnakArsi** (The Interlace): "Coba bayangin…" → jawaban gampang → **"tapi…"** → solusi bertahap.

Struktur baku ±60 detik:
1. Hook fakta mengejutkan + angka besar (0–7 dtk)
2. "Kok bisa?" → rantai angka / proses (7–24 dtk)
3. Masalahnya (24–30 dtk), suasana sedikit redup
4. "Jadi butuh…" / "Kabar baiknya…" → solusi **dengan cara** (30–55 dtk), suasana lebih terang
5. Penutup ringkas yang mudah diingat (55–62 dtk)
6. Kartu logo Ruma + tagline, tanpa ajakan (3–4 dtk)

## 4. Gaya Visual dan Audio

- 3D bersih: latar krem hangat #F4EFE6, gigi putih matte, gusi #E3A49B, **satu aksen teal #2CCDBD**, teks gelap #0F4F4B.
- Gigi berbentuk dikenali (seri pipih, taring runcing, premolar 2 tonjol, geraham 4 tonjol). Ilustrasi senyum/lengkung gigi, **tanpa wajah dan tanpa mata**.
- **Anti-monoton**: kamera berganti tiap 2–4 detik (atas → menyusur rendah → mengitari → masuk lorong sela gigi → close-up → naik), blend 0,6 detik + bunyi whoosh.
- **Angka besar** di pojok kanan atas (Outfit 200) + **subtitle per frasa** di tengah (Outfit 700, kata kunci berlatar teal).
- **Narasi**: ElevenLabs Ricky (`2VMRgGhWXuHXWN2xNHM8`), eleven_v4, satu generasi mengalir, `[conversational] [warmly]`.
- **SFX di setiap gerakan** (pustaka `produksi-video-klinik/scripts/sfx/`), suara latar ruangan pelan, **tanpa musik**.
- Template adegan: `produksi-video-klinik/scripts/arch3.html` + `arch3_cfg.json` (lengkung gigi, 160 permukaan, plak/karang, sikat, benang huruf C, alat scaling, kartu logo).

## 5. Sampul (seragam di grid)

- Latar: frame 3D bersih dari video (tanpa teks), render ulang dengan overlay disembunyikan (`scripts/clean.js`).
- Gradasi teal gelap #072624 di 60% bawah.
- Judul 2 baris di tengah: **baris 1 putih** (Outfit 700), **baris 2 mint #5FE3D3 HURUF BESAR** (Outfit 800), berbentuk pertanyaan.
- Simbol Ruma kecil di lingkaran krem, pojok kiri atas.
- Teks di zona crop grid 3:4 (y 240–1680 dari 1920).
- Template: `scripts/cover.html` + `scripts/cover.js`. Sudut kamera sampul selang-seling (close-up ↔ dari atas).

## 6. Caption

Pola: kalimat hook → isi singkat (2 baris) → solusi bernomor dengan cara → ajakan simpan/kirim → 5–7 hashtag.
Hashtag dasar: `#dalamgigi #faktagigi #kesehatangigi #makassar` + 2–3 sesuai topik. TikTok: tambah `#edukasigigi #faktaunik`.
Komentar pertama: satu pertanyaan ringan (contoh: "Jujur, kamu pernah pakai benang gigi nggak? 👇").
Unggah: sampul dari rol kamera, atur crop grid, tanpa musik, lokasi Makassar, jam **19.00–21.00 WITA**.

## 7. Alur Kerja Konten Baru (cepat)

1. Ambil topik berikutnya dari tabel di bagian 8, atau dari permintaan Pak Dir.
2. Tulis **naskah** (narasi + adegan + angka pojok + subtitle) sesuai formula bagian 3 dan aturan bagian 2. Sertakan daftar fakta medis yang perlu divalidasi.
3. Pak Dir validasi / OK naskah.
3b. **Papan gambar** (frame probe per adegan) dikirim → **ACC Pak Dir**. Tanpa ACC papan gambar: dilarang membuat suara atau render.
4. **Gerbang Audit 3 Lapis** (naskah/fakta → frame probe → sinkron teknis), tanpa saran baru; perbaiki sendiri.
5. Narasi ElevenLabs → deteksi jeda → kunci waktu adegan → render → mix SFX → encode.
6. **Paket kirim**: video `dalamgigi-NN-topik-vN.mp4`, sampul, caption IG, caption TikTok, komentar pertama.
7. Setelah terbit: perbarui **log unggahan** (bagian 9) dan status di tabel rencana.

## 8. Rencana 9 Konten Pertama

| # | Topik | Sampul (baris 1 / BARIS 2) | Inti cerita | Status |
|---|---|---|---|---|
| 01 | 160 permukaan gigi | 40% gigimu / NGGAK KESIKAT? | Hook 40% → 32×5=160 → 64 sela kelewat → plak/karang → benang gigi (cara) + scaling (definisi) | ✅ Terbit v3 |
| 02 | Lubang kecil "gua" | Lubang sekecil ini / KOK BISA SAKIT? | Lubang kecil di lapisan luar melebar di lapisan dalam; sakit baru terasa dekat saraf | Berikutnya |
| 03 | Gigi hilang, efek domino | Satu gigi hilang / GIGI LAIN IKUT GESER? | Gigi sebelah miring ke celah, gigi lawan turun (tahun 1→3→5) | Ide |
| 04 | Behel menggeser gigi | Gimana behel / MENGGESER GIGI? | "Jawaban gampangnya: tarik. Tapi gigi tertanam di tulang…" | Ide |
| 05 | 365 cangkir kopi | Setahun 365 cangkir / GIGIMU IKUT NGOPI? | Noda menempel lalu meresap; permukaan vs lapisan dalam | Ide |
| 06 | Ngilu kena dingin | Kenapa gigi / NGILU KENA DINGIN? | Saluran halus di lapisan dalam; penyebab bisa macam-macam | Ide |
| 07 | Gusi berdarah | Kenapa gusi / BERDARAH PAS SIKAT? | Tanda radang karena plak | Ide |
| 08 | Gigi bungsu miring | Kenapa gigi bungsu / TUMBUH MIRING? | Rahang tidak cukup ruang | Ide |
| 09 | Retainer | Behel lepas / GIGI BISA BALIK? | Gigi cenderung kembali; retainer menjaga hasil | Ide |

## 9. Log Unggahan

| # | Tanggal | File | Sampul | Catatan |
|---|---|---|---|---|
| 01 | 16 Nov 2026 | `dalamgigi-01-160-permukaan-v3.mp4` (66 dtk) | `cover-160-a.png` | v2 diarsipkan. Validasi: benang ±40 cm huruf C, scaling = pembersihan karang oleh dokter gigi pakai alat bergetar, scaling tiap 6 bulan |

Naskah dan caption #01 lengkap: `ruma-dental-video/references/naskah-scaling-160.md` dan `references/rencana-konten-dalamgigi.md`.

## 10. Ukuran Keberhasilan

Cek 48–72 jam setelah terbit: bertahan lewat 3 detik, rata-rata waktu tonton, % selesai, **disimpan**, **dibagikan**. Views minggu pertama belum patokan; akun baru butuh 5–10 video.

## 11. Pelajaran yang Tidak Boleh Diulang

- v1 #01: hook lemah (layar kosong 4 detik), "benang gigi" tanpa cara, "scaling" tanpa penjelasan, "1 jam setahun" membingungkan, visual monoton (kotak-kotak, satu sudut kamera).
- Narasi dipotong per kalimat + jeda panjang = kaku dan patah-patah (pelajaran iklan bleaching v1).
