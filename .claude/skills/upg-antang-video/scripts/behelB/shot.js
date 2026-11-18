const {chromium}=require('playwright');(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1080,height:1920}});
for(let i=1;i<=12;i++){await p.goto('file://'+__dirname+'/frame.html?p='+i);await p.waitForTimeout(300);await p.screenshot({path:__dirname+'/f'+String(i).padStart(2,'0')+'.jpg',quality:85,type:'jpeg'});}
await b.close();})();
