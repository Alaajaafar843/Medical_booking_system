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
        <h1 class="title-dash">Manage Appointements</h1>
        <div class="table-responsive">
            <table class="table">
                <tr>
                    <th>#ID</th>
                    <th>Patient</th>
                    <th>Doctor</th>
                    <th>Hour From</th>
                    <th>Hour To</th>
                </tr>
                <?php

                $stmt = $conn->prepare('SELECT Appointements.*, Patient.First_name, Patient.last_name , Doctor.Fname , Doctor.Lname FROM Appointements INNER JOIN Patient ON Appointements.patient_id=Patient.id INNER JOIN Doctor ON Appointements.doctor_id=Doctor.id');
                $stmt->execute();
                $rows = $stmt->fetchAll();

                foreach ($rows as $row) {
                    echo '<tr>
                <td>' . $row['id'] . '</td>
                <td>' . $row['First_name'] . $row['last_name'] . '</td>
                <td>' . $row['Fname'] . $row['Lname'] . '</td>
                <td>' . $row['hour_from'] . '</td>
                <td>' . $row['hour_to'] . '</td>
            </tr>';
                }
                ?>
            </table>
        </div>

        <button class="btn btn-primary">
            <i class="fa fa-plus" aria-hidden="true"></i> <a href="Add_Appointement.html">Add Appointement</a>
        </button>
    </div>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="./backendScript/logout.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</body>

</html>