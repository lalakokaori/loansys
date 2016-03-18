<?php
    include('../master/connect.php');

$id = $_POST['id'];
$duration_name = trim($_POST['duration_name']);
$duration_days = trim($_POST['duration_days']);


  $sql = "UPDATE Durations SET durations_name=?, durations_days=? WHERE durations_id = ?";
  $q = $conn->prepare($sql);
  $q -> execute(array($duration_name,$duration_days,$id));
     
$conn = null;             

echo json_encode($output);
?>    