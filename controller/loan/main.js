	populate_table_main();




  var table_main = $('#table_main').dataTable({
    "aoColumnDefs": [ { "bSortable": false, "aTargets": [8] } ],
    "aaSorting": []
  });  //Initialize the datatable

$("#f_client").select2(); 
$("#f_duration").select2(); 
$("#f_term").select2(); 
$("#f_loantype").select2(); 


function populate_table_main(){ 
	//ajax now
	$.ajax ({
	  type: "POST",
	  url: "../../model/loans/populate_table_main.php",
	  dataType: 'json',      
	  cache: false,
	  success: function(s)
	  {
	    table_main.fnClearTable();      
	    for(var i = 0; i < s.length; i++) 
	    { 
	      table_main.fnAddData
	      ([
	        s[i][1],s[i][2],s[i][3],'<span class="badge">'+s[i][4]+'</span>',s[i][5],s[i][6],'<span class="badge">'+comma(s[i][7])+'</span>',s[i][8],
	        '<button data-toggle="tooltip" onclick="table_row_view(this.value)" value='+s[i][0]+' data-toggle="modal" class="btn btn-xs " title="VIEW /Edit"> <i class="fa fa-eye"></i></button>',      	        
	      ],false); 
	      table_main.fnDraw();
	      load_f_client();	load_f_duration();	load_f_term();	load_f_loantype();
	    }       
	  }  
	}); 
	//ajax end  
} //

function load_f_client(){
	//ajax now
	$.ajax ({
	  type: "POST",
	  url: "../../model/loans/load_f_client.php",
	  dataType: 'json',      
	  cache: false,
	  success: function(s){		
      $('#f_client').empty();
      $('#f_client').html('<option selected="selected" value="none">--SEARCH--</option>');	    	
	    for(var i = 0; i < s.length; i++) {  
	    	$('#f_client').append('<option id="opt'+s[i][0]+'" value="'+s[i][0]+'">'+s[i][1]+'</option>');	         	
	    }
	  }  
	}); 	
}

function load_f_duration(){
	//ajax now
	$.ajax ({
	  type: "POST",
	  url: "../../model/loans/load_f_duration.php",
	  dataType: 'json',      
	  cache: false,
	  success: function(s){		
      $('#f_duration').empty();
      $('#f_duration').html('<option selected="selected" value="none">--SEARCH--</option>');	    	
	    for(var i = 0; i < s.length; i++) {  
	    	$('#f_duration').append('<option id="opt'+s[i][0]+'" value="'+s[i][0]+'">'+s[i][1]+'</option>');	         	
	    }
	  }  
	}); 	
}

function load_f_term(){
	//ajax now
	$.ajax ({
	  type: "POST",
	  url: "../../model/loans/load_f_term.php",
	  dataType: 'json',      
	  cache: false,
	  success: function(s){		
      $('#f_term').empty();
      $('#f_term').html('<option selected="selected" value="none">--SEARCH--</option>');	    	
	    for(var i = 0; i < s.length; i++) {  
	    	$('#f_term').append('<option id="opt'+s[i][0]+'" value="'+s[i][0]+'">'+s[i][1]+'</option>');	         	
	    }
	  }  
	}); 	
}

function load_f_loantype(){
	//ajax now
	$.ajax ({
	  type: "POST",
	  url: "../../model/loans/load_f_loantype.php",
	  dataType: 'json',      
	  cache: false,
	  success: function(s){		
      $('#f_loantype').empty();
      $('#f_loantype').html('<option selected="selected" value="none">--SEARCH--</option>');	    	
	    for(var i = 0; i < s.length; i++) {  
	    	$('#f_loantype').append('<option id="opt'+s[i][0]+'" value="'+s[i][0]+'">'+s[i][1]+'</option>');	         	
	    }
	  }  
	}); 	
}

function reset(){
	$('#btn_save').val('create');

	$('#f_client').select2().select2('val','none');                      
	$('#f_duration').select2().select2('val','none');    
	$('#f_term').select2().select2('val','none');
	$('#f_loantype').select2().select2('val','none');
	$('#f_amount').val('');

	$('#f_client_div').removeClass('has-error');     
	$('#f_duration_div').removeClass('has-error');
	$('#f_term_div').removeClass('has-error');   
	$('#f_loantype_div').removeClass('has-error'); 
	$('#f_amount_div').removeClass('has-error');     
}

function validate_form(){
	err = false;

	if($('#f_client').val()=='none'){
		err = true;
		$('#f_client_div').addClass('has-error');
	}
	else
		$('#f_client_div').removeClass('has-error');		

	if($('#f_duration').val()=='none'){
		err = true;
		$('#f_duration_div').addClass('has-error');
	}
	else
		$('#f_duration_div').removeClass('has-error');	

	if($('#f_term').val()=='none'){
		err = true;
		$('#f_term_div').addClass('has-error');
	}
	else
		$('#f_term_div').removeClass('has-error');	

	if($('#f_loantype').val()=='none'){
		err = true;
		$('#f_loantype_div').addClass('has-error');
	}
	else
		$('#f_loantype_div').removeClass('has-error');	

	if($('#f_amount').val()=='' || $('#f_amount').val()<5000 || $('#f_amount').val()>500000){
		err = true;
		$('#f_amount_div').addClass('has-error');
	}
	else
		$('#f_amount_div').removeClass('has-error');	

	return err;				
}


function table_row_del(id){

  var choice = confirm("Are you sure you want to Delete?");
  if(choice==true){
  			//ajax now
			$.ajax ({
			  type: "POST",
			  url: "../../model/durations/delete.php",
			  data: 'id='+id,
			  dataType: 'json',      
			  cache: false,
			  success: function(s){		  	
			  	alert('Success: Deleted ');
			  	reset();
			  	populate_table_main();
			  }  
			}); 
  }		
}

function table_row_view(id){
	reset();
		//ajax now
	$.ajax ({
	  type: "POST",
	  url: "../../model/durations/fetch.php",
	  data: 'id='+id,
	  dataType: 'json',      
	  cache: false,
	  success: function(s){		
	  	$('#btn_save').val(id);
	  	$('#f_name').val(s[0][0]);	$('#f_days').val(s[0][1]);
	  }  
	}); 
	//ajax end
}

$('#btn_reset').click(function(){ reset(); })

$('#btn_save').click(function(){

	if(validate_form()==true){}
	else{

		var loan_client_id = $('#f_client').val();
		var loan_duration_id = $('#f_duration').val();
		var loan_term_id = $('#f_term').val();
		var loan_loantype_id = $('#f_loantype').val();
		var loan_amount = $('#f_amount').val();

		var dataString = 'loan_client_id='+loan_client_id+'&loan_duration_id='+loan_duration_id;
			dataString+='&loan_term_id='+loan_term_id+'&loan_loantype_id='+loan_loantype_id+'&loan_amount='+loan_amount;

		if(this.value=='create'){ //CREATE MODE
			//ajax now
			$.ajax ({
			  type: "POST",
			  url: "../../model/loans/create.php",
			  data: dataString,
			  dataType: 'json',      
			  cache: false,
			  success: function(s){		  	
			  	alert('Saved');
			  	reset();
			  	populate_table_main();
			  }  
			}); 
			//ajax end  
		}
		else{ //UPDATE MODE
			var id = this.value;
			//ajax now
			$.ajax ({
			  type: "POST",
			  url: "../../model/loans/update.php",
			  data: dataString+'&id='+id,
			  dataType: 'json',      
			  cache: false,
			  success: function(s){		  	
			  	alert('Updated');
			  	reset();
			  	populate_table_main();
			  }  
			}); 
			//ajax end  			
		}
	}

})