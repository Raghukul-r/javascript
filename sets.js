const mySet = new Set( );

mySet.add(1);
mySet.add(5);
mySet.add("Raghukul");
mySet.add(4);
console.log(mySet);

mySet.delete(4);
console.log(mySet);

console.log(mySet.has(5)); // has() return true or false

// console.log(mySet.clear());  // clear set values

// Iterating sets
 const mySet1 = new Set([1, 2, 3, 4, 5, 6, "Raghukul"]);
 console.log(mySet1)

//  for ( const item of mySet1 ) {
//     console.log(item)
//  }

 // converting set object to an array object with array.from
 const myArray = Array.from(mySet1);
 console.log(myArray)




