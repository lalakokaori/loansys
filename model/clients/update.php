<?php
    include('../master/connect.php');

$id = $_POST['id'];
$client_name = trim($_POST['client_name']);
$client_contact = trim($_POST['client_contact']);
$client_bdate = trim($_POST['client_bdate']);
$client_gender = trim($_POST['client_gender']);
$client_mstatus = trim($_POST['client_mstatus']);
$client_address = trim($_POST['client_address']);
$client_job = trim($_POST['client_job']);
$client_spouse = trim($_POST['client_spouse']);
$client_dependents = trim($_POST['client_dependents']);

  $sql = "UPDATE Clients SET clients_name=?, clients_contact=?, clients_bdate=?, clients_gender=?,
  clients_mstatus=?, clients_address=?, clients_job=?, clients_spousename=?, clients_dependents=? 
  WHERE clients_id = ?";
  $q = $conn->prepare($sql);
  $q -> execute(array($client_name,$client_contact,$client_bdate,$client_gender,$client_mstatus,$client_address,$client_job,$client_spouse,$client_dependents,$id));
     
$conn = null;             

echo json_encode($output);
?>    