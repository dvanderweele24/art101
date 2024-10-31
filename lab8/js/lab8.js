// index.js - Lab 8: Anon Functions and Callbacks
// Author: Drew Vander Weele 
// Date: 10/31/24

function isOdd(x){
    return (x % 2 == 0);
}

//test function 
console.log("Is 1 odd?", isOdd(1));
console.log("Is 2 odd", isOdd(2));

array = [200, 45, 81, 73, 86, 32, 24, 67, 900]
console.log("My array", array);

var result = array.map(isOdd);
// should return [true, false, false, false, true, true, ture, false, true]
console.log("Test of oddness of array:", result);

var result = array.map(function(x){
    return x ** 0.5;
})
// should return [14.142135623730951, 6.708203932499369, 9, 8.54400374531753, 9.273618495495704]
console.log("Squareroot of array:", result);