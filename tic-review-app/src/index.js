import pickRandom from './pick.js';
import './style.css';
import Icon from './icon.png';
import users from './data.json';

function component() {
    const element = document.createElement('div');

    element.innerHTML = users.users[4].name;
    element.classList.add('hello');

    // Add the image to our existing div.
    const myIcon = new Image();
    myIcon.src = Icon;

    element.onclick = pickRandom;

    return element;
}

document.body.appendChild(component());