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
//	侧边菜单
$.ajax({
	url: "json/sliderlist.json",
	type: "get",
	success: function(data){
		var h3_html = "";
		for(var i = 0; i < data.length; i++){
			var li_html = "";
			for(var j = 0; j < data[i].child.length; j++){
				li_html += "<li><a href = '#'>" + data[i].child[j].title + "</a><span class = 'sl'>" + data[i].child[j].sl + "</span></li>"
			}
			h3_html += "<dl><dt><span class = 'close open'></span><h3>" + data[i].title +"<span class = 'sl'>" + data[i].sl + "</span></h3></dt><dd style = 'display: none;'><ul>" + li_html +"</ul></dd></dl>"
		}
		$("#left-catnav").html(h3_html);
		$("#left-catnav dt").click(function(){
		$(this).siblings("dd").stop(true).slideToggle(20);
		$(this).children(".close,.open").toggleClass("close");
	})
	
	}
})
		
//一周销量排行
$.ajax({
	url: "json/week-ranklist.json",
	type: "get",
	success: function(data){
		var tj1_html = '';
		var tj2_html = '';
		var tjbox1 = '';
		var tjbox2 = '';
		for(var i = 0; i < data.length; i++){
			if(i < 2){
				tj1_html += "<div class = 'good_tj'><div class = 'imgbox'><a href = '#'><img width = '120' height = '120' src = '"+ data[i].img +"'/></a></div><div class = 'textbox'><p class = 'proname'><a href = '#'>" +data[i].title + "</a></p><p class = 'proprice'>" + data[i].price +"</p></div></div>"
				
				
			}else if(i == 2){
					tj2_html = "<div class = 'good_tj lastdiv'><div class = 'imgbox'><a href = '#'><img width = '120' height = '120' src = '"+ data[i].img +"'/></a></div><div class = 'textbox'><p class = 'proname'><a href = '#'>" +data[i].title + "</a></p><p class = 'proprice'>" + data[i].price +"</p></div></div>"
			}else{
				tjbox2 += "<div class = 'good_tj good_rx'><div class = 'tl_img'><a href = '#'><img width = '82' height = '82' src = '" + data[i].img + "'/></a></div><div calss = 'tl_text'><p class = rx_name'><a href = '#'>" + data[i].title + "</a></p><p class = 'rx_price'>" + data[i].price + "</p></div></div>"
			}
			tjbox1 = tj1_html + tj2_html;
		}
		$(".tj_box").html(tjbox1);
		$(".tj_box2").html(tjbox2);
	}
})
$.ajax({
	type:"get",
	url:"json/brandbox.json",
	success: function(data){
		var title1 = '';
		var title2 = '';
		var title = '';
		var brand_box = '';
		var brands = ''; 
		for(var i = 0; i < data.length; i++){
			var brand = '';
			for(var j = 0; j < data[i].child.length; j++){
				brand += "<li><a href = '#'>" + data[i].child[j] + "</a></li>"
			}
			if(i == 0){
				title1 = "<div class = 'zm curr'>" + data[i].title + "<b></b></div>"
			}else{
				title2 += "<div class = 'zm'>" + data[i].title + "</div>"
			}
			title = title1 +title2;
			brands += "<div class = 'b"+ i +"'><ul>"+ brand +"</ul></div>";
		 brand_box = "<dt>品牌：</dt><dd><div class = 'more'>更多</div>" + title + "<div class = 'brands'>" +brands+"</div></dd></dl>"
			
		}
		$("#brand-box").html(brand_box);
		$(".zm").click(function(){
			 var index = $(this).index()-1;
			$(this).css("background","#02a3f0").siblings().css("background","")
			$(".brands div").eq(index).css("display","block").siblings().css("display","none")
		})
	}
});
$.ajax({
	type:"get",
	url:"json/list.json",
	success: function(data){
		var list = '';
		for(var i = 0; i < data.length; i++){
			list += "<dl><dt><a href = '#'><img width = '200' height = '200' src = '" + data[i].img +"'/></a></dt><dd class = 'pro-name'><a href = '#'>" + data[i].title + "</a></dd><dd class = 'pro-price'><span>" + data[i].price + "</span><span class = 'zhekou'>" + data[i].sale + "</span></dd><dd class = 'buybtn'><a class = 'add' href = '#'>加入购物车</a><a class = 'shouc'>收藏</a></dd></dl>"
		}
		$(".cplist").html(list);
	}
});





















	});