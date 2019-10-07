var parentEl = document.getElementById('parentElement');

parentEl.textContent = 'attempting to contact html.';
var child = document.createElement('h1');
child.textContent = 'salmon cookie shops';
parentEl.appendChild(child);

var iceCreamShop = {
  shopHours: ['6am', '7am', '8am', 'so on'],
  hoursTotal: [12],

  locationName: 'Pikes Place Market',

  render: function () {
    for (var i = 0; i < this.shopHours.length; i++) {
      var childEl = document.createElement('li');
      childEl.textContent = `Shop Hours: ${this.shopHours[i]}~
    Total Customers: ${this.hoursTotal[i]}`;
      parentEl.appendChild(childEl);
    }
  }
};

iceCreamShop.render();


