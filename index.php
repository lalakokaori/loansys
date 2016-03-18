<?php 
  if(!isset($_SESSION)) 
  { session_start(); }
  
  if($_SESSION["loansys_user_name"]=="" || $_SESSION["loansys_user_type"]=="")
  {?>
    <script type="text/javascript">   
      function Redirect() 
      {  
        window.location="view/master/login.php"; 
       // alert("Please Log-in"); 
      } 
      Redirect();
    </script>
  <?php } 
  else{
  $loansys_user_name = $_SESSION["loansys_user_name"];
  $loansys_user_type = $_SESSION["loansys_user_type"];
  echo'<input type="hidden" id="loansys_user_type" value="'.$loansys_user_type.'">';
  }
?>

<!DOCTYPE html>
<html lan='en'>
<head>
      <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Loaning System</title>

    <link href="assets/css/custom.css" rel="stylesheet" />

    <script src="controller/master/logout.js" type="text/javascript"></script>

  <!--GEMS-->
    <link href="gems/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css" />  
    <!--Bootstrap CSS BELOW-->
    <link href="gems/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css" />  
    <!--JQUERY BELOW-->
    <script src="gems/jQuery/jQuery-2.1.4.min.js"></script>
    <!--Datatables BELOW-->
    <script src="gems/datatables/jquery.dataTables.js" type="text/javascript"></script>
    <!--Datatables Bootsrap CSS BELOW -->
    <script src="gems/datatables/dataTables.bootstrap.js" type="text/javascript"></script>   
    <!--Datatables Javascript BELLOW -->
    <link href="gems/datatables/dataTables.bootstrap.css" rel="stylesheet" type="text/css" />  

    <script src="controller/master/logout.js" type="text/javascript"></script>
</head>
<body>
     
           
          
    <div id="wrapper">
         <div class="navbar navbar-inverse navbar-fixed-top">
            <div class="adjust-nav">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".sidebar-collapse">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#">
                        <!--<img src="assets/img/logo.png" alt="Loan Sys"/>-->
                    </a>
                    
                </div>
              
                <span class="logout-spn" >
                  <a href="model/master/logout_process.php" style="color:#fff;" onclick="return logout();">LOGOUT</a>  

                </span>
            </div>
        </div>
        <!-- /. NAV TOP  -->
        <nav class="navbar-default navbar-side" role="navigation">
            <div class="sidebar-collapse">
                <ul class="nav" id="main-menu">
                 


                    <li>
                        <a href="index.php" ><i class="fa fa-home "></i>Dashboard</a>
                    </li>
              
                    <li>
                        <a href="view/loan/main.php"><i class="fa fa-hand-paper-o "></i>Loans
                        <span class="badge">TRANSACTION</span></a></a>
                    </li>

                    <?php if($_SESSION['loansys_user_type']=='ADMIN') { ?>

                    <li>
                        <a href="view/user/main.php"><i class="fa fa-users "></i>Users</a>
                    </li>                   

                    <li>
                        <a href="view/client/main.php"><i class="fa fa-user "></i>Clients</a>
                    </li>   

                    <li>
                        <a href="view/term/main.php"><i class="fa fa-calendar-o "></i>Terms</a></a>
                    </li>

                    <li>
                        <a href="view/duration/main.php"><i class="fa fa-calendar "></i>Durations</a></a>
                    </li>

                    <li>
                        <a href="view/loantype/main.php"><i class="fa fa-sitemap "></i>Loan Types</a></a>
                    </li>

                    <?php } ?>

                    
                </ul>
                            </div>

        </nav>
        <!-- /. NAV SIDE  -->
        <div id="page-wrapper" >
            <div id="page-inner">
                <div class="row">
                    <div class="col-lg-12">
                     <h2><?php echo(strtoupper($loansys_user_type)); ?> DASHBOARD</h2>   
                    </div>
                </div>              
                 <!-- /. ROW  -->
                  <hr />
                <div class="row">
                    <div class="col-lg-12 ">
                        <div class="alert alert-info">
                             <strong>Welcome <?php echo($loansys_user_name).', ';?> </strong> Select On the Menu Below
                        </div>
                       
                    </div>
                    </div>


                  <!-- /. ROW  --> 
                <div class="row text-center pad-top">

                  <div id="menu_loans" class="col-lg-2 col-md-2 col-sm-2 col-xs-6" title="Loan Transactions">
                      <div class="div-square">
                         <a href="view/loan/main.php" ><i class="fa fa-hand-paper-o fa-5x"></i>
                           <h4>Loans</h4>
                         </a>
                      </div>                                          
                  </div> <!--col-->  

                  <div id="menu_users" class="col-lg-2 col-md-2 col-sm-2 col-xs-6" title="Maintain User Accounts">
                      <div class="div-square">
                         <a href="view/user/main.php" ><i class="fa fa-users fa-5x"></i>
                           <h4>Users</h4>
                         </a>
                      </div>                                          
                  </div> <!--col-->
              
                  <div id="menu_clients" class="col-lg-2 col-md-2 col-sm-2 col-xs-6" title="Maintain Clients">
                      <div class="div-square">
                         <a href="view/client/main.php" ><i class="fa fa-user fa-5x"></i>
                           <h4>Clients</h4>
                         </a>
                      </div>                                          
                  </div> <!--col-->                                                                           

                  <div id="menu_terms" class="col-lg-2 col-md-2 col-sm-2 col-xs-6" title="Maintain Payment Terms">
                      <div class="div-square">
                         <a href="view/term/main.php" ><i class="fa fa-calendar-o fa-5x"></i>
                           <h4>Terms</h4>
                         </a>
                      </div>                                          
                  </div> <!--col-->     

                  <div id="menu_durations" class="col-lg-2 col-md-2 col-sm-2 col-xs-6" title="Maintain Durations">
                      <div class="div-square">
                         <a href="view/duration/main.php" ><i class="fa fa-calendar fa-5x"></i>
                           <h4>Durations</h4>
                         </a>
                      </div>                                          
                  </div> <!--col-->                                                                           
                  <div id="menu_loantypes" class="col-lg-2 col-md-2 col-sm-2 col-xs-6" title="Maintain Loan Types">
                      <div class="div-square">
                         <a href="view/duration/main.php" ><i class="fa fa-sitemap fa-5x"></i>
                           <h4>Loan Types</h4>
                         </a>
                      </div>                                          
                  </div> <!--col-->  

              </div><!-- ROW-->


             <!-- /. PAGE INNER  -->
            </div>
         <!-- /. PAGE WRAPPER  -->
        </div>
    <div class="footer">
      
    
            <div class="row">
                <div class="col-lg-12" >
                    &copy;  2016 Loaning Sys | Polytechnic Unversity of the Philippines San Juan</a>
                </div>
            </div>
        </div>
          

     <!-- /. WRAPPER  -->

    <script type="text/javascript">

      if($('#loansys_user_type').val()!='ADMIN'){
        $('#menu_users').css('display','none');
        $('#menu_clients').css('display','none');
        $('#menu_terms').css('display','none');
        $('#menu_durations').css('display','none');
        $('#menu_loantypes').css('display','none');                        
      }
    </script>
   
</body>
</html>
