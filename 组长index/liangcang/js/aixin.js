//爱心图点击效果、获取商品信息 、反馈给购物车页面
 var oFav=document.querySelectorAll('.aright');console.log(oFav)
for(var bl=0;bl<oFav.length;bl++){
		oFav[bl].onclick=(function(){
			oFav[bl].style.background="url(../img/redlove.png)no-repeat 30px 10px"
	})(bl)
}
	