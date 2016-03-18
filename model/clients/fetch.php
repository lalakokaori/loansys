<?php
    include('../master/connect.php');

  $id = $_POST['id'];

  $sql = "SELECT * FROM Clients WHERE clients_id = ?";
  $q = $conn->prepare($sql);
  $q -> execute(array($id));
  $browse = $q -> fetchAll();
  foreach($browse as $fetch)
  {
    $output[] = array ($fetch['clients_name'],$fetch['clients_contact'],
      $fetch['clients_bdate'],$fetch['clients_gender'],$fetch['clients_mstatus'],
      $fetch['clients_address'],$fetch['clients_job'],$fetch['clients_spousename'],$fetch['clients_dependents']);				 	
  }         
$conn = null;             

echo json_encode($output);
?>    