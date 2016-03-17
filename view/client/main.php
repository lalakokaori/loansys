<!DOCTYPE html>
<head>
      <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Clients</title>
	<!-- BOOTSTRAP STYLES-->
     <!-- FONTAWESOME STYLES-->
    <link href="../../assets/css/custom.css" rel="stylesheet" />


    <script src="../../controller/master/logout.js" type="text/javascript"></script>

  <!--GEMS-->
    <link href="../../gems/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css" />  
    <!--Bootstrap CSS BELOW-->
    <link href="../../gems/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css" />  
    <!--JQUERY BELOW-->
    <script src="../../gems/jQuery/jQuery-2.1.4.min.js"></script>
    <!--Datatables BELOW-->
    <script src="../../gems/datatables/jquery.dataTables.js" type="text/javascript"></script>
    <!--Datatables Bootsrap CSS BELOW -->
    <script src="../../gems/datatables/dataTables.bootstrap.js" type="text/javascript"></script>   
    <!--Datatables Javascript BELLOW -->
    <link href="../../gems/datatables/dataTables.bootstrap.css" rel="stylesheet" type="text/css" />  


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
                    </a>
                </div>
              
                 <span class="logout-spn" >
                  <a href="../../model/master/logout_process.php" style="color:#fff;" onclick="return logout();">LOGOUT</a>  

                </span>
            </div>
        </div>
        <?php include('../master/sidebar.html');?>

        <div id="page-wrapper" >

            <div id="page-inner">

                <div class="row">
                    <div class="col-md-8 col-xs-12"><h2 style="color:grey"><i class="fa fa-user"></i> CLIENTS </h2></div>
                    <div class="col-md-2 col-xs-12"><br><button id="btn_reset" class="btn btn-block btn-lg">Reset</button></div>                    
                    <div class="col-md-2 col-xs-12"><br><button id="btn_save" class="btn btn-block btn-success btn-lg">SAVE</button></div>
                </div>      

            <?php include('main_form.html'); ?>


                 <!-- /. ROW  -->
                  <hr />

          <div class="row">                     <!-- TABLES -->          

            <div class="col-lg-12 col-sm-12 col-xs-12">
              <table id="table_main" class="table table-condensed table-striped table-hover">
                <thead>
                  <tr>
                    <th>Name</th>   
                    <th>Contact</th>                    
                    <th>Age</th>
                    <th>Gender</th>                    
                    <th style="width: 10px"></th>                       
                    <th style="width: 10px"></th>
                  </tr>
                  <tbody></tbody>
                </thead>
              </table>

              </div><!-- /.col -->
          </div>  <!-- /.row -->                  






                 <!-- /. ROW  -->           
            </div>
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
    <!-- SCRIPTS -AT THE BOTOM TO REDUCE THE LOAD TIME-->
      <!-- BOOTSTRAP SCRIPTS -->

    <script src="../../controller/client/main.js" type="text/javascript"></script>
    <script type="text/javascript">

    </script>
   
</body>
</html>
