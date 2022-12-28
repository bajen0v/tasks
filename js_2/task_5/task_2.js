// В программе задан объект employees, который содержит ряд свойств и методов. Сформируйте строку с именами всех свойств через запятую и пробел (, ) и выведите в консоль. Имена методов добавляться не должны.

// Пример значений переменных:
// employees = {
//     firstName: "Петя",
//     lastName: "Иванов",
//     ratePerDay: 2500,
//     workingDays: 5,
//     getSalary() { console.log(employees.ratePerDay * employees.workingDays )} 
// }
// Пример результата:
// firstName, lastName, ratePerDay, workingDays

let str = []
for(let el in employees){
    if(typeof employees[el] == 'function'){
    delete employees[el]
    } else {
        str.push(el)
    }
}
console.log(str.join(', '))