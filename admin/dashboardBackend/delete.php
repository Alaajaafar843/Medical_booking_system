<?php

include 'connection.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    $type = $_POST['type'];
    $id = $_POST['id'];


    if ($type == 'Patient') {
        $stmt = $conn->prepare("DELETE FROM Patient WHERE id = ?");
        $stmt->execute(array($id));
        if ($stmt) {
            echo json_encode($stmt->rowCount() . " record deleted");
        } else {
            echo json_encode("Could not delete");
        }
    } else {
        $stmt = $conn->prepare("DELETE FROM Doctor WHERE id = ?");
        $stmt->execute(array($id));
        if ($stmt) {
            echo json_encode($stmt->rowCount() . " record deleted");
        } else {
            echo json_encode("Could not delete");
        }
    }
} else {
    $id = $_GET['id'];
    $stmt = $conn->prepare("DELETE FROM Doctor WHERE id = ?");
    $stmt->execute(array($id));
    if ($stmt) {
        echo $stmt->rowCount() . " record deleted";
        echo "<script>
                window.setTimeout(function() {
                    window.location = '../ManageDoctors.php';
                  }, 2000);
                </script>";
    } else {
        echo "Could not delete";
        echo "<script>
                window.setTimeout(function() {
                    window.location = '../ManageDoctors.php';
                  }, 3000);
                </script>";
    }
}
