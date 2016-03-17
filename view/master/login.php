<!DOCTYPE html>
<head>
<link rel="stylesheet" type="text/css" href="login.css">
</head>

<body>
<div class="login-page">
  <div class="form">

    <form action="../../model/master/login_process.php" method="post" class="login-form">
      <input name="user_name" type="text" placeholder="username"/ required>
      <input name="user_password" type="password" placeholder="password"/ required>
      <button>login</button>
    </form>
  </div>
</div>
</body>

</html>

<script>
$('.message a').click(function(){
   $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});
</script