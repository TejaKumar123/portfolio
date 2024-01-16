
function mode_change(){
	let ele=document.getElementById("mode");
	let rot=document.querySelector(":root");
	if(ele.style.left=="20px"){
		ele.style.left="-2px";
		ele.children[0].innerHTML="light_mode";
		rot.style.setProperty("--bgcolor","white");
		rot.style.setProperty("--txtcolor","black");
		rot.style.setProperty("--modecolor","yellow");
	}
	else{
		ele.style.left="20px";
		ele.children[0].innerHTML="dark_mode";
		rot.style.setProperty("--bgcolor","black");
		rot.style.setProperty("--txtcolor","rgba(255,255,255,0.9)");
		rot.style.setProperty("--modecolor","black");
	}
}

function scrol_to(id){
	let y=document.getElementById(id).offsetTop;
	window.scrollTo(0,y);
}

function scrol_up(){
	if(window.pageYOffset>100){
		document.getElementById("upside").style.display="flex";
	}
	else{
		document.getElementById("upside").style.display="none";
	}
}
