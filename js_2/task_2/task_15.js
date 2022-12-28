// В программе задана переменная values, которая хранит массив из строк. Определите математическую сумму всех элементов, которые при преобразовании в число не вернут значение NaN. Результат выведите в консоль.

// Пример значений переменных:
// Пример результата:
// 150


let values = ["100", "30", "Не число", "20", "Тоже не число"]
let res = values.reduce((acc, current)=> { 
let num = Number.parseInt(current)
let sum;
!isNaN(num) ? current = num : current = 0
return sum = acc + current
},0)

console.log(res);