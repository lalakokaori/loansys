<?php
    include('../master/connect.php');

$id = $_POST['id'];

  $sql = "UPDATE Loans SET loans_status='open', loans_settledate=CURDATE() WHERE loans_id = ?";
  $q = $conn->prepare($sql);
  $q -> execute(array($id));
     

$conn = null;             

echo json_encode($output);
?>    