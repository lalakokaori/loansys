	populate_table_main();




  var table_main = $('#table_main').dataTable({
    "aoColumnDefs": [ { "bSortable": false, "aTargets": [9] } ],
    "aaSorting": []
  });  //Initialize the datatable

	  var table_payment = $('#table_payment').dataTable({
    "aoColumnDefs": [ { "bSortable": false, "aTargets": [] } ],
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
	    	
	    	if(s[i][9]=='CLOSE'){ var enability='disabled';}

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


function populate_table_payment(id){ 
	//ajax now
	$.ajax ({
	  type: "POST",
	  url: "../../model/payments/populate_table_payment.php",
	  dataType: 'json',      
	  data: 'id='+id,
	  cache: false,
	  success: function(s)
	  {
	    table_payment.fnClearTable();      
	    for(var i = 0; i < s.length; i++) 
	    { 	    	
	      table_payment.fnAddData
	      ([
					s[i][1],s[i][2],s[i][3]
	      ],false); 
	      table_payment.fnDraw();
	    }       
	  }  
	}); 
	//ajax end  
} //




function reset(){
	$('#btn_save').val('');

	table_payment.fnClearTable();      

	$('#f_ob').val('');
	$('#f_bb').val('');
	$('#f_balance').val('');
	$('#f_perterm').val('');
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
	populate_table_payment(id);
	//ajax now
	$.ajax ({
	  type: "POST",
	  url: "../../model/payments/select.php",
	  dataType: 'json',
	  data: 'id='+id,    
	  cache: false,
	  success: function(s){
	  	$('#f_ob').val(comma(s[0][0]  ));
	  	$('#f_bb').val(comma(s[0][1].toFixed(2)   ));	  	
	  	$('#f_balance').val(comma(s[0][2].toFixed(2)));
	  	$('#f_perterm').val((comma(s[0][3]).toFixed(2)));
	  	$('#f_payment').val((comma(s[0][3]).toFixed(2)));
	  }  
	}); 
	//ajax end  
} //

$('#f_btn_adv').click(function(){
	var current = uncomma($('#f_payment').val());
	var addto = uncomma( $('#f_perterm').val() );
	var total = parseFloat(current,2)+parseFloat(addto,2);
	var comparee = uncomma( $('#f_balance').val() );
	if(total<= parseInt(comparee)+50 )
		$('#f_payment').val( comma(total.toFixed(2))  );
})


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
