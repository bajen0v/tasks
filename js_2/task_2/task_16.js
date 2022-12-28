// В программе заданы два массива array_1 и array_2, элементы которого являются числами. Значения внутри одного массива уникальные. Реализуйте функцию intersection, которая принимает в качестве аргументов два массива и возвращает новый массив. Он должен содержать значения, которые встречаются в обоих массивах-аргументах, и быть отсортирован по убыванию.

// Пример значений переменных:
// array_1 = [2, 4, 7, 8, 1]
// array_2 = [2, 5, 11, 6, 1]
// Пример результата:
// [2, 1]

let array_1 = [2, 4, 7, 8, 1]
let array_2 = [2, 5, 11, 6, 1]
let arr = []

let intersection = (a,b) => { 

a.reduce((acc,current,index)=>{
  acc = b[index]
console.log(acc,current)

  return acc === current? arr.push(current): acc
}),[]}
intersection(array_1,array_2)
console.log(arr)

// let arr = []
// let intersection = (a,b) => {
// for(let i = 0; i < a.length;i++){
// if(a[i] === b[i]){
// arr.push(a[i])
// }}
// return arr
// }