$(document).ready(function(){
	//动态加载幻灯片图片的高度，为当前屏幕宽度的0.45倍
	var img_width_test = document.getElementsByClassName("carousel-inner")[0].offsetWidth;
	var carousel_inner_test = document.getElementsByClassName("carousel-inner")[0];
	carousel_inner_test.style.height = img_width_test*0.45+"px";

	//动态加载三张方块图的高度
	var img_sqaure_first = document.getElementsByClassName("lg-container")[0].offsetWidth;
	// alert("img_sqaure_first:   "+img_sqaure_first);
	$(".lg-container")[0].style.height = img_sqaure_first*0.45+'px';
	$(".row_diy")[0].style.height = img_sqaure_first*0.45+'px';

	$(".sqaure_top_bottom")[0].style.height = img_sqaure_first*0.22+'px';
	$(".sqaure_top_bottom")[0].style.margin_bottom = img_sqaure_first*0+'px';
	$(".sqaure_top_bottom")[1].style.height = img_sqaure_first*0.22+'px';
	$(".sqaure_top_bottom")[1].style.marginTop = img_sqaure_first*0.01+'px';

})
