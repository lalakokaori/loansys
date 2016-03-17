//	populate_table_main();




  var table_main = $('#table_main').dataTable({
    "aoColumnDefs": [ { "bSortable": false, "aTargets": [3] } ],
    "aaSorting": []
  });  //Initialize the datatable

function populate_table_main(){ 
	//ajax now
	$.ajax ({
	  type: "POST",
	  url: "../../model/users/populate_table_main.php",
	  dataType: 'json',      
	  cache: false,
	  success: function(s)
	  {
	    table_main.fnClearTable();      
	    var enability='enabled';  
	    for(var i = 0; i < s.length; i++) 
	    { 
	    	if(s[i][2]=='inactive'){enability='disabled'}
	      table_main.fnAddData
	      ([
	        s[i][0],s[i][1],s[i][2],
	        '<button data-toggle="tooltip" onclick="user_row_del(this.value)" value='+s[i][0]+' data-toggle="modal" class="btn btn-xs  btn-danger" title="Delete" '+enability+'> <i class="fa fa-trash"></i> Delete </button>',      
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
	$('#f_contact').val('');
	$('#f_bdate').val('');
	$('#f_gender').val('none');
	$('#f_mstatus').val('single');
	$('#f_address').val('');
	$('#f_job').val('');
	$('#f_spouse').val('');
	$('#f_dependents').val('');

	$('#f_name_div').removeClass('has-error');     
	$('#f_contact_div').removeClass('has-error');     
	$('#f_bdate_div').removeClass('has-error');     
	$('#f_gender_div').removeClass('has-error');
	$('#f_mstatus_div').removeClass('has-error');  
	$('#f_address_div').removeClass('has-error');     
	$('#f_job_div').removeClass('has-error');     
	$('#f_spouse_div').removeClass('has-error');     
	$('#f_dependents_div').removeClass('has-error');     

	$('#spouse_div').css('display','none');
}

function validate_form(){
	err = false;

	if($('#f_user_name').val()==''){
		err = true;
		$('#f_user_name_div').addClass('has-error');
	}
	else
		$('#f_user_name_div').removeClass('has-error');		

	if($('#f_user_password').val()==''){
		err = true;
		$('#f_user_password_div').addClass('has-error');
	}
	else
		$('#f_user_password_div').removeClass('has-error');		

	if($('#f_user_type').val()=='none'){
		err = true;
		$('#f_user_type_div').addClass('has-error');
	}
	else
		$('#f_user_type_div').removeClass('has-error');	

	return err;				
}

function showSpouse(get){
	if(get=='married'){$('#spouse_div').css('display','block');}
	else{ $('#spouse_div').css('display','none'); }
}

function user_row_del(id){
	//ajax now
	$.ajax ({
	  type: "POST",
	  url: "../../model/users/delete.php",
	  data: 'id='+id,
	  dataType: 'json',      
	  cache: false,
	  success: function(s){		  	
	  	alert('Success: Deleted ');
	  	reset();
	  	populate_table_main();
	  }  
	}); 
	//ajax end  
}

$('#btn_reset').click(function(){ reset(); })

$('#btn_save').click(function(){

	if(validate_form()==true){}
	else{

		var user_name = $('#f_user_name').val();
		var user_password = $('#f_user_password').val();
		var user_type = $('#f_user_type').val();	
		var dataString = 'user_name='+user_name+'&user_password='+user_password+'&user_type='+user_type;
		if(this.value!='update'){ //CREATE MODE
			//ajax now
			$.ajax ({
			  type: "POST",
			  url: "../../model/users/create.php",
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
		else if(this.value=='update'){ //UPDATE MODE
			//ajax now
			$.ajax ({
			  type: "POST",
			  url: "../../model/users/update.php",
			  data: dataString,
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