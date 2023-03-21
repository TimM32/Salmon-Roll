'use strict';
console.log('js connected');


let parentElement = document.getElementById('cityProfiles');

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
Store.prototype.render = function(){
  let parentElement = document.getElementById('cityProfiles');


  let cookieTable = document.getElementById('cookiesSold-table');
  console.log('🚀 ~ file: app.js:253 ~ cookkieTable:', cookieTable);

  let storeRow = document.createElement('tr');

  let headNameCell = document.createElement('th');
  headNameCell.textContent =
    storeRow.appendChild(headNameCell);

  // let nameCell = document.createElement('td');
  // nameCell.textContent =
  // headRow.appendChild.

  cookieTable.appendChild(storeRow);

};

let allStores =[storeOne, storeTwo, storeThree, storeFour, storeFive];
for(let i = 0; i < allStores.length; i++){
  allStores[i].render();
}





