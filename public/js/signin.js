// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".signupbtnApply").on("click", function(event) {
    event.preventDefault();

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

    $.ajax({
      url: "/api/userRcpts",
      method: "POST",
      data: newRecpt
    }).done(function(response) {
      console.log(response);
    });

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

    window.location.href = "/events";

    $("#recpt_details").text("Sign out:" + newRecpt.email);

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

  $(".signupbtnDonate").on("click", function(event) {
    event.preventDefault();

    var email = $("#inputEmailDonate");
    var pw = $("#inputPasswordDonate");
    var name = $("#inputName");
    var phone = $("#inputPhone");
    var address = $("#inputAddressDonate");
    var city = $("#inputCityDonate");
    var state = $("#inputStateDonate");
    var zip = $("#inputZipDonate");

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

    $.ajax({
      url: "/api/userDonor",
      method: "POST",
      data: newDonor
    }).done(function(response) {
      console.log(response);
    });

    email.val("");
    pw.val("");
    name.val("");
    phone.val("");
    address.val("");
    city.val("");
    state.val("");
    zip.val("");




    window.location.href = "/newEvents";

    $("#donor_details").text("Sign out:" +newRecpt.email);


  });



  
});
