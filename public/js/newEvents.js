// TICKETMASTER API AND AJAX CALL =========================

var searchCounter = 0;
var queryTerm = "";
  var queryURLBase = "https://app.ticketmaster.com/discovery/v2/events.json?apikey=NdH7ttoqHEznKuGMVdBINJqbG8r9w1Kk&keyword=";

$("#search-events-btn").on("click", function(event) {
      event.preventDefault();

$(".panel-primary").attr("style", "display: block;");

      queryTerm = $("#queryTerm").val().trim();
      console.log(queryTerm);

      var queryURL = queryURLBase + queryTerm;
      console.log(queryURL); 


$.ajax({
    url: queryURL,
    method: "GET"
  }).done(function(response) {
    console.log(response);       


// Display SEARCH RESULTS into a TABLE =========

    var events = response._embedded.events; 
    console.log(events); 

    $("#event-table > tbody").empty();
    // $("#search-events-form").empty();

    for (var i = 0; i < events.length; i++) {          
      

      var eventName = events[i].name;             
     
      var location = events[i]._embedded.venues[0].city.name;
                        
      var date = events[i].dates.start.localDate;
      
      var venue = events[i]._embedded.venues[0].name; 

      var url = events[i].url;
                

      $("#event-table > tbody").append("<tr><td>" + eventName + "</td><td>" + location + "</td><td>" +
      date + "</td><td>" + venue + "</td><td><a target='_blank' href='" + url + "'>more info</a></td></tr>");        

    };

      $.ajax({
    url: "/api/artist",
    method: "GET",
    data: {
      artist: queryTerm
    }
  }).done(function(response) {
    console.log(response);
  })
})
});