	populate_table_main();




  var table_main = $('#table_main').dataTable({
    "aoColumnDefs": [ { "bSortable": false, "aTargets": [5,6] } ],
    "aaSorting": []
  });  //Initialize the datatable

function populate_table_main(){ 
	//ajax now
	$.ajax ({
	  type: "POST",
	  url: "../../model/clients/populate_table_main.php",
	  dataType: 'json',      
	  cache: false,
	  success: function(s)
	  {
	    table_main.fnClearTable();      
	    for(var i = 0; i < s.length; i++) 
	    { 
	      table_main.fnAddData
	      ([
	        s[i][1],s[i][2],s[i][3],s[i][4],s[i][5],
	        '<button data-toggle="tooltip" onclick="client_row_view(this.value)" value='+s[i][0]+' data-toggle="modal" class="btn btn-xs " title="VIEW /Edit"> <i class="fa fa-eye"></i></button>',      	        
	        '<button data-toggle="tooltip" onclick="client_row_del(this.value)" value='+s[i][0]+' data-toggle="modal" class="btn btn-xs  btn-danger" title="Delete"> <i class="fa fa-trash"></i> </button>',      
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



	if($('#f_name').val()==''){
		err = true;
		$('#f_name_div').addClass('has-error');
	}
	else
		$('#f_name_div').removeClass('has-error');		

	if($('#f_contact').val()==''){
		err = true;
		$('#f_contact_div').addClass('has-error');
	}
	else
		$('#f_contact_div').removeClass('has-error');	

	if($('#f_bdate').val()==''){
		err = true;
		$('#f_bdate_div').addClass('has-error');
	}
	else if($('#f_bdate').val()!=''){
		var today = new Date();
		var today = today.getFullYear();
		var f_bdate = $('#f_bdate').val().slice(0,4);
		if( (today-f_bdate) < 18){
			err = true;
			$('#f_bdate_div').addClass('has-error');
			alert('Must be 18 or Above');
		}
	}
	else
		$('#f_bdate_div').removeClass('has-error');	

	if($('#f_gender').val()=='none'){
		err = true;
		$('#f_gender_div').addClass('has-error');
	}
	else
		$('#f_gender_div').removeClass('has-error');	

	if($('#f_address').val()==''){
		err = true;
		$('#f_address_div').addClass('has-error');
	}
	else
		$('#f_address_div').removeClass('has-error');	

	if($('#f_job').val()==''){
		err = true;
		$('#f_job_div').addClass('has-error');
	}
	else
		$('#f_job_div').removeClass('has-error');	

	if( $('#f_mstatus').val()=='married' ){
		if($('#f_spouse').val()==''){
			err = true;
			$('#f_spouse_div').addClass('has-error');
		}
		else
			$('#f_spouse_div').removeClass('has-error');	

		if($('#f_dependents').val()=='' || $('#f_dependents').val()<0){
			err = true;
			$('#f_dependents_div').addClass('has-error');
		}
		else
			$('#f_dependents_div').removeClass('has-error');	

	}



	return err;				
}

function showSpouse(get){
	$('#f_spouse_div').removeClass('has-error');     
	$('#f_dependents_div').removeClass('has-error');  	
	if(get=='married'){$('#spouse_div').css('display','block');}
	else{ $('#spouse_div').css('display','none'); }
}

function client_row_del(id){

  var choice = confirm("Are you sure you want to Delete?");
  if(choice==true){
  			//ajax now
			$.ajax ({
			  type: "POST",
			  url: "../../model/clients/delete.php",
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

function client_row_view(id){
	reset();
		//ajax now
	$.ajax ({
	  type: "POST",
	  url: "../../model/clients/fetch.php",
	  data: 'id='+id,
	  dataType: 'json',      
	  cache: false,
	  success: function(s){		
	  	$('#btn_save').val(id);

	  	$('#f_name').val(s[0][0]);	$('#f_contact').val(s[0][1]);	$('#f_bdate').val(s[0][2]);
	  	$('#f_gender').val(s[0][3]);	$('#f_mstatus').val(s[0][4]);	$('#f_address').val(s[0][5]);	$('#f_job').val(s[0][6]);
	  	if(s[0][4]=='married'){
	  		$('#spouse_div').css('display','block');
		  	$('#f_spouse').val(s[0][7]);	$('#f_dependents').val(s[0][8]);	  		
	  	}
	  }  
	}); 
	//ajax end
}

$('#btn_reset').click(function(){ reset(); })

$('#btn_save').click(function(){

	if(validate_form()==true){}
	else{

		var client_name = $('#f_name').val();
		var client_contact = $('#f_contact').val();
		var client_bdate = $('#f_bdate').val();
		var client_gender = $('#f_gender').val();
		var client_mstatus = $('#f_mstatus').val();
		var client_address = $('#f_address').val();
		var client_job = $('#f_job').val();
		var client_spouse = $('#f_spouse').val();
		var client_dependents = $('#f_dependents').val();
		var dataString = 'client_name='+client_name+'&client_contact='+client_contact+'&client_bdate='+client_bdate;
		dataString+='&client_gender='+client_gender+'&client_mstatus='+client_mstatus+'&client_address='+client_address;
		dataString+='&client_job='+client_job+'&client_spouse='+client_spouse+'&client_dependents='+client_dependents;

		if(this.value=='create'){ //CREATE MODE
			//ajax now
			$.ajax ({
			  type: "POST",
			  url: "../../model/clients/create.php",
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
			  url: "../../model/clients/update.php",
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
