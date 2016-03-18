<?php
    include('../master/connect.php');

$id = $_POST['id'];
$loantype_name = trim($_POST['loantype_name']);
$loantype_interest = trim($_POST['loantype_interest']);


  $sql = "UPDATE LoanTypes SET loantypes_name=?, loantypes_interest=? WHERE loantypes_id = ?";
  $q = $conn->prepare($sql);
  $q -> execute(array($loantype_name,$loantype_interest,$id));
     
$conn = null;             

echo json_encode($output);
?>    