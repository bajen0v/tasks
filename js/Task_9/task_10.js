// В программе объявлена переменная list, в которую записан массив из числовых значений. Напишите функцию count(list), которая принимает массив в качестве аргумента и возвращает количество четных элементов в массиве. Вызовите функцию count(list) и в качестве аргумента передайте ей список list. Выведите в консоль то, что вернет функция.

// Пример значений list = [2, 45, 3, 23, 6]
// Пример 2
let list = [2, 45, 3, 23, 6]
const count = (arr) => {
    let countAddElemens = 0

    for(let elem of arr) {
        if(elem % 2 === 0) countAddElemens++
    }

    return console.log(countAddElemens)
}
count(list)