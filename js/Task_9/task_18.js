// В программе объявлена переменная list, в которую записан массив из объектов. В каждом объекте записаны название продукта и его стоимость.
// Выведите в консоль название продукта, цена которого является максимальной в заданном массиве. Если таких несколько, выведите название первого из них.

// Пример значений переменных:
//  list = [
//  {product: "Apple", price: 25},
//  {product: "Cherry", price: 32},
//  {product: "Strawberry", price: 45}
// ]

let result;
let product;

for (let i = 0; i < list.length; i++) {
  if (result > list[i].price) {
    result
    product;
  } else {
    result = list[i].price;
    product = list[i].product;
  }
}
console.log(product);
