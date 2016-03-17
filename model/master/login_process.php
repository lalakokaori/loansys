<?php 
  if(!isset($_SESSION)) 
  { session_start(); }
  
  
    include('connect.php'); // CONNECTION PDO MYSQL

      //FETCH VARIABLES
    $user_name =$_POST['user_name'];
    $user_password = $_POST['user_password'];
    $user_password = md5($user_password);  
    $user_type;
    $match="false";


      // CHECK IF MATCH ACCOUNT
    $sql = "SELECT * FROM Users WHERE users_status = 'active'";
    $q = $conn->prepare($sql);
    $q -> execute();
    $browse = $q -> fetchAll();
    foreach($browse as $row)
    {
      if(($user_name == $row['users_name']) && ($user_password== $row['users_password']))
      {
        $match="true";
        $user_type = $row['users_type'];
        break;
      }
    }
    if($match == "true")
    {
      $_SESSION["loansys_user_name"] = $user_name;
      $_SESSION["loansys_user_password"] = $user_password;
      $_SESSION["loansys_user_type"] = $user_type;
      ?>

<script type="text/javascript">   
function Redirect() 
{  
window.location="../../index.php"; 
} 
setTimeout('Redirect()', 0);   
</script>
    <?php      
    }
    else
    { ?>
<script type="text/javascript">   
function Redirect() 
{  
window.location="../../view/master/login.php"; 
} 
setTimeout('Redirect()', 0);   
alert("Invalid Username or Password");
</script>
    <?php } $conn = null; ?>