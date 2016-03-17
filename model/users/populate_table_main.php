<?php
    include('../master/connect.php');


  $sql = "SELECT * FROM Users ORDER BY users_status asc";
  $q = $conn->prepare($sql);
  $q -> execute();
  $browse = $q -> fetchAll();
  foreach($browse as $fetch)
  {
    $output[] = array ($fetch['users_name'],$fetch['users_type'],$fetch['users_status']);				 	
  }         
$conn = null;             

echo json_encode($output);
?>    