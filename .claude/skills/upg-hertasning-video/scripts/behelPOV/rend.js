const {chromium}=require('playwright');const fs=require('fs');
const [a,b,dir]=[+process.argv[2],+process.argv[3],process.argv[4]||'out'];
(async()=>{const br=await chromium.launch();const p=await br.newPage({viewport:{width:1080,height:1920}});
p.on('pageerror',e=>console.log('E:',e.message));
await p.goto('file://'+__dirname+'/ov.html');await p.waitForFunction('window.ready===true');fs.mkdirSync(__dirname+'/'+dir,{recursive:true});
for(let i=a;i<b;i++){await p.evaluate(t=>window.R(t),i/30);await p.screenshot({path:`${__dirname}/${dir}/${String(i).padStart(4,'0')}.jpg`,type:'jpeg',quality:92});}
await br.close();})();
