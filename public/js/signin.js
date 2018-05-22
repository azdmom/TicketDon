//create api/signin route
$.ajax("/api/signin", {
  method: "POST",
  data: {
    email: email,
    password: password
  }
}).then(function(response) {
  sessionStorage.setItem("email", response.email);
});

const userEmail = sessionStorage.getItem("email");
