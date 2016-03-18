<?php
    include('../master/connect.php');

  $id = $_POST['id'];

  $sql = "SELECT * FROM LoanTypes WHERE loantypes_id = ?";
  $q = $conn->prepare($sql);
  $q -> execute(array($id));
  $browse = $q -> fetchAll();
  foreach($browse as $fetch)
  {
    $output[] = array ($fetch['loantypes_name'],$fetch['loantypes_interest']);				 	
  }         
$conn = null;             

echo json_encode($output);
?>    