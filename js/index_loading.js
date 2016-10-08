$(document).ready(function() {

	$.ajax({
		type: "get",
		url: "http://localhost/devega/index.php/index/get",
		dataType:"json",
		async: true,
		success: function (data) {

			// alert("進來了");
			//加载幻灯片三张大图
			document.getElementById("pic_one").src = data.Data.banner[0].link;
			document.getElementById("pic_two").src = data.Data.banner[1].link;
			document.getElementById("pic_three").src = data.Data.banner[2].link;

			//加载三个方块图、文字
			document.getElementById("squre_one").textContent = data.Data.about[0].content;
			document.getElementById("squre_two").textContent = data.Data.about[1].content;
			document.getElementById("squre_three").textContent = data.Data.about[2].content;

			document.getElementById("squre_pic_one").src = data.Data.about[0].link;
			document.getElementById("squre_pic_two").src = data.Data.about[1].link;
			document.getElementById("squre_pic_three").src = data.Data.about[2].link;

			//加载视频
			document.getElementById("video_squre").data = data.Data.video[0].link;

			//加载新闻题目
			// alert(data.Data.news[1].title +" " +data.Data.news[1].title.length);
            if(data.Data.news[0].title.length > 23)
				document.getElementById("newsOneTitle").textContent = data.Data.news[0].title.substring(0,20)+"...";
			else
				document.getElementById("newsOneTitle").textContent = data.Data.news[0].title;

			if(data.Data.news[1].title.length > 23)
				document.getElementById("newsTwoTitle").textContent = data.Data.news[1].title.substring(0,20)+"...";
			else
				document.getElementById("newsTwoTitle").textContent = data.Data.news[1].title;

			if(data.Data.news[2].title.length > 23)
				document.getElementById("newsThreeTitle").textContent = data.Data.news[2].title.substring(0,20)+"...";
			else
				document.getElementById("newsThreeTitle").textContent = data.Data.news[2].title;

			if(data.Data.news[3].title.length > 23)
				document.getElementById("newsFourTitle").textContent = data.Data.news[3].title.substring(0,20)+"...";
			else
				document.getElementById("newsThreeTitle").textContent = data.Data.news[3].title;

			//加载新闻内容
			if(data.Data.news[0].abstract.length > 66)
				document.getElementById("newsOne").textContent = data.Data.news[0].abstract.substring(0,66)+"...";
			else
				document.getElementById("newsOne").textContent = data.Data.news[0].abstract;

			if(data.Data.news[1].abstract.length > 66)
				document.getElementById("newsTwo").textContent = data.Data.news[1].abstract.substring(0,66)+"...";
			else
				document.getElementById("newsTwo").textContent = data.Data.news[1].abstract;

			if(data.Data.news[2].abstract.length > 66)
				document.getElementById("newsThree").textContent = data.Data.news[2].abstract.substring(0,66)+"...";
			else
				document.getElementById("newsThree").textContent = data.Data.news[2].abstract;

			if(data.Data.news[3].abstract.length > 66)
				document.getElementById("newsFour").textContent = data.Data.news[3].abstract.substring(0,66)+"...";
			else
				document.getElementById("newsFour").textContent = data.Data.news[3].abstract;
		}
	})
})
		
 
 
