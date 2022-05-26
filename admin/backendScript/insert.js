function insertUser(type) {
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let gender = document.getElementById("gender").value;
  let dob = document.getElementById("dob").value;
  let pnumber = document.getElementById("phone").value;

  console.log(fname);
  if (
    fname != "" &&
    lname != "" &&
    email != "" &&
    password != "" &&
    gender != "" &&
    dob != "" &&
    pnumber != ""
  ) {
    $.ajax({
      url: "dashboardBackend/insert.php",
      type: "post",
      dataType: "json",
      data: {
        type: type,
        fname: fname,
        lname: lname,
        email: email,
        password: password,
        gender: gender,
        dob: dob,
        pnumber: pnumber,
      },
      success: function (response) {
        console.log(response);
        if (response == "patient added successfully") {
          window.setTimeout(function () {
            window.location.href =
              "http://localhost/ESA_PROJECT/admin/ManagePatients.html";
          }, 3000);
        }
      },
      error: function (request, data, error) {
        console.log(request.responseText);
      },
    });
  }
}

document
  .getElementById("addPatient")
  .addEventListener("click", insertUser("Patient"));
