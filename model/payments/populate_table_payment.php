<?php
    include('../master/connect.php');


$id = $_POST['id'];

  $sql = "SELECT * FROM Payments 
  WHERE payments_loans_id = ?";


  $q = $conn->prepare($sql);
  $q -> execute(array($id));
  $browse = $q -> fetchAll();
  foreach($browse as $fetch){
    $output[] = array ($fetch['payments_id'],$fetch['payments_date'],$fetch['payments_amount'],
      strtoupper($fetch['payments_type']) );				 	
  }         
$conn = null;             

echo json_encode($output);
?>    
