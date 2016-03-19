<?php
    include('../master/connect.php');
$count;
$loan_client_id = $_POST['loan_client_id'];
$loan_duration_id = $_POST['loan_duration_id'];
$loan_term_id = $_POST['loan_term_id'];
$loan_loantype_id = $_POST['loan_loantype_id'];
$loan_amount = $_POST['loan_amount'];

$id = uniqid('LO');


	/* validate*/
  $sql = "SELECT COUNT(*) as counter FROM Loans L 
  WHERE (L.loans_clients_id = ?) 
  AND (L.loans_loantypes_id = ?) 
  AND (L.loans_status != 'close') ";
  $q = $conn->prepare($sql);
  $q -> execute(array($loan_client_id,$loan_loantype_id));
  $browse = $q -> fetchAll();
  foreach($browse as $fetch)
  { $count = $fetch['counter']; }
	/*validate*/

	if($count==0){
	  $sql = "INSERT INTO Loans values(?,?,?,(SELECT durations_days FROM Durations WHERE durations_id = ?),?,(SELECT terms_days FROM Terms WHERE terms_id = ?),?,(SELECT loantypes_interest FROM LoanTypes WHERE loantypes_id = ?),?,CURDATE(),NULL,'pending')";
	  $q = $conn->prepare($sql);
	  $q -> execute(array($id,$loan_client_id,$loan_duration_id,$loan_duration_id,$loan_term_id,$loan_term_id,$loan_loantype_id,$loan_loantype_id,$loan_amount));
	     

	  $ar_id = uniqid('AR');
	  $sql = "INSERT INTO AccRecords values(?,(SELECT accounts_id FROM Accounts WHERE accounts_clients_id = ?),?,?)";
	  $q = $conn->prepare($sql);
	  $q -> execute(array($ar_id,$loan_client_id,$id,$loan_amount));
	  $output = 0;
	}
	else if($count>=1){$output=1;}



$conn = null;             

echo json_encode($output);
?>    