$(document).ready(function () {
  let listPateints = $("#lastPatients");
  $.ajax({
    url: "dashboardBackend/getAll.php",
    type: "get",
    dataType: "json",
    data: {
      limit: 5,
      type: "Patient",
    },
    success: function (response) {
      console.log(response);
      response.forEach((element) => {
        listPateints.append(
          `<li class="p-2">
        ` +
            element.First_name +
            `
        <span>
        <button class="btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        <i class="fa fa-trash" aria-hidden="true"></i>
       </button>
       <!-- Modal -->
          <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="staticBackdropLabel">Delete account</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  Are you sure you want to delete this user ?
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-danger" data-bs-dismiss="modal" onclick="del(${element.id} , 'Patient')">Delete</button>
                </div>
              </div>
            </div>
          </div>
      <button class="btn" data-bs-toggle="modal" data-bs-target="#Backdrop"><i class="fa fa-bars" aria-hidden="true"></i></button>
      <!-- Modal -->
       <div class="modal fade" id="Backdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
         <div class="modal-dialog modal-dialog-scrollable">
           <div class="modal-content">
             <div class="modal-header">
               <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
               <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
             </div>
             <div class="modal-body">
             <form action="">
             <div class="form-group">
                 <label for="" class="mt-3">First Name: </label>
                 <input id="fname" value="${element.First_name}" class="form-control" type="text" required>
                 <div class="valid-feedback" id="name-valid">
                     Looks good!
                   </div>
                   <div id="validationServerUsernameFeedback" class="invalid-feedback">
                     Please choose a username.
                   </div>
                 <label for="" class="mt-3">Last Name: </label>
                 <input id="lname" value="${element.last_name}" class="form-control" type="text" required>
                 <div class="valid-feedback" id="name-valid">
                     Looks good!
                   </div>
                   <div id="validationServerUsernameFeedback" class="invalid-feedback">
                     Please choose a username.
                   </div>
                 <label for="" class="mt-3">Email: </label>
                 <input id="email" value="${element.Email}" class="form-control" type="email" required>
                 <div class="valid-feedback" id="name-valid">
                     Looks good!
                   </div>
                   <div id="validationServerUsernameFeedback" class="invalid-feedback">
                     Please choose a username.
                   </div>
                 <label for="" class="mt-3">Password: </label>
                 <input id="password" value="${element.password}" class="form-control" type="password" autocomplete="off" required>
                 <div class="valid-feedback" id="name-valid">
                     Looks good!
                   </div>
                   <div id="validationServerUsernameFeedback" class="invalid-feedback">
                     Please choose a username.
                   </div>
                 <label for="" class="mt-3">Gender: </label>
                 <select name="" id="gender" class="form-select">
                     <option value="${element.gender}" selected>${element.gender}</option>
                     <option id="male" value="male">Male</option>
                     <option id="female" value="female">Female</option>
                 </select>
                 <div id="validationServer04Feedback" class="invalid-feedback">
                     Please select a valid gender.
                   </div>
                 <label for="" class="mt-3">Date of birth: </label>
                 <input value="${element.dob}" class="form-control" type="date" name="" id="dob" required>
                 <label for="" class="mt-3">Address: </label>
                 <input value="${element.location}" class="form-control" type="text" id="address">
                 <label for="" class="mt-3">Phone number: </label>
                 <input value="${element.pnumber}" class="form-control" type="tel" id="phone">
                 <label for="" class="mt-3">Nationality: </label>
                 <select name="" id="nationality" class="form-select">
                   <option value="${element.nationality}" selected>${element.nationality}</option>
                 </select>
                 <label for="" class="mt-3">Blood Type: </label>
                 <select name="" id="blood" class="form-select">
                   <option value="${element.bloodType}" selected>${element.bloodType}</option>
                 </select>
                 <label for="" class="mt-3">Verification: </label>
                 <input type="file" name="verification" id="verification" class="form-control">
                 <label for="" class="mt-3">Profile photo: </label>
                 <input type="file" name="image" id="image" class="form-control">
             </div>
         </form>
             </div>
             <div class="modal-footer">
               <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
               <button type="button" class="btn btn-primary" onclick="update(${element.id} , 'Patient')">Update</button>
             </div>
           </div>
         </div>
       </div>
    </span>
      </li>
      `
        );
      });
    },
    error: function (request, data, error) {
      console.log(request);
    },
  });
});
$(document).ready(function () {
  let listDrs = $("#listDoctors");
  $.ajax({
    url: "dashboardBackend/getAll.php",
    type: "get",
    dataType: "json",
    data: {
      limit: 5,
      type: "Doctor",
    },
    success: function (response) {
      console.log(response);
      response.forEach((element) => {
        listDrs.append(
          `<li>
        ` +
            element.Fname +
            `
        <span>
        <button class="btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        <i class="fa fa-trash" aria-hidden="true"></i>
       </button>
       <!-- Modal -->
          <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="staticBackdropLabel">Delete account</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  Are you sure you want to delete this user ?
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-danger" data-bs-dismiss="modal" onclick="del(${element.id} , 'Patient')">Delete</button>
                </div>
              </div>
            </div>
          </div>
      </span>
      <span>
      <button class="btn" data-bs-toggle="modal" data-bs-target="#Backdrop"><i class="fa fa-bars" aria-hidden="true"></i></button>
      <!-- Modal -->
       <div class="modal fade" id="Backdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
         <div class="modal-dialog modal-dialog-scrollable">
           <div class="modal-content">
             <div class="modal-header">
               <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
               <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
             </div>
             <div class="modal-body">
             <form action="">
             <div class="form-group">
                 <label for="" class="mt-3">First Name: </label>
                 <input id="fname" value="${element.First_name}" class="form-control" type="text" required>
                 <div class="valid-feedback" id="name-valid">
                     Looks good!
                   </div>
                   <div id="validationServerUsernameFeedback" class="invalid-feedback">
                     Please choose a username.
                   </div>
                 <label for="" class="mt-3">Last Name: </label>
                 <input id="lname" value="${element.last_name}" class="form-control" type="text" required>
                 <div class="valid-feedback" id="name-valid">
                     Looks good!
                   </div>
                   <div id="validationServerUsernameFeedback" class="invalid-feedback">
                     Please choose a username.
                   </div>
                 <label for="" class="mt-3">Email: </label>
                 <input id="email" value="${element.Email}" class="form-control" type="email" required>
                 <div class="valid-feedback" id="name-valid">
                     Looks good!
                   </div>
                   <div id="validationServerUsernameFeedback" class="invalid-feedback">
                     Please choose a username.
                   </div>
                 <label for="" class="mt-3">Password: </label>
                 <input id="password" value="${element.password}" class="form-control" type="password" autocomplete="off" required>
                 <div class="valid-feedback" id="name-valid">
                     Looks good!
                   </div>
                   <div id="validationServerUsernameFeedback" class="invalid-feedback">
                     Please choose a username.
                   </div>
                 <label for="" class="mt-3">Gender: </label>
                 <select name="" id="gender" class="form-select">
                     <option value="${element.gender}" selected>${element.gender}</option>
                     <option id="male" value="male">Male</option>
                     <option id="female" value="female">Female</option>
                 </select>
                 <div id="validationServer04Feedback" class="invalid-feedback">
                     Please select a valid gender.
                   </div>
                 <label for="" class="mt-3">Date of birth: </label>
                 <input value="${element.dob}" class="form-control" type="date" name="" id="dob" required>
                 <label for="" class="mt-3">Address: </label>
                 <input value="${element.location}" class="form-control" type="text" id="address">
                 <label for="" class="mt-3">Phone number: </label>
                 <input value="${element.pnumber}" class="form-control" type="tel" id="phone">
                 <label for="" class="mt-3">Nationality: </label>
                 <select name="" id="nationality" class="form-select">
                   <option value="${element.nationality}" selected>${element.nationality}</option>
                 </select>
                 <label for="" class="mt-3">Blood Type: </label>
                 <select name="" id="blood" class="form-select">
                   <option value="${element.bloodType}" selected>${element.bloodType}</option>
                 </select>
                 <label for="" class="mt-3">Verification: </label>
                 <input type="file" name="verification" id="verification" class="form-control">
                 <label for="" class="mt-3">Profile photo: </label>
                 <input type="file" name="image" id="image" class="form-control">
             </div>
         </form>
             </div>
             <div class="modal-footer">
               <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
               <button type="button" class="btn btn-primary" onclick="update(${element.id} , 'Patient')">Update</button>
             </div>
           </div>
         </div>
       </div>
     </span>
        </span>
      </li>
      `
        );
      });
    },
    error: function (request, data, error) {
      console.log(request);
    },
  });
});

function del(id, type) {
  $.ajax({
    url: "dashboardBackend/delete.php",
    type: "post",
    dataType: "json",
    data: {
      id: id,
      type: type,
    },
    success: function (response) {
      console.log(response);
    },
    error: function (request, data, error) {
      console.log(request.responseText);
    },
  });
}
function update(id, type) {
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
  form_data.append("id", id);
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

  fetch("dashboardBackend/update.php", {
    method: "POST",
    body: form_data,
  })
    .then((response) => response.text())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}
