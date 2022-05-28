<?php
if (isset($_FILES['verification'])) {

    $extension = pathinfo($_FILES['verification']['name'], PATHINFO_EXTENSION);

    $new_name = time() . '.' . $extension;

    move_uploaded_file($_FILES['verification']['tmp_name'], '../images/' . $new_name);

    $data = array(
        'image_source' => 'images/' . $new_name
    );

    echo json_encode($data);
} else {
    echo json_encode("error");
}
