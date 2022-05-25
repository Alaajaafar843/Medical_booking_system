<?php

include "connection.php";

if ($_SERVER['REQUEST_METHOD'] == "GET") {
    $limit = $_GET['limit'];
    if (isset($_GET['type']) && $_GET['type'] == "Patient") {
        $stmt = $conn->prepare('Select * FROM Patient ORDER BY id DESC LIMIT ' . $limit . '');
        $stmt->execute();

        echo json_encode($stmt->fetchAll());
    }
    if (isset($_GET['type']) && $_GET['type'] == "Doctor") {
        $stmt = $conn->prepare('Select * FROM Doctor ORDER BY id DESC LIMIT ' . $limit . '');
        $stmt->execute();

        echo json_encode($stmt->fetchAll());
    }
}
