# Transkrip Admin Behel Ruma (folder Behel/Ortho `1oImSQJFP_…`, direkam Agu 2026, transkripsi lokal 18 Nov 2026)

| Klip | Ucapan | Detik dipakai |
|---|---|---|
| 4436 | Spil harga pasang behel di Ruma Dental, dong! | 0,0–3,5 |
| 4438 | Memang pasang behel harus mahal? … Eits, tunggu dulu. Di Ruma Dental… | 1,6–6,5 |
| 4454 | Di Ruma Dental, harga mulai 6 jutaan, atau kamu bisa mulai dengan cicilan mulai 2 juta per bulan selama 3 bulan, tanpa bunga. | 2,4–10,9 |
| 4463 | Terus, sudah dapat apa aja, sih? Pastinya sudah termasuk pemasangan behel rahang atas dan bawah, scaling, cetak gigi, foto intra oral ekstra oral, konsultasi dengan dokter gigi, dan sudah dapat satu paket ortho kit. | 1,9–16,1 |
| 4467 | Masih ada yang mau ditanyakan? Yuk, klik nomor yang ada di bawah. | 2,3–6,0 (7,1–7,8 salah ucap, buang) |

⚠️ Validasi Pak Dir: harga mulai 6 jutaan + cicilan 2 jt/bln × 3 tanpa bunga masih berlaku? (rekaman Agustus)
Catatan: yang disebut adalah foto intra/ekstra oral, BUKAN rontgen.

## Temuan audit (18 Nov 2026)
- ⚠️ Seragam admin (bicara ke kamera & resepsionis 4429–4432) bertuliskan **"UPG Dental Care"**. Solusi: klip bicara dibingkai rapat kepala–bahu (crop 740×1316 dari x170 y20, diskalakan ke 1080×1920); 4429 tidak dipakai, diganti papan logo 4420.
- Harga behel mulai Rp6 jutaan, cicilan Rp2 jt/bln × 3 tanpa bunga: **masih berlaku (dikonfirmasi Pak Dir 18 Nov 2026)**.
- Papan gambar Jenis B v1: `papan-gambar-behel-spil-harga-B-v1.png`, EDL: `edl-behel-spil-harga-B.json`.
- Harga per rahang Rp3 jt; "mulai Rp6 jutaan" = atas & bawah (Pak Dir, 18 Nov 2026). Ditampilkan di kartu harga & kartu penutup.
- Render Jenis B v1: `scripts/bicara/build.py` (potong per segmen + overlay PNG transparan + concat, loudnorm -16). Klip pembuka 4436 crop lebih rapat (720×1280 dari x180 y0) karena ikon bordir UPG mengintip.
- Revisi zona aman Meta (18 Nov 2026): crop admin 720×1280 dari x180 y220 (wajah naik ke area aman), pita krem gradasi 420 px di bawah (menutup bordir UPG, area itu tertutup UI Meta), subtitle bottom 1300 px, kartu harga top 300, kotak komentar right 80/bottom 1345, subtitle di adegan harga dihapus (kartu harga sudah memuatnya), kartu penutup y 310–≈1200.
