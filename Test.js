'use strict';

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var studentHeights = [71, 65, 67, 70];
var studentAges = [82, 50, 33, 12];

var data = {
  labels: ['Zach', 'Becky', 'Sean', 'Max'],
  datasets: [{
    label: 'Student Heights',
    data: studentHeights,
    backgroundColor: 'green'
  }, {
    label: 'Student Ages',
    data: studentAges
  }]
};

var myChart = new Chart(ctx, {
  type: 'bar',
  data: data,
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero:true
        }
      }]
    }
  }
});
