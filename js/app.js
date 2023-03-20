'use strict';
console.log('js connected');

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Total'];
console.log('🚀 ~ file: app.js:5 ~ hours:', hours);


let storeOne = {
  storeName: 'Seattle',
  hourlyTotal: [],
  minCustomer: 23,
  maxCustomer: 65,
  averageCookies: 6.3,
  avgCustomer: 0,
  cookiesPerHour: [],
  setCookies: function(){
    for(let i = 0; i < hours.length; i++){
      this.cookiesPerHour[i] = hours[i] + ' ' + Math.floor(this.averageCookies * avgcustomerHourly(this.minCustomer, this.maxCustomer));
    }

  },

};

function avgcustomerHourly(minCustomer, maxCustomer){
  console.log('🚀 ~ file: app.js:19 ~ avgcustomerHourly ~ avgcustomerHourly:', avgcustomerHourly);
  return Math.floor(Math.random() * (maxCustomer - minCustomer) + minCustomer);
}

// let storeTwo = {
//     storeName: 'Toyko'
// }

// let storeThree = {
//     storeName: 'Dubai'
// }

// let storeFour = {
//     storeName: 'Paris'
// }

// let storeFive = {
//     storeName: 'Lima'
// }




// for(let i = 0; i < storeOne.hours.length; i++){
//   let storeLi = document.createElement('li');
//   storeLi.textContent = storeOne.busHours[i];
// }

storeOne.setCookies();
console.log('🚀 ~ file: app.js:46 ~ storeOne:', storeOne);

let parentElement = document.getElementById('cityProfiles');
console.log('🚀 ~ file: app.js:58 ~ parentElement:', parentElement);

let article = document.createElement('article');
console.log('🚀 ~ file: app.js:61 ~ article:', article);
parentElement.appendChild(article);

let h2 = document.createElement('h2');
console.log('🚀 ~ file: app.js:65 ~ h2:', h2);
article.appendChild(h2);

let storePara = document.createElement('p');
console.log('🚀 ~ file: app.js:69 ~ storePara:', storePara);
storePara.textContent = 'Cookies be delicious!';
article.appendChild(storePara);

let storeUl = document.createElement('ul');
article.appendChild(storeUl);









