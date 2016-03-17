<?php
    include('../master/connect.php');

$id = $_POST['id'];

  $sql = "UPDATE Clients SET clients_status = 'inactive' WHERE clients_id = ?";
  $q = $conn->prepare($sql);
  $q -> execute(array($id));
     
$conn = null;             

echo json_encode($output);
?>    