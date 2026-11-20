# Serial Interaktif @dalamgigi — "Jelajah Mulut" Eps 1: Lidah (DRAF, menunggu validasi Pak Dir)

Konsep: penonton memilih ke mana kamera masuk berikutnya. Satu peta mulut dipakai ulang; lokasi yang sudah dikunjungi diberi tanda ✓, dua opsi berikutnya diberi pin A/B. Pemenang voting membuka episode berikutnya (dengan bukti komentar asli).

## Naskah (±30 dtk, ±79 kata)
| Dtk | Narasi | Kamera / visual | Teks layar |
|---|---|---|---|
| 0–5 | Ada yang minta bahas bau mulut. Coba tebak, kalau giginya sudah disikat, bagian mana yang belum kita lihat? | Kartu komentar muncul (username diburam) + balasan @dalamgigi; kamera tetap bergerak: tampak atas lengkung gigi bersih (sikat lewat, kilau teal), lalu menukik ke tengah mulut | Komentar "bau mulut min" → balasan "otw kak next konten" |
| 5–7 | Lidah. Tepatnya bagian belakang. | Peta mulut sekilas (1 dtk): pin "Lidah" menyala → potong ke lidah 3D, kamera mendekat ke pangkal | EPS 1 · LIDAH |
| 7–11 | Permukaannya berlekuk, jadi sisa makanan dan kuman nyangkut di sela-selanya. | Close-up miring: papila + lapisan putih, sisa makanan muncul satu-satu | tag: "lapisan putih" |
| 11–17 | Di situ kuman mengurai sisa makanan jadi gas berbau belerang. Inilah sumber bau mulut yang paling sering. | Kuman bergerak, gelembung gas hijau pucat naik ke kamera | tag: "gas belerang" · teks: "sumber paling sering" |
| 17–21 | Caranya: bersihkan lidah dari belakang ke depan, tiap sikat gigi. | Pembersih lidah menyapu belakang→depan, lapisan putih hilang | tag: "belakang → depan" |
| 21–30 | Kalau lidah sudah bersih tapi masih bau, kita cek ke mana: sela gigi, atau amandel? Pilih di komentar. Follow, biar nggak ketinggalan hasilnya. | Peta mulut penuh: Lidah ✓; pin A (sela gigi) & B (amandel) berdenyut; tombol vote | A = SELA GIGI · B = AMANDEL · "Ketik A atau B" |

## Aset dipakai ulang
napas.html (lidah, papila, lapisan putih, sisa makanan, kuman, gas, pembersih lidah, tampak atas mulut, sikat + kilau), kinetic.js, tag(), panel CTA (chip → tombol A/B), fade krem, SFX (whoosh, dive, pop, fizz, shimmer, click), render_frames/qc/cover_make, suara Ricky.

## Tambahan baru (paling sederhana)
1. Kartu komentar (HTML overlay, gaya panel CTA).
2. Peta mulut SVG 2D tampak atas (lengkung gigi, lidah, langit-langit, amandel) + status pin dari cfg (`visited`, `options`, `current`). Dipakai ulang tiap episode.
Amandel 3D TIDAK perlu di Eps 1 (cukup pin di peta); baru dibuat jika B menang.

## Aturan serial
- Voting via komentar "A/B", komentar pertama disematkan; tenggat 48 jam; hitung jujur, tanpa rekayasa. Sepi (<10 suara) → tetap pakai hasil yang ada + polling Story sebagai pendukung.
- Vote hanya memilih lokasi; isi medis tetap lewat audit + validasi Pak Dir.
- Username pengomentar diburam kecuali ada izin (privasi kesehatan).
- Tiap episode harus bisa dinikmati penonton baru (hook berdiri sendiri, peta berlabel).
- Pengecualian aturan "jangan janji topik": khusus serial, janji bersyarat ("pilihan terbanyak") dan wajib ditepati.
