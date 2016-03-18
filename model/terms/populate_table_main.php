<?php
    include('../master/connect.php');


  $sql = "SELECT *
  FROM Terms WHERE terms_status = 'active' ORDER BY terms_days desc";
  $q = $conn->prepare($sql);
  $q -> execute();
  $browse = $q -> fetchAll();
  foreach($browse as $fetch)
  {
    $output[] = array ($fetch['terms_id'],
    	$fetch['terms_name'],$fetch['terms_days']);				 	
  }         
$conn = null;             

echo json_encode($output);
?>    