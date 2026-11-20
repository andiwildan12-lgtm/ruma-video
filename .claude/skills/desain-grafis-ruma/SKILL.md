---
name: desain-grafis-ruma
description: Desain grafis statis Klinik Gigi Ruma Dental (poster/iklan feed 4:5, story 9:16, carousel) mengikuti panduan visual resmi Ruma dari Canva (Neue Montreal + Montserrat, Deep Teal #354B49, Turquoise #28CDBD, putih + Mint White). Gunakan setiap kali Pak Dir minta poster, desain feed/story, materi iklan statis, atau grafis pendamping video untuk Ruma Dental. Pakai bersama skill ruma-dental-video untuk data resmi dan aturan orang di visual.
---

# Desain Grafis Ruma Dental

Panggil **"Pak Dir"**. Panduan resmi: `references/panduan-visual-ruma.md` (**wajib**; sumber Canva `DAHbTZUHi_Q`, versi 20 Nov 2026). Data resmi (harga, alamat, WA, SOP) diambil dari skill `ruma-dental-video` bagian 4.

## 1. Aturan Visual [RESMI]
- Font grafis **dan** video: **Neue Montreal** (judul Bold, subjudul Regular) + **Montserrat** (isi). Berlaku sejak 20 Nov 2026; Poppins + Open Sans **tidak dipakai lagi**.
- File Neue Montreal belum ada (font berbayar). Sampai file berlisensi tersedia: render lokal pakai **Montserrat** untuk judul dan isi; desain yang wajib Neue Montreal dikerjakan di Canva.
- Template `templates/behel/gfx.html` **sudah Montserrat** (20 Nov 2026, font di `templates/behel/fonts/`; ganti src keluarga `P` saja saat Neue Montreal tersedia). Template draf `poster-*.html` masih Poppins + Open Sans: jangan dipakai sebelum dimigrasikan.
- Silver Grey resmi **#54665D** (bukan #B3B3B3) untuk garis/elemen pendukung.
- Warna: teks **Deep Teal #354B49**; **Turquoise #28CDBD** hanya untuk blok/chip/ikon (teks di atasnya Deep Teal, **jangan** Turquoise sebagai warna teks); latar putih dominan + **Mint White #E8F8F6**. Tanpa oranye (warna UPG #FA7209). Konten Ruma tidak di-mirror ke akun GrowWith.
- Maks. 2 keluarga font, hindari HURUF KAPITAL SEMUA, hierarki ukuran sesuai panduan (headline 64–90 px pada 1080×1350).
- Logo asli (`../ruma-dental-video/assets` / `card_logo.png`), tanpa ubah proporsi.
- Bingkai foto bentuk **atap** (clip-path) khas Ruma.

## 2. Aturan Isi [DISEPAKATI 18 Nov 2026]
- Foto dari footage asli Ruma; **wajah dokter tidak ditampilkan** (dari belakang/bahu, tangan bekerja, close-up gigi berbehel). MOFU menonjolkan dokter **sedang bekerja/konsul**, bukan wajah pasien saja.
- **Wajah orang tidak boleh terpotong** kartu/teks (cek dahi–dagu utuh).
- Atribut brand lain (seragam UPG) dan data pasien (label rontgen) **wajib di-blur** sebelum dipakai.
- Bahasa tenang & jelas sesuai positioning premium; hindari "tanpa harus lunas", "murah".
- Klaim mengikuti aturan iklan kesehatan (tanpa janji hasil, tanpa before/after, hook bukan pertanyaan pribadi).
- Story 9:16: semua teks penting di **y 270–1620** (zona aman); isi panjang diringkas satu baris. Feed 4:5: tombol & kartu tidak bertumpuk.

## 3. Template
- **`templates/behel/gfx.html` + `shot.js`** (terbukti, 18 Nov 2026): varian B (admin + kotak "Balas komentar" + kartu harga), C (foto perawatan + kartu harga), M (MOFU 3 langkah, tanpa harga), format feed & story. Ganti foto/teks per layanan di objek `V`.
- Template lama `poster-*.html`, `ruma.css` (krem + Outfit) = **draf, jangan dipakai** sebelum disesuaikan ke palet/font resmi.

## 4. Alur
Filter **antislop** (mode during, lihat CLAUDE.md) berlaku untuk setiap desain: kontras WCAG, tanpa klaim/angka karangan, alasan tertulis per keputusan visual, laporan PASS/FAIL saat kirim. Identitas Ruma tetap menang bila bentrok.
Teks/konsep OK Pak Dir → render → audit (zona aman, wajah utuh, blur, kontras, data resmi) → kirim feed + story → simpan ke `ruma-dental-video/desain-<layanan>/` dan catat revisi di `CATATAN-DRAF.md`.

## 5. Contoh terbit
`desain-behel/`: spil-harga-admin, spil-harga-klinik, mofu-3-langkah (feed 4:5 + story 9:16), 18 Nov 2026.
