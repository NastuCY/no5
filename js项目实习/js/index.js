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
				html += "<dl id = 'box" + i +"'><dt><strong><h3><a href = '#'>" + data[i].title + "</a></h3></strong><p>" + dl_html + "</p></dt><dd><ul class = 'secondlist'>" + dt1_html + "</ul><div class = 'hotbrand'><ul>" + dt2_html + "</ul></div></dd></dl>" ;
				}
			$('#navbox').html(html)	;
		$("#navbox dl").mouseenter(function(){	
			$(this).css("background","#fff");
			$(this).children("dd").stop(true).show();
		});
					
		$("#navbox dl").mouseleave(function(){
			$(this).css("background","#F8F8F8");
			$(this).children("dd").stop(true).hide();
		});
		}	
			
		});
		});
				
//		轮播图
		$.ajax({
			url: "json/banner.json",
			type: "get",
			success: function(pic){
				var banner_html = '';
				for( var i = 0; i < pic.length; i++){
					var sc_html = '';
					for(var j = 0; j < pic[i].sc.length; j++){
						 sc_html += "<a href = '#'><img src = '"+ pic[i].sc[j] +"'/></a>";
					}
				
					banner_html += "<li class = 'banner1'><a href = '#'><img src = '"+ pic[i].banner +"'/></a><p class = 'rightlb'>" + sc_html +"</p></li>";
				
				}
				$(".banner").html(banner_html);
				
	var i = 0;
	var length = $(".banner li").size();
	var arr = ["#FD82B0","#FBF6F2","#BAE9EF","#F9D525","#F7F5FA"];	
	$(".num li").eq(i).css("background","#0094FF");
	$("#banner").css("background","#FD82B0");
	var time = setInterval(change,3000);
	var timer = "";
	$(".pic").mouseover(function(){
		clearInterval(time);
		clearInterval(timer);
	});
	$(".pic").mouseout(function(){
		clearInterval(timer);
		timer = setInterval(change,3000);
	});	
	$(".num li").on("mouseover",function(){
		i = $(this).index() - 1;
		change();
	});
	function change(){
		i++;
		if(i >= length-1){
			i = 0;
		};
	$(".pic .banner1").eq(i).fadeIn().siblings().fadeOut();
	$("#banner").css("background",arr[i]);
	$(".num li").eq(i).css("background","#0094FF").siblings().css("background","#e8e8e8");
	};	
//remind轮播
  	setInterval(function(){
  		$(".remind ul").animate({"top":"-33px"},100,function(){
  			$(".remind ul li:first").appendTo($(".remind ul"))
  			$(".remind ul").css("top","0");
  		})	
  	},3000);
			}
	});
//限时抢购
    $.ajax({
			url: "json/buy.json",
			type: "get",
			success: function(buy){
    		var box_html = "";
    		for(var i = 0; i < buy.length; i++){
    			
			box_html += "<div class = 'limittime' id = 'num"+i+"'><div class = 'time_top'>剩余<span class = 'hours'></span>小时<span class = 'min'></span>分钟 <span class = 'sec'></span>秒 </div><dl><dt><a href = '#'><img src = '" + buy[i].img1 +"'/></a><a href = '#' class = 'text'>" + buy[i].detail + "</a></dt><dd><b>¥</b><a href = '#' class = 'a-dd'>" + buy[i].price + "</a></dd></dl><p class = 'infonum'><strong>" + buy[i].total + "</strong>人已购买</p></div>";
			}
    		$(".limit_box").html(box_html);
//倒计时 		
setInterval(function(){
	var now = new Date();
	var t = new Date(2016,now.getMonth(),now.getDay()-1,20);
	var time = t.getTime() - now.getTime();
	var hours = Math.floor(time/1000/60/60);
	var min = Math.floor((time/1000 - hours*60*60)/60);
	var sec = Math.floor(time/1000 - hours*60*60 - min*60)
	var secc = Math.floor((time - hours*60*60*1000 - min*60*1000-sec*1000)/100);
	if(hours < 0){
		$(".time_top .hours").html("00");
	}else if(hours < 10 && hours >= 0){
		$(".time_top .hours").html("0" + hours);
	}else{
		$(".time_top .hours").html(hours);
	}
	if(min < 10){
		$(".time_top .min").html("0" + min);
	}else{
		$(".time_top .min").html(min);
	}
	if(sec < 10){
		$(".time_top .sec").html("0" + sec + '.' + secc);
	}else{
		$(".time_top .sec").html(sec + '.' + secc);
	}
},100)
    	}
    });

//返回顶部
$(document).scroll(function(){
			if($(this).scrollTop() >= 300){
				$("#back-top .top").fadeIn();
			}else{
				$("#back-top .top").fadeOut();
			};
			});
			$("#back-top .top").click(function(){
				$("html,body").animate({
					"scrollTop":"0"
			});
	});
//每日特价
$.ajax({
	url:"json/sale_box.json",
	type:"GET",
	success: function(data){
		var con_html = '';
		var li_html = '';
		for(var i = 0 ; i < data.length; i++){
			
			
			var child_html = '';
			if(i % 2 == 0){//1,3,5盒子
				
				for(var j = 0; j < data[i].child.length; j++){
					var goods_html = '';
					var goods1_html = '';
					var goods2_html = '';
					var goods3_html = '';
					var goods4_html = '';
					var goods5_html = '';
					var dl1_html = '';
					var dl2_html = '';
					var dl3_html = '';
					var dl4_html = '';
					var dl5_html = '';
					var dl6_html = '';
					var dl7_html = '';
					var goods6_html = '';
					if( j == 1){ //盒子中第2个div块的样式
						for(var k in data[i].child[1]){
							if( k == 0){//左上
								goods1_html ="<div class = 'salebox-2-l'><dl><dt style='height:150px'><a href = '#' ><img width = '150' height = '150' src = '" + data[i].child[1][k].img + "'/></dt><dd class = 'good-name oneline'><a href = '#'>" + data[i].child[1][k].name +"</a></dd><dd class = 'good-price'>¥<span class = 'good-price-cur'>" + data[i].child[1][k].price + "<span style='font-size:18px;'>00</span></span><span class = 'zhekou'>" +data[i].child[1][k].sale + "</span></dd></dl></div>"
							}else if(k == 1){//右上
								goods2_html = "<div class = 'salebox-2-r'><dl><dd class = 'good-name oneline' style='margin-top:10px'><a href = '#'>" + data[i].child[1][k].name +"</a></dd><dd class = 'good-price'>¥<span class = 'good-price-cur'>" + data[i].child[1][k].price + "<span style='font-size:18px;'>00</span></span><span class = 'zhekou'>" +data[i].child[1][k].sale + "</span></dd><dt><a href = '#'><img width = '150' height = '150' src = '" + data[i].child[1][k].img + "'/></dt></dl></div>"
							}else{//下面
								goods3_html = "<div class = 'salebox-2-d'><dl><dt style='width:220px'><a href = '#'><img width = '180' height = '180' src = '" + data[i].child[1][k].img + "'/></dt><dd class = 'good-name'><a href = '#'>" + data[i].child[1][k].name +"</a><br><a href = '#'>"+data[i].child[1][k].ml+"</a></dd><dd><a href = '#' class = 'LETTER-RED'>" +data[i].child[1][k].des + "</a></dd><dd class = 'good-price'>¥<span class = 'good-price-cur'>" + data[i].child[1][k].price + "<span style = 'font-size:18px'>00</span></span><span class = 'zhekou'>" +data[i].child[1][k].sale + "</span></dd></dl></div>"
							}
							goods_html = "<div class = 'salebox-2'>"+goods1_html+goods2_html+goods3_html+"</div>";
						}
					}else if(j == 0){//盒子中第一个div块的样式
							goods4_html = "<div class = 'salebox-1'><dl><dt><a href = '#'><img width='230' height= '230' src = '" + data[i].child[0].img + "'/></dt><dd class = 'good-name'><a href = '#'>" + data[i].child[0].name +"</a><br><a href = '#'>"+data[i].child[0].ml+"</a></dd><dd class = 'good-exce'><a href = '#' class = 'LETTER-RED'>"+data[i].child[0].des +"</a></dd><dd class = 'good-price'>¥<span class = 'good-price-cur'>" + data[i].child[0].price + "<span style='font-size:18px;'>00</span></span><span class = 'zhekou'>" +data[i].child[0].sale + "</span></dd></dl></div>";
					}else if(j ==2){//盒子中第三个div块的样式
						goods5_html = "<div class = 'salebox-3'><dl><dd class = 'good-name'><a href = '#'>" + data[i].child[2].name +"</a><br><a href = '#'>"+data[i].child[2].ml+"</a></dd><dd class = 'good-price'>¥<span class = 'good-price-cur'>" + data[i].child[2].price + "<span style='font-size:18px;'>00</span></span><span class = 'zhekou'>" +data[i].child[2].sale + "</span></dd><dt><a href = '#'><img width = '230' height = '230' src = '" + data[i].child[2].img + "'/></a></dt></dl></div>";
					}else{//盒子中最后一个div块的样式
						for(var l in data[i].child[3]){
							goods6_html +="<dl><dt><a href = '#'><img width = '150' height = '150' src = '" + data[i].child[3][l].img + "'/></a></dt><dd class = 'good-name'><a href = '#'>" + data[i].child[3][l].name +"</a></dd><dd class = 'good-price'>¥<span class = 'good-price-cur'>" + data[i].child[3][l].price + "<span style='font-size:18px;'>00</span></span><span class = 'zhekou'>" +data[i].child[3][l].sale + "</span></dd></dl>"
						}
						goods6_html = "<div class = 'salebox-4'>"+goods6_html+"</div>"
					}
				child_html += goods4_html+goods_html+goods5_html+goods6_html;
				}
				}else if(i == 1){//第二个盒子
					for(var m = 0; m < data[i].child.length; m++){
						var dl = m + 1;
						if(m % 2 == 0 && m != 4){//1、3块
								if(m==0){//第一块
									dl1_html = "<dl class ='dl"+dl+"' ><dt><a href = '#'><img width = '228' height = '300' src = '" + data[i].child[m].img + "'/></a></dt><dd class = 'pro-name'><a href = '#'>" + data[i].child[m].name +"</a></dd><dd class = 'whotui'><a href = '#'>" + data[i].child[m].title + "</a></dd><dd class = 'neir'><a href = '#'>" +data[i].child[m].des + "</a></dd></dl>"
								}else{//第三块
									dl3_html = "<dl class ='dl"+dl+"' ><dt><a href = '#'><img width = '228' height = '300' src = '" + data[i].child[m].img + "'/></a></dt><dd class = 'pro-name'><a href = '#'>" + data[i].child[m].name +"</a></dd><dd class = 'whotui'><a href = '#'>" + data[i].child[m].title + "</a></dd><dd class = 'neir'><a href = '#'>" +data[i].child[m].des + "</a></dd></dl>"}
							
							
						}else if(m == 4){//第5块
							
								dl5_html = "<dl class = 'lastdl'><dt><a href = '#'><img width = '228' height = '300' src = '" + data[i].child[m].img + "'/></a></dt><dd class = 'pro-name'><a href = '#'>" + data[i].child[m].name +"</a></dd><dd class = 'whotui'><a href = '#'>" + data[i].child[m].title + "</a></dd><dd class = 'neir'><a href = '#'>" +data[i].child[m].des + "</a></dd></dl>"
						}else{//2、4块
						if(m==1){//第二块
							dl2_html = "<dl class ='dl"+dl+"' ><dd class = 'pro-name'><a href = '#'>" + data[i].child[m].name +"</a></dd><dd class = 'whotui'><a href = '#'>" + data[i].child[m].title + "</a></dd><dd class = 'neir'><a href = '#'>" +data[i].child[m].des + "</a></dd><dt><a href = '#'><img width = '228' height = '300' src = '" + data[i].child[m].img + "'/></a></dt></dl>";
						}else{//第四块
							dl4_html = "<dl class ='dl"+dl+"' ><dd class = 'pro-name'><a href = '#'>" + data[i].child[m].name +"</a></dd><dd class = 'whotui'><a href = '#'>" + data[i].child[m].title + "</a></dd><dd class = 'neir'><a href = '#'>" +data[i].child[m].des + "</a></dd><dt><a href = '#'><img width = '228' height = '300' src = '" + data[i].child[m].img + "'/></a></dt></dl>";
						}
							
						}
						child_html =dl1_html+dl2_html+dl3_html+dl4_html+dl5_html;
					}
				}else{//第四个盒子
					for(var n in data[i].child){
						if(n==4){//盒子中最后一块
							dl6_html ="<dl class = 'lastdl'><dt><a href = '#'><img  width= '180' height='180' src = '" + data[i].child[n].img + "'/></a></dt><dd class = 'pro-name'><a href = '#'>" + data[i].child[n].name +"</a></dd><dd class = 'neir firstneir'><span>"+ data[i].child[n].title1 +"</span>" + data[i].child[n].des1 + "</dd><dd class = 'neir'><span>" +data[i].child[n].title2 +"</span>" + data[i].child[n].des2 + "</dd><dd class = 'neir'><span>" +data[i].child[n].title3 +"</span>" + data[i].child[n].des3 + "</dd></dl>"
						}else{//其他块
							dl7_html +="<dl><dt><a href = '#'><img width = '180' height= '180' src = '" + data[i].child[n].img + "'/></a></dt><dd class = 'pro-name'><a href = '#'>" + data[i].child[n].name +"</a></dd><dd class = 'neir firstneir'><span>"+ data[i].child[n].title1 +"</span>" + data[i].child[n].des1 + "</dd><dd class = 'neir'><span>" +data[i].child[n].title2 +"</span>" + data[i].child[n].des2 + "</dd><dd class = 'neir'><span>" +data[i].child[n].title3 +"</span>" + data[i].child[n].des3 + "</dd></dl>"
						}
						
					}
					child_html = dl7_html+ dl6_html;
				}
				var k = i + 1;
				li_html += "<li class = 'tabli"+k+"'>"+data[i].title+"</li>";
				con_html += "<div id = 'con_two_"+ k+"' class = 'con-two'>" + child_html+"</div>";
			}
		$(".saletabs ul").html(li_html);
		$(".salebox").html(con_html);
		$(".sale .saletabs li").mouseover(function(){
			var index = $(this).index();
			$(this).css("border-bottom","2px solid #0094ff").siblings().css("border-bottom","2px solid #d1d1d1")
			$(".sale .salebox .con-two").eq(index).css("display","block").siblings().css("display", "none");
		});
		}
})

//主体部分
$.ajax({
	url: "json/body.json",
	type: "get",
	success: function(data){
		var main_html = '';
		var main_title = '';
		var brand_html = '';
		var title_r = '';
		for(var i =0; i < data.length; i++){
			
			var brand1_html = '';
			var brand2_html = '';
			var child_html = '';
			var sclt1_html = ''; 
			var sclt2_html = ''; 
			var sclt3_html = ''; 
			var sclt4_html = '';
			var minbrand_html = '';
			var men_html = '';
			var menbrand_html = '';
			if(i == 0){ //品牌活动
				for(var o = 0; o < data[i].content.length; o++){
					if(o == 4){
						brand1_html = "<div class = 'brand-item last'><a href = '#'><img width = '236' height = '300' src = '"+ data[i].content[o].img +"'/><a></div>"
					}else{
						brand2_html += "<div class = 'brand-item'><a href = '#'><img width = '236' height = '300' src = '"+ data[i].content[o].img +"'/><a></div>"
					}
					
				}
				var tit_html = '';
				for(var p in data[i].title_r){
				tit_html += "<dd><a href = '#'>" + data[i].title_r[p] + "</a></dd>"
				}
				brand_html = "<div class = 'brand-tit'><div class = 'brand-tit-l'>"+data[0].title_l+ "</div><div class = 'brand-tit-r'><dl>" + tit_html + "</div></div><div class = 'brand-main'>"+brand1_html+brand2_html+"</div>";
			}else  if(i < 3 && i !=0){//护肤和彩妆
			 	minbrand_html += "<div class = 'sc-banner'><a href = '#'><img height = '480' width = '268' src = '"+ data[i].content[0].banner+"'/></a></div>";
			 	for(var j = 0; j < data[i].content[0].child.length; j++){
			 		if(j < 2){
			 			if(j == 0){
			 				sclt1_html = "<dl class = 'sc-item firstdl'><dt><a href ='#'><img width = '180' height = '180' src = '"+data[i].content[0].child[j].img +"'/></a></dt><dd class = 'good-name'><a href = '#'>" + data[i].content[0].child[j].name + "</a><br><a href = '#'>" + data[i].content[0].child[j].title + "</a></dd><dd class = 'good-exce'><a href = '#'>" + data[i].content[0].child[j].des + "</a></dd><dd class = 'good-price'>¥<span class = 'good-price-cur'>" + data[i].content[0].child[j].price + "<span style = 'font-size: 18px'>00</span></span><span class = 'zhekou'>"+ data[i].content[0].child[j].sale + "</span></dd></dl>"
			 			}else{
			 				sclt2_html = "<dl class = 'sc-item'><dt><a href ='#'><img width = '180' height = '180' src = '"+data[i].content[0].child[j].img +"'/></a></dt><dd class = 'good-name'><a href = '#'>" + data[i].content[0].child[j].name + "</a><br><a href = '#'>" + data[i].content[0].child[j].title + "</a></dd><dd class = 'good-exce'><a href = '#'>" + data[i].content[0].child[j].des + "</a></dd><dd class = 'good-price'>¥<span class = 'good-price-cur'>" + data[i].content[0].child[j].price + "<span style = 'font-size: 18px'>00</span></span><span class = 'zhekou'>"+ data[i].content[0].child[j].sale + "</span></dd></dl>"
			 			}
			 		}else{
			 			if(j == 4){
			 				sclt4_html = "<dl class = 'sc-item-d lastdl'><dd class = 'good-name'><a href = '#'>" + data[i].content[0].child[j].name + "</a></dd><dd class = 'good-exce'><a href = '#'>" + data[i].content[0].child[j].des + "</a></dd><dd class = 'good-price'>¥<span class = 'good-price-cur'>" + data[i].content[0].child[j].price + "<span style = 'font-size: 18px'>00</span></span><span class = 'zhekou'>"+ data[i].content[0].child[j].sale + "</span></dd><dt><a href = '#'><img width = '180' height = '180' src = '"+data[i].content[0].child[j].img +"'/></a></dt></dl>";
			 			}else{
			 				sclt3_html += "<dl class = 'sc-item-d'><dd class = 'good-name'><a href = '#'>" + data[i].content[0].child[j].name + "</a></dd><dd class = 'good-exce'><a href = '#'>" + data[i].content[0].child[j].des + "</a></dd><dd class = 'good-price'>¥<span class = 'good-price-cur'>" + data[i].content[0].child[j].price + "<span style = 'font-size: 18px'>00</span></span><span class = 'zhekou'>"+ data[i].content[0].child[j].sale + "</span></dd><dt><a href = '#'><img width = '180' height = '180' src = '"+data[i].content[0].child[j].img +"'/></a></dt></dl>";
			 			}
			 		}
			 		sc_html = "<div class = 'sc-list'>"+sclt1_html + sclt2_html + sclt3_html + sclt4_html +"</div>";
			 	}
			 	child_html = minbrand_html +sc_html;
			 }else if(i == 3){//香水
			 	var perfume1_html = '';
			 	var perfume2_html = '';
			 	var perfume21_html = '';
			 	var perfume22_html = '';
			 	var perfume23_html = '';
			 	var perfume3_html = '';
			 	for(var k = 0; k < data[i].content.length; k++){
			 		if(k == 0){
			 			perfume1_html = "<div class = 'perfume-img1'><a href = ''><img height = '480' width = '326' src = '"+data[i].content[k].img1+"'/></a></div>";
			 		}else if(k == 4){
			 			perfume3_html = "<div class = 'perfume-img5'><a href = ''><img height = '480' width = '275' src = '"+data[i].content[k].img5+"'/></a></div>";
			 		}else{
			 			if(k == 1){
			 				perfume21_html = "<div class = 'perfume-img2'><a href = ''><img height = '276' width = '355' src = '"+data[i].content[k].img2+"'/></a></div>";
			 			}else if(k ==2){
			 				perfume22_html = "<div class = 'perfume-img3'><a href = ''><img height = '203' width = '177' src = '"+data[i].content[k].img3+"'/></a></div>";
			 			}else{
			 				perfume23_html = "<div class = 'perfume-img4'><a href = ''><img height = '203' width = '177' src = '"+data[i].content[k].img4+"'/></a></div>";
			 			}
			 			perfume2_html = "<div class = 'perfumegroup'>"+perfume21_html + perfume22_html + perfume23_html+"</div>";
			 		}
			 		perfume_html = perfume1_html + perfume2_html + perfume3_html;
			 	}
			 	child_html = perfume_html;
			 }else{//男士和美体护发
			 	menbrand_html += "<div class = 'men-banner'><a href = '#'><img height = '480' width = '344' src = '"+ data[i].content[0].banner+"'/></a></div>";
			 	
			 		var menlist_html = '';
			 		var menlist1_html = '';
			 		var menlist2_html = '';
			 		var menlist3_html = '';
			 		var menlist4_html = '';
			 		var menlist5_html = '';
			 		for(var l in data[i].content[0].child){
			 			if(l < 2){
			 				menlist1_html += "<dl class = 'men-item'><dt><a href = '#'><img width = '180' height = '180' src = '" + data[i].content[0].child[l].img + "'/></a></dt><dd class = 'good-name'><a href = ''>" + data[i].content[0].child[l].name +"</a></dd><dd class = 'good-price'>" + data[i].content[0].child[l].price + "<span class = 'zhekou'>" + data[i].content[0].child[l].sale +"</span></dd></dl>";
			 			}else if(l == 2){
			 				menlist2_html = "<dl class = 'men-item lastdl'><dt><a href = '#'><img width = '180' height = '180' src = '" + data[i].content[0].child[l].img + "'/></a></dt><dd class = 'good-name'><a href = ''>" + data[i].content[0].child[l].name +"</a></dd><dd class = 'good-price'>" + data[i].content[0].child[l].price + "<span class = 'zhekou'>" + data[i].content[0].child[l].sale +"</span></dd></dl>";
			 			}else{
			 				if(l == 5){
			 					menlist4_html  = "<dl class = 'men-item bottomdl lastdl'><dt><a href = '#'><img width = '180' height = '180' src = '" + data[i].content[0].child[l].img + "'/></a></dt><dd class = 'good-name'><a href = ''>" + data[i].content[0].child[l].name +"</a></dd><dd class = 'good-price'>" + data[i].content[0].child[l].price + "<span class = 'zhekou'>" + data[i].content[0].child[l].sale +"</span></dd></dl>";
			 				}else{
			 					menlist3_html += "<dl class = 'men-item bottomdl'><dt><a href = '#'><img width = '180' height = '180' src = '" + data[i].content[0].child[l].img + "'/></a></dt><dd class = 'good-name'><a href = ''>" + data[i].content[0].child[l].name +"</a></dd><dd class = 'good-price'>" + data[i].content[0].child[l].price + "<span class = 'zhekou'>" + data[i].content[0].child[l].sale +"</span></dd></dl>";
			 				}
			 			 menlist5_html = menlist3_html + menlist4_html;
			 			}
 			 				menlist_html = menlist1_html + menlist2_html + menlist5_html;
			 		}
			 		 if(i == 4){
				child_html = "<div class = 'men-list'>"+menlist_html+"</div>" + menbrand_html;	
			}else{
				child_html = menbrand_html +"<div class = 'men-list'>"+menlist_html+"</div>";	
			 	}
			child_html  = child_html;
			 }
			 var accorli_html = '';
			 var accorli1_html = '';
			 var accorli2_html = '';
			 if(i>0){
			 	for(var m = 0; m < data[i].accor[0].child.length; m++){
			 	var a = m + 1;
			 	if(m == 0){
			 		accorli1_html = "<li class = 'hover'><span class = 'toplist'><span class = 'num'>" + a +"</span>" + data[i].accor[0].child[m].title + "</span><div><dl><dt><a href = '#'><img width = '160' height = '160'  src = '"+ data[i].accor[0].child[m].img+"'/></a></dt><dd class = 'top-name'><a href = '#'>" +data[i].accor[0].child[m].title + "</a></dd><dd class = 'top-price'>" + data[i].accor[0].child[m].price +"</dd></dl></div></li>"
			 	}else{
			 		accorli2_html += "<li class = ''><span class = 'toplist'><span class = 'num'>" + a +"</span>" + data[i].accor[0].child[m].title + "</span><div><dl><dt><a href = '#'><img width = '160' height = '160'  src = '"+ data[i].accor[0].child[m].img+"'/></a></dt><dd class = 'top-name'><a href = '#'>" +data[i].accor[0].child[m].title + "</a></dd><dd class = 'top-price'>" + data[i].accor[0].child[m].price +"</dd></dl></div></li>"
			 	}
			 	accorli_html = accorli1_html + accorli2_html ;
			 }
			 	var brandli_html = '';
			 for(var n in data[i].minbrand){
			 	brandli_html += "<a href = '#'><img width = '75' height = '36' src = '"+ data[i].minbrand[n].img + "'/></a>"
			 }
			 main_title = "<img src = '" + data[i].title_l + "'/>";
			 var tit_html = '';
			for(var p in data[i].title_r){
				tit_html += "<dd><a href = '#'>" + data[i].title_r[p] + "</a></dd>"
			}
			 
			 
			 var b = i + 1;
			main_html += "<div class = 'brand-tit sc-tit'><div class = 'brand-tit-l'>"+main_title+ "</div><div class = 'brand-tit-r'><dl>" + tit_html + "<dl></div></div><div class = 'sc-main'>"+child_html+"<div class = 'sc-top'><ul id = 'toplist-"+b+"' class = 'list_show'><h2>"+data[i].accor[0].title + "</h2>" + accorli_html +"</ul></div><div class = 'sc-brand'>"  +brandli_html+"</div></div>";
			 }  
			 

		}
		
		$("#brand").html(brand_html);
		$("#main-box").html(main_html);
		$(".list_show li").mouseover(function(){
			$(this).attr("class","hover").siblings().attr("class","");
		});
	}
})
//美容资讯左边
$.ajax({
	type:"get",
	url:"json/news.json",
	success:function(data){
		var newsl_html = '';
		var newsr_html = '';
		for(var i = 0; i < data.length; i++){
			if(i == 0){
				newsl_html = "<dl><dt><a href = '#'><img width = '250' height = '330' src = '" + data[i].img +"'/></a></dt><dd class = 'tltle'>" + data[i].title + "</dd><dd class ='neir'>" + data[i].des +"<a href = '#'>" +data[i].more +"</a></dd></dl>"
			}else{
				newsr_html += "<dl><dt><a href = '#'><img width = '154' height = '118' src = '" + data[i].img +"'/></a></dt><dd class = 'tltle'><span>"+data[i].name+"</span>" + data[i].title + "</dd><dd class ='neir'>" + data[i].des +"<a href = '#'>" +data[i].more +"</a></dd></dl>"
			}
		}
		$(".info-l").html(newsl_html);
		$(".info-r").html(newsr_html);
	}
});
//美容资讯右半部分
$.ajax({
	type:"get",
	url:"json/rec.json",
	success: function(data){
		var rec_html = '';
		
		
		for(var i = 0 ;i < data.length; i++){
			var rec1_html = '';
			var rec2_html = '';
			if(i == 0){
				rec1_html = "<dl class = 'firstdl'><dt><a href = '#'><img width = '80' height = '80' src = '"+ data[i].img +"'/></a></dt><dd class = 'title'><a href = '#'>" +data[i].name + "</a></dd><dd class = 'neir'><a href = '#'><span>编辑推荐：</span>" + data[i].des + "</a></dd></dl>"; 
			}else{
				rec2_html += "<dl><dt><a href = '#'><img width = '80' height = '80' src = '"+ data[i].img +"'/></a></dt><dd class = 'title'><a href = '#'>" +data[i].name + "</a></dd><dd class = 'neir'><a href = '#'><span>编辑推荐：</span>" + data[i].des + "</a></dd></dl>"; 
			}
			rec_html += rec1_html + rec2_html;
		}
		$(".rec-box").html(rec_html);
	}
});
$("#footer_info").load("foot.html");
})
