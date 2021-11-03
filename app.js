'use strict';

let hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];

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
  this.hourlyCustomers = function() {
    for (let i = 0; i < hours.length; i++) {
      let numOfCust = generateRange(this.minCustPerHour, this.maxCustPerHour);
      let customerSales = Math.round(numOfCust * this.avgCookPerCust);
      this.salesTotals.push(` ${customerSales}`);
      this.grandTotal = this.grandTotal + customerSales;
    }
  }
    this.render = function(){
// let sales = document.getElementById('sales')
// for (let i = 0; i < seattle.salesTotals.length; i++) {
//     let seattleSalesHr = document.createElement('li')
//     seattleSalesHr.textContent = seattle.salesTotals[i]
//     sales.appendChild(seattleSalesHr);
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
}

function tableHeader(){
  let header = document.getElementById('thead')
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
////////////////////////////////////////////////////////////
// function tableFooter(){
//   let footer = document.getElementById('tfoot')
//   for(let i = 0; i < this.salesTotals.length; i ++){
//   let hourlyTotals = document.createElement('tf')
//   hourlyTotals.textContent = this.salesTotals[i];
//   footer.appendChild(hourlyTotals)
//   }
// }
let seattle = new Store('Seattle', 23, 65, 6.3)
tableHeader()
// tableFooter()
function generateRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
seattle.render()

// console.log(seattle);
// seattle.hourlyCustomers();
// let sales = document.getElementById('sales')
// for (let i = 0; i < seattle.salesTotals.length; i++) {
//     let seattleSalesHr = document.createElement('li')
//     seattleSalesHr.textContent = seattle.salesTotals[i]
//     sales.appendChild(seattleSalesHr);
// }
// let grandTotal = document.createElement('li')
//     grandTotal.textContent = seattle.grandTotal
//     sales.appendChild(grandTotal);

let tokyo = new Store('Tokyo', 3, 24, 1.2)
tokyo.render()

//   console.log(tokyo);
//   tokyo.hourlyCustomers();
//  let tsales = document.getElementById('tsales')
//   for (let i = 0; i < tokyo.salesTotals.length; i++) {
//       let tokyoSalesHr = document.createElement('li')
//       tokyoSalesHr.textContent = tokyo.salesTotals[i]
//       tsales.appendChild(tokyoSalesHr)
//   }
//   let tgrandTotal = document.createElement('li')
//   tgrandTotal.textContent = tokyo.grandTotal
//   tsales.appendChild(tgrandTotal);
let dubai = new Store('Dubai', 11, 38, 3.7)
dubai.render()
//   console.log(dubai);
//   dubai.hourlyCustomers();
//  let dsales = document.getElementById('dsales')
//   for (let i = 0; i < dubai.salesTotals.length; i++) {
//       let dubaiSalesHr = document.createElement('li')
//       dubaiSalesHr.textContent = dubai.salesTotals[i]
//       dsales.appendChild(dubaiSalesHr)
//   }
//   let dgrandTotal = document.createElement('li')
//   dgrandTotal.textContent = dubai.grandTotal
//   dsales.appendChild(dgrandTotal);

  let paris = new Store ('Paris', 20, 38, 2.3)
  paris.render()
//   console.log(paris);
//   paris.hourlyCustomers();
//  let psales = document.getElementById('psales')
//   for (let i = 0; i < paris.salesTotals.length; i++) {
//       let parisSalesHr = document.createElement('li')
//       parisSalesHr.textContent = paris.salesTotals[i]
//       psales.appendChild(parisSalesHr)
//   }
//   let pgrandTotal = document.createElement('li')
//   pgrandTotal.textContent = paris.grandTotal
//   psales.appendChild(pgrandTotal);

  let lima = new Store('Lima', 2, 16, 4.6)
  lima.render()
//   console.log(lima);
//   lima.hourlyCustomers();
//  let lsales = document.getElementById('lsales')
//   for (let i = 0; i < lima.salesTotals.length; i++) {
//       let limaSalesHr = document.createElement('li')
//       limaSalesHr.textContent = lima.salesTotals[i]
//       lsales.appendChild(limaSalesHr)
//   }
//   let lgrandTotal = document.createElement('li')
//   lgrandTotal.textContent = lima.grandTotal
//   dsales.appendChild(lgrandTotal);