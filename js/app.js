'use strict';
console.log('js connected');

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
console.log('🚀 ~ file: app.js:5 ~ hours:', hours);


let storeOne = {
  storeName: 'Seattle',
  hourlyTotal: [],
  minCustomer: 23,
  maxCustomer: 65,
  setCustomer: function(){
    this.customer = avgcustomerHourly(23, 65) + ' Customers per hour';
  }
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




for(let i = 0; i < storeOne.hours.length; i++){
  let storeLi = document.createElement('li');
  storeLi.textContent = storeOne.hours[i];
}

storeOne.setCustomer();
console.log('🚀 ~ file: app.js:46 ~ storeOne:', storeOne);


