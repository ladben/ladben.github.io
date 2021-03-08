"use strict";
exports.__esModule = true;
var Img = /** @class */ (function () {
    function Img(id, source, name, description) {
        this.id = id;
        this.source = source;
        this.name = name;
        this.description = description;
    }
    Img.prototype.getId = function () {
        return this.id;
    };
    Img.prototype.getSource = function () {
        return this.source;
    };
    Img.prototype.getName = function () {
        return this.name;
    };
    Img.prototype.getDescription = function () {
        return this.description;
    };
    return Img;
}());
var images = [];
images.push(new Img(1, 'img/img_01.jpg', 'Mountain Lake', 'Aenean quam augue, tincidunt eu enim eget, tempus tempus dui. Proin pellentesque in odio eu hendrerit. Duis fermentum tortor imperdiet ex pretium, vitae posuere enim.'));
images.push(new Img(2, 'img/img_02.jpg', 'Peaceful Watermill', 'Aenean pellentesque diam in enim condimentum, nec fermentum sapien venenatis. Nam nec lacus a magna sollicitudin porta sit amet et lorem. Vivamus scelerisque facilisis dignissim.'));
images.push(new Img(3, 'img/img_03.jpg', 'Beautiful Valley', 'Maecenas eget augue sagittis, imperdiet dolor vitae, rhoncus orci. Fusce elementum tincidunt mi nec tempus. Morbi faucibus sapien augue, at facilisis enim maximus ut. Nullam.'));
images.push(new Img(4, 'img/img_04.jpg', 'Northern Pier', 'Phasellus eleifend metus in tellus semper, nec consectetur neque viverra. Aenean a tempus est, quis mollis urna. Duis aliquam dui ut hendrerit ullamcorper. Nulla tempus.'));
images.push(new Img(5, 'img/img_05.jpg', 'Mountain Top House', 'Proin sodales commodo elit quis aliquam. Cras elementum enim a eros viverra sollicitudin. Aliquam suscipit lorem eget risus tristique, sit amet lacinia felis malesuada. Quisque.'));
images.push(new Img(6, 'img/img_06.jpg', 'Spring Forest', 'Nullam ultrices, elit nec consectetur luctus, dolor metus pretium sem, sed tincidunt sapien metus eget nisi. Pellentesque non mollis purus. Integer aliquet lorem massa, nec.'));
images.push(new Img(7, 'img/img_07.jpg', 'City Scape', 'Donec iaculis tincidunt tincidunt. Ut aliquam sapien sit amet metus dapibus tempus. Sed fringilla ut sem at ullamcorper. Maecenas euismod sapien quis sapien venenatis cursus.'));
images.push(new Img(8, 'img/img_08.jpg', 'Vintage Music', 'Phasellus pellentesque metus non enim ultricies vulputate. Phasellus nec urna eu eros ultrices laoreet non eu magna. Vestibulum ante ipsum primis in faucibus orci luctus.'));
// variables
var selected = 1;
// getting HTML Elements
var image = document.querySelector('.image');
var description = document.querySelector('.description');
var ul = document.querySelector('ul');
var rightArrow = document.querySelector('.right');
var leftArrow = document.querySelector('.left');
var selectedIndicator = document.querySelector('.selected-indicator');
// setting images
//thumbnails
var idIter = 0;
for (var _i = 0, images_1 = images; _i < images_1.length; _i++) {
    var element = images_1[_i];
    var thumbnail = document.createElement('li');
    thumbnail.style.backgroundImage = "url(" + element.getSource() + ")";
    thumbnail.id = idIter.toString();
    ul.appendChild(thumbnail);
    idIter++;
}
// main image
setSelectedImage(selected);
// logic
// functions
function setSelectedImage(toSelect) {
    selected = toSelect;
    var id = toSelect - 1;
    image.style.backgroundImage = "url(" + images[id].getSource() + ")";
    description.querySelector('h2').textContent = images[id].getName();
    description.querySelector('p').textContent = images[id].getDescription();
    // applying thumbnail rule
    var thumbnail = document.getElementById("" + id);
    // delete 'selected' class from all
    var ulArr = document.querySelectorAll('li');
    ulArr.forEach(function (e) {
        e.classList.remove('selected');
    });
    // add 'selected' class to list element
    thumbnail.classList.add('selected');
    // set selected indicator
    console.log('setting indicator');
    setSelectedIndicator(selected);
}
function setNext(current, direction) {
    var newSelected = current + direction;
    if (newSelected > images.length) {
        newSelected = 1;
    }
    else if (newSelected < 1) {
        newSelected = images.length;
    }
    setSelectedImage(newSelected);
}
function setSelectedIndicator(selected) {
    var liCount = document.querySelectorAll('li').length;
    var selectedId = selected - 1;
    var leftPos = (1100 - 84 * liCount) / 2 + 34 + 84 * selectedId;
    console.log(leftPos);
    selectedIndicator.style.left = leftPos.toString() + 'px';
}
// event listeners
rightArrow.onclick = function () {
    setNext(selected, 1);
    setSelectedImage(selected);
};
leftArrow.onclick = function () {
    setNext(selected, -1);
    setSelectedImage(selected);
};
var listElements = document.getElementsByTagName('li');
for (var i = 0; i < listElements.length; i++) {
    listElements[i].onclick = clickFunction;
}
function clickFunction(e) {
    var id = parseInt(e.target.id);
    setSelectedImage(id + 1);
}
