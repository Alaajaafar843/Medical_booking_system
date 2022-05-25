function do_login() {
  let username = $("#user").val();
  let pass = $("#pass").val();
  if (username != "" && pass != "") {
    $.ajax({
      type: "post",
      url: "dashboardBackend/login.php",
      dataType: "json",
      data: {
        do_login: "do_login",
        username: username,
        password: pass,
      },
      success: function (response) {
        console.log(response);
        if (response == "not in db") {
          document.getElementById("a").style.display = "block";
          document.getElementById("a").innerHTML =
            "Username or password is incorrect";
        } else {
          sessionStorage.setItem("user", response.username);
          window.location.href = "Admin.html";
        }
      },
      error: function (request, data, error) {
        console.log(request);
      },
    });
  } else {
    alert("Please Fill All The Details");
  }

  return false;
}

document.getElementById("a").style.display = "none";
