// В программе задана переменная tasks, которая содержит массив. Элементы данного массива являются объектами с ключами title и completed. Сформируйте новый массив titles, который в качестве значений может хранить свойства title из всех значений массива tasks. Результат выведите в консоль.

// Пример значений переменных:
// tasks = [
//     {title: "Умыться" , completed: true},
//     {title: "Сделать зарядку" , completed: true},
//     {title: "Приготовить завтрак" , completed: false}
// ]
// Пример результата:
// ["Умыться", "Сделать зарядку", "Приготовить завтрак"]

let tasks = [
        {title: "Умыться" , completed: true},
        {title: "Сделать зарядку" , completed: true},
        {title: "Приготовить завтрак" , completed: false}
    ]
let titles = tasks.map(elem => elem.title)
console.log(titles)