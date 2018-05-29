// Submit Form

$(document).ready(function() {
  console.log("newEvents is ready!");

  // $(".submitNewEvent").on("click", function(event) {
  //     event.preventDefault();

  //     var event_name = $("#eventNameNE");
  //     var date = $("#inputDateNE");
  //     var location = $("#inputLocationNE");
  //     var venue_name = $("#inputVenueNE");
  //     var ticket_qty = $("#ticketCountNE");

  //     var email = $("#inputEmail");

  //     var newEvent = {
  //       event_name: event_name.val().trim(),
  //       date: date.val().trim(),
  //       location: location.val().trim(),
  //       venue_name: venue_name.val().trim(),
  //       ticket_qty: ticket_qty.val().trim()
  //     };

  //     console.log(newEvent);

  //     $.ajax({
  //       url: "/api/Events",
  //       method: "POST",
  //       data: newEvent
  //     }).done(function(response) {
  //       console.log(response);
  //     });

  //     event_name.val("");
  //     date.val("");
  //     location.val("");
  //     venue_name.val("");
  //     ticket_qty.val("");
  //     email.val("");

  //     // window.location.href = "/newEvents";

  //   });

  //     $("#newOpportunityForm").on("submit", function (event) {
  //         event.preventDefault();

  //         var $this = $(this);
  //         $this.find('.message:first').text('');

  //         if ($.trim($("#eventName").val()) === "" || $.trim($("#eventName").val()) === "Event Name" || $.trim($("#eventName").val()) === "Please enter your Event Name") {
  //             $("#eventName").val(" Please enter your Event Name");
  //             return false;
  //         }
  //         if ($.trim($("#inputLocation").val()) === "" || $.trim($("#inputLocation").val()) === "Location" || $.trim($("#about Location").val()) === "Please enter information your Location.") {
  //             $("#inputLocation").val(" Please enter your event's Location");
  //             return false;
  //         }
  //         if ($.trim($("#inputVenue").val()) === "" || $.trim($("#inputVenue").val()) === "Venue Name" || $.trim($("#inputVenue").val()) === "Please enter your Event Name") {
  //             $("#inputVenue").val(" Please enter your Venue Name");
  //             return false;
  //         }
  //         if ($.trim($("#inputDate").val()) === "" || $.trim($("#inputDate").val()) === "MM/DD/YYYY" || $.trim($("#inputDate").val()) === "Please enter a valid Date") {
  //             $("#inputDate").val(" Please enter a valid Date");
  //             return false;;
  //         }
  //         if ($.trim($("#ticketCount").val()) === "" || $.trim($("#ticketCount").val()) === "" || $.trim($("#ticketCount").val()) === "Please enter your tickets available") {
  //             $("#ticketCount").val(" Please enter your available tickets");
  //             return false;
  //         }
  //         var newEvents = {
  //             event_name: $("#eventName").val().trim(),
  //             location_name: $("#inputLocation").val().trim(),
  //             venue_name: $("#inputVenue").val().trim(),
  //             date: $("#inputDate").val().trim(),
  //             ticket_number: $("#ticketCount").val().trim(),
  //         };

  //         console.log(newEvents)

  //         // Send the POST request.
  //         $.ajax("/api/newEvents", {
  //             type: "POST",
  //             data: newEvents
  //         }).then(
  //             function (response) {
  //                 window.location.href = response.redirectTo;
  //             },
  //             function(error) {
  //                 console.log(error);
  //                 $this.find('.message:first').text('An error occured.  Please try again');
  //             }
  //         );
  //     });
  //   });

  //  Modal for Submit button ===============
  //   $('#myform').on('submit', function(ev) {
  //     $('#myModal').modal('show');

  //     var data = $(this).serializeObject();
  //     json_data = JSON.stringify(data);
  //     $("#results").text(json_data);
  //     $(".modal-body").text(json_data);

  //     // $("#results").text(data);

  //     ev.preventDefault();
  // });

  //============== TICKETMASTER API AND AJAX CALL =========================

  var searchCounter = 0;
  var queryTerm = "";
  var queryURLBase =
    "https://app.ticketmaster.com/discovery/v2/events.json?apikey=NdH7ttoqHEznKuGMVdBINJqbG8r9w1Kk&keyword=";

  //Search form is submitted and goes to the Ticketmaster API
  $("#search-events-btn").on("click", function(event) {
    event.preventDefault();

    $(".panel-primary").attr("style", "display: block;");

    queryTerm = $("#queryTerm")
      .val()
      .trim();
    console.log(queryTerm);

    var queryURL = queryURLBase + queryTerm;
    console.log(queryURL);

    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response) {
      console.log(response);

      // Displays SEARCH RESULTS into a TABLE =========
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

        $("#event-table > tbody").append(
          "<tr><td>" +
            eventName +
            "</td><td>" +
            location +
            "</td><td>" +
            date +
            "</td><td>" +
            venue +
            "</td><td><a target='_blank' href='" +
            url +
            "'>more info</a></td></tr>"
        );
      }

      $.ajax({
        url: "/api/artist",
        method: "GET",
        data: {
          artist: queryTerm
        }
      }).done(function(response) {
        console.log(response);
      });
    });
  });
});
