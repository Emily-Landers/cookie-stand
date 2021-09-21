'use strict';

let hours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM'];


function generateRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let seattle = {
  name: 'seattle',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookPerCust: 6.3,
  salesTotals: [],
  grandTotal: 0,
  hourlyCustomers: function() {
    for (let i = 0; i < hours.length; i++) {
      let numOfCust = generateRange(this.minCustPerHour, this.maxCustPerHour);
      let customerSales = Math.round(numOfCust * this.avgCookPerCust);
      this.salesTotals.push(`${hours[i]}: total sales ${customerSales}`);
      this.grandTotal = this.grandTotal + customerSales;
    }
  },
};
console.log(seattle);
seattle.hourlyCustomers();
let sales = document.getElementById('sales')
for (let i = 0; i < seattle.salesTotals.length; i++) {
    let seattleSalesHr = document.createElement('li')
    seattleSalesHr.textContent = seattle.salesTotals[i]
    sales.appendChild(seattleSalesHr)
}




let tokyo = {
    name: 'tokyo',
    minCustPerHour: 3,
    maxCustPerHour: 24,
    avgCookPerCust: 1.2,
    salesTotals: [],
    grandTotal: 0,
    hourlyCustomers: function() {
      for (let hour = 0; hour < hours.length; hour++) {
        let tokyoSalesHr = generateRange(this.minCustPerHour, this.maxCustPerHour);
        let customerSales = Math.round(tokyoSalesHr * this.avgCookPerCust);
        this.salesTotals.push(`${hours[hour]}: total sales ${customerSales}`);
        this.grandTotal = this.grandTotal + customerSales;
      }
    },
  };
  console.log(tokyo);
  tokyo.hourlyCustomers();
 let tsales = document.getElementById('tsales')
  for (let i = 0; i < tokyo.salesTotals.length; i++) {
      let tokyoSalesHr = document.createElement('li')
      tokyoSalesHr.textContent = tokyo.salesTotals[i]
      tsales.appendChild(tokyoSalesHr)
  }

  let dubai = {
    name: 'dubai',
    minCustPerHour: 11,
    maxCustPerHour: 38,
    avgCookPerCust: 3.7,
    salesTotals: [],
    grandTotal: 0,
    hourlyCustomers: function() {
      for (let hour = 0; hour < hours.length; hour++) {
        let dubaiSalesHr = generateRange(this.minCustPerHour, this.maxCustPerHour);
        let customerSales = Math.round(dubaiSalesHr * this.avgCookPerCust);
        this.salesTotals.push(`${hours[hour]}: total sales ${customerSales}`);
        this.grandTotal = this.grandTotal + customerSales;
      }
    },
  };
  console.log(dubai);
  dubai.hourlyCustomers();
 let dsales = document.getElementById('dsales')
  for (let i = 0; i < dubai.salesTotals.length; i++) {
      let dubaiSalesHr = document.createElement('li')
      dubaiSalesHr.textContent = dubai.salesTotals[i]
      dsales.appendChild(dubaiSalesHr)
  }

  let paris = {
    name: 'paris',
    minCustPerHour: 20,
    maxCustPerHour: 38,
    avgCookPerCust: 2.3,
    salesTotals: [],
    grandTotal: 0,
    hourlyCustomers: function() {
      for (let hour = 0; hour < hours.length; hour++) {
        let parisSalesHr = generateRange(this.minCustPerHour, this.maxCustPerHour);
        let customerSales = Math.round(parisSalesHr * this.avgCookPerCust);
        this.salesTotals.push(`${hours[hour]}: total sales ${customerSales}`);
        this.grandTotal = this.grandTotal + customerSales;
      }
    },
  };
  console.log(paris);
  paris.hourlyCustomers();
 let psales = document.getElementById('psales')
  for (let i = 0; i < paris.salesTotals.length; i++) {
      let parisSalesHr = document.createElement('li')
      parisSalesHr.textContent = paris.salesTotals[i]
      psales.appendChild(parisSalesHr)
  }

  let lima = {
    name: 'lima',
    minCustPerHour: 2,
    maxCustPerHour: 16,
    avgCookPerCust: 4.6,
    salesTotals: [],
    grandTotal: 0,
    hourlyCustomers: function() {
      for (let hour = 0; hour < hours.length; hour++) {
        let limaSalesHr = generateRange(this.minCustPerHour, this.maxCustPerHour);
        let customerSales = Math.round(limaSalesHr * this.avgCookPerCust);
        this.salesTotals.push(`${hours[hour]}: total sales ${customerSales}`);
        this.grandTotal = this.grandTotal + customerSales;
      }
    },
  };
  console.log(lima);
  lima.hourlyCustomers();
 let lsales = document.getElementById('lsales')
  for (let i = 0; i < lima.salesTotals.length; i++) {
      let limaSalesHr = document.createElement('li')
      limaSalesHr.textContent = lima.salesTotals[i]
      lsales.appendChild(limaSalesHr)
  }

