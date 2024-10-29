// sortUserName - a function that takes a users input and scrambles
// the letter of their name
function sortUserName() {
    var userName = window.prompt("Hi there! Please type in your name so I can scramble it!");
    console.log("userName =", userName);
    // split string array 
    var nameArray = userName.split('');
    console.log("nameArray =", nameArray);
    // sort the array
    var nameArraySort = nameArray.sort();
    console.log("nameArraySort =", nameArraySort);
    // join array back to a string
    var nameSorted = nameArraySort.join('');
    console.log("nameSorted =", nameSorted);
    return nameSorted;
}

// output 
document.writeln("Horray! I fixed your name!: ", sortUserName(), "</br>");