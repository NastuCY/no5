$(function(){
	$("#fo").load("foot.html",function(){
		$(function(){
	$.ajax({
	type:"get",
	url:"json/foot1.json",
	success:function(data){
		var foot_html = '';
		for(var i = 0; i < data.length; i++){
			var ft_html = '';
			var ft1_html = '';
			var ft2_html = '';
				for(var j = 0; j < data[i].des.length; j++){
					ft_html += "<dd><a href = '#'>"+ data[i].des[j] + "</a></dd>"
				}
			if(i == 5){	
				ft1_html = "<dl class = 'howto lastdl'><dt><a href = '#'>"+data[i].title+"</a></dt>" +ft_html + "</dl>";
			}else{
				ft2_html += "<dl class = 'howto'><dt><a href = '#'>" +data[i].title+"</a></dt>" +ft_html + "</dl>";
			}
			foot_html += ft1_html +ft2_html ;
		}
		$(".f-list").html(foot_html);
	}
});
			$(".text").focus(function(){
				$(".text").val("");
			}).blur(function(){
				$(".text").val("请输入您的Email地址");
			})
$.ajax({
	type:"get",
	url:"json/foot2.json",
	success:function(data){
		var fb_html = '';
		for(var i = 0; i < data.length; i++){
			fb_html += "<dl class = 'fb'><dt><img src = '"+ data[i].img + "'/></dt><dd>" + data[i].des1+ "</dd><dd>" + data[i].des2 + "</dd></dl>"
		}
		$(".fb-list").html(fb_html);
	}
});
})

	});
	$("#head_info").load("head.html",function(){
//			欢迎词
			var now = new Date;
			if(getCookie("judge")==1){
				$(".log").html("[退出登录]");
				$(".reg .reg").css("display","none")
		if(now.getHours() >= 6 && now.getHours() <8){
			$(".time").html("早上好，<b style='color:red'>" + getCookie("name")+ "</b>！欢迎来到No5时尚广场。");
			
		}else if(now.getHours() >= 8 && now.getHours() <12){
			$(".time").html("上午好，<b style='color:red'>" + getCookie("name")+ "</b>！欢迎来到No5时尚广场。")
		}else if(now.getHours() >= 12 && now.getHours() <14){
			$(".time").html("中午好，<b style='color:red'>" + getCookie("name")+ "</b>！欢迎来到No5时尚广场。")
		}else if(now.getHours()>= 14 && now.getHours()<18){
			$(".time").html("下午好，<b style='color:red'>" + getCookie("name")+ "</b>！欢迎来到No5时尚广场。")
		}else {
			$(".time").html("晚上好，<b style='color:red'>" + getCookie("name")+ "</b>！欢迎来到No5时尚广场。")
		};
	 }else{
	 	if(now.getHours() >= 6 && now.getHours() <8){
				$(".time").html("早上好，欢迎光临No5时尚广场。")
			}else if(now.getHours() >= 8 && now.getHours() <12){
				$(".time").html("上午好，欢迎光临No5时尚广场。")
			}else if(now.getHours() >= 12 && now.getHours() <14){
				$(".time").html("中午好，欢迎光临No5时尚广场。")
			}else if(now.getHours()>= 14 && now.getHours()<18){
				$(".time").html("下午好，欢迎光临No5时尚广场。")
			}else {
				$(".time").html("晚上好，欢迎光临No5时尚广场。")
			};
	 }
//			搜索框
			$(".search_top").mouseover(function(){
				$(".del-keywords").css("visibility","visible");
				
			}).mouseout(function(){
				$(".del-keywords").css("visibility","hidden")
			});
			$(".inp").focus(function(){
				$(".inp").val("");
			}).blur(function(){
				$(".inp").val("面膜");
			})
			
			$(".del-keywords").click(function(){
				$(".inp").val("");
			})
//			菜单栏
			$.ajax({
			url: "json/meau1.json",
			type: "GET",
			success: function(data){
				var html = '';
				for(var i = 0; i < data.length; i++){
					var dl_html = '';
					for(var j = 0; j < data[i].child_meau.length; j++){
					dl_html += "<a href = '#'>" + data[i].child_meau[j] + "</a>";
					};
					var dt1_html = '';
					for(var k = 0; k < data[i].child_des.length; k++){
						var dt_html = '';
						for(var l in data[i].child_des[k].goods){
							dt_html += "<a href = '#'>" + data[i].child_des[k].goods[l] + "</a>";
						};
						
					dt1_html += "<li><b><a href = '#'>" + data[i].child_des[k].title + "</a></b><p>" + dt_html + "</p></li>" 
					}
					var dt2_html = '';
					for(var m = 0; m < data[i].child_des2.length; m++){
						var dtbrand_html = '';
						for(var n in data[i].child_des2[m].brand){
							dtbrand_html += "<li><a href = '#'>" + data[i].child_des2[m].brand[n] + "</a></li>";
						};
						
					dt2_html += "<h4><a href = '#'>" + data[i].child_des2[m].title + "</a></h4>" + dtbrand_html + "<div><img src = '" + data[i].child_des2[m].img +"'/></div>"
					}
				html += "<dl id = 'box" + i +"'><dt><strong><h3><a href = 'detail.html'>" + data[i].title + "</a></h3></strong><p>" + dl_html + "</p></dt><dd><ul class = 'secondlist'>" + dt1_html + "</ul><div class = 'hotbrand'><ul>" + dt2_html + "</ul></div></dd></dl>" ;
				}
			$('#navbox').html(html)	;
		$(".float_list_btn").mouseenter(function(){
			$("#navbox dl").css("display","block");
		
		});			
		$("#navbox").mouseleave(function(){
			$("#navbox dl").css("display","none");
		});
		$("#navbox dl").mouseenter(function(){	
			$(this).css("background-color","white");
			$(this).children("dd").css("display","block");
		});
					
		$("#navbox dl").mouseleave(function(){
			$(this).css("background","#F8F8F8");
			$(this).children("dd").css("display","none");
		});
		}		
		});
	});
$.ajax({
	type:"get",
	url:"json/detail.json",
	success: function(data){
		var small = '';
		var more = '';
		var big = '';
		for(var i = 0; i < data.length; i++){
			
				small += "<li id = 'sBox" + i + "' class = 'pic_li'><img src = '" + data[i].img1 + "'/></li>"	
		}
		$("#picIdxBox").html(small);
		$("#picIdxBox li").mouseover(function(){
			var index = $(this).index();
			$(this).css("border","1px solid #0081e3").siblings().css("border","1px solid #ccc")
			var bigarr = ["images/big1.jpg","images/big2.jpg","images/big3.jpg","images/big4.jpg","images/big5.jpg"]
			$("#big img").attr("src",bigarr[index])
			var morearr = ["images/more1.jpg","images/more2.jpg","images/more3.jpg","images/more4.jpg","images/more5.jpg"]
			$("#more_box img").attr("src",morearr[index])
			
			var oMove = document.getElementById("move");
			var oBig = document.getElementById("big");
			var oMore = document.getElementById("more_box");
			var oPic = document.getElementsByClassName("p01_l");
			var oImg = document.getElementById("more_box").getElementsByTagName("img")[0];
			
			oBig.onmouseover = function(){
				oMove.style.display = "block";
				oMore.style.display = "block";
			};
			oBig.onmouseout = function(){
				oMove.style.display = "none";
				oMore.style.display = "none";
			}
			oBig.onmousemove = function(evt){
				var e =evt||window.event;
				var l = e.pageX - oPic.offsetLeft - oBig.offsetLeft - oMove.offsetWidth/2;
				var t = e.pageY - oPic.offsetTop - oBig.offsetTop - oMove.offsetHeight/2;
				if(l < 0){
					l = 0;
				}else if(l > oBig.offsetWidth - oMove.offsetWidth){
					l = oBig.offsetWidth - oMove.offsetWidth;
				};
				if(t < 0){
					t = 0;
				}else if(t > oBig.offsetHeight - oMove.offsetHeight){
					t = oBig.offsetHeight - oMove.offsetHeight;
				}
				document.title = t;
				oMove.style.left = l + "px";
				oMove.style.top = t + "px";
				var perecentX = l / (oBig.offsetWidth - oMove.offsetWidth);
				var perecentY = t / (oBig.offsetHeight - oMove.offsetHeight);
				
				oImg.style.left = -(perecentX*(oImg.offsetWidth - oMore.offsetWidth)) + "px";
				oImg.style.top = -(perecentY*(oImg.offsetHeight - oMore.offsetHeight)) + "px";
			}
		})
	}
});
















})