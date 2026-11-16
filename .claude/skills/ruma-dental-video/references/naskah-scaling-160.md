# Naskah "160 Permukaan Gigi": v3 TOFU [FINAL kandidat]

**v3 (16 Nov 2026)** menggantikan v1/v2 atas masukan Pak Dir: hook 40% di detik pertama, cara pakai benang gigi (±40 cm, lilit, selipkan, huruf C, naik turun), definisi scaling, "1 jam setahun" dihapus, SFX di setiap gerakan. File: `dalamgigi-01-160-permukaan-v3.mp4` (66 dtk). Scene: `arch3.html` + `arch3_cfg.json`. Validasi Pak Dir: cara benang OK, definisi scaling OK, scaling tiap 6 bulan OK.

Narasi v3:
```
[conversational] [warmly] Kamu sikat gigi dua kali sehari. Tapi hampir empat puluh persen permukaan gigimu, nggak pernah kesentuh sikat.
[curious] Kok bisa? [conversational] Coba hitung. Tiga puluh dua gigi, masing-masing punya lima sisi. Totalnya seratus enam puluh permukaan.
Sikat cuma menjangkau sisi depan, belakang, dan atas. Sisi samping, yang berhimpitan di sela gigi, kelewat. Enam puluh empat permukaan.
Di situ plak numpuk, lama-lama mengeras jadi karang. Dan karang nggak bisa hilang cuma disikat.
[cheerfully] Jadi butuh dua hal.
[conversational] Pertama, benang gigi, tiap hari. Ambil kira-kira empat puluh senti, lilitkan di jari, selipkan pelan ke sela gigi, lalu peluk sisi gigi membentuk huruf C, dan gerakkan naik turun. Ulangi di tiap sela.
Kedua, scaling, tiap enam bulan. Ini pembersihan karang gigi oleh dokter gigi, pakai alat bergetar yang merontokkan karang sampai ke garis gusi.
[warmly] Benang gigi buat tiap hari, scaling buat tiap enam bulan. Supaya seratus enam puluh permukaan itu, semuanya kebagian bersih.
```

---
Riwayat v1 di bawah.

# v1

Status: **Dirender 16 Nov 2026, menunggu review Pak Dir.** File: `tofu-160-permukaan-gigi.mp4` (50,5 dtk). Pak Dir minta **TOFU murni: tanpa ajakan ke klinik/chat admin**; penutup hanya kartu logo + tagline. Gaya isi: referensi jktlagi "Bayangin kalau seluruh Jakarta tinggal di menara" (pengandaian → rantai angka → "sisanya?" → manfaat pribadi).
Funnel: TOFU (edukasi murni, tanpa ajakan dan tanpa harga). Durasi 50,5 detik. Suara: Ricky, eleven_v4, satu generasi mengalir.

## Narasi Final TOFU (dikirim ke ElevenLabs, take 1, 45,4 dtk)

```
[conversational] [warmly] Bayangin semua permukaan gigimu dihitung satu per satu.
Tiga puluh dua gigi. Tiap gigi punya lima sisi. Jadi ada seratus enam puluh permukaan.
Waktu sikat gigi, yang kena biasanya sisi depan, belakang, dan atas.
[curious] Sisanya? [conversational] Sisi samping, yang saling berhimpitan di sela gigi.
Jumlahnya enam puluh empat permukaan. Hampir empat puluh persen, yang nggak tersentuh sikat.
Di situlah plak paling betah. Kalau dibiarkan, lama-lama mengeras jadi karang gigi. Dan karang nggak bisa hilang cuma disikat.
[cheerfully] Kabar baiknya, solusinya sederhana.
[conversational] Benang gigi tiap hari, buat sela-selanya. Dan scaling dua kali setahun, buat yang sudah mengeras.
Kalau dihitung, cuma sekitar satu jam dalam setahun.
[warmly] Satu jam, buat seratus enam puluh permukaan.
```

Kunci waktu (detik video) dan subtitle: `produksi-video-klinik/scripts/arch_cfg.json`. Adegan: `arch.html` (dua lengkung gigi dari atas seperti peta kota, 160 pelat permukaan, plak/karang di sela, sikat, benang, bar 8.760 jam, kartu logo).

## Adegan

Angka besar di pojok kanan atas (dengan label kecil di bawahnya) + subtitle per frasa di tengah bawah (area aman).

| # | Narasi | Visual | Angka pojok |
|---|---|---|---|
| 1 | Bayangin semua permukaan gigimu dihitung | Lengkung gigi 3D dilihat dari atas seperti peta kota, kamera melayang turun | — |
| 2 | Tiga puluh dua gigi | Gigi bermunculan satu per satu sepanjang lengkung (atas dan bawah) | **32** gigi |
| 3 | Tiap gigi punya lima sisi | Zoom ke satu geraham: depan, belakang, atas, dan dua sisi samping menyala bergantian | **5** sisi |
| 4 | Jadi ada 160 permukaan | Kamera mundur, semua sisi menyala | **160** permukaan |
| 5 | Waktu sikat gigi… depan, belakang, atas | Sikat 3D menyapu; sisi-sisi itu menjadi putih bersih | — |
| 6 | Sisanya? Sisi samping di sela gigi | Sela gigi tetap gelap, lalu menyala teal | **sisanya?** |
| 7 | 64 permukaan, hampir 40% | Penghitung naik ke 64 | **64** · **±40%** |
| 8 | Plak paling betah… mengeras jadi karang | Partikel kuning menumpuk di sela, berubah abu-abu keras | — |
| 9 | Karang nggak bisa hilang cuma disikat | Sikat menyapu, karang tetap | — |
| 10 | Kabar baiknya… benang gigi | Benang menyusup ke sela, plak terangkat | **1×** sehari |
| 11 | Scaling dua kali setahun | Karang terangkat bersih (alat scaler 3D sederhana) | **2×** setahun |
| 12 | Cuma sekitar satu jam setahun | Bar 8.760 jam, sepotong kecil menyala teal | **1 jam** / 8.760 jam |
| 13 | Satu jam, buat 160 permukaan | Lengkung gigi bersih, kamera naik | **160** |
| 14 | (tanpa narasi) | Kartu logo Ruma + tagline, tanpa ajakan | — |

## Validasi Medis dan Layanan (Pak Dir)

1. 32 gigi × 5 permukaan = 160; sikat menjangkau depan, belakang, atas; sisi samping (sela) tidak.
2. Sela = 64 permukaan (32 × 2), "hampir 40%" tidak tersentuh sikat.
3. Plak di sela mengeras menjadi karang; karang tidak hilang dengan disikat.
4. Benang gigi tiap hari; scaling 2 kali setahun.
5. **Durasi scaling di Ruma ±30 menit per kunjungan** (dasar kalimat "sekitar satu jam setahun").
