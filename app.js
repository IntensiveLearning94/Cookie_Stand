var parentEl = document.getElementById('parentElement');
// parentEl.textContent = 'attempting to contact html.';

var child = document.createElement('h1');
child.textContent = 'Seattle: ';
parentEl.appendChild(child);

var seattle = {
  shopHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'total'],
  hourTotals: [],
  locationName: 'Seattle',
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

  render: function () {
    this.customerHour();
    var totalCookies = 0;
    for (var i = 0; i < this.shopHours.length; i++) {
      var childEl = document.createElement('li');
      // childEl.textContent = 'Shop Hours: ' + this.shopHours[i];
      var cookiesPerHour = Math.ceil(this.avCookie * this.hourTotals[i]);
      totalCookies = totalCookies + cookiesPerHour;
      childEl.textContent = `Hours: ${this.shopHours[i]} ~Customers: ${this.hourTotals[i]} ~Cookies: ${cookiesPerHour}`;
      parentEl.appendChild(childEl);
    }
    var totalCookiesEl = document.createElement('li');
    totalCookiesEl.textContent = `Total cookies: ${totalCookies}`;
    parentEl.appendChild(totalCookiesEl);
  }
};

seattle.render();




var parentE2 = document.getElementById('tokyoElement');
// parentE2.textContent = 'attempting to contact html.';

var child2 = document.createElement('h1');
child2.textContent = 'Tokyo: ';
parentE2.appendChild(child2);

var tokyo = {
  shopHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'total'],
  hourTotals: [],
  locationName: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avCookie: 1.2,

  getRandomInt: function (minCust, maxCust) {
    minCust = Math.ceil(minCust);
    maxCust = Math.floor(maxCust);
    return Math.floor(Math.random() * (maxCust - minCust)) + minCust; //The maximum is exclusive and the minimum is inclusive
  },

  customerHour: function () {
    for (var i = 0; i < this.shopHours.length; i++) {
      var randomCustomerCount = this.getRandomInt(this.minCust, this.maxCust);
      console.log(randomCustomerCount);
      this.hourTotals.push(randomCustomerCount);
    }
  },

  render: function () {
    this.customerHour();
    var totalCookies = 0;
    for (var i = 0; i < this.shopHours.length; i++) {
      var childE2 = document.createElement('li');
      childE2.textContent = 'Shop Hours: ' + this.shopHours[i];
      var cookiesPerHour = Math.ceil(this.avCookie * this.hourTotals[i]);
      totalCookies = totalCookies + cookiesPerHour;
      childE2.textContent = `Hours: ${this.shopHours[i]} ~Customers: ${this.hourTotals[i]} ~Cookies: ${cookiesPerHour}`;
      parentE2.appendChild(childE2);
    }
    var totalCookiesEl = document.createElement('li');
    totalCookiesEl.textContent = `Total cookies: ${totalCookies}`;
    parentE2.appendChild(totalCookiesEl);
  }
};

tokyo.render();





var parentE3 = document.getElementById('dubaiElement');
// parentEl.textContent = 'attempting to contact html.';

var child3 = document.createElement('h1');
child3.textContent = 'Dubai: ';
parentE3.appendChild(child3);

var dubai = {
  shopHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'total'],
  hourTotals: [],
  locationName: 'Seattle',
  minCust: 11,
  maxCust: 38,
  avCookie: 3.7,

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

  render: function () {
    this.customerHour();
    var totalCookies = 0;
    for (var i = 0; i < this.shopHours.length; i++) {
      var childE3 = document.createElement('li');
      // childEl.textContent = 'Shop Hours: ' + this.shopHours[i];
      var cookiesPerHour = Math.ceil(this.avCookie * this.hourTotals[i]);
      totalCookies = totalCookies + cookiesPerHour;
      childE3.textContent = `Hours: ${this.shopHours[i]} ~Customers: ${this.hourTotals[i]} ~Cookies: ${cookiesPerHour}`;
      parentE3.appendChild(childE3);
    }
    var totalCookiesEl = document.createElement('li');
    totalCookiesEl.textContent = `Total cookies: ${totalCookies}`;
    parentE3.appendChild(totalCookiesEl);
  }
};

dubai.render();
