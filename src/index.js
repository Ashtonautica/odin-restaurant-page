import './style.css';
import home from "./home";
import menu from "./menu";
import contact from './contact';

const contentLoaders = {
    home,
    menu,
    contact,
};
const contentDiv = document.querySelector('#content');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', e => {
        const buttonLabel = e.target.innerHTML.toLowerCase();
        contentDiv.innerHTML = "";
        contentLoaders[buttonLabel](contentDiv);
    });
});

contentLoaders.home(contentDiv);