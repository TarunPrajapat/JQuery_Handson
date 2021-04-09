$(document).ready(function(){

	$("#btn").click(function(){
		
		var x=$("#in1").val();
		var y=$("#in2").val();
		
		if(x == "" || y =="")
		{
			$("div").css("color","red");
			$("div").append("Pls.Enter the values");
		}
		else{
			$("div").css("color","green");
			$("div").append(parseInt(x)+parseInt(y));
			$("#ans").val(parseInt(x)+parseInt(y));
		}
		
	});

});