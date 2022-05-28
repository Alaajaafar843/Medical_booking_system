<?php

include 'connection.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    if (isset($_POST['id']) && isset($_POST['type'])) {

        if (isset($_FILES['verification']) || isset($_FILES['profile'])) {

            $extension = pathinfo($_FILES['verification']['name'], PATHINFO_EXTENSION);
            $extension1 = pathinfo($_FILES['profile']['name'], PATHINFO_EXTENSION);

            $new_name = rand(1, 10000) . '.' . $extension;
            $new_name1 = rand(1, 10000) . '.' . $extension1;

            move_uploaded_file($_FILES['verification']['tmp_name'], '../images/' . $new_name);
            move_uploaded_file($_FILES['profile']['tmp_name'], '../images/' . $new_name1);

            $data = array(
                'image_source' => 'images/' . $new_name
            );
            $data1 = array(
                'image_source' => 'images/' . $new_name1
            );

            $id = $_POST['id'];
            $type = $_POST['type'];
            echo ($type);
            $fname = $_POST['fname'];
            $lname = $_POST['lname'];
            $email = $_POST['email'];
            $gender = $_POST['gender'];
            $password = sha1($_POST['password']);
            $dob = $_POST['dob'];
            $pnumber = $_POST['pnumber'];
            $location = $_POST['location'];
            $nationality = $_POST['nationality'];
            $blood = $_POST['blood'];

            if ($type == 'Patient') {
                $stmt = $conn->prepare("Update Patient set First_name = ? , last_name=? , Email =? , password=? , gender=? , dob=? ,pnumber=? , location=? , nationality=?, bloodType=? , verification=?, image=? where id = ?");
                $stmt->execute(array($fname, $lname, $email, $password, $gender, $dob, $pnumber, $location, $nationality, $blood, $data['image_source'], $data1['image_source'], $id));
                if ($stmt) {
                    echo json_encode("patient updated successfully");
                } else {
                    echo json_encode("could not be updated");
                }
            }
            echo json_encode($data);
        } else {
            echo json_encode("error");
        }
    }
}
