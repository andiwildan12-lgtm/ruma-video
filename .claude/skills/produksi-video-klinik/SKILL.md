---
name: produksi-video-klinik
description: Teknik produksi video iklan dan konten klinik gigi (UPG Dental Care, Ruma Dental, atau brand klinik lain) dari naskah sampai file MP4 jadi. Gunakan saat diminta membuat, merender, mengedit, atau merevisi video: menyusun alur naskah, papan gambar, narasi AI ElevenLabs, animasi 3D explainer, menggabungkan footage klinik, transisi, teks layar, audio, dan ekspor untuk Meta/Instagram/TikTok. Selalu pakai bersama skill brand-nya (misalnya ruma-dental-video) untuk gaya, warna, suara, dan data resmi.
---

# Produksi Video Klinik

Skill ini berisi **cara kerja dan teknik** yang sudah terbukti (iklan bleaching Ruma Dental v2, di-ACC 16 Nov 2026).
**Identitas brand** (warna, logo, suara narator, data harga, aturan khusus) **tidak ada di sini**; ambil dari skill brand:
- Ruma Dental → skill `ruma-dental-video`
- UPG Dental Care → belum ada (buat `upg-video` saat dibutuhkan)

Kalau brand belum jelas, tanyakan dulu konten ini untuk klinik yang mana.

---

## 1. Cara Bekerja dengan Pak Dir

- Panggil **"Pak Dir"**. Bahasa Indonesia yang tegas dan praktis. Jadilah teman diskusi yang **kritis**; audit hasil sendiri sebelum dikirim.
- Data kurang → buat asumsi kerja yang masuk akal, tandai bagian yang perlu divalidasi, jangan banyak bertanya.
- Pak Dir suka hasil cepat ("gas render"). Setelah naskah dan papan gambar di-OK, langsung produksi.
- Kredit ElevenLabs sudah diizinkan untuk produksi. Sebutkan perkiraan kredit yang terpakai di laporan.
- Naskah disimpan di folder skill brand (`references/`), menimpa file yang sama setiap revisi. **Jangan disimpan ke Google Drive.**
- Fokus ke video. Jangan menawarkan hal di luar video (template admin dan sejenisnya) kecuali diminta.

## 2. Gerbang Audit 3 Lapis Sebelum Render [WAJIB]

Tujuan: **tidak ada render dua kali.** Render hanya boleh dimulai setelah Pak Dir bilang OK **dan** tiga audit di bawah lulus.

Aturan:
- **URUTAN WAJIB, TIDAK BOLEH DILOMPATI:**
  1. Naskah → **OK Pak Dir**
  2. **Papan gambar** (gambar 9:16 per adegan dari frame probe, teks layar, narasi, footage yang dipakai) → kirim → **ACC Pak Dir**
  3. Baru buat suara ElevenLabs + efek suara
  4. Gerbang Audit 3 Lapis
  5. Render penuh
  (Pelajaran iklan tambal v1: papan gambar terlewat dan suara dibuat sebelum naskah OK.)
- **Suara ElevenLabs, efek suara, dan render baru boleh dibuat SETELAH naskah DAN papan gambar di-ACC Pak Dir** (pelajaran iklan tambal: suara terlanjur dibuat lalu naskah berubah).
- Setelah Pak Dir OK, **audit sendiri tanpa memberi saran atau ide baru**. Yang dicari hanya **kesalahan**, lalu langsung diperbaiki. Jangan membuka diskusi ulang.
- Kalau ada temuan yang mengubah isi (fakta medis, data harga, naskah), **tanya Pak Dir dulu**. Selain itu, perbaiki sendiri.
- Lapor ke Pak Dir hanya ringkasan: "Audit 1/2/3: lulus, X hal diperbaiki", lalu render.

**Audit 1: Naskah dan fakta**
- [ ] Fakta medis dan angka benar, atau sudah divalidasi Pak Dir.
- [ ] Data resmi (nama klinik, alamat, WA, harga) persis sama dengan skill brand.
- [ ] Funnel tepat: TOFU tanpa ajakan dan harga; MOFU/BOFU sesuai pola.
- [ ] Aturan iklan kesehatan: tanpa menyiratkan kondisi penonton, tanpa menakut-nakuti, tanpa janji hasil, tanpa kata "gratis".
- [ ] Narasi enak diucapkan, angka ditulis dengan kata, satu generasi mengalir.

**Audit 2: Visual dan papan gambar (pakai frame probe)**
- [ ] Render 6–12 frame probe dari seluruh durasi, lalu lihat lembar kontaknya.
- [ ] Tidak ada objek terpotong, teks menutupi objek penting, atau teks keluar dari area aman.
- [ ] Anti-monoton: kamera berganti tiap 2–4 detik, bentuk objek dikenali, suasana berubah per babak.
- [ ] Logo dan identitas brand benar; tidak ada atribut brand lain.
- [ ] Footage: casting benar (pasien ≠ admin), tanpa data sensitif (password, wajah tanpa izin).

**Audit 3: Teknis dan sinkron (terakhir sebelum render penuh)**
- [ ] Kunci waktu adegan cocok dengan jeda suara; subtitle cocok dengan kata yang diucapkan.
- [ ] Jumlah frame footage cukup (`max` = jumlah file); server lokal hidup.
- [ ] Durasi total sesuai target (TOFU 50–70 detik); kartu penutup benar.
- [ ] Cover/thumbnail sudah disiapkan (bagian 9).

## 2b. Alur Satu Konten

1. **Ide dan funnel.** Pak Dir suka iklan **MOFU/BOFU**: edukasi yang menyatu dengan jualan.
2. **Naskah** (narasi + teks layar + adegan). Audit sendiri: hook, logika medis, kapan brand disebut, alur perpindahan.
3. **Papan gambar** (HTML artifact): panel 9:16 per adegan, narasi, teks layar, bunyi, transisi, alur produksi.
4. **Tes gaya** 5–9 detik untuk adegan baru.
5. **Narasi ElevenLabs** (bagian 4).
6. **Gerbang Audit 3 Lapis** (bagian 2), lalu **render** (bagian 6), komposisi, encode, buat cover.
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
- Default 2 versi (±950 kredit per versi untuk ±50 detik). Unduh keduanya, pilih yang jedanya paling rapi.
- Panggil `creative_get_flow_run_status` sampai selesai, lalu unduh `content_url` dengan curl.

## 5. Gambar Mengikuti Suara

1. Ubah audio ke WAV mono, hitung RMS per 20 ms, cari jeda ≥0,18 detik (ambang ±28 dB di bawah persentil 95).
2. Cocokkan jeda dengan akhir kalimat di naskah. Untuk jeda di tengah kalimat, perkirakan proporsional dari jumlah kata.
3. Narasi mulai di detik 0,3. **Batas adegan = jeda antar-kalimat + 0,3.**
4. Akhiri dengan kartu penutup yang tampil 2–3 detik setelah narasi selesai.

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

**Job dan komposisi**
- `jobs.json`: per adegan `name`, `n` (frame + 8 cadangan), `D` (durasi detik), `out`, opsi `dir` / `max` / `opt` (teks `p`, `p0`, `wipe`, `s1`, `s2`).
- `node render2.js jobs.json` (±0,15–0,5 detik per frame). Untuk proses panjang, jalankan di latar dan tunggu notifikasi.
- `python3 compose.py`: segmen digabung dengan **crossfade 8 frame**. Perpindahan 3D → footage memakai **wipe** (misalnya wipe atap Ruma), tanpa crossfade.

**Audio dan encode**
```bash
# narasi mulai 0,3 dtk, -16 LUFS, suara latar ruangan sangat pelan, efek kecil opsional
ffmpeg -i narasi.mp3 -f lavfi -i "anoisesrc=color=brown:amplitude=0.6:d=<dur>,lowpass=f=420,highpass=f=60,volume=0.035" \
 -filter_complex "[0:a]adelay=300|300,loudnorm=I=-16:TP=-1.5:LRA=7,apad=whole_dur=<dur>[v];[1:a]afade=t=in:d=0.6[amb];[v][amb]amix=inputs=2:normalize=0[out]" \
 -map "[out]" -ar 48000 -ac 2 track.wav
ffmpeg -framerate 30 -i final2/%04d.jpg -i track.wav -c:v libx264 -pix_fmt yuv420p -crf 19 -c:a aac -b:a 160k -shortest -movflags +faststart out.mp4
```
Tanpa musik (aturan semua brand saat ini). Suara latar ruangan mencegah hening mati.

## 7. Prinsip Visual Umum

- Satu fokus per layar. Teks dua tingkat (label kecil + poin utama), singkat, di area aman (hindari ±15% atas dan ±35% bawah).
- Gerakan kamera pelan dan berlanjut antar-adegan. Angka berjalan untuk hook.
- Ilustrasi gigi: **senyum** (bibir + deretan gigi, tanpa wajah/mata), lalu zoom ke satu gigi untuk proses.
- **Potongan gigi wajib bergaya buku pelajaran** (`scripts/molar.js`): geraham dengan mahkota bertonjol + dua akar, dipotong tegak dari depan, lapisan email putih / dentin krem / saraf merah muda, boleh berlabel. Jangan bentuk kapsul atau balok (v1 iklan tambal ditolak Pak Dir karena tidak dikenali).
- Logo tampil alami di dalam adegan, dari file resmi; tidak dibuat AI.
- Casting footage: orang yang tampil sebagai pasien tidak boleh muncul juga sebagai admin dalam video yang sama.
- Lihat hasil sendiri sebelum mengirim: buat lembar kontak 12–16 frame dan periksa.

## 7a. Efek Suara (SFX) [DISEPAKATI]

Pak Dir minta setiap gerakan punya suara. Pustaka SFX (ElevenLabs `eleven_text_to_sound_v2`, 1 variasi per efek, ±19 kredit) ada di `scripts/sfx/`: `sikat`, `whoosh` (perpindahan kamera), `pop` (objek muncul/angka berganti), `floss`, `scaler` (alat scaling, pelan dan tidak menakutkan), `crack` (karang rontok). Pakai ulang; buat baru hanya bila gerakannya baru.
- Penempatan: tepat di detik gerakan (bukan per kalimat). Whoosh di setiap perpindahan sudut kamera besar.
- Level: narasi -16 LUFS; SFX -14 s/d -24 dB di bawahnya; suara latar ruangan tetap ada; `alimiter` di akhir. Tanpa musik.
- Skrip mixing: lihat contoh di bagian 6 (daftar event `(file, detik, durasi, dB)` → `adelay` + `amix`).

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

## 10. Laporan ke Pak Dir

Kirim video dengan `SendUserFile` (display render), lalu jelaskan singkat:
- Apa yang berubah dibanding versi sebelumnya.
- Tabel alur per detik.
- Hal yang perlu Pak Dir cek, terutama **pelafalan**, karena Claude tidak bisa mendengar audio.
- Kredit yang terpakai.

Ingatkan bahwa file di sesi cloud bersifat sementara dan perlu diunduh.
