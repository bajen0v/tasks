// В программе объявлена≈ переменная list, в которую записан массив числовых значений от 1 до 100. Используя цикл, сформируйте сумму из простых чисел этого диапазона и выведите результат в консоль.

// Пример значений переменных:
// list = [1, 2, 3, ... 99, 100]
// Пример результата:
// 1060

let result = 0;
for (let i = 2; i < list.length; i++) {
  let count = 0;
  for (let num of list) {
    if (num > list[i] || count > 3) break;

    if (list[i] % num === 0) {
      count++;
    }
  }
  if (count === 2) result += list[i];
  
}
console.log(result);