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

    <?php

    $stmt = $conn->prepare("Select * from Patient");
    $stmt->execute();
    $rows = $stmt->fetchAll();
    $stmt1 = $conn->prepare("Select * from Doctor");
    $stmt1->execute();
    $rows1 = $stmt1->fetchAll();

    ?>
    <div class="content">
        <h1 class="title-dash">Add Appointement</h1>
        <div class="row">
            <div class="col-sm-12">
                <form action="">
                    <div class="form-group">
                        <label for="" class="mt-3">Patient Name: </label>
                        <select name="pname" id="name" class="form-select">
                            <option value="0">...</option>
                            <?php
                            foreach ($rows as $row) {
                                echo ' <option value="' . $row['id'] . '">' . $row['First_name'] . ' ' . $row['last_name'] . '</option>';
                            }

                            ?>
                        </select>
                        <label for="" class="mt-3">Doctor Name: </label>
                        <select name="dname" id="" class="form-control">
                            <option value="0">...</option>
                            <?php foreach ($rows1 as $row) {
                                echo ' <option value="' . $row['id'] . '">' . $row['Fname'] . ' ' . $row['Lname'] . '</option>';
                            } ?>
                        </select>
                        <label class="mt-3" for="">From: </label> <br>
                        <input type="number" name="from" id="from" class="mt-3 form-control">
                        <label class="mt-3" for="">To: </label> <br>
                        <input type="number" name="to" id="To" class="mt-3 form-control">

                    </div>
                    <input type="submit" value="Add" name="add" class="sub btn btn-primary btn-lg mt-5">
                </form>
            </div>
        </div>
    </div>
    <?php

    if (isset($_POST['add'])) {
        $pid = $_POST['pname'];
        $did = $_POST['dname'];
        $from = $_POST['from'];
        $to = $_POST['to'];
        $query = $conn->prepare("INSERT INTO Appointements (hour_from , hour_to , status , patient_id , doctor_id) VALUES (?,?,0,?,?)");
        $query->execute(array($from, $to, $pid, $did));
    }

    ?>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="./backendScript/logout.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</body>

</html>