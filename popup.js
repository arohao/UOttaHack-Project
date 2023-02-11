const cheerio = require('cheerio');
const boolCheck = false;
let costOfCurrentCart = 0;
const totalSpentMonthly = 0;
const totalSpentYearly = 0;
const monthlyBudget = 0;
const yearlyBudget = 0;
let url;


chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
  url = tabs[0].url;
  checker(url.includes("checkout") || url.includes("shop") || url.includes("buy") || url.includes("cart"));  
});

function checker(boolCheck) {
  if(boolCheck) {
    console.log('Found checkout page');
    calculateCurrentCartPrice();
  } else {
    console.log('Did not find checkout page');
  }
}



`function calculateCurrentCartPrice() {
  fetch(url)
  .then(response => response.text())
  .then(html => {
    let $ = cheerio.load(html);
    let priceElement = $("*:contains('$')");
    if(priceElement.length > 0) {
      for(var i = 0; i < priceElement.length; i++) {
        let price = priceElement[i].text().match(/\d+(?:\.\d+)?/g);
        if (price) {
          price = parseFloat(price[0]);
          if(costOfCurrentCart == 0 || costOfCurrentCart < price) {
            costOfCurrentCart = price;
          }
        }
      }
      document.getElementById("calculateCartPrice").innerHTML = costOfCurrentCart.toString();
      console.log(costOfCurrentCart);
    } else {
      console.log("Price information not found");
    }
  });
}`
