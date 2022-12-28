// В программе задана переменная tickets, которая хранит в себе строковое значение. В этой переменной указаны номера билетов на поезд (после слова Train) и на самолет (после слова Airplane). Необходимо написать скрипт, который на основе строки из переменной tickets формирует объект. Он должен хранить в себе два ключа (train, airplane), а в качестве значений — массивы с номерами билетов для поезда и самолета соответственно.

// Пример значений переменных:
let tickets = "Train: AV432, FS452, OE402. Airplane: DR578, JN1089, NDK140."
// Пример результата:
// {
//     "train" : ["AV432", "FS452", "OE402"],
//     "airplane" : ["DR578", "JN1089", "NDK140"]
// }

let obj = {}
let arrTickets = tickets.replace(/\.$/,'').split('.')

let trainTicket = arrTickets[0].trim().split(' ')
let airTicket = arrTickets[1].trim().split(' ')

let trainTicketArr = [] 
let airTicketArr = []

trainTicket.forEach(element => {
   element = element.replace(/:|,/, '')
   return trainTicketArr.push(element)
});
airTicket.forEach(element => {
   element = element.replace(/:|,/, '')
  return airTicketArr.push(element)

});

let keyObj = trainTicketArr[0].toLowerCase()
let keyAir = airTicketArr[0].toLowerCase()

trainTicketArr.shift()
airTicketArr.shift()
if((trainTicketArr.length + airTicketArr.length)  === 0){trainTicketArr.push('')
airTicketArr.push('')}

obj[keyObj] = trainTicketArr
obj[keyAir] = airTicketArr 

console.log(obj)