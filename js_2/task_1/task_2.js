// В программе задана переменная greetings со строковым значением. Определите позицию последнего вхождения подстроки username в значении переменной greetings. Результат выведите в консоль.

// Пример значений переменных:
// greetings = "Приветствую, username! Сегодня вы получили два сообщения от username."
// Пример результата:
// 58

let result = greetings.toLowerCase().lastIndexOf('username')
console.log(result)