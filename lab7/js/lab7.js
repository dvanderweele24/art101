// sortUserName - a function that takes a users input and scrambles
// the letter of their name

function sortUserName() {

    var userName = window.prompt("Hi there! Please type in your name so I can scramble it!");
    console.log("userName =", userName);
    

    var nameArray = userName.split('');
    console.log("userName =", userName);
    
    var nameArraySort = nameArray.sort();
    console.log("nameArraySort =", nameArraySort);

    var nameSorted = nameArraySort.join('');
    console.log("nameSorted =", nameSorted);
    return nameSorted;
}

// output 
document.writeln("Horray! I fixed your name!: ", sortUserName(), "</br>");
