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
//表单验证
	var oInp = document.getElementsByClassName("reg-input")[0].getElementsByTagName("input");
	var oImg = document.getElementsByClassName("reg-input")[0].getElementsByTagName("img");
	var oP = document.getElementsByClassName("reg-input")[0].getElementsByTagName("p");
	var oSpan = document.getElementsByClassName("reg-input")[0].getElementsByTagName("span");
	var oSp = document.getElementsByClassName("logi-input")[0].getElementsByClassName("number1")[0];
	var judn = 0;
	var judp = 0;
	var jude = 0;
	var judy = 0;
	oInp[0].onfocus = function(){
		oP[0].innerHTML = "3~30位，由汉字，数字，字母，减号，下划线，点及“@”组成";
		oP[0].style.color = "#666";
	};
	oInp[0].onblur = function(){
		var re1 = /(\w|[\u4e00-\u9fa5]|@|-|.){3,30}/g;
		var val = oInp[0].value;
		if(re1.test(val) == false){
			oP[0].style.color = "red";
			if(val.length < 3){
				oP[0].innerHTML = "用户名长度在3~30个字符（汉字占两个字符）";
				oImg[0].style.display = "none";
			}else{
				oP[0].innerHTML = "用户名只能由汉字 数字 字母 减号 下划线 点 @ 组成";
				oImg[0].style.display = "none";
			}
		}else{
			oP[0].innerHTML = "";
			oImg[0].style.display = "inline-block";
			judn = 1;
		};
	};
	oInp[1].onfocus = function(){
		oP[1].style.color = "#666";
		oP[1].innerHTML = "6~16位，建议使用数字，字母，特殊符号组合";
	};
	oInp[1].onblur = function(){
		var re1 = /.{6,16}/g;
		var val = oInp[1].value;
		if(re1.test(val) == false){
			oP[1].style.color = "red";
			oP[1].innerHTML = "密码长度应该为6~16个字符之间";
			oImg[1].style.display = "none";
		}else{
			oP[1].innerHTML = "";
			oImg[1].style.display = "inline-block";
			judp = 1;
		}
	}
	oInp[2].onblur = function(){
		var val1 = oInp[1].value;
		var val2 = oInp[2].value;
		if(val1 == val2 && val2 != ""){
			oImg[2].style.display = "inline-block";
			oP[2].innerHTML = "";
			judp = 1;
		}else if(val1 == val2 && val2 == ""){
			oP[2].innerHTML = "";
		}else{
			oP[2].style.color = "red";
			oP[2].innerHTML = "两次密码不一致，请您重新输入";
			oImg[2].style.display = "none";
		}
	};
	oInp[3].onblur = function(){
		var val = oInp[3].value;
		var rg = /^\w+@\w+(\.\w+)+$/g;
		if(rg.test(val) == false){
			oP[3].style.color = "red";
			oP[3].innerHTML = "您输入的邮箱格式不对";
			oImg[3].style.display = "none";
		}else{
			oImg[3].style.display = "inline-block";
			oP[3].innerHTML = "";
			jude = 1;
		}
	};
//验证码
	//随机颜色
	function randomColor(){
	var color = "rgba(" + Math.round(Math.random() * 255) + "," + Math.round(Math.random() * 255)
				+ "," + Math.round(Math.random() * 255) + ",1)";
	return color;
    }
	for(var i=0 ;i < 4;i++){
			oSpan[0].innerHTML  +=  Math.floor(Math.random()*9 + 1);
			oSpan[0].style.color = randomColor();
		};
	for(var i=0 ;i < 4;i++){
			oSp.innerHTML  +=  Math.floor(Math.random()*9 + 1);
			oSp.style.color = randomColor();
	};
	
	oInp[4].onblur = function(){
			var val = oInp[4].value;
			var rg = /\d{4}/g;
			if(rg.test(val) == false || oInp[4].value != oSpan[0].innerHTML){
				
				oP[4].style.color = "red";
				oP[4].innerText = "请输入正确的验证码";
				oImg[4].style.display = "none";
			}else{
				judy = 1;
				oImg[4].style.display = "inline-block";
				oP[4].innerText = "";
			};
		};
	
	
	$(".regbtn img").click(function(){
		if(judn == 1 && judp == 1 && jude == 1 &&judy == 1){ 
			var name = oInp[0].value;
		    var pass = oInp[1].value;
		    var Email = oInp[3].value;
		  	 
		    setCookie("name",name, setCookieDate(20));
		    setCookie("pass",pass, setCookieDate(20));
		    setCookie("Email",Email, setCookieDate(20));
		    alert("注册成功");
		};
		
		});
	$(".btn img").click(function(){
		
			var name = $(".logi-input .name").val();
			var pass = $(".logi-input .pass").val();
			var num = $(".logi-input .number1").html();
			var num1 = $(".logi-input .number").val();
			if(num1 == ""){
				$(".logi-input p").eq(2).css("color","red");
				$(".logi-input p").eq(2).html("请输入验证码") ;
				
			}else if(num != num1){
				$(".logi-input p").eq(2).css("color","red");
				$(".logi-input p").eq(2).html("您输入的验证码不对");
				
			}else if(name == getCookie("name")&&pass == getCookie("pass")&&num == num1){
				setCookie("judge",1);
				 alert("登录成功");
				window.location.href ="index.html";
			}else{
				$(".logi-input p").eq(1).css("color","red");
				$(".logi-input p").eq(1).html("您输入的密码或者账号不正确");
			}
		});
	
	
	
	

	
})