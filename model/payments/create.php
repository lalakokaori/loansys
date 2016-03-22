<?php
    include('../master/connect.php');

$loan_id = $_POST['loan_id'];
$payment_amount = $_POST['payment_amount'];
$payment_type = $_POST['payment_type'];
$id = uniqid('PY');


	  $sql = "INSERT INTO Payments VALUES(?,?,CURDATE(),?,?)   ";
	  $q = $conn->prepare($sql);
	  $q -> execute(array($id,$loan_id,$payment_amount,$payment_type));
	    
			/*
		$sql = "UPDATE Loans SET loans_status = 'close' 
		WHERE loans_id = ?     )  ";
	  $q = $conn->prepare($sql);
	  $q -> execute(array($id,$loan_id,$payment_amount,$payment_type));
		foreach($browse as $fetch){
			$output[] = array ($fetch['clients_id'],$fetch['clients_name']);				 	
		}        */ 

$conn = null;             

echo json_encode($output);
?>    
