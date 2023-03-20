'use strict'
console.log('js connected')

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];


let storeOne = {
    storeName: 'Seattle',
    hourlyTotal: [],
    minCustomer: 23,
    maxCustomer: 65,
    setCustomer: function(){
        this.customer = avgcustomerHourly(23, 65) + ' Customers per hour';
    }
}

function avgcustomerHourly(minCustomer, maxCustomer){
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









