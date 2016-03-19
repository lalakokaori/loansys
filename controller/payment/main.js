	populate_table_main();




  var table_main = $('#table_main').dataTable({
    "aoColumnDefs": [ { "bSortable": false, "aTargets": [9] } ],
    "aaSorting": []
  });  //Initialize the datatable


function populate_table_main(){ 
	//ajax now
	$.ajax ({
	  type: "POST",
	  url: "../../model/payments/populate_table_main.php",
	  dataType: 'json',      
	  cache: false,
	  success: function(s)
	  {
	    table_main.fnClearTable();      
	    for(var i = 0; i < s.length; i++) 
	    { 	    	
	    	
	    	if(s[i][9]!='PENDING'){ var enability='disabled';}
	    	else{var enability = 'enabled';}
	    	if($('#loansys_user_type').val()!='ADMIN'){var enability='disabled';}

	      table_main.fnAddData
	      ([
	        s[i][1],s[i][2],s[i][3],s[i][4],'<span class="badge">'+s[i][5]+'</span>',s[i][6],s[i][7],'<span class="badge">'+comma(s[i][8])+'</span>',s[i][9],
	        '<button onclick="table_row_select(this.value)" value='+s[i][0]+' target="_blank" class="btn btn-xs btn-primary" title="Select" '+enability+'> <i class="fa fa-check-circle"></i> SELECT</button>',      	        
	      ],false); 
	      table_main.fnDraw();
	    }       
	  }  
	}); 
	//ajax end  
} //






function reset(){
	$('#btn_save').val('create');

	//$('#f_client').select2().select2('val','none');                      

	//$('#f_client_div').removeClass('has-error');     
}

function validate_form(){
	err = false;

	/*
	if($('#f_client').val()=='none'){
		err = true;
		$('#f_client_div').addClass('has-error');
	}
	else
		$('#f_client_div').removeClass('has-error');		
	*/


	return err;				
}

function table_row_select(id){

	//ajax now
	$.ajax ({
	  type: "POST",
	  url: "../../model/payments/approve.php",
	  data: 'id='+id,
	  dataType: 'json',      
	  cache: false,
	  success: function(s){		
			//POPULATE FIELDS HERE
	  }  
	}); 
	//ajax end  	
}

$('#btn_reset').click(function(){ reset(); })

$('#btn_save').click(function(){

	if(validate_form()==true){}
	else{


		if(this.value=='create'){ //CREATE MODE
			//ajax now
			$.ajax ({
			  type: "POST",
			  url: "../../model/payments/create.php",
			  data: dataString,
			  dataType: 'json',      
			  cache: false,
			  success: function(s){		  	
				alert('Success: Saved');
					reset();
					populate_table_main();			  		
			  }  
			}); 
			//ajax end  
		}

	}

})
