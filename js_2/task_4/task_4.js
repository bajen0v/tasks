// В программе объявлен объект props, у которого задан набор свойств. Объявите функцию getValue(), которая выводит в консоль строку со всеми свойствами и их значениями (без методов). Привяжите объект props в качестве контекста функции getValue() и присвойте получившуюся функцию переменной getValue.

// Пример значений переменных:
// props= { 
//     name: "Анатолий", 
//     age: 29,
//     sayHi: ()=>"привет"
// }
// Пример результата:
// Значения свойств объекта props (name: Анатолий, age: 29)


for(let el in props){
    if(typeof props[el] == 'function'){
    delete props[el]
    }}
    let arr = Object.entries(props)
    
    let str = ''
    arr.map(el => {
    if(arr[arr.length-1] !== el){
      str += el[0] +': ' + el[1] + ', '
    } else {
    str += el[0] +': ' + el[1]
    }
    })
    
    function getValue(){
      
    let string = `Значения свойств объекта props (${str})`
      return console.log(string)
    }
    
    var getValue = getValue.bind(props)
    getValue()