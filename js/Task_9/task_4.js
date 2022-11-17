// В программе объявлены две переменные — list_1 и list_2, в каждой из которых хранится массив из чисел. Объедините два массива в один и каждое значение возведите в квадрат. Результат выведите в консоль.

// Значения переменных:
// list_1 = [12, 3]
// list_2 = [2, 1]
// Результат:
// [144, 9, 4, 1]

const sqrt = (arr) => {
    let myArr = [];
    for(let num of arr) myArr.push(num * num)
    return console.log(myArr)
}

for (let item of list_2){
  list_1.push(item)
}

sqrt(list_1)

// const concateArr = (arrOne, arrTwo) => {
// for (let item of arrTwo){
//   arrOne.push(item)
//   }
// return sqrt(arrOne)
// }

// concateArr(list_1,list_2)