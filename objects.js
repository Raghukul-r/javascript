let user = {
    firstName: "Raghukul", 
    lastName: "Rathod",
    age: 30, 
    location: "Agra", 
    email: "raghukul@google.com", 
    isLoggedIn: true,
    fullName: function() {
        return this.firstName + " " + this.lastName;    
    }
}

console.log(user.fullName())

user.name = "Vipin"
console.log(user.name)



