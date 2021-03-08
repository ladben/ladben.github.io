import { listenerCount } from 'node:events';

class Img {
  private id: number;
  private source: string;
  private name: string;
  private description: string;

  constructor(id: number, source: string, name: string, description: string) {
    this.id = id;
    this.source = source;
    this.name = name;
    this.description = description;
  }

  getId(): number {
    return this.id;
  }

  getSource(): string {
    return this.source;
  }

  getName(): string {
    return this.name;
  }

  getDescription(): string {
    return this.description;
  }
}

let images: Img[] = [];

images.push(
  new Img(
    1,
    'img/img_01.jpg',
    'Mountain Lake',
    'Aenean quam augue, tincidunt eu enim eget, tempus tempus dui. Proin pellentesque in odio eu hendrerit. Duis fermentum tortor imperdiet ex pretium, vitae posuere enim.'
  )
);
images.push(
  new Img(
    2,
    'img/img_02.jpg',
    'Peaceful Watermill',
    'Aenean pellentesque diam in enim condimentum, nec fermentum sapien venenatis. Nam nec lacus a magna sollicitudin porta sit amet et lorem. Vivamus scelerisque facilisis dignissim.'
  )
);
images.push(
  new Img(
    3,
    'img/img_03.jpg',
    'Beautiful Valley',
    'Maecenas eget augue sagittis, imperdiet dolor vitae, rhoncus orci. Fusce elementum tincidunt mi nec tempus. Morbi faucibus sapien augue, at facilisis enim maximus ut. Nullam.'
  )
);
images.push(
  new Img(
    4,
    'img/img_04.jpg',
    'Northern Pier',
    'Phasellus eleifend metus in tellus semper, nec consectetur neque viverra. Aenean a tempus est, quis mollis urna. Duis aliquam dui ut hendrerit ullamcorper. Nulla tempus.'
  )
);
images.push(
  new Img(
    5,
    'img/img_05.jpg',
    'Mountain Top House',
    'Proin sodales commodo elit quis aliquam. Cras elementum enim a eros viverra sollicitudin. Aliquam suscipit lorem eget risus tristique, sit amet lacinia felis malesuada. Quisque.'
  )
);
images.push(
  new Img(
    6,
    'img/img_06.jpg',
    'Spring Forest',
    'Nullam ultrices, elit nec consectetur luctus, dolor metus pretium sem, sed tincidunt sapien metus eget nisi. Pellentesque non mollis purus. Integer aliquet lorem massa, nec.'
  )
);
images.push(
  new Img(
    7,
    'img/img_07.jpg',
    'City Scape',
    'Donec iaculis tincidunt tincidunt. Ut aliquam sapien sit amet metus dapibus tempus. Sed fringilla ut sem at ullamcorper. Maecenas euismod sapien quis sapien venenatis cursus.'
  )
);
images.push(
  new Img(
    8,
    'img/img_08.jpg',
    'Vintage Music',
    'Phasellus pellentesque metus non enim ultricies vulputate. Phasellus nec urna eu eros ultrices laoreet non eu magna. Vestibulum ante ipsum primis in faucibus orci luctus.'
  )
);

// variables

let selected: number = 1;

// getting HTML Elements
let image: HTMLDivElement = document.querySelector('.image') as HTMLDivElement;
let description: HTMLDivElement = document.querySelector(
  '.description'
) as HTMLDivElement;
let ul: HTMLUListElement = document.querySelector('ul') as HTMLUListElement;
let rightArrow: HTMLDivElement = document.querySelector(
  '.right'
) as HTMLDivElement;
let leftArrow: HTMLDivElement = document.querySelector(
  '.left'
) as HTMLDivElement;
let selectedIndicator: HTMLDivElement = document.querySelector(
  '.selected-indicator'
);

// setting images

//thumbnails
let idIter: number = 0;
for (let element of images) {
  let thumbnail: HTMLLIElement = document.createElement('li');
  thumbnail.style.backgroundImage = `url(${element.getSource()})`;
  thumbnail.id = idIter.toString();
  ul.appendChild(thumbnail);
  idIter++;
}

// main image
setSelectedImage(selected);

// logic
// functions
function setSelectedImage(toSelect: number): void {
  selected = toSelect;
  let id: number = toSelect - 1;
  image.style.backgroundImage = `url(${images[id].getSource()})`;
  description.querySelector('h2').textContent = images[id].getName();
  description.querySelector('p').textContent = images[id].getDescription();

  // applying thumbnail rule
  let thumbnail = document.getElementById(`${id}`);
  // delete 'selected' class from all
  let ulArr = document.querySelectorAll('li');
  ulArr.forEach((e) => {
    e.classList.remove('selected');
  });

  // add 'selected' class to list element
  thumbnail.classList.add('selected');
  // set selected indicator
  console.log('setting indicator');
  setSelectedIndicator(selected);
}

function setNext(current: number, direction: number): void {
  let newSelected: number = current + direction;
  if (newSelected > images.length) {
    newSelected = 1;
  } else if (newSelected < 1) {
    newSelected = images.length;
  }

  setSelectedImage(newSelected);
}

function setSelectedIndicator(selected: number): void {
  let liCount: number = document.querySelectorAll('li').length;
  let selectedId: number = selected - 1;
  let leftPos: number = (1100 - 84 * liCount) / 2 + 34 + 84 * selectedId;
  console.log(leftPos);
  selectedIndicator.style.left = leftPos.toString() + 'px';
}

// event listeners
rightArrow.onclick = () => {
  setNext(selected, 1);
  setSelectedImage(selected);
};

leftArrow.onclick = () => {
  setNext(selected, -1);
  setSelectedImage(selected);
};

let listElements = document.getElementsByTagName('li');

for (let i: number = 0; i < listElements.length; i++) {
  listElements[i].onclick = clickFunction;
}

function clickFunction(e) {
  let id: number = parseInt(e.target.id);
  setSelectedImage(id + 1);
}
