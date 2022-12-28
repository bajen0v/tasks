// В программе объявлен объект hero, свойства которого описывают информацию о герое. В объекте в том числе определен метод getPosition, который возвращает позицию героя в игре. Определите, почему вызов getPosition работает некорректно. Исправьте эту ошибку.

// Пример значений переменных:
// hero = { 
//     nick: "FirstHero", 
//     position: "Лагерь",
//     getPosition: ()=>console.log("Позиция героя: " + this.position)
// }
// Пример результата:
// Позиция героя: Лагерь

//исправляем стрелочную функцию у неё контекст внешний либо указать вместо this на hero
// getPosition: function(){console.log("Позиция героя: " + this.position)}