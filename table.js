'use strict';


var numOfClick = JSON.parse(localStorage.getItem('numClick'));
var numTimeShown = JSON.parse(localStorage.getItem('numShown'));
var productName = JSON.parse(localStorage.getItem('nameItem'));
var tabPercent = [];

var body = document.getElementsByTagName('body')[0];
var myTable = document.createElement('table');
body.appendChild(myTable);

function calPercentage () {;
  for (var i = 0; i < productName.length; i++) {
    tabPercent[i] = Math.floor((numOfClick[i] / numTimeShown[i]) * 100);
    console.log(tabPercent[i]);
    console.log(productName[i]);
    console.log(numOfClick[i]);
  }
};

function createTable(){
  myTable.appendChild(myTRow);
  for (var i = 0; i < productName.length; i++) {
    var myTRow = document.createElement('tr');
    myTRow.textContent = productName.[i];
    for (i = 0; i < 5; i++) {
      var tData = 
    }



    var tData = document.createElement('td');
    var dataStr = productArray[i].itemClick + ' clicks for ' + productArray[i].itemName;
    tData.textContent = dataStr;
    myTRow.appendChild(tData);
  }
};

var body = document.getElementsByTagName('body')[0];
var myTable = document.createElement('table');
var elForm = document.getElementById('inputForm');
body.appendChild(myTable);

function tableHeading () {
  var tableHead = document.createElement('thead');
@@ -18,7 +19,6 @@ function tableHeading () {
  }
  tableHead.appendChild(tableRow);
  myTable.appendChild(tableHead);
  body.appendChild(myTable);
}

tableHeading();
@@ -38,6 +38,7 @@ function CookiesStore (location, min, max, avg) {
    }
  };
  this.createStore = function() {
    var totalByHour = [];
    this.salePerHour();
    var tableB = document.createElement('tbody');
    var tableRow = document.createElement('tr');
@@ -47,11 +48,11 @@ function CookiesStore (location, min, max, avg) {
    for (var i = 0; i < openingHours.length - 1; i++) {
      var hourList = document.createElement('td');
      hourList.textContent = this.saleEachHour[i];
      totalByHour.push(this.saleEachHour[i]);
      tableRow.appendChild(hourList);
    };
    tableB.appendChild(tableRow);
    myTable.appendChild(tableB);
    body.appendChild(myTable);
  }
}



  calPercentage();
