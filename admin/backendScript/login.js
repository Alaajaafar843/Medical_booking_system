$(document).ready(function () {
  $.ajax({
    url: "dashboardBackend/login.php",
    type: "get",
    dataType: "json",
    success: function (response) {
      if (response) {
        // let parsed = JSON.parse(response);
        // console.log(parsed);
        console.log(response);
        if (response[0] == "success") {
          window.location.href = "Admin.html";
          sessionStorage.setItem("user", response[1]);
        }
      }
    },
  });
});
document.getElementById("error").style.display = "none";

document.getElementById("error").style.display = "none";
function do_login() {
  var username = $("#user").val();
  var pass = $("#pass").val();
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
          document.getElementById("error").style.display = "block";
          document.getElementById("error").innerHTML =
            "Username or password is incorrect";
        } else {
          sessionStorage.setItem("user", response.username);
          window.location.href = "Admin.html";
        }
      },
    });
  } else {
    alert("Please Fill All The Details");
  }

  return false;
}
