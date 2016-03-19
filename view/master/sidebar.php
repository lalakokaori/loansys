<!-- /. NAV TOP  -->
<nav class="navbar-default navbar-side" role="navigation">
<div class="sidebar-collapse">
    <ul class="nav" id="main-menu">
     

         <li >
            <a href="../../index.php" ><i class="fa fa-home "></i>Dashboard</a>
        </li>



				<?php if($_SESSION['loansys_user_type']=='ADMIN' ||$_SESSION['loansys_user_type']=='FRONT DESK') { ?>
        <li>
            <a href="../loan/main.php"><i class="fa fa-hand-paper-o "></i>Loans <span class="badge">
            TRANSACTION</span></a>
        </li>       
				<?php } ?>


				<?php if($_SESSION['loansys_user_type']=='ADMIN' ||$_SESSION['loansys_user_type']=='TREASURER') { ?>
				<li>
						<a href="../payment/main.php"><i class="fa fa-money "></i>Payments</a>
				</li>
				<?php } ?>




    <?php if($_SESSION['loansys_user_type']=='ADMIN') { ?>
        <li>
            <a href="../user/main.php"><i class="fa fa-users "></i>Users</a>
        </li>

        <li>
            <a href="../client/main.php"><i class="fa fa-user "></i>Clients</a>
        </li>

        <li>
            <a href="../term/main.php"><i class="fa fa-calendar-o "></i>Terms</a></a>
        </li>

        <li>
            <a href="../duration/main.php"><i class="fa fa-calendar "></i>Durations</a></a>
        </li>

        <li>
            <a href="../loantype/main.php"><i class="fa fa-sitemap "></i>Loan Types</a></a>
        </li>
    <?php } ?>

        </li>
    </ul>
                </div>

</nav>
<!-- /. NAV SIDE  -->
