<?php
    include('../master/connect.php');

$id = $_POST['id'];

  $sql = "UPDATE Terms SET terms_status = 'inactive' WHERE terms_id = ?";
  $q = $conn->prepare($sql);
  $q -> execute(array($id));
     
$conn = null;             

echo json_encode($output);
?>    