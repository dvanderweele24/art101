// index.js - Lab 6: Arrays and Objects 
// Author: Drew Vander Weele 
// Date: 10/24/24

// Define Variables
myTransport = ["Subaru Forester Wilderness",  "Bicycle",  "Rides from friends",  "Metro/Bus"];

// Create an Object from My Main Ride
myMainRide = {
    make : "Subaru",
    model : "Forester Wilderness",
    color : "Light Blue",
    year : 2024,
    age : function() {
        return 2024 - this.year;
    }
} 

//ouput 
document.writeln("Kinds of Transportation I Use: ", myTransport, "</br>");
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");

