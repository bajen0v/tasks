// В программе объявлена переменная order, которая хранит объект. Объявите переменную descriptor, которая должна содержать значения всех атрибутов ключа totalPrice объекта orders в виде объекта. Результат выведите в консоль.

// Пример значений переменных:
// order = {
//     productName: "Велосипед",
//     costomerName: "Саша",
//     salesName: "Петя",
//     totalPrice: 15000
// }
// Пример результата:
// {value: 15000, writable: true, enumerable: true, configurable: true}




let descriptor = Object.getOwnPropertyDescriptor(order, 'totalPrice');
console.log(descriptor)