const {chromium}=require('playwright');
(async()=>{const br=await chromium.launch();const p=await br.newPage({viewport:{width:1080,height:1920}});p.on('pageerror',e=>console.log('E:',e.message));
await p.goto('file://'+__dirname+'/ov.html');await p.waitForFunction('window.ready===true');
for(const t of process.argv.slice(2).map(Number)){await p.evaluate(t=>window.R(t),t);await p.screenshot({path:`${__dirname}/probe/p${t.toFixed(2)}.jpg`,type:'jpeg',quality:80});}
await br.close();})();
