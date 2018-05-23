// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".signupbtnApply").on("click", function(event) {
    event.preventDefault();

    var email = $("#inputEmailApply");
    var pw = $("#inputPasswordApply");
    var address = $("#inputAddressApply");
    var city = $("#inputCityApply");
    var state = $("#inputStateApply");
    var zip = $("#inputZipApply");
    var aarp = $("#inputAARPApply");
    var dob = $("#inputDOBApply");

    var newRecpt = {
      email: email.val().trim(),
      password: pw.val().trim(),
      street_address: address.val().trim(),
      city: city.val().trim(),
      state: state.val().trim(),
      zip_code: zip.val().trim(),
      AARP_num: aarp.val().trim(),
      DOB: dob.val().trim()
    };

    console.log(newRecpt);

    // window.location.href = "/recpthome";

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

    // Submits a new post and brings user to blog page upon completion

    function submitRecpt(newRecpt) {
      $.post("/api/userRcpts", newRecpt, function() {
        window.location.href = "/recpthome";
      });
    }


  });

  $(".signupbtnDonate").on("click", function(event) {
    window.location.href = "/donorhome";
  });
});
