// Необходимо доработать программу из задания 2.6
// В программе задана переменная values, которая хранит в себе массив. Элементы массива являются числами. Определите, находятся ли в заданном массиве элементы, которые содержат четырехзначные числа. Если такие значения встречаются, выведите индекс первого в консоль. В противном случае выведите сообщение Искомый элемент не был найден.

// Пример значений переменных:
// values = [10, 185, 11200, 980]
// Пример результата:
// "Искомый элемент не был найден"

for(let num in values) {
    if (values[num] > 999 && values[num] < 10000){
      console.log(+num)
      break
    } else {
    console.log('Искомый элемент не был найден')
}}
    
    