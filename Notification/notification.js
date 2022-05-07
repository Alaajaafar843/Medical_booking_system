var box  = document.getElementById('box');
var down = false;


function toggleNotifi(){

	if (down) {
		box.style.height  = '0px';
		box.style.opacity = 0;
		down = false;
    document.getElementById("box").classList.remove("b-notf");
	}else {
		box.style.height  = '510px';
		box.style.opacity = 1;
		down = true;
     document.getElementById("box").classList.add("b-notf");

	}
 


}

document.getElementById("open-popup-btn-1").addEventListener("click",function(){
    document.getElementById("popup-1").classList.add("active");
  });
  document.getElementById("open-popup-btn-2").addEventListener("click",function(){
    document.getElementById("popup-2").classList.add("active");
  });
  document.getElementById("open-popup-btn-3").addEventListener("click",function(){
    document.getElementById("popup-3").classList.add("active");
  });
 
  document.getElementById("dismiss-popup-btn-1").addEventListener("click",function(){
    document.getElementById("popup-1").classList.remove("active");
  });
  document.getElementById("dismiss-popup-btn-2").addEventListener("click",function(){
    document.getElementById("popup-1").classList.remove("active");
  });
  document.getElementById("x").addEventListener("click",function(){
    document.getElementById("popup-1").classList.remove("active");
  });


  document.getElementById("dismiss-popup-btn-1-2").addEventListener("click",function(){
    document.getElementById("popup-2").classList.remove("active");
  });
  document.getElementById("dismiss-popup-btn-2-2").addEventListener("click",function(){
    document.getElementById("popup-2").classList.remove("active");
  });
  document.getElementById("xx").addEventListener("click",function(){
    document.getElementById("popup-2").classList.remove("active");
  });


 
  document.getElementById("dismiss-popup-btn-1-3").addEventListener("click",function(){
    document.getElementById("popup-3").classList.remove("active");
  });
  document.getElementById("xxx").addEventListener("click",function(){
    document.getElementById("popup-3").classList.remove("active");
  });




  document.getElementById("rm-1").addEventListener("click",function(){
    document.getElementById("1").remove();
  });

  document.getElementById("rm-2").addEventListener("click",function(){
    document.getElementById("2").remove();
  });

  document.getElementById("rm-3").addEventListener("click",function(){
    document.getElementById("3").remove();
  });