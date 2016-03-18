<?php
    include('../master/connect.php');


  $sql = "SELECT 
  loans_id,loans_transdate,clients_name,loantypes_name,loans_interest,
  durations_name,terms_name,loans_amount,loans_status  
  FROM Loans LO, LoanTypes LT, Clients CL, Durations D, Terms T 
  WHERE (LO.loans_clients_id = CL.clients_id) 
  AND (LO.loans_loantypes_id = LT.loantypes_id)
  AND (LO.loans_durations_id = D.durations_id) 
  AND (LO.loans_terms_id = T.terms_id)
  GROUP BY loans_id 
  ORDER BY loans_transdate DESC";


  $q = $conn->prepare($sql);
  $q -> execute();
  $browse = $q -> fetchAll();
  foreach($browse as $fetch)
  {
    $output[] = array ($fetch['loans_id'],$fetch['loans_transdate'],
      $fetch['clients_name'],$fetch['loantypes_name'],$fetch['loans_interest'].' %', 
      $fetch['durations_name'],$fetch['terms_name'],$fetch['loans_amount'],
      strtoupper($fetch['loans_status']) );				 	
  }         
$conn = null;             

echo json_encode($output);
?>    