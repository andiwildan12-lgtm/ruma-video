---
name: produksi-video-klinik
description: Teknik produksi video iklan dan konten klinik gigi (UPG Dental Care, Ruma Dental, atau brand klinik lain) dari naskah sampai file MP4 jadi. Gunakan saat diminta membuat, merender, mengedit, atau merevisi video: menyusun alur naskah, papan gambar, narasi AI ElevenLabs, animasi 3D explainer, menggabungkan footage klinik, transisi, teks layar, audio, dan ekspor untuk Meta/Instagram/TikTok. Selalu pakai bersama skill brand-nya (misalnya ruma-dental-video) untuk gaya, warna, suara, dan data resmi.
---

# Produksi Video Klinik

Skill ini berisi **cara kerja dan teknik** yang sudah terbukti: iklan bleaching Ruma Dental v2 (di-ACC 16 Nov 2026) dan konten TOFU @dalamgigi #01–#03 (16–17 Nov 2026). Versi skill: **1.3 (17 Nov 2026)**.
**Identitas brand** (warna, logo, suara narator, data harga, aturan khusus) **tidak ada di sini**; ambil dari skill brand:
- Ruma Dental → skill `ruma-dental-video`
- UPG Dental Care → skill `upg-video` (kerangka; data brand masih [TERBUKA])

Kalau brand belum jelas, tanyakan dulu konten ini untuk klinik yang mana.

---

## 1. Cara Bekerja dengan Pak Dir

- Panggil **"Pak Dir"**. Bahasa Indonesia yang tegas dan praktis. Jadilah teman diskusi yang **kritis**; audit hasil sendiri sebelum dikirim.
- Data kurang → buat asumsi kerja yang masuk akal, tandai bagian yang perlu divalidasi, jangan banyak bertanya.
- Pak Dir suka hasil cepat ("gas render"). Setelah naskah dan papan gambar di-OK, langsung produksi.
- Kredit ElevenLabs sudah diizinkan untuk produksi. Sebutkan perkiraan kredit yang terpakai di laporan.
- Naskah disimpan di folder skill brand (`references/`), menimpa file yang sama setiap revisi. **Jangan disimpan ke Google Drive.**
- Fokus ke video. Jangan menawarkan hal di luar video (template admin dan sejenisnya) kecuali diminta.

## 2. Gerbang Audit 4 Lapis (3 sebelum render + 1 setelah encode) [WAJIB]

Tujuan: **tidak ada render dua kali dan tidak ada video cacat terkirim.** Render penuh hanya boleh dimulai setelah Pak Dir bilang OK **dan** Audit 1–3 lulus; video hanya boleh dikirim setelah Audit 4 lulus.

Aturan:
- Setelah Pak Dir OK, **audit sendiri tanpa memberi saran atau ide baru**. Yang dicari hanya **kesalahan**, lalu langsung diperbaiki. Jangan membuka diskusi ulang.
- Kalau ada temuan yang mengubah isi (fakta medis, data harga, naskah), **tanya Pak Dir dulu**. Selain itu, perbaiki sendiri.
- Kalau naskah diubah saat audit (termasuk menambah CTA, memangkas, atau menjanjikan topik berikutnya), tampilkan tabel **"Sebelum → Sesudah → Alasan"** + narasi final, lalu **tunggu OK Pak Dir sebelum membuat narasi ElevenLabs dan render**. Persetujuan ide/cerita bukan persetujuan naskah final.
- Lapor ringkas: "Audit 1–4: lulus, X hal diperbaiki".
- **Papan gambar wajib dikirim ke Pak Dir sebelum render penuh, termasuk setiap kali visual diubah** (arahan Pak Dir 18 Nov): lembar 20–24 frame probe berlabel waktu + narasi (`output/papan-NN-topik.jpg`). Render penuh hanya setelah Pak Dir OK papan.

**Audit 1: Naskah dan fakta**
- [ ] Fakta medis dan angka benar, atau sudah divalidasi Pak Dir.
- [ ] Data resmi (nama klinik, alamat, WA, harga) persis sama dengan skill brand.
- [ ] Funnel tepat: TOFU tanpa ajakan dan harga; MOFU/BOFU sesuai pola.
- [ ] Aturan iklan kesehatan: tanpa menyiratkan kondisi penonton, tanpa menakut-nakuti, tanpa janji hasil, tanpa kata "gratis".
- [ ] Narasi enak diucapkan, angka ditulis dengan kata, satu generasi mengalir.
- [ ] **Audit tulisan anti-slop** (bagian 2c) lulus untuk naskah, teks layar, sampul, caption, komentar sematan, dan balasan admin.

**Audit 2: Visual dan papan gambar (pakai frame probe)**
- [ ] Render 6–12 frame probe dari seluruh durasi, lalu lihat lembar kontaknya.
- [ ] Tidak ada objek terpotong, teks menutupi objek penting, atau teks keluar dari area aman.
- [ ] Anti-monoton: kamera berganti tiap 2–4 detik, bentuk objek dikenali, suasana berubah per babak.
- [ ] Logo dan identitas brand benar; tidak ada atribut brand lain.
- [ ] Footage: casting benar (pasien ≠ admin), tanpa data sensitif (password, wajah tanpa izin).
- [ ] **Audit anatomi (pelajaran behel #07, 20 Nov) — cek SEBELUM papan dikirim, per frame:**
  - Setiap gigi yang digeser/diputar/diangkat: **gusi ikut membungkus lehernya** (tidak ada leher terbuka, gigi melayang, atau celah gigi–gusi yang tidak disengaja).
  - Tidak ada rongga/celah kosong antara akar, "bantalan" (jaringan pengikat), dan tulang. Gusi menempel di leher gigi, bukan balok terpisah.
  - Gerakan yang sama harus **searah dan konsisten di semua adegan** (lengkung gigi ↔ irisan ↔ analogi). Kalau irisan menunjukkan geser ke samping, lengkung gigi juga geser keluar-masuk, bukan naik-turun.
  - Bentuk kelainan dipilih yang paling umum di klinik (mis. gigi berjejal = menonjol keluar/masuk lengkung + sedikit miring, bukan terangkat), dan kamera dipilih supaya kelainannya terlihat (sudut ¾ dari atas bila perlu).
- [ ] **Audit arah gaya:** panah/gaya datang dari sumber yang benar (dorongan behel = dari kawat/braket, setinggi braket), ukuran tidak menutupi objek, tidak terpotong tepi layar.
- [ ] **Ada momen hasil/payoff yang terlihat jelas** (mis. gigi jadi rapi, gusi kembali sehat) ±1–2 detik sebelum panel CTA menutup layar.
- [ ] Analogi 3D dibuat utuh dan langsung terbaca (rumah = dinding lengkap + atap menempel), bukan potongan yang membingungkan.
- [ ] Label/tag tidak bertabrakan dengan angka pojok, panel, atau tepi atas layar.
- [ ] Papan dicek **sebagai dokter gigi**, bukan hanya sebagai desainer: "apakah dokter gigi yang menonton akan menemukan hal yang tidak mungkin terjadi di mulut asli?"

**Audit 3: Teknis dan sinkron (terakhir sebelum render penuh)**
- [ ] Kunci waktu adegan dari **timestamp per kata (Scribe)**; subtitle cocok dengan kata yang diucapkan; `words` sudah di cfg.
- [ ] Jumlah frame footage cukup (`max` = jumlah file); server lokal hidup.
- [ ] Durasi total sesuai target (TOFU 50–70 detik, iklan ±50–60); kartu penutup benar.
- [ ] Setiap shot punya gerak pelan (tidak diam ≥1,5 dtk); rentang `blur` untuk gerakan cepat sudah diisi.
- [ ] Cover/thumbnail sudah disiapkan (bagian 9).

**Audit 4: Cek kualitas file jadi (setelah encode, sebelum kirim) [WAJIB SEMUA BRAND]**
- [ ] `scripts/qc.sh video.mp4 <durasi> <detik_kartu>` → hasil **LULUS** (detail bagian 11A). Kalau ada [CEK], perbaiki dulu; jangan kirim video yang belum lulus.
- [ ] Lembar kontak dari **render penuh** (bukan probe) sudah dilihat.

## 2c. Audit Tulisan Anti-Slop [DISEPAKATI 21 Nov 2026, semua brand]

Diadaptasi dari skill akun `antislop-copywriting` untuk Bahasa Indonesia dan klinik gigi. Berlaku untuk **semua teks yang dibaca/didengar orang**: narasi, teks layar, label, sampul, caption IG/TikTok, komentar sematan, balasan admin, iklan. Jalankan setelah draf, sebelum dikirim ke Pak Dir.

**1. Jangan mengarang (paling penting untuk klinik)**
- Tidak ada angka, persentase, lama waktu, nama, testimoni, gelar, atau "kata ahli" yang tidak berasal dari sumber/validasi Pak Dir. Kalau perlu angka tapi belum ada, tulis versi tanpa angka atau tanyakan.
- Tidak ada klaim kosong: "terbaik", "nomor 1", "terpercaya ribuan pasien", "teknologi tercanggih", "dijamin", "100% aman". Ganti dengan apa yang benar-benar dilakukan/dirasakan.
- Tidak menebak lalu menyajikannya sebagai fakta ("biasanya…", "kemungkinan…") tanpa dasar.

**2. Kata kosong yang harus dibuang/diganti**
- "revolusioner", "inovatif", "solusi terdepan", "level berikutnya", "transformasi", "maksimal", "luar biasa" (tanpa isi), "di era modern ini", "di zaman serba cepat", "tidak bisa dipungkiri", "perlu diketahui bahwa", "pada dasarnya", "yang terpenting adalah".
- Pembuka basa-basi ("Yuk kita bahas…", "Simak sampai habis ya!", "Tahukah kamu…" berulang) → langsung ke isi.
- Penutup kosong ("Semoga bermanfaat!", "Masa depan cerah menanti") → akhiri di fakta/CTA konkret.

**3. Pola kalimat khas AI**
- "Bukan hanya X, tapi juga Y" / "Ini bukan sekadar X, ini Y" dipakai berkali-kali.
- Semua daftar dipaksa jadi tiga ("cepat, nyaman, dan aman") padahal isinya tidak tiga.
- Rentetan kalimat pendek dramatis ("Tanpa sakit. Tanpa takut. Tanpa ragu.").
- Kalimat "renungan" kosong ("Senyum adalah bahasa kepercayaan").
- Perintah dramatis ("Baca sekali lagi.", "Ingat baik-baik ini.").
- Mengganti-ganti sinonim supaya tidak berulang (gigi → geligi → deretan mutiara). Ulangi kata yang paling jelas.
- Kalimat pasif tanpa pelaku kalau pelakunya diketahui ("karang dibersihkan" → "dokter gigi membersihkan karang").

**4. Kebersihan teks**
- **Tanpa tanda pisah panjang (—)** di teks yang tayang (caption, layar, sampul). Ganti dengan titik, koma, titik dua, atau kurung.
- Tanpa HURUF KAPITAL untuk berteriak di tengah kalimat. Pengecualian: baris 2 sampul (gaya brand) dan satu kata aksen.
- Tebal (bold) di subtitle hanya untuk 1–2 kata kunci per baris, bukan setiap istilah.
- Tanpa tanda kutip untuk menekankan kata biasa; kutip hanya untuk ucapan, istilah yang dijelaskan, atau analogi.
- Emoji: caption boleh secukupnya (angka 1️⃣2️⃣3️⃣ untuk langkah, 1–2 emoji di CTA); tidak di judul teks layar, tidak sebagai hiasan tiap baris.
- Tanpa filler ("dalam rangka", "dikarenakan oleh fakta bahwa", "pada saat ini") dan tanpa tumpukan keraguan ("mungkin bisa saja barangkali").

**5. Tetap ada suara**
- Jangan disterilkan sampai datar. Suara Dalam Gigi: santai, hangat, "nggak", "bayangin", "kok bisa?". Suara Ruma: tenang, ramah, premium. Suara UPG: lihat skill upg-video. Analogi sehari-hari dipertahankan.
- CTA spesifik pada tindakan ("Tulis di komentar, nanti kita jawab lewat video"), bukan "Hubungi kami sekarang!" generik.

**6. Langkah akhir (draf → audit → final)**
1. Baca keras-keras: terdengar seperti orang bicara?
2. Tanya: "Apa yang membuat ini terasa buatan AI?" dan "Ada fakta/angka/nama yang tidak ada di sumber atau validasi Pak Dir?"
3. Perbaiki, lalu cek terakhir: tidak ada "—" di teks tayang.
Lapor ke Pak Dir cukup satu baris: "Audit tulisan: lulus, X hal dirapikan".

## 2b. Alur Satu Konten

1. **Ide dan funnel.** Pak Dir suka iklan **MOFU/BOFU**: edukasi yang menyatu dengan jualan.
2. **Naskah** (narasi + teks layar + adegan). Audit sendiri: hook, logika medis, kapan brand disebut, alur perpindahan.
3. **Papan gambar** (HTML artifact): panel 9:16 per adegan, narasi, teks layar, bunyi, transisi, alur produksi.
4. **Tes gaya** 5–9 detik untuk adegan baru.
5. **Narasi ElevenLabs** (bagian 4) → **transkripsi Scribe** (bagian 5).
6. **Gerbang Audit 1–3** (bagian 2), lalu **render penuh di latar** (bagian 6), lembar kontak render penuh, mix, encode, **Audit 4 (`qc.sh`)**, buat cover.
7. **Review Pak Dir → revisi.** Setelah di-ACC, perbarui skill brand: naskah final dan pelajaran baru.

## 3. Pola Naskah Iklan MOFU/BOFU yang Di-ACC

1. **Hook angka/kebiasaan** yang dekat dengan target (contoh: "Setahun, bisa 365 cangkir kopi").
2. **Edukasi proses** ringkas dan visual.
3. **Momen sadar** yang netral, tanpa memancing rasa malu.
4. **"Kabar baiknya…"** → solusi.
5. **Brand disebut di tengah video** dengan nama lengkap klinik, supaya edukasi dan jualan menyatu. Jangan kuliah dulu lalu jualan di akhir.
6. **Bukti di klinik**: footage asli (datang, ruang tunggu, dokter mengerjakan, pasien tersenyum).
7. **Gambaran hasil yang positif**.
8. **Tawaran jelas, harga diucapkan**, ajakan lembut ("Chat admin, konsultasi dulu, ya").

Durasi ±50–60 detik; alur yang mengalir lebih penting daripada angka pas. Turunan: 15 detik (retarget) dan 4:5 (Feed) bila diminta.

**Batasan iklan kesehatan (Meta):** jangan menyiratkan tahu kondisi penonton, tanpa foto sebelum-sesudah, tanpa janji hasil tertentu, tanpa close-up klinis mulut asli, hindari kata "gratis" untuk layanan medis. Fakta medis harus benar; Pak Dir (dokter gigi) memvalidasi bila ragu.

## 4. Narasi AI (ElevenLabs)

- Model **eleven_v4**, suara sesuai skill brand.
- **Seluruh narasi dibuat dalam SATU generasi yang mengalir.** Jangan pakai `[long pause]` dan jangan memotong per kalimat lalu menempelkan per adegan. Cara itu terbukti membuat narasi kaku, terlalu banyak jeda, dan perpindahan adegan tidak nyambung (pelajaran iklan v1).
- Tag nada di awal kalimat: `[conversational] [warmly]`, `[cheerfully]` untuk "kabar baiknya", `[warmly]` untuk gambaran hasil.
- Bahasa santai dan sopan ("kamu", "nempel", "pas lihat foto", "ya"). Angka dan harga ditulis dengan kata.
- **Default 1 versi saja (`generations_count: 1`)**, keputusan Pak Dir 20 Nov: 2 versi membuang kredit. ±950 kredit untuk ±50 detik; ±1.250–1.350 untuk ±65–75 detik. Generate ulang hanya kalau hasil Scribe menunjukkan kata salah/jeda rusak.
- Target naskah TOFU ±150–170 kata ≈ 62–68 detik suara (Ricky ±2,5 kata/detik).
- Panggil `creative_get_flow_run_status` sampai selesai, lalu unduh `content_url` dengan curl.

## 5. Gambar Mengikuti Suara

**Cara utama (sejak #03): transkripsi Scribe, timestamp per kata.**
1. `creative_add_flow_asset_node` (modality audio, `generation_id` take terpilih, flow yang sama) → `creative_transcribe_audio` (`eleven_scribe_v1`, gratis) → `creative_get_flow_run_status` → ambil `words` (atau unduh `words_download_url`; tautan kedaluwarsa, panggil status lagi untuk tautan baru).
2. Buang token tag (`[conversational]` dll.), tambahkan offset mulai narasi (0,3) → simpan ke cfg `"words":[[mulai,selesai,"kata"],...]`.
3. Kunci waktu adegan (`K`) = waktu kata pertama tiap kalimat/frasa. Subtitle per frasa ditulis di `subs`; `kinetic.js` mengatur kemunculan per kata.
4. Akhiri dengan kartu penutup yang tampil ±0,8 detik setelah kata terakhir, durasi kartu ±3 detik.

**Cadangan (tanpa Scribe):** RMS per 20 ms, jeda ≥0,18 dtk (±28 dB di bawah persentil 95) = batas kalimat; kata di tengah kalimat diperkirakan proporsional. Skrip: `gaps.py`.

## 6. Render dan Komposisi

Skrip di `scripts/` (template; aset brand diambil dari folder `assets/` skill brand).

**Persiapan folder kerja**
```bash
npm i three@0.160.0
cp <skill-brand>/assets/* .          # logo mug, logo kartu, font
python3 -m http.server 8765 &        # three.js butuh server lokal
```
Gabungkan halaman: sisipkan isi `extra.js` + `smile.js` ke `scene.html` tepat sebelum `window.ready=true;` → simpan sebagai `full.html`.

**3D (three.js + Playwright)**
- 1080×1920, 30 fps, Chromium headless dengan `--use-angle=swiftshader --enable-unsafe-swiftshader`.
- Satu fungsi `renderScene(nama, t, durasi)` per adegan. Teks layar, wipe, kartu, dan footage adalah lapisan HTML di atas kanvas, ditangkap bersama lewat `page.screenshot`.
- Adegan siap pakai: `hook` (lautan cangkir dan meja kerja), `sm_in` / `sm_out` / `sm_good` / `sm_steps` (senyum 3D, zoom gigi, scaling/bleaching), `p5` (ponsel), `c8` (kalender), `w12` (air putih), `foot` (frame footage + teks), `card` (kartu harga). Teks kartu dan logo berasal dari brand; ubah di `extra.js` untuk brand lain.
- **Selalu render 3–6 frame probe dulu** dan lihat hasilnya sebelum render penuh (komposisi, teks menutupi objek, objek terpotong).

**Footage iPhone (HEVC)**
```bash
ffmpeg -ss <mulai> -t <durasi> -i klip.mov -vf "crop=...,scale=1080:1920,colorbalance=rs=.03:bs=-.04:rm=.02:bm=-.02,eq=saturation=1.04:contrast=1.02,fps=30" -q:v 3 ftg/f1/%04d.jpg
```
Zoom pelan: `scale=w='trunc(1080*(1+0.03*t)/2)*2':h=-2:eval=frame,crop=1080:1920`.
Pastikan `max` di job sama dengan jumlah frame yang ada, karena gambar yang tidak ada membuat render macet.

**Scene satu halaman (TOFU @dalamgigi, sejak #02)**
- Satu HTML berisi beberapa "set" (mis. lengkung gigi, penampang, rak buku) yang ditampilkan bergantian; transisi antar-set dengan kilau krem/gelap 0,3 dtk.
- Kamera = array `shots` `[waktuMulai, fungsi(t) → [posisi, target]]`, blend 0,75 dtk; label (tag) diproyeksikan dari titik 3D.
- Template: `gua.html`, `domino.html` (+ `*_cfg.json`), `arch3.html`. Render: `node render_frames.js <page> <cfg> all|range A B|p t...` (PORT env, motion blur dari `cfg.blur`). Probe dulu, lalu render penuh di latar (±0,4 dtk/frame; 70 dtk ≈ 15 menit).
- Material yang diubah transparan di tengah video: set `needsUpdate=true` (atau transparan sejak awal).

**Job dan komposisi (iklan dengan footage)**
- `jobs.json`: per adegan `name`, `n` (frame + 8 cadangan), `D` (durasi detik), `out`, opsi `dir` / `max` / `opt` (teks `p`, `p0`, `wipe`, `s1`, `s2`).
- `node render2.js jobs.json` (±0,15–0,5 detik per frame). Untuk proses panjang, jalankan di latar dan tunggu notifikasi.
- `python3 compose.py`: segmen digabung dengan **crossfade 8 frame**. Perpindahan 3D → footage memakai **wipe** (misalnya wipe atap Ruma), tanpa crossfade.

**Audio dan encode**
```bash
# narasi mulai 0,3 dtk, -16 LUFS, suara latar ruangan sangat pelan, efek kecil opsional
ffmpeg -i narasi.mp3 -f lavfi -i "anoisesrc=color=brown:amplitude=0.6:d=<dur>,lowpass=f=420,highpass=f=60,volume=0.035" \
 -filter_complex "[0:a]adelay=300|300,loudnorm=I=-16:TP=-1.5:LRA=7,apad=whole_dur=<dur>[v];[1:a]afade=t=in:d=0.6[amb];[v][amb]amix=inputs=2:normalize=0[out]" \
 -map "[out]" -ar 48000 -ac 2 track.wav
# encode PERSIS: jangan pakai -shortest (membuang frame)
ffmpeg -framerate 30 -i frames/%04d.jpg -i track.wav -map 0:v -map 1:a -frames:v <dur×30> -t <dur> -r 30 \
 -c:v libx264 -pix_fmt yuv420p -crf 19 -c:a aac -b:a 160k -movflags +faststart out.mp4
bash scripts/qc.sh out.mp4 <dur> <detik_kartu>     # wajib LULUS
```
Suara latar fade-in 0,6 dtk dan fade-out hanya **0,5 dtk terakhir**. Mix SFX: `mix_gua.py` / `mix_domino.py` (daftar event `e(file, detik, dB, durasi)`). Musik mengikuti skill brand (Ruma: tanpa musik). Suara latar ruangan mencegah hening mati.

## 7. Prinsip Visual Umum

- Satu fokus per layar. Teks dua tingkat (label kecil + poin utama), singkat, di area aman (hindari ±15% atas dan ±35% bawah).
- Gerakan kamera pelan dan berlanjut antar-adegan. Angka berjalan untuk hook.
- Ilustrasi gigi: **senyum** (bibir + deretan gigi, tanpa wajah/mata), lalu zoom ke satu gigi untuk proses. Jangan satu gigi berdiri sendiri.
- Logo tampil alami di dalam adegan, dari file resmi; tidak dibuat AI.
- Casting footage: orang yang tampil sebagai pasien tidak boleh muncul juga sebagai admin dalam video yang sama.
- Lihat hasil sendiri sebelum mengirim: buat lembar kontak 12–16 frame dan periksa.

## 7a. Efek Suara (SFX) [DISEPAKATI]

Pak Dir minta setiap gerakan punya suara. Pustaka SFX (ElevenLabs `eleven_text_to_sound_v2`, 1 variasi per efek, ±19 kredit) ada di `scripts/sfx/`: `brush` (sikat), `whoosh` (perpindahan kamera), `pop` (objek muncul/angka berganti), `floss`, `scaler` (alat scaling, pelan dan tidak menakutkan), `crack` (karang rontok), `click` (angka/label muncul), `fizz` (asam), `dive` (kamera menyelam/masuk), `pulse` (denyut saraf, lembut), `shimmer` (momen positif, kartu penutup), `book` (buku ditarik/miring), `snap` (benda pas masuk, mis. gigi pengganti). Pakai ulang; buat baru hanya bila gerakannya baru.
- Penempatan: tepat di detik gerakan (bukan per kalimat). Whoosh di setiap perpindahan sudut kamera besar.
- Level: narasi -16 LUFS; SFX -14 s/d -24 dB di bawahnya; suara latar ruangan tetap ada; `alimiter` di akhir. Tanpa musik.
- Skrip mixing: `mix_gua.py` / `mix_domino.py` (daftar event `e(file, detik, dB, durasi)` → `adelay` + `amix normalize=0` + `alimiter`). Setiap angka/label muncul = `click`; setiap ganti set adegan = `shimmer` + `whoosh`.

## 7b. Anti-Monoton (pelajaran 160 Permukaan v1)

Video v1 dinilai Pak Dir "monoton, cuma kotak-kotak". Wajib untuk setiap video 3D:
1. **Ganti sudut kamera tiap 2–4 detik**, sambung dengan blend 0,75 detik: atas (peta) → menyusur rendah → mengitari objek → **masuk ke "lorong"** (misalnya sela gigi) → close-up detail → naik lagi.
2. **Bentuk objek harus dikenali**: gigi seri pipih, taring runcing, premolar 2 tonjol, geraham 4 tonjol. Jangan kotak polos.
3. **Suasana berubah per babak**: bagian masalah sedikit lebih redup/dingin, "kabar baiknya" lebih terang dan hangat.
4. Close-up untuk momen penting (plak mengeras, karang terangkat), supaya ada perubahan skala.
5. Pakai sistem *shot list* di `arch.html` (array `[waktu mulai, fungsi kamera]`) sebagai pola.

## 9. Cover / Thumbnail Seragam

Prinsip (contoh acuan: akun howcomeid): **semua cover satu rumus**, sehingga grid profil terlihat rapi dan senada.
- Latar: **frame 3D bersih** dari video (tanpa angka/subtitle). Render ulang dengan overlay disembunyikan (`scripts/clean.js`).
- Gradasi gelap di 60% bawah, warna dari skill brand.
- Judul **2 baris, rata tengah**: baris 1 putih (konteks), baris 2 **warna aksen, HURUF BESAR** (kata kunci, sering berbentuk pertanyaan).
- Logo/simbol brand kecil di pojok kiri atas.
- Teks berada di zona **crop grid 3:4** (y 240–1680 dari 1920) supaya tetap terbaca di grid profil.
- Template: `scripts/cover.html` + `scripts/cover.js`.

## 9b. Aturan Isi (pelajaran video #01, v1→v3)

1. **Hook = fakta paling mengejutkan di detik 0–3**, dengan visual yang sudah bergerak. Jangan dibuka dengan layar kosong atau kalimat pengantar.
2. **Setiap anjuran wajib disertai cara singkat.** Contoh: "benang gigi" harus diikuti 40 cm → lilit → selipkan → huruf C → naik turun.
3. **Setiap istilah klinis dijelaskan dalam satu kalimat** (contoh: scaling = pembersihan karang oleh dokter gigi pakai alat bergetar).
4. **Jangan memakai angka yang bisa membingungkan** atau butuh penjelasan tambahan (contoh: "1 jam setahun" dihapus).
5. Durasi 50–70 detik. Kalau naskah lebih panjang, potong bagian yang paling tidak penting, jangan percepat suara.

## 9c. Paket Kirim ke Pak Dir (setiap konten)

Setiap konten selesai dikirim sebagai satu paket:
1. **Video** `<akun>-<NN>-<topik>-v<versi>.mp4` (contoh: `dalamgigi-01-160-permukaan-v3.mp4`).
2. **Sampul** `cover-<topik>-<a/b/c>.png` (pilih satu, kirim sebagai lampiran).
3. **Caption Instagram** siap salin: kalimat hook → isi singkat → poin cara/solusi bernomor → ajakan simpan/kirim (bukan ajakan ke klinik) → hashtag (5–7).
4. **Caption TikTok**: sama + `#edukasigigi #faktaunik`.
5. **Komentar pertama**: satu pertanyaan ringan untuk memancing diskusi.
6. **Langkah unggah**: sampul dari rol kamera, atur crop grid 3:4, tanpa musik, lokasi Makassar, jam 19.00–21.00 WITA.
7. Kalau mengganti video yang sudah terbit: **arsipkan** (jangan hapus) versi lama, dan **perbarui caption** bila isinya berubah.
8. Hasil `qc.sh` (harus LULUS) disebut singkat di laporan. Caption disimpan di `output/<akun>-<NN>-caption.md`; video tidak masuk Git, ingatkan Pak Dir mengunduh.

## 10. Laporan ke Pak Dir

Kirim video dengan `SendUserFile` (display render), lalu jelaskan singkat:
- Apa yang berubah dibanding versi sebelumnya.
- Tabel alur per detik.
- Hal yang perlu Pak Dir cek, terutama **pelafalan**, karena Claude tidak bisa mendengar audio.
- Kredit yang terpakai.

Ingatkan bahwa file di sesi cloud bersifat sementara dan perlu diunduh.

## 11. Standar Kualitas Semua Brand dan Format [DISEPAKATI 17 Nov 2026]

Berlaku untuk **semua video**: konten TOFU (@dalamgigi), **iklan Ruma Dental (MOFU/BOFU)**, dan **video UPG Dental Care**. Asal: bagian terbaik skill "motion-graphics-by-nalarka" yang sudah diuji di #02/#03 dan di-ACC Pak Dir. Aturan identitas tiap brand (musik, durasi, rasio, gaya) tetap mengikuti skill brand masing-masing.

| Fitur | TOFU @dalamgigi | Iklan Ruma (MOFU/BOFU) | Video UPG |
|---|---|---|---|
| A. QC otomatis | Wajib | Wajib | Wajib |
| B. Teks mengikuti kata | Subtitle kinetik per kata | Teks dua tingkat muncul tepat di kata kuncinya; harga/nama klinik pop | Subtitle dialog per kata (warna per karakter bila ada) |
| C. Motion blur | Dive, whoosh, pindah kamera cepat | Wipe atap 3D → footage, zoom cepat | Transisi cepat / whip |

**Penyesuaian per format**
- **Footage asli** (iklan Ruma, UPG): footage diam yang disengaja (mis. papan logo) bisa terdeteksi "frame beku". Bila ≥1,5 dtk, beri zoom pelan (`scale ... 1+0.03*t`) supaya tidak beku; kalau memang disengaja, catat di laporan.
- **Brand yang memakai musik** (bila skill brand mengizinkan, mis. UPG): QC loudness tetap -18…-13 LUFS; narasi/dialog harus dominan; hening mati tetap dilarang.
- **Rasio lain** (4:5 Feed, 1:1): jalankan `qc.sh` lalu abaikan baris resolusi bila memang sengaja; jumlah frame dan durasi tetap harus persis.
- Word timestamp: selalu transkripsi narasi/dialog final dengan **Scribe** (`creative_transcribe_audio`, gratis) lalu simpan ke cfg `"words"` (+ offset mulai narasi).

### Rincian Teknis

**11A. Cek kualitas otomatis (wajib sebelum kirim)**
`scripts/qc.sh video.mp4 <durasi> <detik_kartu>` → codec H.264+AAC, 1080×1920, 30 fps CFR, durasi persis, jumlah frame = durasi×30, tanpa frame hitam, tanpa frame beku tak disengaja (kartu penutup diabaikan), tanpa hening mati, puncak < -0,5 dB, loudness -18…-13 LUFS. Harus "LULUS" sebelum dikirim.
- Encode **tanpa `-shortest`**: pakai `-map 0:v -map 1:a -frames:v <durasi×30> -t <durasi>` (pelajaran: `-shortest` membuang 1–3 frame).
- Suara latar fade-out hanya 0,5 dtk terakhir (pelajaran: fade 1,2 dtk membuat hening mati di kartu penutup).
- Temuan pertama QC (#03): kamera langkah 3 diam 1,7 dtk → setiap shot wajib punya gerak pelan (drift), walau singkat.

**11B. Subtitle/teks kinetik per kata**
`scripts/kinetic.js` → `kineticSub(subEl, T, SUBS, WORDS)`. Kata muncul tepat saat diucapkan (naik halus 0,18 dtk), kata kunci `<b>` pop dengan overshoot; posisi kalimat tidak bergeser. `WORDS` = timestamp Scribe + offset narasi (0,3), disimpan di cfg sebagai `"words":[[mulai,selesai,"kata"],...]`. Kata layar yang beda dari ucapan (mis. "2×") otomatis diinterpolasi.

**11C. Motion blur di gerakan cepat**
`scripts/render_frames.js <page> <cfg> all|range A B|p t...` (+ `blend_blur.py`). Rentang di `cfg.blur=[[a,b],...]` dirender 3 sub-frame (shutter 180°) lalu dirata-rata. Pakai hanya di dive, whoosh, dan perpindahan kamera cepat (render 3× lebih lama di rentang itu).
