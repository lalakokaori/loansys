<?php
    include('../master/connect.php');

    $id = $_POST['id'];

  $sql = "SELECT accrecords_balance, 
  ( SELECT SUM(payments_amount) FROM Payments WHERE payments_loans_id = acc.accrecords_loans_id )  as totalpayment, 
  (  accrecords_balance / (L.loans_duration/L.loans_term) ) as perterm
  FROM AccRecords acc, Loans L
  WHERE accrecords_loans_id = ?
  AND loans_id = accrecords_loans_id";


  $q = $conn->prepare($sql);
  $q -> execute(array($id));
  $browse = $q -> fetchAll();
  foreach($browse as $fetch)
  {
    $output[] = array ($fetch['accrecords_balance'],
      ($fetch['accrecords_balance']-$fetch['totalpayment']),$fetch['perterm']);          
  }         
$conn = null;             

echo json_encode($output);
?>    