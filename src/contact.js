export default (contentDiv) => {
    const p = document.createElement('p');
    p.innerHTML = 'Pizza Time?<br>7 Carmine Street<br>New York, NY 10014<br>(212) 366-1182'
    contentDiv.appendChild(p);
}