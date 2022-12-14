// В программе объявлена переменная sentence со строковым значением. Преобразуйте эту строку в массив так, чтобы каждое слово было отдельным элементом массива. Результат выведите в консоль.
// Метод строки split() использовать нельзя.

// Пример значений переменных:
// Пример результата:
// ['Завтра', 'будет', 'лучше', 'чем', 'вчера']

let sentence = "Завтра будет лучше чем вчера"
let result = []
let current = ''

for (let i = 0; i <= sentence.length; i++) {
    if (sentence[i] === ' ' || i === sentence.length) {
        result.push(current)
        current = ''
        continue
    } else {
        current += sentence[i]
    }
}

console.log(result)