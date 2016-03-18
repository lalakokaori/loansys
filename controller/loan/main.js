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

	$('#f_name').val('');
	$('#f_days').val('');


	$('#f_name_div').removeClass('has-error');     
	$('#f_days_div').removeClass('has-error');     

}

function validate_form(){
	err = false;

	if($('#f_name').val()==''){
		err = true;
		$('#f_name_div').addClass('has-error');
	}
	else
		$('#f_name_div').removeClass('has-error');		

	if($('#f_days').val()=='' || $('#f_days').val()<0 || $('#f_days').val()>9999){
		err = true;
		$('#f_days_div').addClass('has-error');
	}
	else
		$('#f_days_div').removeClass('has-error');	



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

		var duration_name = $('#f_name').val();
		var duration_days = $('#f_days').val();

		var dataString = 'duration_name='+duration_name+'&duration_days='+duration_days;
		if(this.value=='create'){ //CREATE MODE
			//ajax now
			$.ajax ({
			  type: "POST",
			  url: "../../model/durations/create.php",
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
			  url: "../../model/durations/update.php",
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