const data = new Date()

console.log(data)
console.log("Dia: ",data.getDay())
console.log("Data: ",data.getDate())
console.log("Mes: ",data.getMonth() + 1) //mais 1 porque o mes começa em 0
console.log("TimeStamp: ",data.getTime())
console.log("Ano: ",data.getFullYear())
console.log("Horas: ",data.getHours())
console.log("Utc Houras: ",data.getUTCHours())
console.log("New Date: ", data)
console.log("Time zone Offset: ", data.getTimezoneOffset())

const dataUTC = Date.UTC(2021,1,1)
console.log("UTC date: ", dataUTC)
const dataNow = Date.now()
console.log("Data Now: ", dataNow)

//metodos set datas
let dat = data.toDateString()
console.log("-------------STRING DATA----------------")
console.log(typeof dat, dat)
console.log(data.toISOString())
console.log(data.toLocaleDateString())
console.log(data.toLocaleString())
console.log(data.toUTCString())
console.log(data.getUTCHours())
console.log(data.getUTCFullYear())

console.log(data.valueOf())
console.log("-------------DATA toLocalString----------------")
console.log(data.toLocaleString("en-US" ,{month: "long", weekday: "long", day: "numeric", year: "numeric"}))
console.log(data.toLocaleString())