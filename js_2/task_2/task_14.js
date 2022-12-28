// В программе задана переменная numbers, которая хранит массив из чисел. Определите, какое максимальное количество элементов массива numbers (в порядке, который реализован в массиве) можно сложить, чтобы их итоговая сумма не превышала 50. Результат выведите в консоль.

// Пример значений переменных:
let numbers = [10, 20, 33, 55, 100]
// Пример результата:
// 2

let res = 0

numbers.reduce((previousValue, currentItem) => {
    let sum = previousValue + currentItem
    if(sum <= 50){
        res++
    }
return sum
},0)

// let sum = 0
// for(let num of numbers){
//     sum += num
//     sum <= 50? res.push(num) : sum
// }
console.log(res);