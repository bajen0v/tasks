// В программе задана переменная values, которая хранит массив со строковыми и булевыми значениями. На основе массива values сформируйте новый массив result, который является фрагментом values. Новый массив должен начинаться с первого вхождения булевого значения и заканчиваться последним вхождением булевого значения в массив values. Выведите получившийся массив в консоль.

// Пример значений переменных:
// values = ["Строка",true,"Числа","Объект","Не число", false, "Не объект"]
// Пример результата:
// [true, "Число", "Объект", "Не число", false]

let start = values.findIndex(elem => typeof elem === 'boolean')
let end = values.lastIndexOf(((typeof elem) === 'boolean'),values.length - 1) + 1

let result = values.slice(start,end)
console.log(result)


// function setStart(arr){
//     if(typeof values[0] === 'boolean'){
//         return arr
//     } else {
//         values.shift()
//         return setStart(arr)
//     }
// }

// function setEnd(arr){
//     if(typeof values[arr.length-1] === 'boolean'){
//         return arr
//     } else {
//         values.pop()
//         return setEnd(arr)
//     }
// }
// let result = setEnd(values) && setStart(values)
// console.log(result)