// В программе задана переменная array, которая хранит в себе двумерный массив. Его элементы — массивы, состоящие из чисел. Отсортируйте массив по количеству элементов вложенного массива по возрастанию. Результат выведите в консоль.

// Пример значений переменных:
// array = [[1,2,3],[1,2],[1,2,3,4]]
// Пример результата:
// [[1,2],[1,2,3],[1,2,3,4]]

console.log(array.sort((a,b) => a.length - b.length))