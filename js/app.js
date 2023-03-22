'use strict';
console.log('js connected');



let cookieTable = document.getElementById('cookiesSold-table');

let parentElement = document.getElementById('cityProfiles');
console.log('🚀 ~ file: app.js:7 ~ parentElement:', parentElement);

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

function StoreAreas(storeName, minCustomer, maxCustomer, averageCookies) {
  this.storeName = storeName;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.averageCookies = averageCookies;
  this.totalDailyCookies = 0;
  this.cookiesPerHour = [];
}


function avgcustomerHourly(minCustomer, maxCustomer) {
  return Math.floor(Math.random() * (maxCustomer - minCustomer) + minCustomer);
}

StoreAreas.prototype.setCookies = function () {
  for (let i = 0; i < hours.length; i++) {
    this.cookiesPerHour[i] = hours[i] + ' ' + Math.floor(this.averageCookies * avgcustomerHourly(this.minCustomer, this.maxCustomer)
    );
    return Math.floor(Math.random() * (this.minCustomer - this.maxCustomer) + this.minCustomer);
  }

};
// put this inside your new render
StoreAreas.prototype.render = function () {
  this.setCookies();
  let storeRow = document.createElement('tr');
  cookieTable.appendChild(storeRow);
  let headNameCell = document.createElement('th');
  headNameCell.textContent = this.storeName;
  storeRow.appendChild(headNameCell);

  for (let i = 0; i < hours.length; i++) {
    this.totalDailyCookies += this.averageCookies[i];
    let storeCell = document.createElement('td');
    storeCell.textContent = this.averageCookies[i];
    storeRow.appendChild(storeCell);
  }
  let totalDailyCookies = document.createElement('td');
  totalDailyCookies.textContent = this.totalDailyCookies;
  storeRow.appendChild(totalDailyCookies);

};


let storeOne = new StoreAreas('Seattle', 23, 65, 6.3);
// let storeTwo = new StoreAreas('Toyko', 3, 24, 1.2);
// let storeThree = new StoreAreas('Dubai', 11, 38, 3.7);
// let storeFour = new StoreAreas('Paris', 20, 38, 2.3);
// let storeFive = new StoreAreas('Lima', 2, 16, 4.6);






let allStoreAreas = [storeOne];
for (let i = 0; i < allStoreAreas.length; i++) {
  allStoreAreas[i].render();
}


storeOne.setCookies();
