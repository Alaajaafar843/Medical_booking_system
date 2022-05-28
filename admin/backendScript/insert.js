function insertUser(type) {
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let gender = document.getElementById("gender").value;
  let dob = document.getElementById("dob").value;
  let pnumber = document.getElementById("phone").value;
  let location = document.getElementById("address").value;
  let nationality = document.getElementById("nationality").value;
  let blood = document.getElementById("blood").value;
  let verification = document.getElementById("verification");
  let image = document.getElementById("image");

  const form_data = new FormData();

  form_data.append("verification", verification.files[0]);
  form_data.append("profile", image.files[0]);

  if (
    fname != "" &&
    lname != "" &&
    email != "" &&
    password != "" &&
    gender != "" &&
    dob != "" &&
    pnumber != "" &&
    location != "" &&
    nationality != "" &&
    blood != ""
  ) {
    form_data.append("type", type);
    form_data.append("fname", fname);
    form_data.append("lname", lname);
    form_data.append("email", email);
    form_data.append("password", password);
    form_data.append("gender", gender);
    form_data.append("dob", dob);
    form_data.append("pnumber", pnumber);
    form_data.append("location", location);
    form_data.append("nationality", nationality);
    form_data.append("blood", blood);

    fetch("dashboardBackend/insert.php", {
      method: "POST",
      body: form_data,
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
        if (data == "patient added successfully") {
          window.setTimeout(function () {
            window.location.href =
              "http://localhost/ESA_PROJECT/admin/ManagePatients.html";
          }, 1000);
        }
      })
      .catch((error) => console.log(error));
  }
}

document
  .getElementById("addPatient")
  .addEventListener("click", insertUser("Patient"));
