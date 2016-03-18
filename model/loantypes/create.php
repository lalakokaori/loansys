<?php
    include('../master/connect.php');

$loantype_name = trim($_POST['loantype_name']);
$loantype_interest = trim($_POST['loantype_interest']);

$id = uniqid('TR');

  $sql = "INSERT INTO LoanTypes values(?,?,?,?)";
  $q = $conn->prepare($sql);
  $q -> execute(array($id,$loantype_name,$loantype_interest,'active'));
     

$conn = null;             

echo json_encode($output);
?>    