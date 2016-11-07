$(function(){
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
		
