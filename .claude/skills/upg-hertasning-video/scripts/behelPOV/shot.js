const {chromium}=require('playwright');(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1080,height:1920}});
for(let i=1;i<=14;i++){await p.goto('file://'+__dirname+'/frame.html?p='+i);await p.waitForTimeout(250);await p.screenshot({path:__dirname+'/f'+String(i).padStart(2,'0')+'.jpg',type:'jpeg',quality:85});}
await b.close();})();
