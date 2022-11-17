// В программе объявлена переменная list, в которую записан массив из числовых значений. Рассчитайте произведение максимального и минимального элементов массива. Результат выведите в консоль.

// Пример значений переменных:
// Пример результата:
// 90


let list = [2, 45, 3, 23, 6]
let minNum = list[0]
let maxNum = list[0]

for(let i = 1; i < list.length; i++) {
    if (minNum > list[i]) {
        minNum = list[i]
    } else {
        if (maxNum < list[i]) maxNum = [list[i]]
    }
}

console.log(minNum * maxNum)