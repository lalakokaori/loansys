<?php
    include('../master/connect.php');

$id = $_POST['id'];

  $sql = "UPDATE Loans SET loans_status='declined', loans_settledate=CURDATE() WHERE loans_id = ?";
  $q = $conn->prepare($sql);
  $q -> execute(array($id));
     
  $sql = "DELETE FROM AccRecords WHERE accrecords_loans_id = ?";
  $q = $conn->prepare($sql);
  $q -> execute(array($id));

$conn = null;             

echo json_encode($output);
?>    