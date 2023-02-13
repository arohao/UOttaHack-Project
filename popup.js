

let costOfCurrentCart = 0;
const totalSpentMonthly = 0;
const totalSpentYearly = 0;
const monthlyBudget = 0;
const yearlyBudget = 0;
let url;

chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
  url = tabs[0].url;
  checker(url.toLowerCase().includes("checkout") || url.toLowerCase().includes("shop") || url.includes("buy") || url.includes("cart"));  
});


function checker(boolCheck) {
  if(boolCheck) {
    console.log('Found checkout page');
    //calculateCurrentCartPrice();
  } else {
    console.log('Did not find checkout page');
  }
}

function calculateCurrentCartPrice() {
  var bodyText;
  fetch(url)
  .then((response) => response.text())
  .then((user)=> {
    bodyText = user.toLowerCase();
  });

  while (!(bodyText.includes('$'))){
    setTimeout(()=> {console.log('Wait...'); }, 1000);
  }

  var textI = bodyText.indexOf("$");
  var sub = bodyText.substr(textI);
  var textJ = sub.indexOf(".");
  var result = sub.substr(0,textJ+2);
  console.log(result);
  
}

