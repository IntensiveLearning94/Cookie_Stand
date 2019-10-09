'use strict';

var shopHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var allStores = [];

function getRandomInt(minCust, maxCust) {
  return Math.floor(Math.random() * (maxCust - minCust)) + minCust;
} //The maximum is exclusive and the minimum is inclusive
// var test = getRandomInt(2, 10);

// console.log(test);

Store.prototype.customerPerHour = function () {
  for (var i = 0; i < shopHours.length; i++) {
    var cookiesSoldPerHour = Math.ceil((getRandomInt(this.minimumCustomers, this.maximumCustomers)) * this.averageCookies);
    // console.log(cookiesSoldPerHour);
    this.hourTotals.push(cookiesSoldPerHour);
  }
};

function Store(locationName, minimumCustomers, maximumCustomers, averageCookies) {
  this.locationName = locationName;
  this.minimumCustomers = minimumCustomers;
  this.maximumCustomers = maximumCustomers;
  this.averageCookies = averageCookies;
  this.hourTotals = [];
  this.totalCookiesBought = 0;
  this.customerPerHour();
  this.totalCookiesSold();
  this.storeData(this);
  allStores.push(this);
  // getRandomInt
}

Store.prototype.totalCookiesSold = function () {
  for (var i = 0; i < this.hourTotals.length; i++) {
    this.totalCookiesBought += this.hourTotals[i];
  }
};

var table = document.getElementById('tableElement');
var row = document.createElement('tr');
var thead = document.createElement('th');
var tdata = document.createElement('td');



function headerRow() {
  row = document.createElement('tr');
  thead = document.createElement('th');
  thead.textContent = 'information';
  row.appendChild(thead);
  for (var i = 0; i < shopHours.length; i++) {
    thead = document.createElement('th');
    thead.textContent = shopHours[i];
    row.appendChild(thead);
  }
  thead = document.createElement('th');
  thead.textContent = 'totals';
  row.appendChild(thead);
  table.appendChild(row);
}
headerRow();

Store.prototype.storeData = function () {
  row = document.createElement('tr');
  thead = document.createElement('th');
  thead.textContent = this.locationName;
  row.appendChild(thead);
  for (var i = 0; i < shopHours.length; i++) {
    tdata = document.createElement('td');
    tdata.textContent = this.hourTotals[i];
    row.appendChild(tdata);
  }
  thead = document.createElement('th');
  thead.textContent = this.totalCookiesBought;
  row.appendChild(thead);
  table.appendChild(row);
};

this.getRandomInt = function (minCust, maxCust) {
  return Math.floor(Math.random() * (maxCust - minCust)) + minCust;
}; //The maximum is exclusive and the minimum is inclusive

var footerRow = function () {
  var row = document.createElement('tr');
  var tdata = document.createElement('td');
  row.textContent = 'Totals:';
  row.appendChild(tdata);

  for (var i = 0; i < shopHours.length; i++) {
    var hourTotals = 0;
    var tdataEl = document.createElement('td');
    for (var j = 0; j < allStores.length; j++) {
      hourTotals += allStores[j].hourTotals[i];
      // console.log('ALL STORES x HOUR TOTALS:', allStores[j].hourTotals[i]);
    }

    tdataEl.textContent = hourTotals;
    row.appendChild(tdataEl);
  }
  // var tdataE = document.createElement('td');
  // row.appendChild(tdataE);
  table.appendChild(row);
};




// eslint-disable-next-line no-unused-vars
var seattleStore = new Store('Seattle', 23, 65, 6.3);
// console.log(seattleStore);
// eslint-disable-next-line no-unused-vars
var tokyoStore = new Store('Tokyo', 3, 24, 1.2);
// console.log(tokyoStore);
// eslint-disable-next-line no-unused-vars
var dubaiStore = new Store('Dubai', 11, 38, 2.3);

// eslint-disable-next-line no-unused-vars
var parisStore = new Store('Paris', 20, 38, 2.3);

// console.log("PARIS HOURS TOTAL",parisStore.hourTotals);


console.log('allStores:', allStores[0].hourTotals[0]);

footerRow();
