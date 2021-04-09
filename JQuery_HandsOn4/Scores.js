$(document).ready(function(){
	
	function calculate_sum()
	{
		var sum=0;
		$("input").each(function(){
			if($(this).val()!="")
			{
				sum+=parseFloat($(this).val())
			}
			
		})
		$("#sum").text(sum.toFixed(2))
	}
	$("input").keyup(function(){
		
		calculate_sum();
	});
	
	
});