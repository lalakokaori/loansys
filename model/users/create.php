<?php
    include('../master/connect.php');

$user_name = trim($_POST['user_name']);
$user_password = $_POST['user_password'];
$user_type = $_POST['user_type'];
$user_password = md5($user_password);

  $sql = "INSERT INTO Users values(?,?,?,?)";
  $q = $conn->prepare($sql);
  $q -> execute(array($user_name,$user_password,$user_type,'active'));
  $browse = $q -> fetchAll();
     
$conn = null;             

echo json_encode($output);
?>    