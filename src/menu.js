import menuPizza from './menupizza.jpg';

export default (contentDiv) => {
    const image = document.createElement('img');
    image.src = menuPizza;
    contentDiv.appendChild(image);

    const h2 = document.createElement('h2');
    h2.innerHTML = "Pizza :)"
    contentDiv.appendChild(h2);
}