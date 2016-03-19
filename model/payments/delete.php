<?php
    include('../master/connect.php');

$id = $_POST['id'];

  $sql = "UPDATE Durations SET durations_status = 'inactive' WHERE durations_id = ?";
  $q = $conn->prepare($sql);
  $q -> execute(array($id));
     
$conn = null;             

echo json_encode($output);
?>    