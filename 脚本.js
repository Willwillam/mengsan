
// JavaScript Document
window.onload=function(){
    var nav=document.getElementById('nav');
    var pic=document.getElementById('pic');
    var div=document.getElementById('div');
    var list=document.getElementById('list');
    var img=document.getElementById('div-pull');
    var hover_img=document.getElementById("hover-img");
   	var ext_content=document.getElementsByClassName("ext-content");
   	var left_list=document.getElementsByClassName("left-list");
 // 头部导航内容下拉函数调用   
	list.onmouseenter=function(){
    	imgDown(img,300,10);
    	}
   
    img.onmouseleave=function(){
        imgUp(img,0,10)
        }
// 头部导航图片下拉
    pic.onmouseenter=function(){
        hover_img.style.display="block";
    }
    hover_img.onmouseleave=function(){
    	hover_img.style.display="none";
    }
// 头部导航内容下拉函数    
    function imgDown(obj,height,tim){
    	var timer=null;
    	var n=obj.offsetHeight;
    	clearInterval(timer);
    	timer=setInterval(function(){
    		if(n>=height){
    		clearInterval(timer);	
    		}
    	n+=10;
    	obj.style.height= n +"px";
    	},tim);
    }
    function imgUp(obj,height,tim){
    	var timer=null;
    	var n=200;
    	clearInterval(timer);
    	timer=setInterval(function(){
    		if(n<=0){
    			clearInterval(timer);
    		}
    		n-=10;
    		obj.style.height=n+"px";
    	},tim)
    }
// table切换函数实现
   function tab(){
   	var news_title=document.getElementsByClassName("news-title")[0].getElementsByTagName("li");
   	var news_content=document.getElementsByClassName("news-content");
   	for(var i=0;i< news_title.length;i++){
   		news_title[i].id=i;
   		news_title[i].onmouseenter=function(){
   			for(var j=0;j<news_content.length;j++){
   				news_content[j].style.display="none";
   				news_title[j].className="";	
   			}
   			news_content[this.id].style.display="block";
   			news_title[this.id].className="news-change";	
   	}
   }
}
   tab();

  // 轮播图实现
  function autoplay(){
  	var images=document.getElementsByClassName("images")[0].getElementsByTagName("li");
  	var btns_group=document.getElementsByClassName("btns-group")[0].getElementsByTagName("li");
  	var timer=null;
  	var index=0;
  	var i=0;
  	//设置定时器,使图片实现自动播放
  	//如果存在定时器,则进入之前清除
  		if(timer){
  		clearInterval(timer);
  		timer=null;
  	    }
  		timer=setInterval(play,2000); 
	    function play(){
  			    i++;
  			   if(i>=5){
  			   	i=0;
  			   }
  			change(i);   
	    }
	    //封装change函数
	    function change(index){
	    	for(var j=0;j<images.length;j++){
				images[j].style.display="none";
				btns_group[j].className="";
					}
		images[index].style.display="block";
		btns_group[index].className="btns_change";
		i=index;
	    } 
//鼠标进入取消定时器,并按照鼠标进入的函数执行
  		for(var k=0;k<btns_group.length;k++){
  			 btns_group[k].id=k;
  			 btns_group[k].onmouseenter=function(){
			  			 	clearInterval(timer);
			  			 	change(this.id);
			  			 }
  			 btns_group[k].onmouseleave=function(){
		  		timer=setInterval(play,2000)  
  			 }
  		}			
  	
  }
  autoplay();
//讲武堂函数实现
	function power(){
		var power_list=document.getElementsByClassName("power-list")[0].getElementsByTagName("li");
		var power_content=document.getElementsByClassName("power-content");
		for(var i=0;i<power_list.length;i++){
			power_list[i].id=i;
			power_list[i].onmouseenter=function(){
				for(var j=0;j<power_content.length;j++){
				power_list[j].className="";	
				power_content[j].style.display="none";
				}
				power_content[this.id].style.display="block";
				power_list[this.id].className="change-color";	
			}
		}

	}	
	power();
//英雄周榜
	function heros(){
		var heros_box=document.getElementsByClassName("heros-box")[0].getElementsByTagName("li");
		var words=document.getElementsByClassName("word");
		for(var i=0;i<heros_box.length;i++){
			heros_box[i].id=i;
			heros_box[i].onmouseenter=function(){
				words[this.id].childNodes[0].innerHTML="你好帅";
			}
		}
	}
	heros();

}
