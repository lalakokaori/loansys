<?php
    include('../master/connect.php');

$id = $_POST['id'];

  $sql = "UPDATE Users SET users_status = 'inactive' WHERE users_name = ?";
  $q = $conn->prepare($sql);
  $q -> execute(array($id));
     
$conn = null;             

echo json_encode($output);
?>    