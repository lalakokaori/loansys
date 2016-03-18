<?php
    include('../master/connect.php');

$id = $_POST['id'];

  $sql = "UPDATE LoanTypes SET loantypes_status = 'inactive' WHERE loantypes_id = ?";
  $q = $conn->prepare($sql);
  $q -> execute(array($id));
     
$conn = null;             

echo json_encode($output);
?>    