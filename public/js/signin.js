// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  //When the Sign Up button is clicked on the Apply form...
  $(".signupbtnApply").on("click", function(event) {
    event.preventDefault();

    //Get the text entered into each of the fields on the form
    var email = $("#inputEmailApply");
    var pw = $("#inputPasswordApply");
    var name = $("#inputName");
    var phone = $("#inputPhone");
    var address = $("#inputAddressApply");
    var city = $("#inputCityApply");
    var state = $("#inputStateApply");
    var zip = $("#inputZipApply");
    var aarp = $("#inputAARPApply");
    var dob = $("#inputDOBApply");

    //Make an object that stores the values of each of the above inputs
    var newRecpt = {
      email: email.val().trim(),
      password: pw.val().trim(),
      name: name.val().trim(),
      phone: phone.val().trim(),
      street_address: address.val().trim(),
      city: city.val().trim(),
      state: state.val().trim(),
      zip_code: zip.val().trim(),
      AARP_num: aarp.val().trim(),
      DOB: dob.val().trim()
    };

    console.log(newRecpt);

    //Send a POST request to the controller that contains the new Recipient data
    $.ajax({
      url: "/api/userRcpts",
      method: "POST",
      data: newRecpt
    }).done(function(response) {
      console.log(response);
    });

    //Clear out the fields on the form
    email.val("");
    pw.val("");
    name.val("");
    phone.val("");
    address.val("");
    city.val("");
    state.val("");
    zip.val("");
    aarp.val("");
    dob.val("");

    //Redirect user to the Events page
    window.location.href = "/events";

    //create api/signin route
    // $.ajax("/api/userRcpts", {
    //   method: "POST",
    //   data: {
    //     email: email,
    //     password: pw
    //   }
    // }).then(function(response) {
    //   sessionStorage.setItem("email", response.email);
    // });

    // const userEmail = sessionStorage.getItem("email");
  });

  //When the Sign Up button is clicked on the Donate form...
  $(".signupbtnDonate").on("click", function(event) {
    event.preventDefault();

    //Get the text entered into each of the fields on the form
    var email = $("#inputEmailDonate");
    var pw = $("#inputPasswordDonate");
    var name = $("#inputName");
    var phone = $("#inputPhone");
    var address = $("#inputAddressDonate");
    var city = $("#inputCityDonate");
    var state = $("#inputStateDonate");
    var zip = $("#inputZipDonate");

    //Make an object that stores the values of each of the above inputs
    var newDonor = {
      email: email.val().trim(),
      password: pw.val().trim(),
      name: name.val().trim(),
      phone: phone.val().trim(),
      street_address: address.val().trim(),
      city: city.val().trim(),
      state: state.val().trim(),
      zip_code: zip.val().trim()
    };

    console.log(newDonor);

    //Send a POST request to the controller that contains the new Donor data
    $.ajax({
      url: "/api/userDonor",
      method: "POST",
      data: newDonor
    }).done(function(response) {
      console.log(response);
    });

    //Clear out the fields on the form
    email.val("");
    pw.val("");
    name.val("");
    phone.val("");
    address.val("");
    city.val("");
    state.val("");
    zip.val("");

    //Redirect the user to the New Events page
    window.location.href = "/newEvents";
  });
});
