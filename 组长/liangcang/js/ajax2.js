//获取内容商品图片以及信息
var oIg=document.getElementsByClassName('exe');
	//console.log(oImg)
	var ar=[];
	var ob={};
	for(var i=0;i<oIg.length;i++){
//		console.log(oImg[i]);
		ar[i]=oIg[i].getElementsByTagName('img')[0];
//		console.log(ar[i])
		for(var Key in ob){
			Key=i;
			ob[Key]=oImg[i];
		}
//		console.log(ar[i].src)
//		console.log(ar);
//		console.log(ar[0])
	}
//	for(var j=0;j<arr.length;j++){
//		arr[j].src=''
//	}
	window.onload=function(){
		var xhr=new XMLHttpRequest();
		xhr.onreadystatechange=function(){
	//		console.log(1);
	
			if(xhr.readyState==4&&xhr.status==200){
//				console.log('进来了');
				var str=xhr.responseText;
				var obj=JSON.parse(str);
//				console.log(obj);
					var arr=[];
					arr=obj.data;
					console.log(arr)
					for(var k=0;k<arr.length;k++){
//						console.log(ar.length)
//						console.log(k)
//						console.log(arr[k].goods_thumb)
//						console.log(ar)
						ar[k].src=arr[k].goods_thumb;
//						console.log(ar[k].src)
					}
					
	//			for(var i=0;i<){
	//				obj.data[i]
	//			}
	//			
			}
		}
	xhr.open("GET","http://csit.top/api_goods.php",true);
	xhr.send();
	} 