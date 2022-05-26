<?php

include 'connection.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    $type = $_POST['type'];
    $fname = $_POST['fname'];
    $lname = $_POST['lname'];
    $email = $_POST['email'];
    $gender = $_POST['gender'];
    $password = sha1($_POST['password']);
    $dob = $_POST['dob'];
    $pnumber = $_POST['pnumber'];

    if ($type == 'Patient') {
        $stmt = $conn->prepare("INSERT INTO Patient(First_name , last_name , Email , password , gender , dob ,pnumber) Values (?,?,?,?,?,?,?)");
        $stmt->execute(array($fname, $lname, $email, $password, $gender, $dob, $pnumber));
        if ($stmt) {
            echo json_encode("patient added successfully");
        } else {
            echo json_encode("could not be added");
        }
    }
}
