// В программе задана переменная randValues, которая хранит в себе массив. Его элементы могут являться как строковыми, так и числовыми значениями. Отсортируйте массив следующим образом:
// В начале массива должны быть все числовые значения по возрастанию
// В конце все строковые, упорядоченные по алфавиту
// Результат выведите в консоль.

// Пример значений переменных:
// randValues = ["Банан", 3, "Апельсин", 2, "Вишня"]
// Пример результата:
// [2, 3, "Апельсин", "Банан", "Вишня"]
let result = []

let numArr = randValues.filter(elem => typeof elem === 'number').sort((a,b)=>a-b)
let strArr = randValues.filter(elem => typeof elem !== 'number').sort()

result = numArr.concat(strArr)