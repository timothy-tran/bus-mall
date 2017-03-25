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
    tabPercent.push(Math.floor(numOfClick[i] / numTimeShown[i] * 100));
  }
};

function createTable(){
  for (var i = 0; i < productName.length; i++) {
    var myTRow = document.createElement('tr');
    var tdName = document.createElement('td');
    tdName.textContent = productName[i];
    myTRow.appendChild(tdName);
    var tdClick = document.createElement('td');
    tdClick.textContent = 'Click ' + numOfClick[i];
    myTRow.appendChild(tdClick);
    var tdShown = document.createElement('td');
    tdShown.textContent = 'Time Shown ' + numTimeShown[i];
    myTRow.appendChild(tdShown);
    var tdPerct = document.createElement('td');
    tdPerct.textContent = 'Percent ' + tabPercent[i];
    myTRow.appendChild(tdPerct);
    var tdRecommend = document.createElement('td');
    if (tabPercent[i] > 40) {
      tdRecommend.textContent = 'Yes';
    } else {
      tdRecommend.textContent = 'No';
    };
    myTRow.appendChild(tdRecommend);
    myTable.appendChild(myTRow);
  };
}

calPercentage();
createTable();
