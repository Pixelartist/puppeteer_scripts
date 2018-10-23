// screenshot as payload

module.exports = async ({ page, context }) => {
  const { url } = context;
  const { fullpage } = context; // values "true" / "false"
  let filename = url.replace(/[^a-z0-9]/gi, '_').toLowerCase();
  let short = (new Date().toISOString().slice(0,10)).replace(/\\D/g,'');

  await page.setViewport({ width: 1920, height: 1080 });
  await page.goto(url);
  await page.screenshot({ path: './screenshots/'+ filename +'_'+ short +'.png', fullPage: fullpage });

  let data = { this: "worked", screenshotname: filename +'_'+ short +'.png'}

  return {
    data,
    // Make sure to match the appropriate content here
    // You'll likely want 'application/json'
    type: 'application/json'
  };
};
