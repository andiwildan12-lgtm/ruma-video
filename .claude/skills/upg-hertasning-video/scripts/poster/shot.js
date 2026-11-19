const {chromium}=require('playwright');(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1080,height:1920}});
const N={pov:'BehelPOV',chat:'BehelChat'};
for(const ad of ['pov','chat'])for(const [sz,H] of [['story',1920],['feed',1350]]){await p.setViewportSize({width:1080,height:H});await p.goto('file://'+__dirname+`/poster.html?ad=${ad}&sz=${sz}`);await p.waitForTimeout(400);
const o=await p.evaluate(()=>{const w=document.querySelector('.wrap');const r=w.getBoundingClientRect();return Math.round(r.bottom*1)});console.log(ad,sz,'bottom',o,'/',H);
await p.screenshot({path:`/home/user/ruma-video/output/Hertasning_${N[ad]}_${sz==='story'?'Story_1080x1920':'Feed_1080x1350'}.png`});}
await b.close();})();
