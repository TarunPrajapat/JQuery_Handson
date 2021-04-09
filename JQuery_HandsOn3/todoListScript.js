$(document).ready(function(){

	$("button").click(function(){
		
		var x=$("#in1").val();
		
		if(x == "" )
		{
			alert("Enter task details!!");
		}
		else{
			$("#tasks").append(x+"<br/>");
			
		}
		$("#in1").val("");
	});

});