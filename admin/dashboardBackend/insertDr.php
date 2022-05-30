<?php

include 'connection.php';


if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    if (isset($_FILES['verification']) && isset($_FILES['profile']) && isset($_FILES['degree']) && isset($_FILES['resume'])) {

        $extension = pathinfo($_FILES['verification']['name'], PATHINFO_EXTENSION);
        $extension1 = pathinfo($_FILES['profile']['name'], PATHINFO_EXTENSION);
        $extension2 = pathinfo($_FILES['degree']['name'], PATHINFO_EXTENSION);
        $extension3 = pathinfo($_FILES['resume']['name'], PATHINFO_EXTENSION);

        $new_name = rand(1, 10000) . '.' . $extension;
        $new_name1 = rand(1, 10000) . '.' . $extension1;
        $new_name2 = rand(1, 10000) . '.' . $extension2;
        $new_name3 = rand(1, 10000) . '.' . $extension3;

        move_uploaded_file($_FILES['verification']['tmp_name'], '../images/' . $new_name);
        move_uploaded_file($_FILES['profile']['tmp_name'], '../images/' . $new_name1);
        move_uploaded_file($_FILES['profile']['tmp_name'], '../images/' . $new_name2);
        move_uploaded_file($_FILES['profile']['tmp_name'], '../images/' . $new_name3);

        $data = array(
            'image_source' => 'images/' . $new_name
        );
        $data1 = array(
            'image_source' => 'images/' . $new_name1
        );
        $data2 = array(
            'image_source' => 'images/' . $new_name2
        );
        $data3 = array(
            'image_source' => 'images/' . $new_name3
        );

        $fname = $_POST['firstname'];
        $lname = $_POST['lastname'];
        $email = $_POST['email'];
        $password = $_POST['password'];
        $password1 = sha1($password);
        $gender = $_POST['gender'];
        $location = $_POST['location'];
        $speciality = $_POST['speciality'];
        $dob = $_POST['dob'];
        $nationality = $_POST['nationality'];
        $uni = $_POST['uni'];
        $from = $_POST['from'];
        $to = $_POST['to'];
        $major = $_POST['major'];
        $about = $_POST['about'];
        $pnumber = $_POST['pnumber'];

        $formErrors = array();

        if (strlen($fname) < 4) {
            $formErrors[] = "<div class='alert alert-danger'>First name should be more than 4 chars</div>";
        }
        if (strlen($lname) < 4) {
            $formErrors[] = "<div class='alert alert-danger'>Last name should be more than 4 chars</div>";
        }
        if (strlen($password) < 8) {
            $formErrors[] = "<div class='alert alert-danger'>Password should be more than 8 chars</div>";
        }
        if (strlen($location) < 10) {
            $formErrors[] = "<div class='alert alert-danger'>Location should be more than 10 chars</div>";
        }
        if (strlen($speciality) < 8) {
            $formErrors[] = "<div class='alert alert-danger'>Speciality should be more than 8 chars</div>";
        }
        if ($from < 0) {
            $formErrors[] = "<div class='alert alert-danger'>Working hours should be more than 0</div>";
        }
        if ($to < 0) {
            $formErrors[] = "<div class='alert alert-danger'>Working hours should be more than 0</div>";
        }
        if (strlen($about) < 30) {
            $formErrors[] = "<div class='alert alert-danger'>You should write about yourself with atleast 30 characters</div>";
        }

        if (empty($formErrors)) {
            $stmt = $conn->prepare("INSERT INTO Doctor (Fname , Lname,  Email , password , pnumber , gender , location , speciality , resume , degree , about_me , dob , nationality , verification , Hour_From , Hour_To , university , major , image ,approval) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,1)");
            $stmt->execute(array($fname, $lname, $email, $password1, $pnumber, $gender, $location, $speciality, $data3['image_source'], $data2['image_source'], $about, $dob, $nationality, $data['image_source'], $from, $to, $uni, $major, $data1['image_source']));

            if ($stmt) {
                echo '<div class="alert alert-success">Doctor added successfully</div>';
                echo "<script>
                window.setTimeout(function() {
                    window.location = '../Add_Dr.php';
                  }, 3000);
                </script>";
            }
        } else {
            foreach ($formErrors as $error) {
                echo $error;
            }
        }
    } else {
        echo "error";
    }
}
