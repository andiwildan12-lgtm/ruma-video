# ruma-video

Repo privat untuk produksi video Klinik Gigi Ruma Dental dan akun TOFU **@dalamgigi**.

Buka sesi Claude Code dengan repo ini terpilih, maka skill di `.claude/skills/` otomatis aktif:

- `dalamgigi` — identitas akun, aturan isi, formula video, sampul, caption, rencana konten, log unggahan.
- `ruma-dental-video` — identitas brand Ruma (warna, logo, suara narator, data resmi, aturan iklan).
- `produksi-video-klinik` — teknik produksi (3D three.js, narasi ElevenLabs, SFX, audit 4 lapis + QC otomatis, teks kinetik, motion blur, paket kirim) + jalur baru: transkripsi lokal, video orang bicara, iklan caption kinetik + stiker, blur logo/data pasien.
- `desain-grafis-ruma` — poster/desain statis feed & story sesuai panduan resmi Canva (Poppins + Open Sans, Deep Teal/Turquoise).
- Skill UPG Dental Care (umum, Antang, Hertasning) ada di repo terpisah `upg-video`. Saat sesi mulai, hook `.claude/hooks/sinkron-skill.sh` mengambil skill itu otomatis, jadi skill Ruma dan UPG saling terlihat. Paling stabil: tambahkan **kedua repo** ke environment *Video Editing*.

Perintah cepat: "Buat konten Dalam Gigi #04" (atau "gas #04"). Indeks skrip: `.claude/skills/produksi-video-klinik/scripts/README.md`.
