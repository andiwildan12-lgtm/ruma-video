---
name: dalamgigi
description: Semua tentang akun TOFU @dalamgigi (Instagram + TikTok) milik Klinik Gigi Ruma Dental, Makassar. Gunakan SETIAP KALI Pak Dir menyebut Dalam Gigi, @dalamgigi, konten TOFU Ruma, konten edukasi gigi 3D, video "Kenapa/Gimana/Bayangin", sampul/caption/jadwal unggah akun ini, atau meminta konten berikutnya (#02, #03, …). Berisi identitas akun, aturan isi, formula video, gaya visual, sampul, caption, alur kerja, rencana 9 konten, log unggahan, SOP unggah otomatis IG via Windsor.ai, serta evaluasi & target performa, supaya konten baru bisa langsung dikerjakan tanpa mengulang diskusi.
---

# Akun @dalamgigi

> **Anti-slop (21 Nov 2026):** semua naskah, teks layar, sampul, caption, dan balasan admin wajib lulus *Audit Tulisan Anti-Slop* di skill `produksi-video-klinik` bagian 2c (tanpa klaim/angka karangan, tanpa kata kosong, tanpa tanda pisah panjang, suara brand tetap ada).

Panggil pengguna **"Pak Dir"** (dokter gigi, owner Ruma Dental & UPG Dental Care). Bahasa Indonesia tegas dan praktis. Kritis, audit sendiri sebelum mengirim.

Strategi besar akun (tujuan, kanal, cara menang, fase): **`references/social-strategy.md`**. Siapa penontonnya (segmen, mitos, bank bahasa): **`references/audience.md`**. Baca keduanya sebelum merencanakan konten.

## 00. ALUR BERLAKU SEKARANG [DISEPAKATI Pak Dir 20 Nov 2026 — menggantikan alur otomatis di bagian 12, 14b, 15 bila bertentangan]
1. **Konten dibuat di HARI tayang** (tanggal ganjil, tayang 19.00 WITA; video jadi paling lambat 12.00 WITA) oleh chat produksi. Ada request topik di komentar → itu yang dibuat; tidak ada → topik cadangan (urutan: behel → mitos sikat keras → gigi kuning → tebak geraham → ngilu; draf di `references/paket-naskah-dalamgigi-21-29nov.md` & `naskah-behel-07.md`).
2. **Video tidak lewat Google Drive.** Dikirim ke Pak Dir di chat; **Pak Dir mengunggah sendiri ke Instagram.** Claude TIDAK memposting Reel.
3. Jadwal otomatis yang **masih aktif** (chat "Audit akun dan upload otomatis"): balas komentar tgl ganjil 20.22 (`trig_01TnPm9nDRoJYfowrQurgcZY`; request topik → papan status Drive) dan laporan mingguan Senin 07.35 (`trig_015b45txWH6yDG6PUv3nFFNR`). **Dimatikan 20 Nov:** posting otomatis (`trig_01Y5Drz2z5yXBaVX7W2Rx12a`) dan paket naskah mingguan (`trig_01RVnpTZLs6KoojaJQKqn7UA`). Chat produksi punya pengingat pagi 08.33 WITA tgl ganjil.

## 0. SINKRON ANTAR-CHAT [WAJIB, Pak Dir 20 Nov 2026]
Pak Dir tidak mau menjadi "penghubung" antar-chat. Setiap chat yang mengerjakan @dalamgigi, **sebelum mulai kerja**:
1. `git fetch origin` lalu gabungkan semua cabang `claude/*` yang mengubah `.claude/skills/dalamgigi/` atau `output/dalamgigi-*` ke cabang kerjanya (`git merge`), selesaikan konflik (ambil keduanya, jangan hapus kerja chat lain), commit & push.
2. Baca **papan status di Drive: `Dalam Gigi/STATUS-dalamgigi.md` (selalu ambil file TERBARU dengan nama ini; versi lama dibuang ke sampah karena konektor tidak bisa menimpa isi file)** (stok, jadwal tayang, menunggu ACC, siapa mengerjakan apa).
3. Setiap selesai satu langkah (naskah, render, unggah, tayang): **perbarui papan status Drive + log skill**, commit & push.
4. Jangan menggarap topik/nomor yang di papan status sudah dipegang chat lain.

Skill pendamping (wajib dibaca bersama):
- `produksi-video-klinik` → teknik render 3D, narasi ElevenLabs, SFX, **Gerbang Audit 4 Lapis + QC otomatis**, teks kinetik, motion blur, paket kirim, sampul.
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

## 1b. Pegangan Utama: Value Dulu, Baru Konten [DISEPAKATI 16 Nov 2026]

Sumber: prinsip "Before you create content, understand your value first" (dibagikan Pak Dir). Konten adalah wujud value akun. Tanpa value yang jelas, konten hanya ikut tren dan penonton tidak paham kenapa harus mengikuti akun ini.

**Value @dalamgigi (satu kalimat):**
> Membuat yang tidak terlihat di dalam mulut jadi kelihatan dan masuk akal. Dijelaskan dengan cara berpikir dokter gigi, akurat, dan langsung bisa dipraktikkan.

| Pertanyaan | Jawaban @dalamgigi |
|---|---|
| Apa yang kita kuasai? | Pengetahuan klinis dokter gigi: proses di dalam gigi, gusi, dan rahang yang tidak dilihat pasien. |
| Masalah apa yang kita bantu selesaikan? | Orang baru sadar ada masalah saat sudah sakit, percaya mitos, atau tahu anjurannya tapi tidak tahu caranya. |
| Kenapa ini bernilai? | Dijelaskan dokter gigi (bukan konten asal), divisualkan 3D supaya langsung paham, selalu ada cara praktis, tanpa menakut-nakuti dan tanpa jualan. |

**Yang ditunjukkan bukan sekadar tips, tapi cara berpikir dokter gigi:** sebab → proses yang tidak terlihat → akibat → cara mencegah. Penonton harus merasa "oh, ternyata begitu" sekaligus "aku bisa lakukan ini malam ini".

**Uji Value (wajib sebelum menulis naskah; semua harus "ya"):**
1. Apakah ini sesuatu yang dokter gigi tahu tapi pasien tidak lihat atau salah pahami?
2. Apakah video menunjukkan prosesnya (sebab → akibat), bukan hanya daftar tips?
3. Apakah setelah menonton, penonton bisa melakukan sesuatu (ada cara singkat)?
4. Apakah tetap relevan kalau tren berubah (bukan sekadar ikut yang sedang ramai)?
5. Apakah akurat, tenang, dan layak dikaitkan dengan nama Ruma (tanpa menakut-nakuti, tanpa jualan)?

Topik yang gagal di salah satu poin diganti atau dibingkai ulang, bukan dipaksakan. Tren boleh dipakai hanya sebagai **pintu masuk** ke value di atas.

## 1c. Alur Editing [DISEPAKATI 16 Nov 2026]

Editing **tetap dikerjakan Claude sampai video jadi** (animasi 3D, teks, SFX, transisi terkunci ke timing narasi per kata). Tidak memakai CapCut: tidak ada konektor CapCut, dan memindahkan timeline ke edit manual merusak sinkron. Paket bahan CapCut (video tanpa teks + audio terpisah + .srt + cue sheet) hanya dibuat bila Pak Dir minta.

## 2. Aturan Isi [WAJIB]

1. **Tanpa ajakan ke klinik, tanpa "chat admin", tanpa harga.** Brand hanya hadir lewat kartu penutup logo Ruma + tagline, dan baris bio.
2. Niche tunggal: **"Kenapa / Gimana / Bayangin"** soal gigi dan mulut, dijelaskan dengan 3D bersih.
3. **Hook = fakta paling mengejutkan di detik 0–3**, visual sudah bergerak sejak frame pertama.
4. **Setiap anjuran wajib disertai cara singkat**; **setiap istilah klinis dijelaskan satu kalimat**; **jangan pakai angka yang membingungkan**.
5. Durasi **50–70 detik**.
6. Fakta medis **divalidasi Pak Dir** sebelum render. Tanpa menakut-nakuti, tanpa memancing rasa minder, tanpa janji hasil, tanpa foto klinis mulut asli.
7. Ajakan yang boleh: "simpan", "kirim ke teman", pertanyaan di komentar, **follow untuk episode berikutnya**. Tetap **tanpa** ajakan ke klinik.
8. **Interaksi wajib di setiap video [DISEPAKATI 17 Nov 2026]** (alasan: views bagus tapi komentar 0 dan follow sedikit):
   - **Akhir video (±7 dtk sebelum kartu logo) [DISEPAKATI, versi #04]:** "Mau dibahas apa lagi soal gigi? Tulis di komentar, nanti kita jawab lewat video. Jangan lupa follow, ya." Di layar: gelembung komentar + **3 chip contoh topik** (memudahkan orang menjawab) + tombol "+ Follow @dalamgigi" + "Pertanyaanmu bisa jadi video berikutnya". Bunyi `pop`/`click`.
   - **Jangan menjanjikan topik berikutnya secara spesifik** (keputusan Pak Dir 17 Nov 2026). Variasi lain yang boleh: pertanyaan 1 kata (PERNAH/BELUM) bila cocok dengan isi.
   - Pertanyaan harus **gampang dijawab tanpa mikir** (ya/tidak, A/B, angka, satu kata). Hindari pertanyaan terbuka yang berat atau yang membuat orang membuka kondisi kesehatan pribadi secara detail.
   - **Caption** ditutup pertanyaan yang sama + "Pertanyaan terbanyak kita jadikan video berikutnya" + ajakan simpan/follow. **Komentar pertama** (disematkan) = pertanyaan yang sama dari akun.
   - **Balas semua komentar ≤1 jam** setelah unggah (sinyal kuat ke algoritma); jawaban singkat, ramah, edukatif, tanpa jualan. Pertanyaan keluhan pribadi dijawab umum + "sebaiknya diperiksa langsung ke dokter gigi" (tanpa menyebut harga/promo).
   - ~~Collab dengan akun Ruma & share ke Story Ruma~~ **tidak dipakai** (keputusan Pak Dir 18 Nov 2026: @dalamgigi berdiri sendiri).
   - Dilarang komentar palsu/akun bodong; dorong interaksi asli.

## 3. Formula Video

### 3a. FORMULA PEMENANG (#05 Gusi berdarah, 56,7 rb views) — WAJIB jadi pola naskah [Pak Dir 23 Nov: "tetap pakai gaya konten yang tembus 50 rb"]
Urutan narasi (target ≤75 dtk; retensi #05 34%, jangan lebih panjang):
1. **Hook kontra/relatable (0–4 dtk):** satu kalimat yang membalik anggapan ("Justru…") atau momen yang penonton kenal sendiri ("…lidah sibuk ngorek-ngorek?"). Visual sudah bergerak di frame 1.
2. Satu kalimat follow singkat ("Follow Dalam Gigi, ya.").
3. **"Kok bisa?" → TEPAT 3 tahap bernomor** (angka besar di pojok), tiap tahap satu proses yang terlihat.
4. **Satu analogi sehari-hari** di tahap kunci (#05: kerak di dasar teko; #04: jari terjepit cincin; #07: pindah rumah bata). Analogi harus bisa digambar.
5. **"Masalahnya, banyak orang malah…"** = kebiasaan salah yang penonton akui ("oh pantas, saya juga begitu"), suasana redup.
6. **"Kabar baiknya…" → 3 cara konkret bernomor** + patokan waktu/hasil (mis. "1–2 minggu"), suasana terang.
7. **"Ingat, X itu tanda Y, bukan Z."** (#05: "gusi berdarah itu tanda minta dibersihkan, bukan minta dihindari").
8. CTA standar ("Mau dibahas apa lagi soal gigi?…") + "Jangan lupa follow, ya."
Kalau topik punya banyak penyebab, pilih maksimal 2 yang paling sering; sisanya jadi video terpisah atau caption. Lebih baik satu proses jelas daripada banyak daftar.

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
- **Anti-monoton**: kamera berganti tiap 2–4 detik (atas → menyusur rendah → mengitari → masuk lorong sela gigi → close-up → naik), blend 0,75 detik + bunyi whoosh. **Setiap shot wajib bergerak pelan (drift)**, tidak boleh diam ≥1,5 detik (QC akan menandai).
- **Angka besar** di pojok kanan atas (Outfit 200) + **subtitle kinetik** di tengah (Outfit 700): kata muncul tepat saat diucapkan, kata kunci berlatar teal pop (`kinetic.js`, sejak #04). Label kecil (tag) menempel ke objek 3D.
- **Motion blur** di momen cepat: dive, whoosh, perpindahan kamera besar (`cfg.blur`).
- **Narasi**: ElevenLabs Ricky (`2VMRgGhWXuHXWN2xNHM8`), eleven_v4, satu generasi mengalir, `[conversational] [warmly]`.
- **SFX di setiap gerakan** (pustaka `produksi-video-klinik/scripts/sfx/`), suara latar ruangan pelan, **tanpa musik**.
- Pustaka SFX: `whoosh` (ganti kamera), `click` (angka/label muncul), `pop` (objek muncul), `dive` (menyelam/masuk), `fizz` (asam), `pulse` (denyut saraf, lembut), `shimmer` (momen positif, kartu), `book` (rak buku), `snap` (benda pas masuk), `brush`, `floss`, `scaler`, `crack`.
- Transisi antar-set adegan: kilau krem 0,3 dtk (atau gelap untuk "menyelam") + shimmer/whoosh.

**Pustaka scene 3D (pakai ulang, di `produksi-video-klinik/scripts/`):**
| File | Isi | Dipakai |
|---|---|---|
| `arch3.html` | Lengkung gigi atas-bawah dari atas, 160 permukaan, plak/karang, sikat, benang huruf C, alat scaling | #01 |
| `gua.html` | Lengkung gigi + **penampang gigi** (enamel/dentin/pulpa), lubang tumbuh, asam, lensa cermin, panel sehari, gigi transparan | #02 |
| `domino.html` | **Rahang atas-bawah tampak samping** (gigi miring, gigi lawan turun, gigi pengganti), **rak buku**, penampang + saluran akar, sikat sela gigi | #03 |

## 5. Sampul (seragam di grid)

- Latar: frame 3D bersih dari video (tanpa teks), render ulang dengan overlay disembunyikan (`scripts/clean.js`).
- Gradasi teal gelap #072624 di 60% bawah.
- Judul 2 baris di tengah: **baris 1 putih** (Outfit 700), **baris 2 mint #5FE3D3 HURUF BESAR** (Outfit 800), berbentuk pertanyaan.
- Simbol Ruma kecil di lingkaran krem, pojok kiri atas.
- Teks di zona crop grid 3:4 (y 240–1680 dari 1920).
- Template: `scripts/cover.html` + `scripts/cover.js`. Sudut kamera sampul selang-seling (close-up ↔ dari atas).

## 6. Caption

Pola: kalimat hook → isi singkat (2 baris) → solusi bernomor dengan cara → **pertanyaan komentar (sama dengan di video)** → ajakan simpan/kirim + follow → 5–7 hashtag.
Hashtag dasar: `#dalamgigi #faktagigi #kesehatangigi #makassar` + 2–3 sesuai topik. TikTok: tambah `#edukasigigi #faktaunik`.
Komentar pertama: satu pertanyaan ringan (contoh: "Jujur, kamu pernah pakai benang gigi nggak? 👇").
Unggah: sampul dari rol kamera, atur crop grid, tanpa musik, lokasi Makassar, jam **19.00–21.00 WITA**.

## 7. Alur Kerja Konten Baru (cepat)

1. Ambil topik berikutnya dari tabel di bagian 8, atau dari permintaan Pak Dir. **Lolos Uji Value (bagian 1b)** dulu; sertakan hasilnya singkat saat mengajukan naskah.
2. Tulis **naskah** (narasi + adegan + angka pojok + subtitle) sesuai formula bagian 3 dan aturan bagian 2. Sertakan daftar fakta medis yang perlu divalidasi.
3. Pak Dir validasi / OK naskah.
3b. **Papan gambar** (frame probe per adegan) dikirim → **ACC Pak Dir**. Tanpa ACC papan gambar: dilarang membuat suara atau render.
4. Narasi ElevenLabs **1 versi saja (generations_count: 1)**, keputusan Pak Dir 20 Nov: hemat kredit → **transkripsi Scribe** (timestamp per kata) → kunci waktu adegan + `words` di cfg. Perbaikan kecil: sambung potongan TTS pendek.
5. **Gerbang Audit 4 Lapis** (naskah/fakta → frame probe → sinkron teknis → setelah encode: `qc.sh` harus LULUS), tanpa saran baru; perbaiki sendiri. Tampilkan ke Pak Dir tabel "sebelum → sesudah" bila naskah diubah.
6. Render penuh di latar → lembar kontak render penuh → mix SFX → encode tanpa `-shortest` → `qc.sh` → sampul.
7. **Paket kirim**: video `dalamgigi-NN-topik-vN.mp4`, sampul, caption IG, caption TikTok, komentar pertama (file `output/dalamgigi-NN-caption.md`). Caption wajib lolos **Checklist Caption** (bagian 12d).
8. **Unggah otomatis**: Claude sendiri mengunggah MP4 + sampul ke Google Drive (konektor Drive, folder `Dalam Gigi/Siap Tayang`, link publik) → posting IG via Windsor pada jadwal (bagian 12 & 15). Pak Dir tidak perlu kirim link. TikTok tetap manual.
9. **Kelola**: +1 jam cek & balas komentar (bagian 12b); +24 jam dan +72 jam tarik data, isi log (bagian 9) dan tabel evaluasi (bagian 13).
10. Setelah terbit: perbarui **log unggahan** (bagian 9) dan status di tabel rencana. Pelajaran baru → bagian 11.

**Ritme [DISEPAKATI 19 Nov 2026, menggantikan "tiap hari"]: posting SELANG 1 HARI** (19 Nov, 21 Nov, 23 Nov, …) jam 19.00 WITA, ±15 Reel/30 hari, bergantian video utama ↔ Reel pendek (bagian 14b). Selalu ada **stok ≥2 konten jadi**. Fakta medis divalidasi Pak Dir **sekaligus seminggu sekali**.

## 8. Rencana Konten

| # | Topik | Sampul (baris 1 / BARIS 2) | Inti cerita | Status |
|---|---|---|---|---|
| 01 | 160 permukaan gigi | 40% gigimu / NGGAK KESIKAT? | Hook 40% → 32×5=160 → 64 sela kelewat → plak/karang → benang gigi (cara) + scaling (definisi) | ✅ Terbit v3 |
| 02 | Lubang kecil "gua" | Lubang sekecil ini / KOK BISA SAKIT? | Enamel keras vs dentin lunak → asam (1×→5× ngemil) → pintu kecil gua besar → tanpa saraf/ngilu/sakit → 4 cara (cermin, fluoride, ngemil dikumpulkan, periksa 6 bulan) | ✅ Terbit |
| 03 | Gigi hilang, efek domino | Satu gigi hilang / GIGI LAIN IKUT GESER? | 1 dicabut → 3 terdampak; analogi rak buku; tetangga miring, lawan turun; 3 cara (jangan buru-buru cabut/saluran akar, gigi pengganti, sikat sela) | ⏭️ Dilewati (kurang materi), arsip; bisa diolah ulang |
| 04 | Sakit gigi hilang | Sakit gigi hilang / BERARTI SEMBUH? | Lanjutan #02: 4 tahap (lubang → saraf radang, analogi jari terjepit cincin → saraf mati, dikira sembuh → nanah, gusi bengkak) → 3 cara + tanda bahaya → **CTA "mau dibahas apa lagi?" + follow** | ✅ Terbit 18 Nov |
| 05 | Gusi berdarah | Gusi berdarah / BERHENTI SIKAT? | Sisa makanan → plak (jam) → mineral air liur → karang (analogi kerak teko) → karang kasar, gusi meradang, berdarah → sikat miring, benang, scaling, 1–2 minggu → CTA. Ilustrasi M1 bawah, gusi bergelombang | 🎬 v2 jadi (74,6 dtk), QC lulus |
| 06 | Bau mulut (request penonton) | Sudah sikat gigi, / KOK MASIH BAU MULUT? | Lapis demi lapis: 1 lidah (pangkal, tidur → air liur turun → gas belerang, sikat lidah belakang→depan + minum air) → 2 sela gigi & gusi (sisa makanan, karang, radang, lubang → benang + scaling/tambal) → 3 luar mulut (hidung, tenggorokan, lambung → dokter) → "dicari sumbernya, bukan cuma ditutupi" → CTA | 🎬 v1 jadi 20 Nov (73,9 dtk), QC lulus |
| 07 | Behel menggeser gigi | Gimana behel / MENGGESER GIGI? | Tulang dibongkar di sisi tertekan, dibangun di sisi tertarik (analogi pindah rumah bata demi bata) → dorongan kawat melemah → kontrol = setel ulang (grafik progres tangga) → CTA. Naskah `references/naskah-behel-07.md` | ⛔ v1 DITAHAN (anatomi belum benar, lihat bagian 11); perbaikan menunggu instruksi Pak Dir, narasi tetap |
| 08 | Makanan nyangkut di gigi belakang (request penonton #05) | Makanan nyangkut / DI GIGI BELAKANG? | Celah antar geraham → 4 penyebab (lubang sisi, tambalan kurang pas, bungsu miring, gigi dicabut) → serat terjepit → gusi sela radang & berdarah → benang/sikat sela, jangan dicungkil → 1–2 minggu → periksa, tambalan menutup celah → CTA | ✅ v1 jadi 23 Nov (90 dtk, QC lulus), dikirim ke Pak Dir untuk tayang 23 Nov 19.00 |
| 09 | Sikat keras bikin ngilu (cadangan, tanpa request) | Sikat keras-keras / JUSTRU BIKIN NGILU? | Formula #05: gosok keras → 1 gusi terkikis turun (analogi panci antilengket + sabut kawat) → 2 leher gigi terbuka tanpa email, ribuan saluran mikro → 3 dingin → cairan bergerak → saraf kaget → "malah ganti sikat lebih keras" → 3 cara (bulu lembut pegang pensil · pendek pelan miring ke gusi · pasta sensitif, menetap → dokter) → "bersih itu soal cara, bukan soal tenaga" → CTA | ✅ v1 jadi 25 Nov (73,8 dtk) |
| 10 | 365 cangkir kopi (✅ jadi 27 Nov) | Setahun 365 cangkir / GIGIMU IKUT NGOPI? | Noda menempel lalu meresap; permukaan vs lapisan dalam | Ide |
| 10 | Gigi bungsu miring | Kenapa gigi bungsu / TUMBUH MIRING? | Rahang tidak cukup ruang | Ide |
| 11 | Retainer | Behel lepas / GIGI BISA BALIK? | Gigi cenderung kembali; retainer menjaga hasil | Ide |

## 8b. Daftar Request Penonton [mulai #04]

Isi dari komentar "mau dibahas apa lagi?". Topik dengan peminta terbanyak diprioritaskan, **tetap wajib lolos Uji Value + validasi Pak Dir**. Admin membalas "Siap, masuk daftar! 🙏"; saat video tayang, balas komentar pengusul "Sudah kami jawab di video terbaru 🙌". Nama akun pengusul **tidak** disebut di video (privasi kesehatan).

| Topik | Jumlah peminta | Sumber (video #) | Tanggal pertama | Status |
|---|---|---|---|---|
| Proses bau mulut | 1 (@ryzenx_86) | #05 | 19 Nov 2026 | ✅ Tayang #06 21 Nov; pengusul sudah dibalas "Sudah kami jawab" |
| (kandidat) Makanan nyangkut di geraham paling belakang + gusi berdarah saat dibersihkan | 1 (keluhan, bukan request langsung) | #05 | 20 Nov 2026 | Usul: video "Kenapa makanan sering nyangkut di gigi paling belakang?" (sela renggang, lubang, gusi menutupi gigi bungsu). Perlu OK Pak Dir |

## 9. Log Unggahan

| # | Tanggal | File | Sampul | Catatan |
|---|---|---|---|---|
| 01 | 16 Nov 2026 | `dalamgigi-01-160-permukaan-v3.mp4` (66 dtk) | `cover-160-a.png` | v2 diarsipkan. Validasi: benang ±40 cm huruf C, scaling = pembersihan karang oleh dokter gigi pakai alat bergetar, scaling tiap 6 bulan |

| 02 | ±17 Nov 2026 (terbit) | `dalamgigi-02-lubang-gua-v1.mp4` (72 dtk, QC lulus) | `cover-lubang-a.png` | Caption `output/dalamgigi-02-caption.md`. Validasi tambahan: "mulai ngilu saat sampai dentin" |
| 03 | ⏭️ DILEWATI (keputusan Pak Dir 18 Nov: "kurang materinya") | `dalamgigi-03-efek-domino-v1.mp4` (69 dtk, QC lulus) | `cover-domino-a.png` | Caption `output/dalamgigi-03-caption.md`. Asumsi: definisi saluran akar, gigi pengganti tanpa sebut jenis |
| 04 | 18 Nov 2026 (terbit 11.50 WITA, di luar jam utama) | `dalamgigi-04-sakit-hilang-v1.mp4` (75,5 dtk, QC lulus) | `cover-sakit-a.png` | Caption `output/dalamgigi-04-caption.md` (+ balasan admin). CTA request topik. Caption terbit tanpa #makassar & tanpa ajakan simpan/follow |
| 05 | 19 Nov 2026 19.11 WITA (posting otomatis Windsor) | `dalamgigi-05-gusi-berdarah-v2.mp4` (74,6 dtk) | sampul: frame 1,5 dtk (`thumb_offset`), PNG tidak bisa dipakai | https://www.instagram.com/reel/Df68RvBDpuV/ · media_id 18042968876907330 · komentar pertama 18119640761114393. Video diunggah manual ke Drive oleh Pak Dir |
| 06 | 21 Nov 2026 (diunggah Pak Dir) | `dalamgigi-06-bau-mulut-v1.mp4` (73,9 dtk, QC lulus) + `-drive.mp4` 9,5 MB | `cover-bau-mulut.png` | Caption `output/dalamgigi-06-caption.md` (+ balasan ke pengusul). Adegan `napas.html`: lidah 3D (papila + lapisan putih instanced), panel siluet kepala (tanpa wajah). Narasi take B |
| 07 | (DITAHAN, jangan diunggah) | `dalamgigi-07-behel-v1.mp4` (79,5 dtk, QC lulus) | `cover-behel.png` | Caption `output/dalamgigi-07-caption.md`. Adegan `behel.html`: braket+kawat, diorama gigi dalam tulang (bantalan, tulang diurai/dibangun), rumah bata, meter per, grafik tangga |
| 08 | v2 jadi 23 Nov (dikirim ke Pak Dir; v1 diganti) | `dalamgigi-08-makanan-nyangkut-v2.mp4` (88 dtk, QC lulus; formula pemenang, irisan gigi, resleting) | `cover-makanan-nyangkut.png` | Caption `output/dalamgigi-08-caption.md` (format lengkap). Adegan `celah.html` (lengkung rahang diperbaiki). Request keluhan penonton #05 |
| 09 | v1 jadi 25 Nov (dikirim ke Pak Dir) | `dalamgigi-09-sikat-keras-v1.mp4` (73,8 dtk) | `cover-sikat-keras.png` | Caption `output/dalamgigi-09-caption.md`. Adegan `sikat.html`: sikat berbulu (tuft, mekar saat ditekan), resesi gusi + pita leher gigi kuning, panci + sabut kawat (lapisan terkelupas), irisan mikro SVG (saluran → saraf merah berkedip) |
| 10 | v1 jadi 27 Nov (dikirim ke Pak Dir) | `dalamgigi-10-kopi-v1.mp4` (59,5 dtk, ≤60 dtk pertama; narasi atempo 1,07) | `cover-kopi.png` | Caption `output/dalamgigi-10-caption.md` (teks polos 1. 2. 3.). Adegan `kopi.html`: gigi seri bawah rapat + noda leher gigi, irisan permukaan SVG (selaput → zat warna → pori → lapisan), cangkir putih bercincin, es kopi + sedotan. Papan diaudit 2× sendiri sebelum dikirim |

Naskah + hasil audit per konten (di `ruma-dental-video/references/`): #01 `naskah-scaling-160.md`, #02 `naskah-lubang-gua-02.md`, #03 `naskah-domino-03.md`, #04 `naskah-sakit-04.md`, #05 `naskah-gusi-05.md`, #06 naskah di caption + `scripts/napas_cfg.json`. Rencana dan caption #01: `rencana-konten-dalamgigi.md`.
File video tidak masuk Git (sesi cloud sementara): selalu ingatkan Pak Dir mengunduh.

## 10. Ukuran Keberhasilan

Cek 48–72 jam setelah terbit: bertahan lewat 3 detik, rata-rata waktu tonton, % selesai, **disimpan**, **dibagikan**. Views minggu pertama belum patokan; akun baru butuh 5–10 video.

## 11. Pelajaran yang Tidak Boleh Diulang

- **Prinsip "oh pantas, saya juga begitu" (Pak Dir 23 Nov):** tiap video harus menampilkan kebiasaan/pengalaman penonton yang dikenali (mis. lidah ngorek-ngorek setelah makan ayam, takut membersihkan gusi yang berdarah, tusuk gigi terasa lega). Tunjukkan di narasi DAN visual, lalu jelaskan akibatnya. Gerakan halus: tiap langkah ditahan ±2 dtk, kamera mengalir (blend 1,2 dtk). Gigi sehat digambar rapat dengan gusi sela (papila) mengisi penuh sampai titik kontak.

- **#08 v1 (23 Nov), koreksi Pak Dir:** (1) jangan pakai kalimat "tiap 2 hari" di narasi/layar/caption, cukup "Follow Dalam Gigi, ya." / "Jangan lupa follow, ya."; (2) proses inti harus tergambar jelas dan halus: makanan tersangkut (dikunyah → tertekan → serat masuk pelan → tertahan), cara benang gigi (masuk maju-mundur → peluk sisi gigi bentuk C → naik-turun → sisi sebelahnya), gigi berlubang dilihat dari samping (gigi tetangga dibuat transparan), tambalan rusak (pinggir tidak rapat + menonjol + sisa makanan). Perbaikan narasi kecil: sambung potongan TTS pendek, jangan generate ulang semua.

- **Bug lengkung rahang (ditemukan 23 Nov, #08):** di `gusi.html`/`napas.html`/`behel.html` lengkung `a=3.0,b=3.5,cz=-0.4` terlalu pendek, jadi M2 (k6) bertumpuk dengan M1 (k5) dan M3 salah posisi. Mulai `celah.html` pakai `a=3.0,b=4.8,cz=-1.4` (jarak M1–M2 benar ±1,1). Adegan baru wajib pakai nilai ini; cek posisi gigi sebelum membuat adegan sela/celah.

- **#07 behel (20 Nov): papan dikirim dan dirender walau anatomi belum benar.** Temuan Pak Dir + audit: (1) gigi berjejal dibuat terangkat tapi gusi tidak ikut, jadi gigi tampak melayang; (2) di lengkung gigi bergerak naik-turun, di irisan tulang geser ke samping (tidak nyambung); (3) ada celah putih akar–tulang; (4) gusi di irisan berupa balok terpisah; (5) panah dorongan dari atas mahkota & terlalu besar; (6) tidak ada momen "gigi jadi rapi"; (7) rumah analogi hanya 2 dinding; (8) label bertabrakan. Aturan: jalankan **Audit anatomi** (skill produksi-video-klinik, Audit 2) sebelum papan dikirim, dan tulis hasil audit singkat di pesan papan. Perbaikan #07 **ditahan sampai instruksi Pak Dir** (usulan: gigi menonjol keluar lengkung + miring, gusi ikut, sudut ¾, celah diisi bantalan, gusi membungkus leher, panah dari arah kawat, +1,5 dtk gigi rapi, rumah utuh, label dirapikan; narasi tidak diulang).

- **20 Nov: konsep serial interaktif/voting A-B ("Jelajah Mulut") ditolak Pak Dir** ("gak usah alur-alur"). Tetap format tunggal + CTA "Mau dibahas apa lagi?". Draf disimpan di `references/serial-jelajah-mulut-eps01.md` sebagai arsip.

- **#05: Pak Dir minta proses plak/karang/gusi ditunjukkan di gigi geraham** (lebih jelas & paling sering terjadi di sana). Default untuk topik gusi/karang/lubang: tampak samping geraham bawah, gigi sisi seberang disembunyikan.
- **#05: Pak Dir minta bentuk geraham dibuat betul-betul seperti asli.** Pakai fungsi `sculpt()` di `gusi.html` (mahkota menggembung, leher menyempit, 4–5 cusp menyatu + fisur; premolar 2 cusp). Plak/karang = salinan geometri gigi yang diperbesar sedikit dan dipotong (clipping) di tepi gusi, bukan kotak.
- **Ilustrasi utama = geraham bawah (M1) dengan bentuk seperti M2** (keputusan Pak Dir 18 Nov, setelah mencoba versi 5-cusp anatomis): `sculpt()` 4 cusp + 1 kecil menyatu halus, leher menyempit. Kamera dipusatkan ke M1.
- **Gusi harus menutupi semua gigi dan gigi berdiri di atasnya** (pelajaran #05 "offside"): tube gusi th −1,86…1,86, radius 0,7; shot lengkung dari atas harus **tegak lurus** (kamera tepat di atas), bukan miring dari depan.
- **Gusi membungkus leher setiap gigi** (disukai Pak Dir, #05 v3): "kerah gusi" = salinan geometri gigi diperbesar ±12% berwarna gusi, dipotong (clipping) di y≈0,27, di atas tube gusi. Bentuk geraham/premolar dari `sculpt()` = standar (yang dilingkari Pak Dir).
- **Gigi kiri & kanan wajib simetris (dicerminkan)** (pelajaran #05 v4): bentuk `sculpt()` tidak simetris, jadi mesh gigi sisi kanan (side=1) diberi `scale.z=-1` (juga kerah gusi & pita plak), bukan hanya diputar.
- **Gusi standar = satu massa bergelombang (`gumRidge` di `gusi.html`)** (referensi Pak Dir 18 Nov, gaya ilustrasi 3D gigi profesional; hanya prinsip, bukan stok): papila meruncing di sela gigi, melengkung di leher gigi, material mengilap (clearcoat), pink sehat #F4BDB6; radang = merah #C7404A **terlokalisasi** di sekitar gigi bermasalah (vertex color) + papila sedikit membengkak. Gantikan tube + kerah gusi.

- **#03 dilewati Pak Dir ("kurang materinya").** Sebelum naskah diajukan, pastikan isi cukup padat: ada fakta "wah" yang jarang diketahui, proses yang ditunjukkan bertahap, dan cara yang konkret (bukan sekadar "ke dokter gigi"). Bandingkan kepadatan dengan #02/#04 yang diterima.

- **#04 (17 Nov): render dimulai tanpa persetujuan naskah final.** Pak Dir OK cerita, lalu naskah diubah (CTA ditambah, kalimat dipindah, janji topik berikutnya) dan langsung dinarasikan + dirender. Aturan: **setiap perubahan naskah setelah OK → tampilkan tabel audit "Sebelum → Sesudah → Alasan" + narasi final → tunggu "OK/gas" Pak Dir → baru narasi ElevenLabs dan render.** Persetujuan cerita ≠ persetujuan naskah final.

- QC pertama (17 Nov): `-shortest` saat encode membuang 1–3 frame → pakai `-frames:v` + `-t`. Suara latar fade-out hanya 0,5 dtk terakhir (1,2 dtk = hening mati di kartu). Kamera diam 1,7 dtk di #03 lolos dari mata → selalu jalankan `qc.sh`.
- Label 3D (tag) harus menunjuk objek yang benar dan tidak di jalur subtitle; cek di lembar kontak (pelajaran #03 "gigi pengganti").

- #02: material three.js yang diubah jadi transparan di tengah video wajib `needsUpdate=true` (kalau tidak, efek transparan tidak muncul di render penuh walau probe benar). Selalu cek lembar kontak dari render penuh, bukan hanya probe.
- #03: sinkron gambar pakai **transkripsi Scribe (timestamp per kata)**, bukan tebakan dari jeda. Saat kamera menyorot rahang dari samping, sembunyikan gigi sisi seberang supaya tidak ramai. Objek utama di 15–50% tinggi layar, jangan di jalur subtitle (y 1035–1200).

- v1 #01: hook lemah (layar kosong 4 detik), "benang gigi" tanpa cara, "scaling" tanpa penjelasan, "1 jam setahun" membingungkan, visual monoton (kotak-kotak, satu sudut kamera).
- Narasi dipotong per kalimat + jeda panjang = kaku dan patah-patah (pelajaran iklan bleaching v1).

## 12. SOP Unggah & Kelola Otomatis (Windsor.ai) [DISEPAKATI 18 Nov 2026]

**Hak unggah tetap [DISEPAKATI Pak Dir 19 Nov 2026]:** setiap video @dalamgigi yang sudah lolos QC & naskahnya di-OK Pak Dir **langsung diunggah ke Drive dan diposting sesuai jadwal tanpa menunggu perintah lagi**. Pak Dir tidak memasukkan file ke Drive sendiri. Mulai #06, produksi **dan** posting dikerjakan di sesi "Audit akun dan upload otomatis" (punya Windsor, Drive, ElevenLabs, repo); sesi "Konten Dalam Gigi #02" hanya menyerahkan #05 lewat Drive.

**Semua otomatis [DISEPAKATI Pak Dir 19 Nov 2026]:** Claude menjalankan seluruh siklus tanpa menunggu perintah. Pak Dir hanya dihubungi lewat **PushNotification** bila perlu ACC (paket naskah mingguan, komentar sensitif) atau ada masalah (stok kosong, Windsor gagal, ElevenLabs putus).

**Jadwal otomatis aktif (semua masuk ke sesi ini, zona Asia/Makassar):**
| Jadwal | ID | Kapan |
|---|---|---|
| Paket naskah mingguan → notifikasi ACC | `trig_01RVnpTZLs6KoojaJQKqn7UA` | Kamis 10.13 |
| Posting Reel | `trig_01Y5Drz2z5yXBaVX7W2Rx12a` | Tanggal ganjil 19.07 |
| Balas komentar | `trig_01TnPm9nDRoJYfowrQurgcZY` | Tanggal ganjil 20.22 |
| Laporan mingguan | `trig_015b45txWH6yDG6PUv3nFFNR` | Senin 07.35 |
Catatan: tanggal 31 → tanggal 1 tayang dua hari berturut-turut (wajar).

**Windsor trial [DISEPAKATI]:** dipakai sampai habis; begitu posting otomatis gagal, langsung beri tahu Pak Dir (posting manual dari paket Drive).

Akun IG @dalamgigi terhubung ke Claude lewat konektor **Windsor.ai for Social Media** (`instagram`, account id `17841463796300521`). TikTok **tidak** bisa diposting lewat Windsor → tetap manual.

### 12a. Pembagian Kerja

| Tugas | Claude (otomatis) | Pak Dir / Admin (manual di HP, ±3 menit) |
|---|---|---|
| Posting Reel + caption + sampul (`create_video_post`) | ✅ | |
| Jadwal tayang 19.00–21.00 WITA (`send_later` ke sesi ini) | ✅ | |
| Komentar pertama dari akun (`create_comment`) | ✅ | **Sematkan (pin)** |
| Tag lokasi Makassar, atur crop sampul di grid | | ✅ (edit postingan) |
| Unggah ulang ke TikTok | | ✅ |
| Balas komentar (`reply_to_comment`), sembunyikan spam (`hide_comment`) | ✅ sesuai 12b | Keluhan kesehatan pribadi → cek dulu |
| Tarik data performa (+24 jam, +72 jam) | ✅ | |

### 12b. Gerbang Persetujuan (wajib)

1. **Tidak ada yang tayang tanpa "gas" Pak Dir** untuk paket final: video, sampul, caption persis, komentar pertama, jam tayang. Tampilkan semuanya sekali dalam satu pesan sebelum menjadwalkan.
2. Persetujuan berlaku **per video**, bukan untuk seterusnya.
3. Balasan komentar yang boleh langsung dikirim setelah video di-"gas": emoji/pujian ("Makasih! 🙏🦷"), usulan topik ("Siap, masuk daftar! 🙏"), pertanyaan umum yang jawabannya **sudah ada di video/caption**.
4. Yang **ditahan dan dikirim ke Pak Dir dulu**: keluhan/kondisi kesehatan pribadi, pertanyaan medis di luar isi video, komentar negatif/kritik, pertanyaan harga/lokasi klinik (dijawab netral, tanpa promo; arahkan ke bio @rumadentalmks hanya bila ditanya).
5. Spam/akun bodong/promosi orang lain → `hide_comment` (bukan hapus), laporkan di ringkasan.
6. Dilarang: komentar palsu, like/komentar dari akun lain, menyebut harga/promo, membalas dengan diagnosis.

### 12c. Langkah Teknis Unggah

1. Claude unggah MP4 + sampul ke Google Drive lewat konektor (`create_file`, `base64Content` = referensi file `sha256:<hash>:<path>`, `disableConversionToGoogleType: true`, folder `Dalam Gigi/Siap Tayang`), lalu `share_file` `permissionId: "anyoneWithLink"`, role reader. (Cadangan: Pak Dir kirim link Drive manual.)
2. Claude ubah ke link unduhan langsung (`https://drive.google.com/uc?export=download&id=<ID>`), cek dengan `curl -sIL` bahwa yang terambil `video/mp4` (bukan halaman HTML peringatan virus). Bila gagal (file besar / halaman peringatan) → minta Pak Dir posting manual, atau cari hosting publik lain; **jangan memaksa**.
3. Sampul untuk `cover_url` harus **JPEG** publik. PNG dikonversi dulu (`ffmpeg -i cover.png -q:v 2 cover.jpg`). Tanpa sampul publik → pakai `thumb_offset` (ms) pada frame terbaik.
4. Spesifikasi IG: MP4/MOV, ≤1 GB, 3 dtk–15 menit, 9:16; caption ≤2.200 karakter; `share_to_feed: true`.
5. Jadwalkan dengan `send_later` pada jam tayang (zona `Asia/Makassar`); saat terpicu → `create_video_post` → tunggu selesai → ambil `media_id` & permalink lewat `get_data` → `create_comment` (komentar pertama) → kirim checklist manual 12a ke Pak Dir.
6. **Trial Reel** (`trial_params`, hanya tampil ke non-follower) dipakai hanya untuk uji A/B atas izin Pak Dir (mis. dua versi hook).
7. Windsor masih **paket TRIAL** (18 Nov 2026): data bisa tertunda (cache, tanpa `force_refresh`) dan koneksi bisa putus saat trial habis. Kalau aksi gagal → laporkan, Pak Dir unggah manual dari paket kirim.

### 12c-2. Pelajaran Teknis Posting #05 (19 Nov 2026) [WAJIB]
- **27 Nov (#10):** dicoba posting otomatis atas permintaan Pak Dir → gagal: video 3,9 MB (versi kecil 2-pass 450k, kualitas masih bersih) tetap di atas batas ±3,1 MB per panggilan, dan `share_file anyoneWithLink` ditolak sistem izin sesi. Pak Dir memilih unggah manual. Posting otomatis hanya bisa bila Pak Dir sendiri menaruh video di Drive + membuka akses link.
- **Konektor Drive Claude hanya bisa mengunggah ±3 MB per file** → video (10–15 MB) TIDAK bisa diunggah Claude ke Drive. Video harus diunggah manual ke `Dalam Gigi/Siap Tayang` (atau pakai hosting lain, mis. repo publik + GitHub Pages bila Pak Dir buat).
- Link yang terbukti diterima Instagram: `https://drive.usercontent.google.com/download?id=<ID>&export=download&confirm=t` (file `anyoneWithLink` reader). Container ini tidak bisa mengecek link Drive (proxy memblokir), jadi cek izin dengan `get_file_permissions`.
- `create_video_post` bisa **timeout 60 dtk padahal berhasil**. JANGAN ulang. Cek `media_count` (user_info, data segar) lalu ambil media_id dengan `get_data` `date_from`=hari ini (field berbeda dari tarikan sebelumnya supaya tidak kena cache).
- Sampul `cover_url` harus JPEG publik; PNG di Drive tidak bisa → pakai `thumb_offset` (ms) atau unggah sampul JPEG (<3 MB, bisa lewat konektor).

### 12d. Checklist Caption (sebelum tayang)

- [ ] Kalimat pertama = hook yang sama dengan video
- [ ] Daftar bernomor rapi (`1. ` dengan spasi), tiap anjuran ada caranya
- [ ] Pertanyaan komentar sama dengan di video + "Pertanyaan terbanyak kita jadikan video berikutnya"
- [ ] Ajakan **simpan + follow @dalamgigi** ada
- [ ] **MAKSIMAL 5 hashtag**, urutan baku `#dalamgigi #faktagigi #makassar` + 2 topik (temuan Audit 27 Nov: hashtag ke-6 dst. selalu kehilangan # saat diunggah, terjadi di #01, #02, #08, #10)
- [ ] Semua hashtag pakai `#` (pelajaran #01/#02: `scaling makassar` tanpa #), **#makassar wajib**
- [ ] Tanpa harga, promo, "chat admin", ajakan ke klinik
- [ ] ≤2.200 karakter
- [ ] **Caption dikirim ke Pak Dir sebagai teks polos siap salin** (blok kode di chat, bukan hanya file .md), angka `1. 2. 3.` bukan emoji keycap, hashtag satu baris di akhir. Pelajaran 25 Nov: caption #08 terbit dengan `benanggigi makassar` tanpa #, #09 terbit tanpa cara bernomor & tanpa #makassar padahal file benar → bagian hilang saat disalin. Setelah terbit, cocokkan caption yang tayang dengan file.

## 13. Evaluasi & Target [USULAN 18 Nov 2026, dari audit 3 video pertama]

**Patokan awal (audit 18 Nov):**

| # | Views | Rata-rata tonton | Skip <3 dtk | Simpan | Bagikan | Jam tayang |
|---|---|---|---|---|---|---|
| 01 | 10.609 | 24,6 dtk / 66 (37%) | 26% | 57 | 15 | 18.16 |
| 02 | 6.856 | 23,3 dtk / 72 (32%) | 28% | 49 | 36 | 16.44 |
| 04 | 1.723 (<24 jam) | 19,4 dtk / 75 (26%) | 47% | 11 | 12 | 11.50 |

Total jangkauan ±17 ribu → hanya **18 follower** (0,1%). Masalah utama akun = **penonton tidak jadi follower**, bukan jangkauan.

**Target per video (cek +72 jam):**

| Ukuran | Target | Bila gagal |
|---|---|---|
| Skip <3 dtk | ≤30% | Hook diganti: fakta + visual bergerak di detik 0, tanpa kalimat pembuka |
| Rata-rata tonton | ≥40% durasi | Potong bagian proses yang mengulang |
| Disimpan | ≥0,6% jangkauan | Solusi kurang konkret |
| Dibagikan | ≥0,3% jangkauan | Kurang "oh ternyata" / kurang relatable |
| Follower baru | ≥0,5% jangkauan | Perkuat ajakan follow + identitas seri |

**Keputusan dari audit:**
1. Ajakan follow wajib di video **dan** caption (sudah sejak #04/#05).
2. **Uji durasi [DISEPAKATI]:** #06 (Behel menggeser gigi) dibuat versi **40–45 dtk** (satu proses inti + 2 cara). Bandingkan rata-rata tonton & % selesai dengan #01/#02 sebelum mengubah aturan durasi 50–70 dtk di bagian 2.
3. Semua video tayang **19.00–21.00 WITA** (belum pernah terpenuhi di #01–#04).
4. Pola #02 (benda kecil → ternyata besar di dalam) paling banyak dibagikan → prioritaskan topik yang punya "pembalikan" serupa.
5. Profil: ganti nama tampilan jadi **"Dalam Gigi | Fakta Gigi 3D"** (kolom nama ikut dicari di IG) [DISEPAKATI, eksekusi manual Pak Dir].
6. Setiap evaluasi ditulis ringkas di log (bagian 9) + pelajaran baru di bagian 11.

### 13b. Laporan Mingguan #1 (Senin 23 Nov 2026, data s.d. 22 Nov)
Follower 44 (18 → 44 sejak 18 Nov) · 5 reel · total views 81,8 rb · perkiraan like ±1,7 rb (2,1%).
| # | Views | Tonton rata2 | Skip | Simpan | Bagikan | ±Like |
|---|---|---|---|---|---|---|
| 01 | 13.083 | 24,2 dtk (37%) | 26,5% | 77 | 22 | ±290 |
| 02 | 7.622 | 23,2 dtk (32%) | 28,6% | 57 | 46 | ±275 |
| 04 | 2.279 | 17,9 dtk (24%) | 50,9% | 17 | 16 | ±60 |
| 05 | **56.695** | 25,4 dtk (34%) | 31% | 161 | 97 | ±1.070 |
| 06 (36 jam) | 2.092 | 21,5 dtk (29%) | 33,7% | 6 | 2 | ±35 |
KPI 30 hari: views 82% ✅ · like 58% ⚠️ (rate 2,1% < 3%) · follower 9% ❌ (44/500).
Temuan: (1) #05 viral 50 rb jangkauan tapi follower hanya +±20 → konversi follow ±0,05% = masalah utama; (2) hook kontra ("Justru bagian itu yang paling perlu disikat") & "kecil→besar" (#02) menang, pembuka "sakit" kalah (#04); (3) caption #06 dipangkas tanpa isi/cara → simpan 0,3% (terendah).
**Keputusan [DISEPAKATI Pak Dir 23 Nov 2026, "OK 123"] — berlaku untuk semua video mulai 23 Nov:**
1. **Mesin follow:** label "DALAM GIGI #NN" di pojok tiap video & sampul; alasan follow di ±detik 3–5 DAN di penutup. **Revisi Pak Dir 23 Nov: JANGAN pakai kalimat "tiap 2 hari"**; pakai "Follow Dalam Gigi, ya." (awal) dan "Jangan lupa follow, ya." (penutup). Pak Dir menyematkan #05, #01, #02 di grid (manual).
2. **Hook:** pola membalik anggapan ("justru…") atau "kecil ternyata besar". Jangan membuka dengan kata "sakit".
3. **Caption lengkap** (bagian 6): hook → isi 2 baris → cara bernomor → pertanyaan komentar → simpan & follow → 5–7 hashtag dengan #makassar. Caption pendek dilarang (pelajaran #06: simpan 0,3%).

## 14. Strategi Pertumbuhan & KPI (TOFU / Awareness) [DISEPAKATI 18 Nov 2026]

**Tujuan akun:** awareness. Orang Makassar kenal & ingat "Dalam Gigi oleh Ruma Dental". **KPI utama: Views, Like, Follow.** Indikator pendukung (penyebab): skip <3 dtk, rata-rata tonton, simpan, bagikan, komentar.

### 14a. KPI 30 hari (19 Nov – 18 Des 2026) — disesuaikan untuk ±15 Reel (selang 1 hari)
Baseline: 3 video, ±19 rb views, rata-rata ±6 rb views/video 3D, 18 follower, like ±2,5% views.

| KPI | Minimum | **Target** | Stretch |
|---|---|---|---|
| Total views / 30 hari | 60 rb | **100 rb** | 200 rb |
| Median views video 3D utama | 3 rb | **5 rb** | 10 rb |
| Like rate (like ÷ views) | 2,5% | **3%** | 4% |
| Total like / 30 hari | 1.500 | **3.000** | 8.000 |
| Follower (dari 18) | 250 | **500** | 1.000 |
| Konversi follow (follower baru ÷ jangkauan) | 0,3% | **0,5%** | 1% |

Mingguan (3–4 Reel): views ≥25 rb, follower +120. Catatan: API Windsor tidak memberi angka like langsung untuk reel → like = `media_reel_total_interactions` − simpan − bagikan − komentar (perkiraan); cocokkan dengan aplikasi bila selisih.

### 14b. Format — FULL REELS motion 3D [DISEPAKATI 18 Nov 2026]
Tanpa carousel/foto. Semua konten = Reel motion 3D gaya @dalamgigi (narasi Ricky, SFX, subtitle kinetik).

**Jadwal selang 1 hari [DISEPAKATI 19 Nov 2026]:** urutan bergantian **Utama → Pendek → Utama → Pendek**. Tabel di bawah = menu format; hari diikuti tanggal tayang, bukan nama hari. Pendek dipilih bergilir: Mitos vs Fakta → Jawab Komentar → 1 Fakta 1 Visual → Tebak → Daur ulang.


| Hari | Format Reel | Durasi | Biaya produksi |
|---|---|---|---|
| Senin | **Video 3D utama** (Kenapa/Gimana) | 40–60 dtk | Tinggi |
| Selasa | **Mitos vs Fakta** (1 mitos → "faktanya…" → 1 visual proses) | 15–25 dtk | Sedang |
| Rabu | **1 Fakta 1 Visual**, pakai ulang scene pustaka | 15–25 dtk | Rendah |
| Kamis | **Video 3D utama** | 40–60 dtk | Tinggi |
| Jumat | **Jawab Komentar** (pertanyaan penonton) | 20–35 dtk | Sedang |
| Sabtu | **Tebak/kuis** ("Menurutmu gigi mana…?" jeda 2 dtk → jawaban) | 15–20 dtk | Rendah |
| Minggu | **Daur ulang pemenang**: potongan video terbaik + hook baru, sebagai Trial Reel | 15–30 dtk | Rendah |

Reel pendek (15–35 dtk) tetap lolos Uji Value (1b) versi ringkas: 1 proses + 1 cara. Aturan durasi 50–70 dtk (bagian 2) hanya untuk video utama, dan sedang diuji turun ke 40–45 dtk (bagian 13).

Semua format tetap lolos Uji Value (1b), aturan isi (2), dan validasi fakta Pak Dir.

### 14c. Mesin Follow (masalah utama: 0,1%)
1. Identitas seri: label kecil "DALAM GIGI #NN" di pojok kiri atas tiap video/sampul; grid seragam (bagian 5).
2. Ajakan follow dengan alasan: "Follow, tiap hari satu hal soal gigi yang jarang dibahas."
3. Profil: 3 postingan disematkan di grid (#01, #02, terbaik terbaru); Sorotan Story "Mulai di sini".
4. Siklus komentar → video: request penonton dijawab tiap Jumat, pengusul dibalas "Sudah kami jawab 🙌".

### 14d. Distribusi & Uji
- **Trial Reel**: uji 2 hook untuk topik yang sama; hook pemenang (skip lebih rendah) jadi versi utama.
- TikTok: unggah ulang manual tiap video (format yang sama, hashtag TikTok).
- **Tidak dipakai** (keputusan Pak Dir 18 Nov 2026): Collab/Story Ruma, boost berbayar, retarget iklan Ruma. Pertumbuhan murni organik.

### 14e. Laporan
- Harian (setelah unggah +1 jam): balas komentar, ringkasan singkat.
- **Senin 07.35 WITA: laporan mingguan** [AKTIF, jadwal otomatis `trig_015b45txWH6yDG6PUv3nFFNR`, masuk ke sesi "Audit akun dan upload otomatis"] (views, like, follow vs target, 3 video terbaik/terburuk + penyebab, keputusan minggu ini).
- Akhir 30 hari: evaluasi apakah ritme harian dipertahankan (kualitas > kuantitas bila median views turun >30%).

## 15. Mesin Produksi Mingguan Otomatis [DISEPAKATI 19 Nov 2026]

Tujuan: Pak Dir cukup **1 kali persetujuan per minggu**; sisanya (produksi, unggah, posting, balas komentar ringan, laporan) jalan sendiri.

| Kapan | Siapa | Apa |
|---|---|---|
| Jumat | Claude | Siapkan **paket minggu depan**: 7 naskah (sesuai 14b) + papan gambar + daftar fakta medis yang perlu divalidasi, dalam 1 pesan |
| Sabtu/Minggu | **Pak Dir** (±15 menit) | Balas "OK semua" atau koreksi per nomor. Ini satu-satunya gerbang manusia (fakta medis & nama Ruma) |
| Minggu–Senin | Claude | Narasi ElevenLabs, render, QC 4 lapis, sampul, caption (checklist 12d) → unggah ke Drive `Dalam Gigi/Siap Tayang` |
| Selang 1 hari 19.00 WITA | Claude (jadwal otomatis) | Posting reel hari itu + komentar pertama → kirim ringkasan singkat |
| Hari tayang 20.15 WITA | Claude (jadwal otomatis) | Cek komentar, balas yang ringan (12b), tahan yang sensitif untuk Pak Dir |
| Senin 07.35 WITA | Claude (jadwal otomatis, AKTIF) | Laporan mingguan |
| HP Pak Dir (±1 menit/hari) | **Pak Dir/admin** | Sematkan komentar pertama, tag lokasi (opsional), unggah ulang ke TikTok |

Syarat teknis:
- **Satu sesi produksi + posting** (sesi "Audit akun dan upload otomatis") karena sesi ini yang memegang konektor Windsor, Drive, dan repo. Sesi lain tidak bisa saling ambil file (container terpisah); file video hanya bisa dipindah lewat Drive.
- File video tidak masuk Git; stok tayang ada di Drive `Dalam Gigi/Siap Tayang`, nama `dalamgigi-NN-topik-vN.mp4` + `-caption.md`. Setelah tayang → pindah ke `Dalam Gigi/Sudah Tayang`.
- Konektor ElevenLabs sering minta masuk ulang; bila putus, produksi narasi berhenti dan Pak Dir diberi tahu (tanpa suara pengganti).
- Windsor paket TRIAL: bila habis, posting otomatis berhenti → paket kirim tetap tersedia di Drive untuk diunggah manual.

## 16. Alur Hari Upload [DIPERBARUI 20 Nov 2026 di chat produksi, menggantikan aturan Drive 19 Nov; lihat juga bagian 00]

Keputusan Pak Dir 20 Nov:
- **Konten dibuat di hari upload.** Tayang 19.00 WITA → video harus jadi paling lambat **12.00 WITA**.
- **Komentar didahulukan:** kalau ada request topik di komentar (lolos Uji Value), itu yang dibuat; topik cadangan di tabel rencana ditunda ke upload berikutnya. Tidak ada request → pakai topik cadangan.
- **Pengingat:** scheduled task "Pengingat konten @dalamgigi" (`trig_01HMF5MWDpTMx9UFZKA3cdkr`), 08.33 WITA tiap tanggal ganjil, masuk ke chat produksi ini.
- Target jam: naskah + papan di-OK ±10.30 → narasi + render (±30–45 mnt) → QC → kirim.
- **Tidak diunggah ke Google Drive.** mp4 + sampul + caption dikirim langsung ke Pak Dir di chat; Pak Dir upload sendiri.
- Topik cadangan disiapkan lebih awal sampai tahap papan gambar, supaya hari-H tinggal narasi + render.
