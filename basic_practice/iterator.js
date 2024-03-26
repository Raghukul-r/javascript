const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

myArray.forEach( (item) => {
    // console.log(item);
})


const user = [{
    userName: "Raghukul",
    email: "raghukul@google.com",
    mobile: 1234567890
},
{
    userName: "Vipin",
    email: "raghukul@google.com",
    mobile: 1234567890
}]

user.map( (item) => {
    // console.log(item.userName);
})

//filter 
const newArray = myArray.filter( (num) => num > 4)
console.log(newArray)