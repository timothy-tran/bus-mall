'use strict';

var imageArray = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'];

var nameArray = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

var productArray = [];
var totalClicks = 0;
var listItemClicked = [];
var listShown =[];
var img1 = document.getElementById('left');
var img2 = document.getElementById('center');
var img3 = document.getElementById('right');

/*function updateStorage () {
  if (localStorage.lsProductArray) {
    var lsDataStored = JSON.parse(localStorage.lsProductArray);
    for ( var i = 0; i < lsDataStored.length; i++) {
      productArray[i].itemClick += lsDataStored[i].itemClick;
      productArray[i].imageShown += lsDataStored[i].imageShown;
    }
  }
};*/

function Products(itemName, itemPath) {
  this.itemName = itemName;
  this.itemPath = itemPath;
  this.itemClick = 0;
  this.imageShown = 0;
  productArray.push(this);
};

function newProduct() {
  for (var i = 0; i < imageArray.length; i++) {
    var filePath = 'img/' + imageArray[i];
    new Products(nameArray[i], filePath);
  };
};

function randomImgIndex() {
  return Math.floor(Math.random() * imageArray.length);
};

var prevImgIndexes = [];
function randomImage(){
  var currentImgIndexes = [];
  while (currentImgIndexes.length < 3) {
    var imgSelector = randomImgIndex();
    if (!currentImgIndexes.includes(imgSelector) && !prevImgIndexes.includes(imgSelector)) {
      currentImgIndexes.push(imgSelector);
    }
  }
  var prod1 = productArray[currentImgIndexes[0]];
  var prod2 = productArray[currentImgIndexes[1]];
  var prod3 = productArray[currentImgIndexes[2]];
  img1.src = prod1.itemPath;
  img2.src = prod2.itemPath;
  img3.src = prod3.itemPath;

  img1.alt = currentImgIndexes[0];
  img2.alt = currentImgIndexes[1];
  img3.alt = currentImgIndexes[2];
  prevImgIndexes = currentImgIndexes;
  prod1.imageShown++;
  prod2.imageShown++;
  prod3.imageShown++;
  getCharts();
};

function productClicks(){
  for (var i = 0; i < productArray.length; i++) {
    var dataStr = productArray[i].itemClick + ' clicks for ' + productArray[i].itemName;
    console.log(dataStr);
  };
  getData();
  barChart();
};

var clickLimit = 25;
function handleTheClick(){
  randomImage();
  totalClicks++;
  var productIdx = this.alt;
  productArray[productIdx].itemClick++;
  if (totalClicks === clickLimit) {
    img1.removeEventListener('click', handleTheClick);
    img2.removeEventListener('click', handleTheClick);
    img3.removeEventListener('click', handleTheClick);
    productClicks();
  }
};

function getData () {
  for (var i = 0; i < nameArray.length; i++) {
    listItemClicked.push(productArray[i].itemClick);
    listShown.push(productArray[i].imageShown);
  };
  localStorage.setItem('numClick', JSON.stringify(listItemClicked));
  localStorage.setItem('numShown', JSON.stringify(listShown));
  localStorage.setItem('nameItem', JSON.stringify(nameArray));
};

function getCharts() {
  if (localStorage.productName) {
    barCharts();
  }
}

function barChart() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  var chartsClick = JSON.parse(localStorage.getItem('numClick'));
  var chartsShown = JSON.parse(localStorage.getItem('numShown'));
  var productName = JSON.parse(localStorage.getItem('nameItem'));

  var data = {
    labels: productName,
    datasets: [{
      label: 'Number of Clicks',
      data: chartsClick,
      backgroundColor: '#00b300'
    }, {
      label: 'Number of Time Product Shown',
      data: chartsShown,
      backgroundColor: '#8cb3d9'
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
  }

newProduct();
randomImage();
img1.addEventListener('click', handleTheClick);
img2.addEventListener('click', handleTheClick);
img3.addEventListener('click', handleTheClick);
