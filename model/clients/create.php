<?php
    include('../master/connect.php');

$client_name = trim($_POST['client_name']);
$client_contact = trim($_POST['client_contact']);
$client_bdate = trim($_POST['client_bdate']);
$client_gender = trim($_POST['client_gender']);
$client_mstatus = trim($_POST['client_mstatus']);
$client_address = trim($_POST['client_address']);
$client_job = trim($_POST['client_job']);
$client_spouse = trim($_POST['client_spouse']);
$client_dependents = trim($_POST['client_dependents']);

$id = uniqid('CL');

  $sql = "INSERT INTO Clients values(?,?,?,?,?,?,?,?,?,?,?)";
  $q = $conn->prepare($sql);
  $q -> execute(array($id,$client_name,$client_address,$client_contact,$client_bdate,$client_gender,$client_job,$client_mstatus,$client_spouse,$client_dependents,'active'));
     

  $sql = "INSERT INTO Accounts values(?,?,?)";
  $q = $conn->prepare($sql);
  $q -> execute(array(uniqid('ACC'),$id,'active'));

$conn = null;             

echo json_encode($output);
?>    