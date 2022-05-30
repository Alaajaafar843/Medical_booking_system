<?php
include 'dashboardBackend/connection.php';

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="admin.css">
    <title>Manage Doctors</title>
</head>

<body>
    <div class="sidebar">
        <div class="dropdown">
            <a class="active dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <script>
                    document.getElementById("dropdownMenuButton1").innerHTML = sessionStorage.getItem('user')
                </script>
            </a>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item" href="#"><i class="fa fa-user" aria-hidden="true"></i> Profile</a></li>
                <li><a class="dropdown-item" href="#"><i class="fa fa-plane" aria-hidden="true"> Visit site</i></a></li>
                <li><a class="dropdown-item" href="#" id="logout"><i class="fa fa-power-off" aria-hidden="true"></i> Log out</a></li>
            </ul>
        </div>
        <a href="Admin.html">Dashboard</a>
        <a href="ManageDoctors.php">Doctors</a>
        <a href="ManagePatients.html">Patients</a>
        <a href="Appointements.php">Appointements</a>
    </div>

    <div class="content">
        <h1 class="title-dash">Add Doctor</h1>
        <div class="row">
            <div class="col-sm-12">
                <form action="dashboardBackend/insertDr.php" method="POST" enctype="multipart/form-data">
                    <div class="form-group">
                        <label for="" class="mt-3">First Name: </label>
                        <input id="firstname" class="form-control" type="text" name="firstname">
                        <div class="valid-feedback" id="name-valid">
                            Looks good!
                        </div>
                        <div id="validationServerUsernameFeedback" class="invalid-feedback">
                            Please choose a username.
                        </div>
                        <label for="" class="mt-3">Last Name: </label>
                        <input id="lastname" class="form-control" type="text" name="lastname">
                        <div class="valid-feedback" id="name-valid">
                            Looks good!
                        </div>
                        <div id="validationServerUsernameFeedback" class="invalid-feedback">
                            Please choose a username.
                        </div>
                        <label for="" class="mt-3">Email: </label>
                        <input id="email" class="form-control" type="email" name="email">
                        <div class="valid-feedback" id="name-valid">
                            Looks good!
                        </div>
                        <div id="validationServerUsernameFeedback" class="invalid-feedback">
                            Please choose a username.
                        </div>
                        <label for="" class="mt-3">Password: </label>
                        <input id="password" class="form-control" type="password" name="password">
                        <div class="valid-feedback" id="name-valid">
                            Looks good!
                        </div>
                        <div id="validationServerUsernameFeedback" class="invalid-feedback">
                            Please choose a username.
                        </div>
                        <label for="" class="mt-3">Phone number: </label>
                        <input class="form-control" id="speciality" name="pnumber" type="tel">
                        <label for="" class="mt-3">Gender: </label>
                        <select name="gender" id="gender" class="form-select">
                            <option value="">...</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                        <div class="valid-feedback" id="name-valid">
                            Looks good!
                        </div>
                        <div id="validationServerUsernameFeedback" class="invalid-feedback">
                            Please choose a username.
                        </div>
                        <label for="" class="mt-3">Location: </label>
                        <input id="location" class="form-control" type="text" name="location">
                        <div class="valid-feedback" id="name-valid">
                            Looks good!
                        </div>
                        <div id="validationServerUsernameFeedback" class="invalid-feedback">
                            Please choose a username.
                        </div>
                        <label for="" class="mt-3">Speciality: </label>
                        <input class="form-control" id="speciality" name="speciality">
                        <label for="" class="mt-3">Date of birth: </label>
                        <input class="form-control" type="date" name="dob" id="age">
                        <label for="" class="mt-3">Nationality: </label>
                        <select class="form-select" id="nationality" name="nationality">
                            <option value="">...</option>
                        </select>
                        <label for="" class="mt-3">Hour From: </label>
                        <input class="form-control" type="number" name="from" id="from">
                        <label for="" class="mt-3">Hour To: </label>
                        <input class="form-control" type="number" name="to" id="to">
                        <label for="" class="mt-3">Major: </label>
                        <input class="form-control" type="text" name="major" id="major">
                        <label for="" class="mt-3">University: </label>
                        <input class="form-control" type="text" name="uni" id="uni">
                        <label for="" class="mt-3">Resume: </label>
                        <input class="form-control" type="file" name="resume" id="resume">
                        <label for="" class="mt-3">Degree: </label>
                        <input class="form-control" type="file" name="degree" id="degree">
                        <label for="" class="mt-3">Profile: </label>
                        <input class="form-control" type="file" name="profile" id="profile">
                        <label for="" class="mt-3">Verification: </label>
                        <input class="form-control" type="file" name="verification" id="verification">
                        <label for="" class="mt-3">About me: </label>
                        <textarea class="form-control" type="text" name="about" id="about" rows="5">

                            </textarea>
                    </div>
                    <input class="sub btn btn-primary btn-lg mt-5" type="submit" value="Add">
                </form>
            </div>
        </div>
    </div>
    <script>
        window.addEventListener("load", function() {

            document.getElementById("name").addEventListener("keyup", () => {
                if (document.getElementById("name").value.length < 4) {
                    document.getElementById("name").classList.add("is-invalid");
                    document.getElementById("name").title = "Name must be more than 5 chars";
                    document.getElementById("name-valid").style.display = "none";

                } else {
                    document.getElementById("name").classList.remove("is-invalid");
                    document.getElementById("name").classList.add("is-valid");
                    document.getElementById("name-valid").style.display = "block";
                }
            })
            document.getElementById("age").addEventListener("keyup", () => {
                if (document.getElementById("age").value <= 0) {
                    document.getElementById("age").classList.add("is-invalid");
                    document.getElementById("age").title = "Age can't be negative";

                } else {
                    document.getElementById("age").classList.remove("is-invalid");
                    document.getElementById("age").classList.add("is-valid");

                }
            })
            document.getElementById("address").addEventListener("keyup", () => {
                if (document.getElementById("address").value.length < 10) {
                    document.getElementById("address").classList.add("is-invalid");
                    document.getElementById("address").title = "Address can't be less than 10 chars";

                } else {
                    document.getElementById("address").classList.remove("is-invalid");
                    document.getElementById("address").classList.add("is-valid");

                }
            })

            document.getElementById("speciality").addEventListener("change", () => {
                if (document.getElementById("gender").value == 0) {
                    document.getElementById("gender").classList.add("is-invalid");
                } else {
                    document.getElementById("gender").classList.remove("is-invalid");
                    document.getElementById("gender").classList.add("is-valid");
                }
            })


            window.addEventListener("change", () => {
                let checkboxes = document.querySelectorAll("input[name='lang']:checked");
                let values = [];
                checkboxes.forEach(element => {
                    values.push(element.value);
                });

                if (values.length === 0) {
                    let checkboxes = document.querySelectorAll("input[name='lang']");
                    checkboxes.forEach(element => {
                        element.classList.add("is-invalid");
                    })
                } else {
                    checkboxes.forEach(element => {
                        element.classList.remove("is-invalid");
                        element.classList.add("is-valid");
                    })
                }
            })

        })
    </script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="./backendScript/logout.js"></script>
    <script src="./backendScript/getNationalities.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</body>

</html>