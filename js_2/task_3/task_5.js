// В программе задан двумерный массив employee. Удалите у данного массива значение, у которого первый элемент hireDate, и добавьте новое значение ["jobName", "IT PROG"] в конец массива. Результат выведите в консоль.

// Пример значений переменных:
// employee  = [
//     ["firstName", "Ivan"], 
//     ["lastName", "Ivanov"],
//     ["hireDate", "21.10.2015"]
// ]
// Пример результата:
// [
//     ["firstName", "Ivan"], 
//     ["lastName", "Ivanov"],
//     ["jobName", "IT PROG"]
// ]



let result = []
   
for(let i= 0; i < employee.length; i++){
let elem = employee[i]
    for(let item of elem) {
      if(item === 'hireDate') {
        break
      } else  { 
        result.push(elem)
        break
      }
  }
}
result.push(["jobName", "IT PROG"])
console.log(result)