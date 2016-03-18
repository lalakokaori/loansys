<?php
    include('../master/connect.php');

$duration_name = trim($_POST['duration_name']);
$duration_days = trim($_POST['duration_days']);

$id = uniqid('TR');

  $sql = "INSERT INTO Durations values(?,?,?,?)";
  $q = $conn->prepare($sql);
  $q -> execute(array($id,$duration_name,$duration_days,'active'));
     

$conn = null;             

echo json_encode($output);
?>    