'use strict';
console.log('js connected');

let form = document.getElementById('addCityForm');
let storeArray = [];
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
  storeArray.push(this);
}


function avgcustomerHourly(minCustomer, maxCustomer) {
  return Math.floor(Math.random() * (maxCustomer - minCustomer) + minCustomer);
}

StoreAreas.prototype.setCookies = function () {
  for (let i = 0; i < hours.length; i++) {
    this.cookiesPerHour[i] = Math.floor(this.averageCookies * avgcustomerHourly(this.minCustomer, this.maxCustomer)
    );
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
    // adding up total cookies.
    // console.log('for totalling cookies', this.cookiesPerHour[i]);
    this.totalDailyCookies += this.cookiesPerHour[i];

    let storeCell = document.createElement('td');

    storeCell.textContent = this.cookiesPerHour[i];

    storeRow.appendChild(storeCell);

  }

  let totalDailyCookies = document.createElement('td');
  totalDailyCookies.textContent = this.totalDailyCookies;
  storeRow.appendChild(totalDailyCookies);

};


let storeOne = new StoreAreas('Seattle', 23, 65, 6.3);
let storeTwo = new StoreAreas('Toyko', 3, 24, 1.2);
let storeThree = new StoreAreas('Dubai', 11, 38, 3.7);
let storeFour = new StoreAreas('Paris', 20, 38, 2.3);
let storeFive = new StoreAreas('Lima', 2, 16, 4.6);






// let allStoreAreas = [storeOne, storeTwo, storeThree, storeFour, storeFive];


for (let i = 0; i < storeArray.length; i++) {
  storeArray[i].render();
}


StoreAreas.renderFooter = function () {
  let tFoot = document.getElementById('tableFooter');
  console.log('🚀 ~ file: app.js:69 ~ tFoot:', tFoot);
  let footerRow = document.createElement('tr');
  let totalId = document.createElement('th');
  totalId.textContent = 'Total';
  footerRow.appendChild(totalId);

  let grandTotal = 0;

  for (let i = 0; i < hours.length; i++) {
    let hourlyTotal = 0;
    console.log(storeArray);

    for (let j = 0; j < storeArray.length; j++) {
      hourlyTotal = hourlyTotal + storeArray[j].averageCookies[i];
    }
    grandTotal += hourlyTotal;
    let hourlyTotalTd = document.createElement('td');
    hourlyTotalTd.textContent = hourlyTotal;
    footerRow.appendChild(hourlyTotalTd);

  }
  let grandTotalTd = document.createElement('td');
  grandTotalTd.textContent = grandTotal;
  footerRow.appendChild(grandTotalTd);

  tFoot.appendChild(footerRow);
};


function handleNewCity(event) {
  event.preventDefault();
  console.log('We did iiiittttt!!!');
  event.stopPropagation();

  let storeName = event.target.name.value;
  console.log('🚀 ~ file: app.js:135 ~ handleNewCity ~ storeName:', storeName);

  let minCustomerValues = event.target.minCustomer.value;
  console.log('🚀 ~ file: app.js:138 ~ handleNewCity ~ minCustomerValue:', minCustomerValues);

  let maxCustomerValues = event.target.maxCustomer.value;
  console.log('🚀 ~ file: app.js:141 ~ handleNewCity ~ maxCustomerValue:', maxCustomerValues);

  let averageCookiesValues = event.target.averageCookies.value;
  console.log('🚀 ~ file: app.js:144 ~ handleNewCity ~ averageCookiesValue:', averageCookiesValues);

  let newStore = new StoreAreas(storeName, minCustomerValues, maxCustomerValues, averageCookiesValues);
  console.log('🚀 ~ file: app.js:147 ~ handleNewCity ~ newStore:', newStore);
  newStore.setCookies();
  newStore.render();
  form.reset();
}



form.addEventListener('submit', handleNewCity);













