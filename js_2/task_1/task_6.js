// В программе объявлена переменная symbols со строковым значением. В данной строке могут встречаться буквенные символы и цифры. Опишите условие, которое выводит в консоль строку Первый символ цифра, если первый символ переменной symbols является цифрой. В противном случае необходимо вывести строку Первый символ не цифра.

// Пример значений переменных:
// symbols = "Первый номер"
// Пример результата:
// "Первый символ не цифра"


Number(symbols[0])? console.log("Первый символ цифра"): console.log("Первый символ не цифра")