// named IIFE

(function dbConnect(){
  console.log('DB CONNECTED');
})();


// unnamed IIFE with arrow function

( () => {
  console.log('DB CONNECTED 2');
})();

// parametrized IIFE

( (user) => {
  console.log(`Hello ${user} DB CONNECTED 2`) ;
})("Raghukul");
