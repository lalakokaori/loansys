<?php
    include('../master/connect.php');


  $sql = "SELECT terms_id,terms_name,terms_days 
  FROM Terms WHERE terms_status = 'active'";


  $q = $conn->prepare($sql);
  $q -> execute();
  $browse = $q -> fetchAll();
  foreach($browse as $fetch)
  {
    $output[] = array ($fetch['terms_id'],$fetch['terms_name'].' - ('.$fetch['terms_days'].' Days)');				 	
  }         
$conn = null;             

echo json_encode($output);
?>    