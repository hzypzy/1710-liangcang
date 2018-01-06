//获取内容商品图片以及信息
	var xhr=new XMLHttpRequest();
	xhr.onreadystatechange=function(){
//		console.log(1);
		if(xhr.readystate==4&&xhr.status==200){
			var str=xhr.responseText;
			var obj=JSON.parse(str);
			console.log(obj);
				var arr=[];
				arr=obj.data;console.log(arr)
//			for(var i=0;i<){
//				obj.data[i]
//			}
//			
		}
	}
xhr.open("GET","http://csit.top/api_goods.php",true);
xhr.send();