// В программе задана переменная words, которая хранит в себе массив строковых значений. Напишите скрипт, который считает количество палиндромов и непалиндромов в массиве words. Результат должен представлять собой массив из двух элементов, где первое значение — количество палиндромов, а второе — непалиндромов.

// Пример значений переменных:
// words = ["Заказ", "Такси", "Доход"]
// Пример результата:
// [2, 1]


let result = []
let count = 0
words.forEach(elem => {
    let palindrome = elem.split('').reverse().join('').toLowerCase()

    if(elem.toLowerCase() === palindrome){
    count+=1 
    }
})

result.push(count)
result.push(words.length-count)


console.log(result)