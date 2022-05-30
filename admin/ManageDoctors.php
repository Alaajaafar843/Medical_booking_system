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
        User
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
    <a href="Appointements.html">Appointements</a>
  </div>

  <div class="content">
    <h1 class="title-dash">Manage Doctors</h1>
    <div class="table-responsive">
      <table class="table" id="tab">
        <tr>
          <th>#ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Password</th>
          <th>Phone number</th>
          <th>gender</th>
          <th>Location</th>
          <th>Speciality</th>
          <th>Resume</th>
          <th>degree</th>
          <th>About</th>
          <th>Date of birth</th>
          <th>Bank details</th>
          <th>Nationality</th>
          <th>verification</th>
          <th>Hour From</th>
          <th>Hour to</th>
          <th>University</th>
          <th>Major</th>
          <th>Image</th>
        </tr>
        <?php
        $stmt = $conn->prepare("SELECT * FROM Doctor");
        $stmt->execute();
        $rows = $stmt->fetchAll();
        foreach ($rows as $row) {
          echo ' <tr>
         <td>' . $row['id'] . '</td>
         <td>' . $row['Fname'] . '</td>
         <td>' . $row['Lname'] . '</td>
         <td>' . $row['Email'] . '</td>
         <td>' . $row['password'] . '</td>
         <td>' . $row['pnumber'] . '</td>
         <td>' . $row['gender'] . '</td>
         <td>' . $row['location'] . '</td>
         <td>' . $row['speciality'] . '</td>
         <td><img src="' . $row['resume'] . '"></td>
         <td><img src="' . $row['degree'] . '"></td>
         <td>' . $row['about_me'] . '</td>
         <td>' . $row['dob'] . '</td>
         <td>' . $row['bank_details'] . '</td>
         <td>' . $row['nationality'] . '</td>
         <td><img src="' . $row['verification'] . '"></td>
         <td>' . $row['Hour_From'] . '</td>
         <td>' . $row['Hour_To'] . '</td>
         <td>' . $row['university'] . '</td>
         <td>' . $row['university'] . '</td>
         <td><img src="' . $row['image'] . '"></td>
       </tr>';
        }
        ?>
      </table>
    </div>

    <button class="btn btn-primary">
      <i class="fa fa-plus" aria-hidden="true"></i>
      <a href="Add_Dr.html">Add doctor</a>
    </button>
  </div>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="./backendScript/getDrs.js"></script>
  <script src="./backendScript/logout.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</body>

</html>