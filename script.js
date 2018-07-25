$(document).ready(function(){
	
	$("button").click(function() {
		console.log("kendi");   

		var Noun = $("#Noun").val();
        var Adjective = $("#Adjective1").val();
		var DifferentAdjective = $("#Adjective2").val();
		var Job = $("#Job").val();
		var AnotherAdjective = $("#Adjective3").val();
        var Hobby = $("#Hobby").val();
		var Job = $("#Job").val();
		var AnotherJob = $("#Job2").val();
		
		var sentence1 = "There was once a "+ Noun +", but it was " + Adjective + " and " + DifferentAdjective;
		
		var sentence2 = "It was poor and needed a job."
		
		var sentence3 = "So, it applied for being a " + Job;
	
		var sentence4 = "Nobody hired him because it was " + AnotherAdjective;
		
		var sentence5 = "Then it realized it like'd " + Hobby + ", so it became a " + AnotherJob;
	
		$("#sentence1_result").html(sentence1);
		$("#sentence2_result").html(sentence2)
		$("#sentence3_result").html(sentence3);
		$("#sentence4_result").html(sentence4)
		$("#sentence5_result").html(sentence5);
		
		
		
	});
});
