function fizzBuzz(n) {
    let oneLongString="";
    //Intialize your string
    
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            oneLongString +="FizzBuzz<br>";
        }else if (i % 3 === 0) {
            oneLongString +="Fizz<br>";
        }else if (i % 5 === 0) {
            oneLongString +="Buzz<br>";
        }else{
            oneLongString +=i + "<br>";
        }
    }
    $("#output").html(oneLongString);
}
$("#submit").click(function() {
  let userInput = $('#user-input').val();
  //Get input value
  let n= parseInt(userInput,10);
  //Convert to integer

  if (!isNaN(n)) {
    //Check if it's a number 
    fizzBuzz(n);
    //Call fizzBuzz function
   }else{
    console.log("Please enter a valid number.");
   }
});