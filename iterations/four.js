// const myNums = [1, 2, 3]

// let myTotal = myNums.reduce( (acc, currentValue) => {
//     console.log(` acc: ${acc} , currentValue: ${currentValue}`);
//     return acc + currentValue;
// } ,0 )

// console.log(myTotal)

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce( (acc, currVal) => { return acc + currVal.price}, 0)
console.log(priceToPay)