<?php
    include('../master/connect.php');


  $sql = "SELECT durations_id,durations_name,durations_days 
  FROM Durations WHERE durations_status = 'active'";


  $q = $conn->prepare($sql);
  $q -> execute();
  $browse = $q -> fetchAll();
  foreach($browse as $fetch)
  {
    $output[] = array ($fetch['durations_id'],$fetch['durations_name'].' - ('.$fetch['durations_days'].' Days)');				 	
  }         
$conn = null;             

echo json_encode($output);
?>    