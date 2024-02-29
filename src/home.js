import pizzaTime from './pizzatime.jpg';

export default (contentDiv) => {
    const header = document.createElement('h1');
    header.innerHTML = "Joe's Pizza";
    contentDiv.appendChild(header);

    const image = document.createElement('img');
    image.src = pizzaTime;
    contentDiv.appendChild(image);

    const para = document.createElement('p');
    para.innerHTML = "Pizza Time!";
    contentDiv.appendChild(para);
};