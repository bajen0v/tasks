let result = 0;
let elems = document.getElementsByClassName(".numeric");
elems.forEach(elem => result += +elem.innerText);
