'use strict';

let hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
let storeFormEl = document.getElementById('addStore');
function generateRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function Store(name, minCustPerHour, maxCustPerHour, avgCookPerCust){
  this.name = name; 
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookPerCust = avgCookPerCust;
  this.salesTotals = [];
  this.grandTotal = 0;
  this.salesPerHr = [];
  this.hourlyCustomers = function() {
    for (let i = 0; i < hours.length; i++) {
      let numOfCust = generateRange(this.minCustPerHour, this.maxCustPerHour);
      let customerSales = Math.round(numOfCust * this.avgCookPerCust);
      this.salesTotals.push(` ${customerSales}`);
      this.grandTotal = this.grandTotal + customerSales;

    }
  }
}
Store.prototype.generateHourlySales = function () {

}

  Store.prototype.render = function(){
    this.hourlyCustomers()
    let body = document.getElementById('tbody')
    let row = document.createElement('tr')
    row.textContent = this.name;
    body.appendChild(row)
  for (let i = 0; i < hours.length; i++){
    let saleTotal = document.createElement('td') 
    saleTotal.textContent = this.salesTotals[i]
    row.appendChild(saleTotal);
  }
  let dailyTotal = document.createElement('td')
  dailyTotal.textContent = this.grandTotal
  row.appendChild(dailyTotal)
}


function tableHeader(){
  let header = document.getElementById('thead');
  let blankHead = document.createElement('th');
  header.appendChild(blankHead);
  for (let i = 0; i < hours.length; i++){
    let hour = document.createElement('th');
    hour.textContent = hours[i]; 
    header.appendChild(hour);
  }
  let total = document.createElement('th')
  total.textContent = ("Daily Totals")
  header.appendChild(total)
}
// create a table footer with the hourly totals (add each array position for each store and render?)
function tableFooter(){
  let footer = document.getElementById('tfoot');
  let title = document.createElement('tf');
  title.textContent = "Hourly Totals"
  footer.appendChild(title)
  for(let i = 0; i < hours.length; i ++){
  let hrTotals = document.createElement('tf')
  hrTotals.textContent = this.hourlyTotals();
  footer.appendChild(hrTotals)
  }
}

tableHeader() 

let seattle = new Store('Seattle', 23, 65, 6.3)
seattle.render()

let tokyo = new Store('Tokyo', 3, 24, 1.2)
  tokyo.render()

let dubai = new Store('Dubai', 11, 38, 3.7)
  dubai.render()

let paris = new Store ('Paris', 20, 38, 2.3)
  paris.render()

let lima = new Store('Lima', 2, 16, 4.6)
  lima.render()

  Store.prototype.averageCookiesPurchased = function () {
    for (let i = 0; i < Hours.length; i++) {
        let cookieSales = Math.floor(generateRange(this.min_customers, this.max_customers) * this.average_cookies);
        this.salesTotals.push(cookieSales);
        this.grandTotal = this.grandTotal + cookieSales;
    }
};

  function generateStore (formSubmission) {
    formSubmission.preventDefault();
    let name = formSubmission.target.storeName.value;
    let min_cus = formSubmission.target.mincus.value;
    let max_cus = formSubmission.target.maxcus.value;
    let average_cook = formSubmission.target.avgcookie.value;
    let newMinCus = parseInt(min_cus);
    let newMaxCus = parseInt(max_cus);
    let newAvgDaily = parseInt(average_cook);

    let franchise = new Store(name, newMinCus, newMaxCus, newAvgDaily);

    franchise.render();
    tableFooter()
}
storeFormEl.addEventListener('submit', generateStore);
