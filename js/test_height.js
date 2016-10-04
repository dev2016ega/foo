$(document).ready(function(){
	var img_width_test = document.getElementsByClassName("carousel-inner")[0].offsetWidth;
	alert(img_width_test);
	var carousel_inner_test = document.getElementsByClassName("carousel-inner")[0];
	alert(img_width_test*0.375);
	carousel_inner_test.style.height = img_width_test*0.5+"px";
})


//
// $(document).ready(function(){
// 	$(".header_text span").onmouseover = function(){
// 		alert("jin");
// 		this.addClass("header_text_hover");
// 	}
// 	$(".header_text span").onmouseleave = function(){
// 		this.removeClass("header_text_hover");
// 	}
// })
