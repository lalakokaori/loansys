//additional functions
  function comma(val){
    while (/(\d+)(\d{3})/.test(val.toString())){
      val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
    }
    return val;
  }
  function uncomma(x) {
    var string1 = x;
    for (y = 0; y < 12; y++) {
      string1 = string1.replace(/\,/g, '');
    }
    return string1;
  } 

  

function logout()
{
  var choice = confirm("Are you sure you want to Log-out?");
  if(choice==true)
  {
    return true;
  }
  else
    return false;
}
