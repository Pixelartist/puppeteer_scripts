// screenshot as payload

module.exports = async ({ page, context }) => {
  const { url } = context;

  let short = (new Date().toISOString().slice(0,10)).replace(/\D/g,'');
  await page.setViewport({ width: 1920, height: 1080 });
  await page.goto(url);
  await page.screenshot({ path: './screenshots/URL_'+short+'.png', fullPage: true });

  let data = { this: "worked"}

  return {
    data,
    // Make sure to match the appropriate content here
    // You'll likely want 'application/json'
    type: 'application/json'
  };
};
