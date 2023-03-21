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




  // let storeOne = {
  //   storeName: 'Seattle',
  //   hourlyTotal: [],
  //   minCustomer: 23,
  //   maxCustomer: 65,
  //   averageCookies: 6.3,
  //   totalDailyCookies:  0,
  //   cookiesPerHour: [],
  //because this function has an 'object' that it belongs to, it is referred to as a method.
  //   setCookies: function () {
  //
  //     }
  //   },
  //   renderStoreData: function () {
  //     let article = document.createElement('article');
  //     parentElement.appendChild(article);
  //     let storePara = document.createElement('p');
  //     storePara.textContent = 'Cookies be delicious!';
  //     article.appendChild(storePara);
  //     let storeUl = document.createElement('ul');
  //     for (let i = 0; i < hours.length; i++) {
  //       let storeLi = document.createElement('li');
  //       storeOne.totalDailyCookies += parseInt(storeOne.cookiesPerHour[i].split(' ')[1]);
  //       storeLi.textContent = storeOne.cookiesPerHour[i];
  //       storeUl.appendChild(storeLi);
  //     }
  //     article.appendChild(storeUl);
  //     const listItem = document.createElement('li');
  //     listItem.textContent = 'Total: ' + storeOne.totalDailyCookies + ' cookies';
  //     console.log(listItem);
  //     article.appendChild(listItem);
  //   }
  // };


};

// let storeTwo = {
//   storeName: 'Toyko',
//   hourlyTotal: [],
//   minCustomer: 3,
//   maxCustomer: 24,
//   averageCookies: 1.2,
//   totalDailyCookies: 0,
//   cookiesPerHour: [],
//   setCookies: function () {
//     for (let i = 0; i < hours.length; i++) {
//       this.cookiesPerHour[i] =
//         hours[i] +
//         ' ' +
//         Math.floor(
//           this.averageCookies *
//           avgcustomerHourly(this.minCustomer, this.maxCustomer)
//         );
//     }
//   },
//   renderStoreData: function () {
//     let article = document.createElement('article');
//     parentElement.appendChild(article);
//     let storePara = document.createElement('p');
//     storePara.textContent = 'Cookies be delicious!';
//     article.appendChild(storePara);
//     let storeUl = document.createElement('ul');
//     for (let i = 0; i < hours.length; i++) {
//       let storeLi = document.createElement('li');
//       storeTwo.totalDailyCookies += parseInt(storeTwo.cookiesPerHour[i].split(' ')[1]);
//       storeLi.textContent = storeTwo.cookiesPerHour[i];
//       storeUl.appendChild(storeLi);
//     }
//     article.appendChild(storeUl);
//     const listItem = document.createElement('li');
//     listItem.textContent = 'Total: ' + storeTwo.totalDailyCookies + ' cookies';
//     console.log(listItem);
//     article.appendChild(listItem);
//   }
// };

// let storeThree = {
//   storeName: 'Dubai',
//   hourlyTotal: [],
//   minCustomer: 11,
//   maxCustomer: 38,
//   averageCookies: 3.7,
//   totalDailyCookies: 0,
//   cookiesPerHour: [],
//   setCookies: function () {
//     for (let i = 0; i < hours.length; i++) {
//       this.cookiesPerHour[i] =
//         hours[i] +
//         ' ' +
//         Math.floor(
//           this.averageCookies *
//           avgcustomerHourly(this.minCustomer, this.maxCustomer)
//         );
//     }
//   },
//   renderStoreData: function () {
//     let article = document.createElement('article');
//     parentElement.appendChild(article);
//     let storePara = document.createElement('p');
//     storePara.textContent = 'Cookies be delicious!';
//     article.appendChild(storePara);
//     let storeUl = document.createElement('ul');
//     for (let i = 0; i < hours.length; i++) {
//       let storeLi = document.createElement('li');
//       storeThree.totalDailyCookies += parseInt(storeThree.cookiesPerHour[i].split(' ')[1]);
//       storeLi.textContent = storeThree.cookiesPerHour[i];
//       storeUl.appendChild(storeLi);
//     }
//     article.appendChild(storeUl);
//     const listItem = document.createElement('li');
//     listItem.textContent = 'Total: ' + storeThree.totalDailyCookies + ' cookies';
//     console.log(listItem);
//     article.appendChild(listItem);
//   }
// };

// let storeFour = {
//   storeName: 'Paris',
//   hourlyTotal: [],
//   minCustomer: 20,
//   maxCustomer: 38,
//   averageCookies: 2.3,
//   totalDailyCookies: 0,
//   cookiesPerHour: [],
//   setCookies: function () {
//     for (let i = 0; i < hours.length; i++) {
//       this.cookiesPerHour[i] =
//         hours[i] +
//         ' ' +
//         Math.floor(
//           this.averageCookies *
//           avgcustomerHourly(this.minCustomer, this.maxCustomer)
//         );
//     }
//   },
//   renderStoreData: function () {
//     let article = document.createElement('article');
//     parentElement.appendChild(article);
//     let storePara = document.createElement('p');
//     storePara.textContent = 'Cookies be delicious!';
//     article.appendChild(storePara);
//     let storeUl = document.createElement('ul');
//     for (let i = 0; i < hours.length; i++) {
//       let storeLi = document.createElement('li');
//       storeFour.totalDailyCookies += parseInt(storeFour.cookiesPerHour[i].split(' ')[1]);
//       storeLi.textContent = storeFour.cookiesPerHour[i];
//       storeUl.appendChild(storeLi);
//     }
//     article.appendChild(storeUl);
//     const listItem = document.createElement('li');
//     listItem.textContent = 'Total: ' + storeFour.totalDailyCookies + ' cookies';
//     console.log(listItem);
//     article.appendChild(listItem);
//   }
// };

// let storeFive = {
//   storeName: 'Lima',
//   hourlyTotal: [],
//   minCustomer: 2,
//   maxCustomer: 16,
//   averageCookies: 4.6,
//   totalDailyCookies: 0,
//   cookiesPerHour: [],
//   setCookies: function () {
//     for (let i = 0; i < hours.length; i++) {
//       this.cookiesPerHour[i] =
//         hours[i] +
//         ' ' +
//         Math.floor(
//           this.averageCookies *
//           avgcustomerHourly(this.minCustomer, this.maxCustomer)
//         );
//     }
//   },
//   renderStoreData: function () {
//     let article = document.createElement('article');
//     parentElement.appendChild(article);
//     let storePara = document.createElement('p');
//     storePara.textContent = 'Cookies be delicious!';
//     article.appendChild(storePara);
//     let storeUl = document.createElement('ul');
//     for (let i = 0; i < hours.length; i++) {
//       let storeLi = document.createElement('li');
//       storeFive.totalDailyCookies += parseInt(storeFive.cookiesPerHour[i].split(' ')[1]);
//       storeLi.textContent = storeFive.cookiesPerHour[i];
//       storeUl.appendChild(storeLi);
//     }
//     article.appendChild(storeUl);
//     const listItem = document.createElement('li');
//     listItem.textContent = 'Total: ' + storeFive.totalDailyCookies + ' cookies';
//     console.log(listItem);
//     article.appendChild(listItem);
//   }
// };


// put this inside your new render
let cookkieTable = document.getElementById('cookiesSold-table');
console.log('🚀 ~ file: app.js:253 ~ cookkieTable:', cookkieTable);

let storeRow = document.createElement('tr');

let headNameCell = document.createElement('th');
headNameCell.textContent =
    storeRow.appendChild(headNameCell);

// let nameCell = document.createElement('td');
// nameCell.textContent =
// headRow.appendChild.





cookkieTable.appendChild(storeRow);





// storeOne.setCookies();
// storeOne.renderStoreData();

// storeTwo.setCookies();
// storeTwo.renderStoreData();

// storeThree.setCookies();
// storeThree.renderStoreData();

// storeFour.setCookies();
// storeFour.renderStoreData();

// storeFive.setCookies();
// storeFive.renderStoreData();

let storeOne = new Store('Seattle', 23, 65, 6.3);

let storeTwo = new Store('Toyko', 3, 24, 1.2);

let storeThree = new Store('Dubai', 11, 38, 3.7);

let storeFour = new Store('Paris', 20, 38, 2.3);

let storeFive = new Store('Lima', 2, 16, 4.6);

let allStores =[storeOne, storeTwo, storeThree, storeFour, storeFive];
for(let i = 0; i < allStores.length; i++){
  allStores[i].render();
}





