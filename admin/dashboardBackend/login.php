<?php

include 'connection.php';


session_start();


if (isset($_SESSION['username'])) {
    $sessionUser = array("success", $_SESSION['username']);
    echo json_encode($sessionUser);
} else if ($_SERVER['REQUEST_METHOD'] == 'POST') {


    $username = $_POST['username'];
    $password = $_POST['password'];
    $hashedPassword = sha1($password);

    $stmt = $conn->prepare("SELECT * FROM Admin WHERE username = ? AND password = ? LIMIT 1");
    $stmt->execute(array($username, $hashedPassword));

    if ($stmt->rowCount() > 0) {
        $_SESSION['username'] = $username;
        $_SESSION['adminId'] = $password;

        echo json_encode($stmt->fetch());
    } else {
        echo json_encode("not in db");
    }
} else {
    echo "error";
}
