
// В программе объявлена переменная list, в которую записан массив из строковых значений. Посчитайте и выведите в консоль элемент с максимальной длиной. Если элементов с такой длиной несколько, выведите первый.

// Пример значений переменных:
// list = ["Груша", "Яблоко"]
// Пример результата:
// "Яблоко"
let result = ''
let current = 0

for (let item of list) {
  if (item.length > current) {
    current = item.length
    result = item
  } else {
    current
  }
}

for(let i = 0; i < list.length; i++) {
  if (list[i].length > current) {
    current = list[i].length 
    result = list[i]
    console.log(current)
   } else {
    current
  }
  
}
console.log(result)