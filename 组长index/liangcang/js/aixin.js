//爱心图点击效果、获取商品信息 、反馈给购物车页面
 var oFav=document.querySelectorAll('.aright');console.log(oFav[0].style.background);
 var j=0;
for(i=0;i<oFav.length;i++){
	(function(i){
		oFav[i].onclick=function(){
			j++;
			if(j%2!=0){
				oFav[i].style.background="url(img/redlove.png)no-repeat 30px 10px"
			}else{
				oFav[i].style.background=""
			}
//ajax获取商品信息
			var strUsername = oUsername.value
			var strPassword = oPassword.value

			var json = {
				"username": strUsername,
				password: strPassword,
				status: "login"
			}
			 //调用函数
			loginOrRegister(json, function(obj) {
				if (obj.code == 0) {
					alert("登陆成功")
					
					// 页面跳转
					location.href = "https://hzypzy.github.io/liangcang/index.html"
					
					
					
				} else {
					alert(obj.message)
				}
			})
				}
			})(i);
}



//		for(var bl=0;bl<oFav.length;bl++){
//			(function(i){
//			oFav[i].style.background="url(img/redlove.png)no-repeat 30px 10px"
//		})(i);
//	}