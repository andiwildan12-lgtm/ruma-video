# ruma-video

Repo privat untuk produksi video Klinik Gigi Ruma Dental dan akun TOFU **@dalamgigi**.

Buka sesi Claude Code dengan repo ini terpilih, maka skill di `.claude/skills/` otomatis aktif:

- `dalamgigi` — identitas akun, aturan isi, formula video, sampul, caption, rencana konten, log unggahan.
- `ruma-dental-video` — identitas brand Ruma (warna, logo, suara narator, data resmi, aturan iklan).
- `produksi-video-klinik` — teknik produksi (3D three.js, narasi ElevenLabs, SFX, audit 4 lapis + QC otomatis, teks kinetik, motion blur, paket kirim) + jalur baru: transkripsi lokal, video orang bicara, iklan caption kinetik + stiker, blur logo/data pasien.
- `motion-klinik-gigi`: konsep cepat video UPG/Ruma/GrowWith (brief, storyboard, hook, prompt Canva/AI). Produksi tetap lewat skill brand.
- `panduan-visual-terpadu`: aturan visual terkunci UPG, Ruma, GrowWith dari Canva.

**Repo dipisah:** repo ini untuk Ruma + Dalam Gigi; UPG + GrowWith di repo `upg-video`. Skill bersama (`produksi-video-klinik`, `motion-klinik-gigi`, `panduan-visual-terpadu`, `antislop` x3, daftar di `.claude/skill-bersama.txt`) ada utuh di kedua repo; setelah diubah jalankan `bash .claude/scripts/skill-bersama.sh kirim`. Unduh semua skill: `bash .claude/scripts/skill-bersama.sh zip` → `dist/skill-ruma-video-lengkap.zip`.
- `desain-grafis-ruma` — poster/desain statis feed & story sesuai panduan resmi Canva (Neue Montreal + Montserrat sejak 20 Nov 2026, Deep Teal/Turquoise).
- `antislop`, `antislop-ui`, `antislop-copywriting` — filter anti-AI-slop (v3.2.32, MIT) untuk semua visual dan teks Ruma & UPG. Mode default **during**; "audit pakai antislop" = mode **after**. Ikut tersinkron ke sesi repo `upg-video`.

Perintah cepat: "Buat konten Dalam Gigi #04" (atau "gas #04"). Indeks skrip: `.claude/skills/produksi-video-klinik/scripts/README.md`.
