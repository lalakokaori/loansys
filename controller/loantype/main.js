	populate_table_main();




  var table_main = $('#table_main').dataTable({
    "aoColumnDefs": [ { "bSortable": false, "aTargets": [2,3] } ],
    "aaSorting": []
  });  //Initialize the datatable

function populate_table_main(){ 
	//ajax now
	$.ajax ({
	  type: "POST",
	  url: "../../model/loantypes/populate_table_main.php",
	  dataType: 'json',      
	  cache: false,
	  success: function(s)
	  {
	    table_main.fnClearTable();      
	    for(var i = 0; i < s.length; i++) 
	    { 
	      table_main.fnAddData
	      ([
	        s[i][1], '<span class="badge">'+s[i][2]+'</span>',
	        '<button data-toggle="tooltip" onclick="table_row_view(this.value)" value='+s[i][0]+' data-toggle="modal" class="btn btn-xs " title="VIEW /Edit"> <i class="fa fa-eye"></i></button>',      	        
	        '<button data-toggle="tooltip" onclick="table_row_del(this.value)" value='+s[i][0]+' data-toggle="modal" class="btn btn-xs  btn-danger" title="Delete"> <i class="fa fa-trash"></i> </button>',      
	      ],false); 
	      table_main.fnDraw();

	    }       
	  }  
	}); 
	//ajax end  
} //

function reset(){
	$('#btn_save').val('create');

	$('#f_name').val('');
	$('#f_interest').val('');


	$('#f_name_div').removeClass('has-error');     
	$('#f_interest_div').removeClass('has-error');     

}

function validate_form(){
	err = false;

	if($('#f_name').val()==''){
		err = true;
		$('#f_name_div').addClass('has-error');
	}
	else
		$('#f_name_div').removeClass('has-error');		

	if($('#f_interest').val()=='' || $('#f_interest').val()<0 || $('#f_interest').val()>100){
		err = true;
		$('#f_interest_div').addClass('has-error');
	}
	else
		$('#f_interest_div').removeClass('has-error');	



	return err;				
}


function table_row_del(id){

  var choice = confirm("Are you sure you want to Delete?");
  if(choice==true){
  			//ajax now
			$.ajax ({
			  type: "POST",
			  url: "../../model/loantypes/delete.php",
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
	  url: "../../model/loantypes/fetch.php",
	  data: 'id='+id,
	  dataType: 'json',      
	  cache: false,
	  success: function(s){		
	  	$('#btn_save').val(id);
	  	$('#f_name').val(s[0][0]);	$('#f_interest').val(s[0][1]);
	  }  
	}); 
	//ajax end
}

$('#btn_reset').click(function(){ reset(); })

$('#btn_save').click(function(){

	if(validate_form()==true){}
	else{

		var loantype_name = $('#f_name').val();
		var loantype_interest = $('#f_interest').val();

		var dataString = 'loantype_name='+loantype_name+'&loantype_interest='+loantype_interest;
		if(this.value=='create'){ //CREATE MODE
			//ajax now
			$.ajax ({
			  type: "POST",
			  url: "../../model/loantypes/create.php",
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
			  url: "../../model/loantypes/update.php",
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