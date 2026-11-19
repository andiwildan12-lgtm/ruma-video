const {chromium}=require('playwright');(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1080,height:1920}});
await p.goto('file://'+__dirname+'/posterB.html');await p.waitForTimeout(400);await p.screenshot({path:'/home/user/ruma-video/output/upg-antang/Behel_Antang_B_Story_1080x1920.png'});await b.close();})();
