/*
   lab.js - This simple Javascript/jQuery script gets a value from an input field and outputs a modified version.
   Author: Drew Vander Weele 
   Date: 11/11/24
*/

//Sorts the charaters of a string in an alphabetical order.
function sortString(str) {
   return str.split('').sort().join('');
}
   
//Add event listener
$("submit").click(function() {
   //Get value of input field
   console.log($('#user-name').val());
   let userName = $('#user-name').val();

   //Now sort it  
   let userNamesorted = sortString(userName);

   //Append to a new div to our output div
   $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
});

   console.log("Button clicked!");