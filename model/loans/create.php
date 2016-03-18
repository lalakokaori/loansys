<?php
    include('../master/connect.php');

$loan_client_id = $_POST['loan_client_id'];
$loan_duration_id = $_POST['loan_duration_id'];
$loan_term_id = $_POST['loan_term_id'];
$loan_loantype_id = $_POST['loan_loantype_id'];
$loan_amount = $_POST['loan_amount'];

$id = uniqid('LO');

  $sql = "INSERT INTO Loans values(?,?,?,(SELECT durations_days FROM Durations WHERE durations_id = ?),?,(SELECT terms_days FROM Terms WHERE terms_id = ?),?,(SELECT loantypes_interest FROM LoanTypes WHERE loantypes_id = ?),?,CURDATE(),NULL,'pending')";
  $q = $conn->prepare($sql);
  $q -> execute(array($id,$loan_client_id,$loan_duration_id,$loan_duration_id,$loan_term_id,$loan_term_id,$loan_loantype_id,$loan_loantype_id,$loan_amount));
     

$conn = null;             

echo json_encode($output);
?>    