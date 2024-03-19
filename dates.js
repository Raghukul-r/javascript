// Dates 

let myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())

// console.log(typeof myDate) // object

// let myCreatedDate = new Date(("2024, 3, 19"))
// let myCreatedDate = new Date(("2024-03-19"))
let myCreatedDate = new Date(("03-19-2024"))
// console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()
// console.log(myTimeStamp); // return time in milliseconds
// console.log(Math.floor(Date.now()/1000)); // return time in seconds

let newDate = new Date()
console.log(newDate.getMonth() +1)
console.log(newDate.getDay())

console.log(newDate.toLocaleString('default', {
    weekday: "long",
}))

