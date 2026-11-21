// node shot_promo.js  (server http.server 8777 di folder template; keluaran di folder kerja)
const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();
for(const k of ['K1','K2'])for(const f of ['feed','story']){const p=await b.newPage({viewport:{width:1080,height:f=='story'?1920:1350}});
await p.goto('http://localhost:8777/promo.html');await p.evaluate(()=>document.fonts.ready);await p.evaluate(([k,f])=>window.go(k,f),[k,f]);await p.waitForTimeout(500);
await p.screenshot({path:`promo_${k}_${f}.png`});await p.close();}
await b.close();})();
