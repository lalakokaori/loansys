<?php
    include('../master/connect.php');


  $sql = "SELECT clients_id, clients_name, clients_contact, clients_gender, 
  TIMESTAMPDIFF(YEAR, clients_bdate , CURDATE()) as age
  FROM Clients WHERE clients_status = 'active' ORDER BY clients_name asc";
  $q = $conn->prepare($sql);
  $q -> execute();
  $browse = $q -> fetchAll();
  foreach($browse as $fetch)
  {
    $output[] = array ($fetch['clients_id'],
    	$fetch['clients_name'],$fetch['clients_contact'],
    	$fetch['age'],$fetch['clients_gender']);				 	
  }         
$conn = null;             

echo json_encode($output);
?>    