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


