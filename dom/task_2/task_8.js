// В HTML-документе заданы два <div> тега с идентификаторами div1 и div2. Напишите скрипт, который позволит перенести содержимое тега с идентификатором div1 в конец тега с идентификатором div2.

// Пример заданного HTML-документа:
// <div id=”div1”><h2>Text</h2><span>subtext</span></div>
// <div id=”div2”><h1>Title</h1></div>
// Пример результата в HTML-документе:
// <div id=”div1”></div>
// <div id=”div2”><h1>Title</h1><h2>Text</h2><span>subtext</span></div>

let d1 = document.getElementById('div1')
let d2 = document.getElementById('div2')

let p1 = d1.querySelectorAll('p')
p1.forEach(el => d2.append(el))

while(d1.firstChild) {
    d2.append(d1.firstChild)}