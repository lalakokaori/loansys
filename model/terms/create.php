<?php
    include('../master/connect.php');

$term_name = trim($_POST['term_name']);
$term_days = trim($_POST['term_days']);

$id = uniqid('TR');

  $sql = "INSERT INTO Terms values(?,?,?,?)";
  $q = $conn->prepare($sql);
  $q -> execute(array($id,$term_name,$term_days,'active'));
     

$conn = null;             

echo json_encode($output);
?>    