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
