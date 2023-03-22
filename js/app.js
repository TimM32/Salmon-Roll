'use strict';
console.log('js connected');




let hours = [
  '6am',
  '7am',
  '8am',
  '9am',
  '10am',
  '11am',
  '12pm',
  '1pm',
  '2pm',
  '3pm',
  '4pm',
  '5pm',
  '6pm',
  '7pm',
  '8pm'
];

function Store(storeName, minCustomer, maxCustomer, averageCookies) {
  this.storeName = storeName;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.averageCookies = averageCookies;
  this.totalDailyCookies = 0;
  // this.cookiesPerHour =
}


function avgcustomerHourly(minCustomer, maxCustomer) {
  return Math.floor(Math.random() * (maxCustomer - minCustomer) + minCustomer);
}

Store.prototype.setCookies = function () {
  for (let i = 0; i < hours.length; i++) {
    this.cookiesPerHour[i] =
      hours[i] +
      ' ' +
      Math.floor(
        this.averageCookies *
        avgcustomerHourly(this.minCustomer, this.maxCustomer)
      );
    return Math.floor(Math.random() * (this.minCustomer - this.maxCustomer) + this.minCustomer);
  }

};



let storeOne = new Store('Seattle', 23, 65, 6.3);

let storeTwo = new Store('Toyko', 3, 24, 1.2);

let storeThree = new Store('Dubai', 11, 38, 3.7);

let storeFour = new Store('Paris', 20, 38, 2.3);

let storeFive = new Store('Lima', 2, 16, 4.6);



// put this inside your new render
Store.prototype.render = function () {
  let parentElement = document.getElementById('cityProfiles');
  console.log('🚀 ~ file: app.js:66 ~ parentElement:', parentElement);

  let article = document.createElement('article');
  parentElement.appendChild(article);

  let cookieTable = document.getElementById('cookiesSold-table');
  console.log('🚀 ~ file: app.js:253 ~ cookkieTable:', cookieTable);

  let storeRow = document.createElement('tr');

  let headNameCell = document.createElement('tr');
  headNameCell.textContent = this.storeName;
  storeRow.appendChild(headNameCell);

  let minCustomer = document.createElement('td');
  minCustomer.textContent = this.minCustomer;
  storeRow.appendChild(minCustomer);

  let maxCustomer = document.createElement('td');
  maxCustomer.textContent = this.maxCustomer;
  storeRow.appendChild(maxCustomer);

  let averageCookies = document.createElement('td');
  averageCookies.textContent = this.averageCookies;
  console.log('🚀 ~ file: app.js:87 ~ averageCookies:', averageCookies);
  storeRow.appendChild(averageCookies);
  cookieTable.appendChild(storeRow);

};

storeOne.setCookies();

let allStores = [storeOne, storeTwo, storeThree, storeFour, storeFive];
for (let i = 0; i < allStores.length; i++) {
  allStores[i].render();
}





