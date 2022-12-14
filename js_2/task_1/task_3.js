// В программе задана переменная firstDiv со строковым значением. Определите, встречаются ли в данной строке два парных тега <p>. Выведите в консоль булевое значение true, если встречается, и false — в ином случае.

// Пример значений переменных:
let firstDiv = "<div><p>Первый заголовок</p><p>Второй заголовок</p></div>"
// Пример результата:
// true

// let pos = firstDiv.indexOf('<p>')
// let count = 0
// while(pos !== -1){
// count ++
// pos = firstDiv.indexOf('<p>', pos +1)
// }
// if (count > 1) {
// console.log(true)
// } else {
//     console.log(false)
// }
let count = 0
for(let i = 0; i < firstDiv.length; i++) {
    if(firstDiv[i] === '<' && firstDiv[i + 1] === 'p' && firstDiv[i + 2] === '>'){
        count++
    }
}
if (count > 1) {
    console.log(true)
    } else {
    console.log(false)
    }