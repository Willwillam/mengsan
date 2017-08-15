$("document").ready(function(){
	var timer=null;
	$(".left-list").mouseenter(function(){
		var that=$(this);
		that.children(".triangle").css("transform","rotate(45deg)");
		clearTimeout(timer);
		timer=setTimeout(function(){
		that.children(".ext-content").slideToggle(1000).parent(".left-list").siblings().children(".ext-content").slideUp(700);
	  },600) 
		$(".left-list").mouseleave(function(){
		that.children(".triangle").css("transform","rotate(-45deg)");	
			clearTimeout(timer);
		})
	});	
});