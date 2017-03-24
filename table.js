'use strict';

var numOfClick = JSON.parse(localStorage.getItem('numClick'));
var numTimeShown = JSON.parse(localStorage.getItem('numShown'));

function calPercentage () {;
  var tabPercent = [];
  for (var i = 0; i < numOfClick.length; i++) {
    tabPercent[i] = Math.floor((numOfClick[i] / numTimeShown[i]) * 100);
    console.log(tabPercent[i]);
  }
};

  calPercentage();
