//导航二级菜单样式js
	// cloud zack sephiroth 为三个lil从上而下，打扰了
//	var oL=document.querySelectorAll('.lil');console.log(oL);
	var oC=document.getElementById('cloud');//console.log(oC);
	var oZk=document.getElementById('zack');//console.log(oZ);
	//↑这里oZ已经被占用了，强行改成了oZB, 打扰了
	var oS=document.getElementById('sephiroth');//console.log(oS);
	
	oC.onmouseover=function(){
		//console.log(oZ);console.log(oS);
		oZk.style.top=120+'px';
		oS.style.top=150+'px';
	}
	oC.onmouseout=function(){
		oZk.style.top=0+'px';
		oS.style.top=0+'px';
	}
	
	
	oZk.onmouseover=function(){
		oS.style.top=120+'px';
	}
	oZk.onmouseout=function(){
		oS.style.top=0+'px';
	}
	
//	oL.onmouseover=function(){
//		oS.style.top=160+'px';
//	}
//	oZ.onmouseout=function(){
//		oS.style.top=0+'px';
//	}

//吸顶功
	var oHeader=document.getElementsByClassName('header')[0];//console.log(oHeader)
	window.onscroll=function(){
		var t=document.body.scrollTop||document.documentElement.scrollTop;
		if (t>56) {
			oHeader.style.position="fixed";
			oHeader.style.top=-56+'px';
			oHeader.style.left=0+'px'
		}else{
			oHeader.style.position="";
			oHeader.style.top=0+'px';
			oHeader.style.left=0+'px'
			
		}
		}