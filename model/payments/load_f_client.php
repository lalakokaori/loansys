<?php
    include('../master/connect.php');


  $sql = "SELECT clients_id,clients_name 
  FROM Clients WHERE clients_status = 'active'";


  $q = $conn->prepare($sql);
  $q -> execute();
  $browse = $q -> fetchAll();
  foreach($browse as $fetch)
  {
    $output[] = array ($fetch['clients_id'],$fetch['clients_name']);				 	
  }         
$conn = null;             

echo json_encode($output);
?>    