var parentEl = document.getElementById('parentElement');
// parentEl.textContent = 'attempting to contact html.';

var child = document.createElement('h1');
child.textContent = 'Seattle: ';
parentEl.appendChild(child);

var seattle = {
  shopHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'total'],
  hourTotals: [],
  locationName: 'Salmon Cookies',
  minCust: 23,
  maxCust: 65,
  avCookie: 6.3,

  getRandomInt: function (minCust, maxCust) {
    minCust = Math.ceil(minCust);
    maxCust = Math.floor(maxCust);
    return Math.floor(Math.random() * (maxCust - minCust)) + minCust; //The maximum is exclusive and the minimum is inclusive
  },

  customerHour: function () {
    for (var i = 0; i < this.shopHours.length; i++) {
      var randomCustomerCount = this.getRandomInt(this.minCust, this.maxCust);
      // console.log(randomCustomerCount);
      this.hourTotals.push(randomCustomerCount);
    }
  },

  getTotalCookies: function()


  render: function () {
    this.customerHour();
    for (var i = 0; i < this.shopHours.length; i++) {
      var childEl = document.createElement('li');
      // childEl.textContent = 'Shop Hours: ' + this.shopHours[i];
      var avCookie = Math.ceil(this.avCookie * this.hourTotals[i]);
      childEl.textContent = `Hours: ${this.shopHours[i]} ~Customers: ${this.hourTotals[i]} ~Average Cookies: ${avCookie}`;
      parentEl.appendChild(childEl);
    }
  }
};

seattle.render();
console.log(seattle);

seattle.getRandomInt(23, 65);

// seattle.customerHour();

// console.log(seattle.getRandomInt(23, 65));
// 'didnt work'


















// var parentEl = document.getElementById('parentElement');

// var child = document.createElement('h1');
// child.textContent = 'Tokyo: ';
// parentEl.appendChild(child);

// var cookieShop = {
//   shopHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
//   hourTotals: [

//   ],
//   locationName: 'Get My Coffee',
//   randomNumberGenerator: function () {

//   },
//   render: function () {
//     for (var i = 0; i < this.shopHours.length; i++)
//     var childEl = ducument.createElement('li');
//    childEl.textContent
//   }
// }
