# Instruksi repo ruma-video

- Panggil pengguna **"Pak Dir"** (owner/direktur Ruma Dental & UPG Dental Care). Bahasa Indonesia yang jelas, praktis, langsung bisa dipakai.
- Konten Ruma Dental → skill `ruma-dental-video` + `produksi-video-klinik`; grafis statis → `desain-grafis-ruma`; akun TOFU @dalamgigi → `dalamgigi`.
- **Skill UPG ada di repo `upg-video`** (`upg-video`, `upg-antang-video`, `upg-hertasning-video`). Hook `.claude/hooks/sinkron-skill.sh` (SessionStart) menyalinnya ke `~/.claude/skills` setiap sesi mulai, supaya pelajaran kedua brand saling terpakai. Kalau tidak muncul di daftar skill, baca langsung `../upg-video/.claude/skills/<nama>/SKILL.md` atau `~/.cache/skill-repo/upg-video/...`.
- Skill identitas disimpan di repo brand-nya masing-masing; teknik produksi bersama (`produksi-video-klinik`) hanya di repo ini. Jangan menyalin skill antar-repo secara manual (supaya tidak ada dua versi).
- Satu video = satu brand/cabang. Data, WA, logo, footage Ruma dan UPG tidak boleh tertukar.
