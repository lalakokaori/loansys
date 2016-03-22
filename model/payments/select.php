<?php
    include('../master/connect.php');

    $id = $_POST['id'];

  $sql = "SELECT accrecords_balance, L.loans_interest as interest,
  ( SELECT SUM(payments_amount) FROM Payments WHERE payments_loans_id = acc.accrecords_loans_id )  as totalpayment, loans_term, loans_duration
  FROM AccRecords acc, Loans L
  WHERE accrecords_loans_id = ?
  AND loans_id = accrecords_loans_id";


  $q = $conn->prepare($sql);
  $q -> execute(array($id));
  $browse = $q -> fetchAll();
  foreach($browse as $fetch)
  {
    $interest = "0.".$fetch['interest'];
    $bb = $fetch['accrecords_balance']+$fetch['accrecords_balance']*$interest;
    $perterm = round( $bb / round(($fetch['loans_duration']/$fetch['loans_term'])),1);

    $output[] = array ($fetch['accrecords_balance'],$bb,
      ($bb-$fetch['totalpayment']),$perterm
      );          
  }         
$conn = null;             

echo json_encode($output);
?>    