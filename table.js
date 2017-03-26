'use strict';


var numOfClick = JSON.parse(localStorage.getItem('numClick'));
var numTimeShown = JSON.parse(localStorage.getItem('numShown'));
var productName = JSON.parse(localStorage.getItem('nameItem'));
var tabPercent = [];

var body = document.getElementsByTagName('body')[0];
var myTable = document.createElement('table');
body.appendChild(myTable);

function calPercentage () {
  for (var i = 0; i < productName.length; i++) {
      if (numTimeShown[i] !== 0) {
        tabPercent.push(Math.floor(numOfClick[i] / numTimeShown[i] * 100));
      } else {
        tabPercent.push(0);
      };
  };
}

function tableHead() {
  var tabHead = document.createElement('tr');
  tabHead.setAttribute('id', 'tabRow');
  var tdItem = document.createElement('td');
  tdItem.textContent = 'Item';
  tabHead.appendChild(tdItem);
  var tdView = document.createElement('td');
  tdView.textContent = 'Views';
  tabHead.appendChild(tdView);
  var tdClick = document.createElement('td');
  tdClick.textContent = 'Clicks';
  tabHead.appendChild(tdClick);
  var tdPerct = document.createElement('td');
  tdPerct.textContent = '% of Clicks When Viewed';
  tabHead.appendChild(tdPerct);
  var tdRec = document.createElement('td');
  tdRec.textContent = 'Recommanded?';
  tabHead.appendChild(tdRec);
  myTable.appendChild(tabHead);
}

function createTable() {
  for (var i = 0; i < productName.length; i++) {
    var myTRow = document.createElement('tr');
    var tdName = document.createElement('td');
    if (i % 2) {
      tdName.setAttribute('class', 'line1');
    } else {
      tdName.setAttribute('class', 'line2');
    }
    tdName.textContent = productName[i];
    myTRow.appendChild(tdName);
    var tdShown = document.createElement('td');
    tdShown.textContent = numTimeShown[i];
    myTRow.appendChild(tdShown);
    var tdClick = document.createElement('td');
    tdClick.textContent = numOfClick[i];
    myTRow.appendChild(tdClick);
    var tdPerct = document.createElement('td');
    tdPerct.textContent = tabPercent[i] + '%';
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
tableHead();
createTable();
