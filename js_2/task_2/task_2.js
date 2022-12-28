// В программе задана переменная partNumbers, которая хранит в себе массив. Каждый элемент массива является артикулом товара. Напишите программу, которая создаст новый массив на основе partNumbers. В новом массиве должны быть все элементы из partNumbers, которые заканчиваются на две цифры и два буквенных символа. Все остальные элементы необходимо отбросить. Значение нового массива выведите в консоль.

// Пример значений переменных:
// partNumbers = ["ER1234COM", "FIV987451RU","GE123JO","P4321NO"]
// Пример результата:
// ["FIV987451RU", "GE123JO", "P4321NO"]

function fltr(str) {

    if(isNaN(Number(str[str.length-2])) && !isNaN(Number(str[str.length-3]))){
        return str
    }

} 

let partNumbersFilter = partNumbers.length === 0 ? [] : partNumbers.filter(ticket=> ticket === fltr(ticket))

console.log(partNumbersFilter)