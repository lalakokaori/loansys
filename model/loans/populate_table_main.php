<?php
    include('../master/connect.php');


  $sql = "SELECT 
  loans_id,loans_transdate,loans_settledate,clients_name,loantypes_name,loans_interest, loans_term,
  durations_name,terms_name,loans_amount,loans_status, (DATEDIFF(CURDATE(),loans_settledate )) as KURRENT
  FROM Loans LO, LoanTypes LT, Clients CL, Durations D, Terms T 
  WHERE (LO.loans_clients_id = CL.clients_id) 
  AND (LO.loans_loantypes_id = LT.loantypes_id)
  AND (LO.loans_durations_id = D.durations_id) 
  AND (LO.loans_terms_id = T.terms_id)
  GROUP BY loans_id 
  ORDER BY loans_transdate DESC, loans_status DESC";


  $q = $conn->prepare($sql);
  $q -> execute();
  $browse = $q -> fetchAll();
  foreach($browse as $fetch)
  {
    if($fetch['loans_status']!='open'){
      $status = $fetch['loans_status'];
    }
    else if($fetch['loans_status']=='open' ){
      $status = $fetch['loans_status'];

      if(($fetch['loans_settledate']!=DATE("Y-m-d")) && $fetch['KURRENT']%$fetch['loans_term']==0 ){
        $status= 'DUE (#'.$fetch['KURRENT']/$fetch['loans_term'].')' ;
      }

    }



    $output[] = array ($fetch['loans_id'],$fetch['loans_transdate'],$fetch['loans_settledate'],
      $fetch['clients_name'],$fetch['loantypes_name'],$fetch['loans_interest'].' %', 
      $fetch['durations_name'],$fetch['terms_name'],$fetch['loans_amount'],
      strtoupper($status));				 	
  }         
$conn = null;             

echo json_encode($output);
?>    
