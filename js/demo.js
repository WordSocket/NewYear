$(function(){
	var audio=document.getElementsByTagName("audio")[0]
	// 点击图标
	// $("#Music").click(function(){
	// 	if(audio.paused){
	// 		audio.play();
	// 		// $(this).addClass("play")
	// 		$(this).css("animationPlayState",'running')
	// 	}else{
	// 		audio.pause();
	// 		// $(this).removeClass("play");
	// 		$(this).css("animationPlayState",'paused')
	// 	}
	// })
	// 音乐结束
	audio.addEventListener("ended",function(event){
			$(this).css("animationPlayState",'paused')		
	},false)
	$("#Music").bind('touchstart',function(e){
		if(audio.paused){
			audio.play();
			$(this).addClass("play")
			// $(this).css("animationPlayState",'running')
		}else{
			audio.pause();
			$(this).removeClass("play");
			// $(this).css("animationPlayState",'paused')
		}		
	})
	$("#page1").bind('touchstart',function(e){
		$("#page1").css("display","none");
		$("#page2").css("display","block");
		$("#page3").css("display","block");
		$("#page3").css("top","100%");
		setTimeout(function(){
			$("#page2").addClass('fadeOut')
			$("#page3").addClass('fadeIn')
		},5500)
	})
})