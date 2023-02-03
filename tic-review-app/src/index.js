import pickRandom from './pick.js';
import './style.css';
import Icon from './icon.png';
import users from './data.json';

function getMainHtml() {
    const wrapper = document.createElement('div');
    wrapper.className = 'wrapper';
    wrapper.innerHTML = ''
        + '<div class="title"><h1>Ki fog ma tesztelni?</h1></div>';


    // const element = document.createElement('div');

    // element.innerHTML = users.users[1].name;
    // element.classList.add('hello');

    // // Add the image to our existing div.
    // const myIcon = new Image();
    // myIcon.src = Icon;

    // element.onclick = pickRandom;

    return wrapper;
}

document.body.appendChild(getMainHtml());