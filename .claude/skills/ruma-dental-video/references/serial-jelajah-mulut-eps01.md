# Serial Interaktif @dalamgigi — "Jelajah Mulut" = konten #07 (DRAF, menunggu validasi Pak Dir)

Keputusan Pak Dir 20 Nov: #06 bau mulut tetap tayang; serial dimulai di #07; behel geser ke #08.
Konsep: penonton memilih ke mana kamera masuk. Satu peta mulut dipakai ulang; lokasi dikunjungi = ✓, dua opsi berikutnya = pin A/B. Episode dibuka dengan hasil voting ASLI.

## Alur voting
- Voting pertama dibuka di komentar sematan + caption #06: **A = alur gigi geraham, B = balik gigi depan bawah.** Tutup 48 jam.
- Admin hitung (1 akun = 1 suara), screenshot 2–3 komentar asli (nama diburam). Sepi (<10) → tetap pakai hasil + polling Story. Tidak boleh rekayasa.
- Kedua naskah disiapkan; yang dirender hanya pemenang.

## Naskah A — Alur gigi geraham (±30 dtk)
| Dtk | Narasi | Kamera | Teks layar |
|---|---|---|---|
| 0–4 | Kalian pilih A: alur gigi geraham. Ayo masuk. | Kartu hasil voting + 2 komentar asli; kamera sudah menukik dari tampak atas mulut | "A menang · xx%" |
| 4–6 | (lanjutan) | Peta sekilas: pin geraham menyala | EPS 1 · ALUR GERAHAM |
| 6–11 | Permukaan kunyah geraham penuh alur. Ada yang lebih sempit dari sehelai bulu sikat. | Close-up atas M1 (sculpt), kamera menyusur alur; bulu sikat 3D datang, tidak muat | "lebih sempit dari bulu sikat" |
| 11–17 | Sisa makanan dan kuman masuk ke dasarnya. Makanya lubang gigi paling sering mulai di sini. | Potongan melintang alur (dari #02 "gua"): kuman turun, titik gelap muncul di dasar | "lubang sering mulai di sini" |
| 17–22 | Caranya: sikat permukaan kunyah maju-mundur pendek. Untuk anak, alurnya bisa ditutup lapisan pelindung di dokter gigi. | Sikat maju-mundur; lapisan toska menutup alur | "maju-mundur pendek" · "lapisan pelindung alur" |
| 22–30 | Selanjutnya kita masuk ke mana? A atau B? Ketik di komentar. Follow biar nggak ketinggalan. | Peta penuh: geraham ✓, pin A/B baru berdenyut | opsi baru |

## Naskah B — Balik gigi depan bawah (±30 dtk)
| Dtk | Narasi | Kamera | Teks layar |
|---|---|---|---|
| 0–4 | Kalian pilih B: balik gigi depan bawah. Ayo masuk. | Kartu hasil voting + komentar asli; kamera menukik | "B menang · xx%" |
| 4–6 | (lanjutan) | Peta sekilas: pin gigi depan bawah menyala | EPS 1 · BALIK GIGI DEPAN BAWAH |
| 6–12 | Tepat di bawah lidah, di belakang gigi depan bawah, ada muara kelenjar air liur. | Kamera dari dalam mulut menghadap ke depan, lidah terangkat; titik muara berdenyut | "muara air liur" |
| 12–18 | Air liur membawa mineral, jadi plak di sini paling cepat mengeras jadi karang. | Pita plak (teknik #05) di sisi dalam gigi depan, berubah warna jadi karang | "plak → karang" |
| 18–23 | Caranya: sikat bagian dalam dengan sikat diberdirikan, gerakan naik-turun. Karang yang sudah keras dibersihkan dokter gigi. | Sikat tegak naik-turun; scaler | "sikat berdiri, naik-turun" · "scaling" |
| 23–30 | Selanjutnya kita masuk ke mana? A atau B? Ketik di komentar. Follow biar nggak ketinggalan. | Peta penuh: depan bawah ✓, pin A/B baru | opsi baru |

## Opsi lanjutan (Eps 2), diusulkan
Dari A: B-lama (balik gigi depan bawah) vs langit-langit/amandel. Dari B: alur geraham vs gusi geraham. Diputuskan saat naskah Eps 1 final.

## Aset dipakai ulang
napas.html (tampak atas mulut, sikat + kilau, lidah), gusi.html (sculpt M1, pita plak/karang, gusi, scaler), gua.html #02 (potongan lubang), kinetic.js, tag(), panel CTA (chip → tombol A/B), fade krem, SFX, suara Ricky, render/qc/cover.

## Tambahan baru (paling sederhana)
1. Kartu hasil voting + komentar (HTML overlay, gaya panel CTA).
2. Peta mulut SVG 2D tampak atas + status pin dari cfg (`visited`, `options`, `current`). Dipakai ulang tiap episode.
3. Hanya untuk B: gigi depan bawah (bentuk seri sederhana, sculpt pipih) + muara air liur (titik berdenyut).
4. Hanya untuk A: "bulu sikat" tunggal + lapisan pelindung alur (material toska).

## Aturan serial
- Vote hanya memilih lokasi; isi medis tetap lewat audit + validasi Pak Dir.
- Username diburam kecuali ada izin (privasi kesehatan).
- Tiap episode harus bisa dinikmati penonton baru.
- Pengecualian aturan "jangan janji topik": khusus serial, janji bersyarat dan wajib ditepati.

## Validasi Pak Dir
1. A: "ada alur yang lebih sempit dari sehelai bulu sikat" + "lubang paling sering mulai di alur" + sealant untuk anak.
2. B: muara kelenjar air liur di bawah lidah belakang gigi depan bawah → karang paling cepat di sana.
3. Opsi Eps 2.
