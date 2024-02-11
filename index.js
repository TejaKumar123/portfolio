

window.addEventListener("load",()=>{
	if(Object.keys(localStorage).indexOf("portfolio123theme")==-1){
		localStorage.setItem("portfolio123theme","light")
	}
	else{
		if(localStorage.getItem("portfolio123theme")=="dark"){
			localStorage.setItem("portfolio123theme","light");
			document.getElementById("header").children[2].click();
		}
	}
})


function mode_change(){
	let ele=document.getElementById("mode");
	let rot=document.querySelector(":root");
	let theme=localStorage.getItem("portfolio123theme");
	if(theme=="dark"){
		ele.style.left="-2px";
		ele.children[0].innerHTML="light_mode";
		rot.style.setProperty("--bgcolor","white");
		rot.style.setProperty("--txtcolor","black");
		rot.style.setProperty("--modecolor","yellow");
		localStorage.setItem("portfolio123theme","light");
	}
	else{
		ele.style.left="20px";
		ele.children[0].innerHTML="dark_mode";
		rot.style.setProperty("--bgcolor","black");
		rot.style.setProperty("--txtcolor","rgba(255,255,255,0.9)");
		rot.style.setProperty("--modecolor","black");
		localStorage.setItem("portfolio123theme","dark");
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

var name_text="Teja Kumar Narayana"
var nfl=0;
var nele=document.getElementById("nameintro")

setTimeout(nintro,100)

function nintro(){
	if(nfl<name_text.length){
		nele.innerHTML+=name_text[nfl];
		nfl++;
		setTimeout(nintro,100)
	}
	
}

function scrol(event,num){
	let ele=event.target;
	let parent=event.target.parentElement;
	let clientwidth=parent.children[0].clientWidth;
	if(!num){
		parent.children[0].scrollLeft-=clientwidth;	
	}
	else{
		parent.children[0].scrollLeft+=clientwidth;
	}
}

function iconscrol(event){
	let ele=event.target;
	let parent=event.target.parentElement;
	if(ele.scrollLeft==0){
		parent.children[1].style.display="none";
	}
	else if(ele.scrollLeft+ele.offsetWidth>=ele.children[0].clientWidth){
		parent.children[2].style.display="none";
	}
	else{
		parent.children[1].style.display="flex";
		parent.children[2].style.display="flex";
	}
}






