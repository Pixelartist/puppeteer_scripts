// Post request example

// dev stage
let reformatFirstRequest = true;

page.setRequestInterception(true);
page.on('request', interceptedRequest => {
    if(reformatFirstRequest){
        interceptedRequest.continue({
            method : 'POST',
            postData : 'a=b&c=d',
        }).then(()=>{
            reformatFirstRequest = false;
        });
    }
});
await page.goto('http://www.google.com')


await page.setRequestInterception(true);
page.on('request', request => {
  const overrides = {};
  if (request.url === 'http://www.google.com') {
    overrides.method = 'POST';
    overrides.postData = 'a=b&c=d';
  }
  request.continue(overrides);
});
await page.goto('http://www.google.com');

await page.setRequestInterception(true);
    page.on('request', interceptedRequest => {
        var data = {
            url: 'http://www.google.com',
            'method': 'POST',
            'postData': 'a=b&c=d'
        };
        interceptedRequest.continue(data);
        console.log(interceptedRequest.method(),'method')//输出GET
    });
    await page.goto('http://www.google.com');
 // End dev stage


--- sends post request but payload is raw
await page.setRequestInterception(true);
    page.on('request', interceptedRequest => {
        var data = {
            url: 'http://requestbin.fullcontact.com/qrycvqqr',
            'method': 'POST',
            'postData': 'a=b&c=d'
        };
        interceptedRequest.continue(data);
        console.log(interceptedRequest.method(),'method')//输出GET
    });
await page.goto('http://requestbin.fullcontact.com/qrycvqqr');

--- works with post and form parameter
await page.setRequestInterception(true);
    page.on('request', interceptedRequest => {
        let yester = new Date(new Date().setDate(new Date().getDate()-1));
        let yesterday = (yester.toISOString().slice(0,10)).replace(/\D/g,'');
        var data = {
            url: 'http://requestbin.fullcontact.com/qrycvqqr',
            'method': 'POST',
            'headers': {
            //"Content-Type": "application/json; charset=utf-8",
             "Content-Type": "application/x-www-form-urlencoded",
            },
            'postData': 'searchDto.siteCode=hear&searchDto.excelType=Y&searchDto.sdate='+yesterday+'&searchDto.edate='+yesterday+'&searchDto.shour=00&searchDto.shour__sexyCombo=00&searchDto.shour__sexyComboHidden=00&searchDto.smin=00&searchDto.smin__sexyCombo=00&searchDto.smin__sexyComboHidden=00&searchDto.ehour=23&searchDto.ehour__sexyCombo=23&searchDto.ehour__sexyComboHidden=23&searchDto.emin=59&searchDto.emin__sexyCombo=59&searchDto.emin__sexyComboHidden=59&searchDto.custTel=&searchDto.sthour=00&searchDto.sthour__sexyCombo=00&searchDto.sthour__sexyComboHidden=00&searchDto.stmin=00&searchDto.stmin__sexyCombo=00&searchDto.stmin__sexyComboHidden=00&searchDto.stsec=00&searchDto.stsec__sexyCombo=00&searchDto.stsec__sexyComboHidden=00&searchDto.ethour=01&searchDto.ethour__sexyCombo=01&searchDto.ethour__sexyComboHidden=01&searchDto.etmin=00&searchDto.etmin__sexyCombo=00&searchDto.etmin__sexyComboHidden=00&searchDto.etsec=00&searchDto.etsec__sexyCombo=00&searchDto.etsec__sexyComboHidden=00&searchDto.counselGroup=&searchDto.counselGroup__sexyCombo=ALL&searchDto.counselGroup__sexyComboHidden=&searchDto.counselTeam=&searchDto.counselTeam__sexyCombo=ALL&searchDto.counselTeam__sexyComboHidden=&searchDto.counseler=&searchDto.counseler__sexyCombo=ALL&searchDto.counseler__sexyComboHidden=&searchDto.callType=1&searchDto.callType=2&searchDto.callType=3&searchDto.callType=4&searchDto.callType=5&searchDto.callType=6&searchDto.line=&searchDto.line__sexyCombo=ALL&searchDto.line__sexyComboHidden=&idx='
        };

        interceptedRequest.continue(data);
        console.log(interceptedRequest.method(),'method')//输出GET
    });
await page.goto('http://requestbin.fullcontact.com/qrycvqqr');
