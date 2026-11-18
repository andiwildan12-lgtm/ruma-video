// Render desain grafis Ruma Dental: spec JSON -> PNG per slide + lembar kontak.
// Pakai: node render.js <spec.json> [folder-output]
// Lihat SKILL.md untuk format spec dan daftar tipe slide.
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const SKILL = path.resolve(__dirname, '..');
const BRAND = path.resolve(SKILL, '../ruma-dental-video/assets');
const url = p => 'file://' + path.resolve(p);

const FORMAT = {
  feed: { w: 1080, h: 1350 },   // 4:5 feed IG/FB, carousel, iklan feed
  square: { w: 1080, h: 1080 },  // 1:1
  story: { w: 1080, h: 1920 },   // 9:16 story/reels/iklan story
};

const DATA = {
  nama: 'Klinik Gigi Ruma Dental',
  tagline: 'Tempat Nyaman untuk Kembali Tersenyum',
  alamat: 'Jl. Rusa No. 65, Maricaya, Makassar',
  wa: 'WA 0898-7735-463',
};

const esc = s => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
// **kata** -> sorotan teal
const rich = s => esc(s).replace(/\*\*(.+?)\*\*/g, '<mark>$1</mark>').replace(/\n/g, '<br>');

const ROOF = (cls = 'roof') =>
  `<svg class="${cls}" viewBox="0 0 400 140" preserveAspectRatio="none"><path d="M14 126 L200 18 L386 126" fill="none" stroke="currentColor" stroke-width="22" stroke-linejoin="round" stroke-linecap="round"/></svg>`;

function header(i, n, tema) {
  const page = n > 1 ? `<div class="pg">${String(i + 1).padStart(2, '0')}<span>/${String(n).padStart(2, '0')}</span></div>` : '';
  return `<div class="hd"><div class="brand"><img src="${url(BRAND + '/sym.png')}"><span>Klinik Gigi <b>Ruma Dental</b></span></div>${page}</div>`;
}
function footer(i, n, s) {
  const last = i === n - 1;
  const geser = n > 1 && !last ? `<div class="geser">geser <i>→</i></div>` : '';
  const kiri = s.kaki ?? '';
  return `<div class="ft"><div class="ftl">${esc(kiri)}</div>${geser}</div>`;
}

const T = {
  sampul: s => `
    <div class="mid sampul">
      ${s.label ? `<div class="pill">${esc(s.label)}</div>` : ''}
      <h1>${rich(s.judul)}${s.aksen ? `<br><span class="aksen">${esc(s.aksen)}</span>` : ''}</h1>
      ${s.sub ? `<p class="sub">${rich(s.sub)}</p>` : ''}
    </div>
    ${s.gambar ? `<div class="hero"><img src="${url(s.gambar)}"></div>` : `<div class="deco">${ROOF()}</div>`}`,

  poin: s => `
    <div class="mid poin">
      ${s.nomor ? `<div class="no">${esc(s.nomor)}</div>` : ''}
      ${s.label ? `<div class="pill">${esc(s.label)}</div>` : ''}
      <h2>${rich(s.judul)}</h2>
      ${s.isi ? `<p class="isi">${rich(s.isi)}</p>` : ''}
      ${s.catatan ? `<div class="note">${rich(s.catatan)}</div>` : ''}
    </div>`,

  angka: s => `
    <div class="mid angka">
      ${s.label ? `<div class="pill">${esc(s.label)}</div>` : ''}
      <div class="big">${esc(s.angka)}<small>${esc(s.satuan || '')}</small></div>
      <h2>${rich(s.judul)}</h2>
      ${s.isi ? `<p class="isi">${rich(s.isi)}</p>` : ''}
    </div>`,

  langkah: s => `
    <div class="mid langkah">
      ${s.label ? `<div class="pill">${esc(s.label)}</div>` : ''}
      <h2>${rich(s.judul)}</h2>
      <ol>${(s.daftar || []).map((d, k) => {
        const [a, b] = Array.isArray(d) ? d : [d, ''];
        return `<li><span class="n">${k + 1}</span><div><b>${rich(a)}</b>${b ? `<p>${rich(b)}</p>` : ''}</div></li>`;
      }).join('')}</ol>
    </div>`,

  banding: s => `
    <div class="mid banding">
      ${s.label ? `<div class="pill">${esc(s.label)}</div>` : ''}
      <h2>${rich(s.judul)}</h2>
      <div class="cols">${(s.kolom || []).map((c, k) => `
        <div class="col c${k}"><div class="ch">${esc(c.nama)}</div>
          ${(c.baris || []).map(r => `<div class="cr">${rich(r)}</div>`).join('')}
        </div>`).join('')}</div>
      ${s.catatan ? `<div class="note">${rich(s.catatan)}</div>` : ''}
    </div>`,

  promo: s => `
    <div class="mid promo">
      ${s.label ? `<div class="pill">${esc(s.label)}</div>` : ''}
      <h1 class="lay">${esc(s.layanan)}</h1>
      ${s.chip ? `<div class="chip">${esc(s.chip)}</div>` : ''}
      ${s.coret ? `<div class="coret">${esc(s.coret)}</div>` : ''}
      <div class="harga">${esc(s.harga)}</div>
      ${s.diskon ? `<div class="disk">${esc(s.diskon)}</div>` : ''}
      ${s.isi ? `<p class="isi">${rich(s.isi)}</p>` : ''}
      ${s.ketentuan ? `<div class="ket">${rich(s.ketentuan)}</div>` : ''}
    </div>`,

  penutup: s => `
    <div class="mid penutup">
      <img class="logo" src="${url(BRAND + '/card_logo.png')}">
      <div class="tag">${esc(DATA.tagline)}</div>
      ${s.ajakan ? `<h2>${rich(s.ajakan)}</h2>` : ''}
      <div class="kontak">
        <div class="wa">${esc(s.wa ?? DATA.wa)}</div>
        <div class="al">${esc(s.alamat ?? DATA.alamat)}</div>
      </div>
      ${s.catatan ? `<div class="ket">${rich(s.catatan)}</div>` : ''}
    </div>`,

  // Poster iklan tunggal (satu gambar): judul + penawaran + kontak di bawah
  poster: s => `
    ${s.gambar ? `<div class="pfoto"><img src="${url(s.gambar)}"></div>` : `<div class="deco p">${ROOF()}</div>`}
    <div class="mid poster ${s.gambar ? 'withimg' : ''}">
      ${s.label ? `<div class="pill">${esc(s.label)}</div>` : ''}
      <h1>${rich(s.judul)}${s.aksen ? `<br><span class="aksen">${esc(s.aksen)}</span>` : ''}</h1>
      ${s.sub ? `<p class="sub">${rich(s.sub)}</p>` : ''}
      ${s.harga ? `<div class="offer">
          ${s.layanan ? `<div class="ol">${esc(s.layanan)}${s.chip ? ` <span class="chip sm">${esc(s.chip)}</span>` : ''}</div>` : ''}
          <div class="orow">${s.coret ? `<span class="coret">${esc(s.coret)}</span>` : ''}<span class="harga">${esc(s.harga)}</span>${s.diskon ? `<span class="disk">${esc(s.diskon)}</span>` : ''}</div>
        </div>` : ''}
    </div>
    <div class="bar"><div><b>${esc(s.wa ?? DATA.wa)}</b><span>${esc(s.alamat ?? DATA.alamat)}</span></div>${s.cta ? `<div class="cta">${esc(s.cta)}</div>` : ''}</div>`,
};

function page(spec) {
  const f = FORMAT[spec.format || 'feed'];
  if (!f) throw new Error('format tidak dikenal: ' + spec.format);
  const n = spec.slides.length;
  const slides = spec.slides.map((s, i) => {
    if (!T[s.tipe]) throw new Error(`slide ${i + 1}: tipe "${s.tipe}" tidak dikenal`);
    const tema = s.tema || (s.tipe === 'penutup' || s.tipe === 'promo' ? 'krem' : 'krem');
    return `<section class="s ${spec.format || 'feed'} t-${s.tipe} tema-${tema}" id="s${i}" style="width:${f.w}px;height:${f.h}px">
      ${header(i, n, tema)}${T[s.tipe](s)}${s.tipe === 'poster' ? '' : footer(i, n, s)}</section>`;
  }).join('\n');
  const css = fs.readFileSync(path.join(SKILL, 'templates/ruma.css'), 'utf8')
    .replace('__FONT__', url(BRAND + '/font2.woff2'));
  return `<!doctype html><html><head><meta charset="utf-8"><style>${css}</style></head><body>${slides}</body></html>`;
}

(async () => {
  const specPath = process.argv[2];
  if (!specPath) { console.error('pakai: node render.js <spec.json> [output]'); process.exit(1); }
  const spec = JSON.parse(fs.readFileSync(specPath, 'utf8'));
  const out = path.resolve(process.argv[3] || path.join('output', spec.nama || 'desain'));
  fs.mkdirSync(out, { recursive: true });
  // path gambar relatif terhadap file spec
  for (const s of spec.slides) if (s.gambar && !path.isAbsolute(s.gambar)) s.gambar = path.resolve(path.dirname(specPath), s.gambar);
  const html = path.join(out, '_build.html');
  fs.writeFileSync(html, page(spec));

  const f = FORMAT[spec.format || 'feed'];
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: f.w, height: f.h }, deviceScaleFactor: 1 });
  await p.goto(url(html));
  await p.evaluate(() => document.fonts.ready);
  await p.waitForTimeout(300);
  // cek teks meluap
  const over = await p.evaluate(() => [...document.querySelectorAll('section.s')].map((sec, i) => {
    const r = sec.getBoundingClientRect(); const bad = [];
    sec.querySelectorAll('.mid *, .bar *').forEach(el => { const e = el.getBoundingClientRect();
      if (e.width && (e.right > r.right - 40 || e.left < r.left + 40 || e.bottom > r.bottom - 20)) bad.push(el.className || el.tagName); });
    return bad.length ? `slide ${i + 1}: ${[...new Set(bad)].join(', ')}` : null; }).filter(Boolean));
  const files = [];
  for (let i = 0; i < spec.slides.length; i++) {
    const name = spec.slides.length > 1 ? `${spec.nama}-${String(i + 1).padStart(2, '0')}.png` : `${spec.nama}.png`;
    await p.locator('#s' + i).screenshot({ path: path.join(out, name) });
    files.push(name);
  }
  // lembar kontak
  if (files.length > 1) {
    const sc = 0.32, gap = 24;
    const W = Math.round(f.w * sc), H = Math.round(f.h * sc);
    const cols = Math.min(files.length, 5), rows = Math.ceil(files.length / cols);
    await p.setViewportSize({ width: cols * (W + gap) + gap, height: rows * (H + gap) + gap });
    fs.writeFileSync(path.join(out, '_kontak.html'), `<body style="margin:0;background:#E9E4DA;display:flex;flex-wrap:wrap;gap:${gap}px;padding:${gap}px">${files.map(x => `<img src="${x}" style="width:${W}px;height:${H}px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,.12)">`).join('')}</body>`);
    await p.goto(url(path.join(out, '_kontak.html')));
    await p.waitForTimeout(200);
    await p.screenshot({ path: path.join(out, '_kontak.png') });
  }
  await b.close();
  console.log('OK ->', out); files.forEach(x => console.log('  ' + x));
  if (over.length) { console.log('PERINGATAN teks mepet/meluap:'); over.forEach(x => console.log('  ' + x)); }
})().catch(e => { console.error(e.message); process.exit(1); });
