	populate_table_main();




  var table_main = $('#table_main').dataTable({
    "aoColumnDefs": [ { "bSortable": false, "aTargets": [] } ],
    "aaSorting": [],
       sDom: 'T<"clear">lfrtip',
            "tableTools": {
                "sSwfPath": "../../gems/TableTools/swf/copy_csv_xls_pdf.swf",
                 "aButtons": [
                  {
                      "sExtends": "xls",
                  },
                  {
                      "sExtends": "pdf",
                  }, 
                  {
                      "sExtends": "copy",
                  },                                   

                  ]
                }           




  });  //Initialize the datatable



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
	    	
	    	if(s[i][9]!='PENDING'){ var enability='disabled';}
	    	else{var enability = 'enabled';}
	    	if($('#loansys_user_type').val()!='ADMIN'){var enability='disabled';}

	      table_main.fnAddData
	      ([
	        s[i][1],s[i][2],s[i][3],s[i][4],'<span class="badge">'+s[i][5]+'</span>',s[i][6],s[i][7],'<span class="badge">'+comma(s[i][8])+'</span>',s[i][9],
	      ],false); 
	      table_main.fnDraw();
	    }       
	  }  
	}); 
	//ajax end  
} //


















































































































































































































