<?php 
  if(!isset($_SESSION)) 
  { session_start(); }
  
  if($_SESSION["loansys_user_name"]=="" || $_SESSION["loansys_user_type"]=="")
  {?>
    <script type="text/javascript">   
      function Redirect() 
      {  
        window.location="../master/login.php"; 
       // alert("Please Log-in"); 
      } 
      Redirect();
    </script>
  <?php } 
  else{
  $loansys_user_name = $_SESSION["loansys_user_name"];
  $loansys_user_type = $_SESSION["loansys_user_type"];
  }
  echo'<input type="hidden" id="loansys_user_type" value="'.$loansys_user_type.'">';  
?>
