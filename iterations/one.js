// forEach

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

myArray.forEach( (item) => {
    // console.log(item)
});



const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName)
} )