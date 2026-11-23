const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();
for(const k of ['B','C','M'])for(const f of ['feed','story']){const p=await b.newPage({viewport:{width:1080,height:f=='story'?1920:1350}});
await p.goto('http://localhost:8766/bh/gfx/gfx.html');await p.evaluate(()=>document.fonts.ready);await p.evaluate(([k,f])=>window.go(k,f),[k,f]);await p.waitForTimeout(500);
await p.screenshot({path:`out_${k}_${f}.png`});await p.close();}
await b.close();})();
