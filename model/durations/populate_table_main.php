<?php
    include('../master/connect.php');


  $sql = "SELECT *
  FROM Durations WHERE durations_status = 'active' ORDER BY durations_days desc";
  $q = $conn->prepare($sql);
  $q -> execute();
  $browse = $q -> fetchAll();
  foreach($browse as $fetch)
  {
    $output[] = array ($fetch['durations_id'],
    	$fetch['durations_name'],$fetch['durations_days']);				 	
  }         
$conn = null;             

echo json_encode($output);
?>    