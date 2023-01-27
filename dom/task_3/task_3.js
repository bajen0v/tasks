// В HTML-документе есть тег <label> и тег <input> с идентификатором target. Необходимо написать скрипт, который присваивает тегу <label> атрибут, позволяющий привязать его к тегу <input>. В результате при клике мышью на <label> тег <input> должен стать активным (в него должен переместиться курсор).


let input = document.querySelector('#target')
let label = document.querySelector('label')

label.setAttribute('for', 'target')
function addActive(){
  input.classList.toggle('active')
}
label.onclick = addActive()