# Desain Grafis Ruma Dental — DRAF (belum di-ACC)

Status: kerangka uji coba, 17 Nov 2026. **Belum ada SKILL.md**, jadi skill belum aktif.
Menunggu diskusi dengan Pak Dir: alur kerja, prioritas jenis desain, akun tujuan,
visual pendukung (foto/3D), referensi gaya, dan data yang masih kosong.

Panduan resmi dari Canva: `references/panduan-visual-ruma.md` (wajib diikuti — **Pak Dir memutuskan ikut panduan resmi, 17 Nov 2026**). Draf CSS (krem + Outfit) di bawah **belum disesuaikan** dan tidak boleh dipakai sebelum diganti ke palet/font resmi.

Isi saat ini:
- `scripts/render.js` — spec JSON → PNG per slide + lembar kontak (`node render.js <spec.json> [output]`).
- `templates/ruma.css` — gaya visual (krem, teal, motif atap, Outfit).
- `contoh/*.json` — contoh uji: carousel scaling vs bleaching, poster bleaching feed & story.

Aturan sementara: render hanya setelah teks di-OK Pak Dir.

## Template resmi pertama yang dipakai (18 Nov 2026): `templates/behel/gfx.html`
Feed 4:5 + Story 9:16, **palet & font resmi** (Poppins judul, Open Sans isi, Deep Teal #354B49, Turquoise #28CDBD blok, putih + Mint White). Tiga varian: B (admin + "balas komentar" + harga), C (foto perawatan + harga), M (MOFU tanpa harga, 3 langkah). Story: teks penting di y 270–1620 (zona aman), isi paket diringkas satu baris. Foto dari footage dengan blur logo UPG/label rontgen. Hasil: `ruma-dental-video/desain-behel/`.
