'use strict';

var clicked = false;

function SwitchPic(pic) {
    if (!clicked) {
        pic.src = "img/bag.jpg";
        clicked = true;
    } else {
        pic.src = "img/pet-sweep.jpg";
        clicked = false;
    }
}
