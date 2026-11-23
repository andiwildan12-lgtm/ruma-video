# Iklan Tambal Gigi v2 (BOFU, 50 detik) — papan gambar di-ACC, dirender

**v2 (17 Nov 2026):** ilustrasi diganti potongan geraham gaya buku pelajaran (email/dentin/saraf berlabel, dua akar) karena v1 (kapsul) tidak dikenali Pak Dir. Garansi: narasi "Ada garansi setelah perawatan.", teks layar "Garansi / setelah perawatan", kartu "garansi setelah perawatan · dokter gigi". File `iklan-tambal-ruma-v2.mp4`, papan gambar `papan-gambar-tambal-v2.png`. Scene gigi: `produksi-video-klinik/scripts/molar.js` (m_hook, m_slice, m_paths, m_fill).

---
Riwayat v1:

File: `iklan-tambal-ruma-v1.mp4`. Pola mengikuti iklan bleaching (meja kerja/es teh sebagai benang cerita, 3D gigi, brand di tengah, footage klinik, kartu harga).

Data resmi (Pak Dir, 17 Nov 2026): tambal gigi **mulai Rp250.000**, **bergaransi** (durasi/syarat belum ditulis), **dikerjakan dokter gigi**, tambalan **sewarna gigi** (komposit). Izin pasien footage tambal: ada.

## Narasi (ElevenLabs Ricky, take A, 37,7 dtk; ditempatkan dengan jeda napas ±1 dtk)
```
[conversational] [warmly] Lubang gigi itu nggak pernah nutup sendiri.
Awalnya cuma ngilu sedikit pas minum dingin. Jadi… dicuekin.
Padahal di dalam, lubangnya pelan-pelan melebar, makin dekat ke saraf.
Kalau masih kecil, cukup ditambal. Kalau sudah sampai saraf, bisa sakit berdenyut, dan perawatannya jadi lebih panjang.
[cheerfully] Solusinya, perawatan tambal gigi. [conversational] Di Klinik Gigi Ruma Dental, tambal gigi mulai dua ratus lima puluh ribu.
Gigimu dicek dulu, lalu dikerjakan langsung oleh dokter gigi. Tambalannya sewarna gigi.
[warmly] Senyum lagi. Es teh pun aman lagi.
[conversational] Bergaransi. Chat admin, cek dulu gigimu, ya.
```

## Adegan
0–3,6 hook gigi bertitik gelap · 3,6–8,6 es teh di meja · 8,6–13,8 potongan gigi samping: lubang mendekati saraf · 13,8–21,6 layar terbelah "Sekarang: ditambal / Nanti: saluran akar" · 21,6–28,6 lubang ditambal sewarna gigi → senyum utuh, "mulai Rp250.000" · 28,6–32 wipe atap → dokter menambal (Tambal IMG_9886) · 32–34,6 sinar biru (IMG_9884) · 34,6–37 pasien bercermin (IMG_9892) · 37–39,6 es teh lagi · 39,6–42,4 papan logo (IMG_4420) · 42,4–50 kartu harga.
Scene: `produksi-video-klinik/scripts/tambal.js` (di atas scene.html + extra.js + smile.js).

## Keputusan Pak Dir selama penyusunan
- **Dilarang** "nyaris nggak kelihatan" (klaim berbahaya). Cukup "sewarna gigi".
- **Dilarang** "dikeraskan dengan sinar" di narasi (klip sinar biru boleh tampil).
- Solusi disebut tegas: "Solusinya, perawatan tambal gigi. Di Klinik Gigi Ruma Dental, tambal gigi mulai …".
- Gejala jalur "nanti": "bisa sakit berdenyut".
- Pelajaran proses: **jangan membuat suara ElevenLabs sebelum naskah di-OK Pak Dir.**
