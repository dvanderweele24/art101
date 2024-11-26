//Author Drew Vander Weele 
// 11/25/24

// Add a click event listener to the button 
$("activate").click(function() {
    //Using the core $.ajax() method
    $.ajax({
        //The URL for the request (from API docs)
        url: "https://yesno.wtf/api/status",
        // The data to send (will be converted to a query string)
        data {
            // here is whare any data goes required by the API
            // goes (check the API docs) 
            id: 123,
            api_key: "blahblahblah"
        },
        //Whether this is a POST or GET request
        type: "GET",
        //The type of data we expect to get back
        dataType: "json",
        //What do we do when the api call is successful
        success: function(data) {
            console.log(data);
            $("#output").text(JSON.stringify(data));
},
//What we do if the API calls fails
error:
function(jqXHR, textStatus, errorThrown) {
console.log("Error:", textStatus, errorThrown);
}
})
});
