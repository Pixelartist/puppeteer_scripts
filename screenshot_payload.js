// screenshot as payload

module.exports = async ({ page, context }) => {
  const { url } = context;
  const { fullpage } = context; // values "true" / "false"
  const { type } = context; // jpeg or png
  const { quality } = context; // numer 0 - 100

  let filename = url.replace(/[^a-z0-9]/gi, '_').toLowerCase();
  let short = (new Date().toISOString().slice(0,10)).replace(/\\D/g,'');

  await page.setViewport({ width: 1920, height: 1080 });
  await page.goto(url);
  await page.screenshot({ path: './screenshots/'+ filename +'_'+ short +'.jpg', type: type, quality: quality, fullPage: fullpage });

  let data = { this: "worked", screenshotname: filename +'_'+ short +'.jpg'}

  return {
    data,
    // Make sure to match the appropriate content here
    // You'll likely want 'application/json'
    type: 'application/json'
  };
};


// Example call
/*
curl -X POST \
  'http://ec2-3-120-208-45.eu-central-1.compute.amazonaws.com/function?token=security' \
  -H 'Cache-Control: no-cache' \
  -H 'Content-Type: application/json' \
  -H 'Postman-Token: 8fabdb03-886f-42f7-8e33-2222c634190e' \
  -H 'cache-control: no-cache' \
  -d '{
  "code": "module.exports=async({page:a,context:b})=>{const{url:c}=b,{fullpage:d}=b,{type:e}=b,{quality:f}=b;let g=c.replace(/[^a-z0-9]/gi,'\''_'\'').toLowerCase(),h=new Date().toISOString().slice(0,10).replace(/\\D/g,'\'''\'');await a.setViewport({width:1920,height:1080}),await a.goto(c),await a.screenshot({path:'\''./screenshots/'\''+g+'\''_'\''+h+'\''.jpg'\'',type:e,quality:f,fullPage:d});return{data:{this:'\''worked'\'',screenshotname:g+'\''_'\''+h+'\''.jpg'\''},type:'\''application/json'\''}};",
  "context": {
    "url": "https://www.hear.com/hearing-aids/",
    "fullpage": "true",
    "type": "jpeg",
    "quality": 80
  }
}'
*/
