$(document).ready(function(){
	//动态加载幻灯片图片的高度，为当前屏幕宽度的0.45倍
	var img_width_test = document.getElementsByClassName("carousel-inner")[0].offsetWidth;
	alert(img_width_test);
	var carousel_inner_test = document.getElementsByClassName("carousel-inner")[0];
	alert(img_width_test*0.375);
	carousel_inner_test.style.height = img_width_test*0.45+"px";

	//动态加载三张方块图的高度
	var img_sqaure_first = document.getElementsByClassName("lg-container")[0].offsetWidth;
	alert("img_sqaure_first:   "+img_sqaure_first);
	$(".lg-container")[0].style.height = img_sqaure_first*0.45+'px';
	$(".row_diy")[0].style.height = img_sqaure_first*0.45+'px';
	// $(".row_diy.style")[1].style.height = img_sqaure_fisrt*0.45+'px';
	// $(".row_diy.style")[2].style.height = img_sqaure_fisrt*0.45+'px';

	$(".sqaure_top_bottom")[0].style.height = img_sqaure_first*0.22+'px';
	$(".sqaure_top_bottom")[0].style.margin_bottom = img_sqaure_first*0+'px';
	$(".sqaure_top_bottom")[1].style.height = img_sqaure_first*0.22+'px';
	$(".sqaure_top_bottom")[1].style.marginTop = img_sqaure_first*0.01+'px';
	alert("margin_top" + $(".sqaure_top_bottom")[1].style.margin_top);

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
