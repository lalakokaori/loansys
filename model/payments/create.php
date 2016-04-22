<?php
    include('../master/connect.php');

$loan_id = $_POST['loan_id'];
$payment_amount = $_POST['payment_amount'];
$payment_type = $_POST['payment_type'];
$id = uniqid('PY');


	  $sql = "INSERT INTO Payments VALUES(?,?,CURDATE(),?,?)   ";
	  $q = $conn->prepare($sql);
	  $q -> execute(array($id,$loan_id,$payment_amount,$payment_type));
	    

	  $sql = "UPDATE Loans SET loans_status = 'close' 
	  WHERE loans_id = ? 
	  AND ( (SELECT SUM(payments_amount) FROM Payments P WHERE P.payments_loans_id = loans_id) >= 
	  (SELECT (accrecords_balance-(accrecords_balance*CONCAT('0.',loans_interest)) ) 
	  FROM AccRecords AR WHERE AR.accrecords_loans_id = loans_id ) ) ";
	  $q = $conn->prepare($sql);
	  $q -> execute(array($loan_id));

$conn = null;             

echo json_encode($output);
?>    
