<?php
    include('../master/connect.php');

$id = $_POST['id'];
$term_name = trim($_POST['term_name']);
$term_days = trim($_POST['term_days']);


  $sql = "UPDATE Terms SET terms_name=?, terms_days=? WHERE terms_id = ?";
  $q = $conn->prepare($sql);
  $q -> execute(array($term_name,$term_days,$id));
     
$conn = null;             

echo json_encode($output);
?>    