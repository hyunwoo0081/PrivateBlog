document.querySelector("#first_layout").style.height = window.innerHeight+"px";
document.querySelector("canvas").style.height = window.innerHeight+"px";
const headerDom = document.querySelector("#main_contents_layout");

var isHeaderFixed = false;

document.addEventListener("scroll", () => {
	var currentScrollValue = document.documentElement.scrollTop;
	
	if(isHeaderFixed === true && currentScrollValue <= 100){
		isHeaderFixed = false;
		headerDom.classList.replace("fixed_header", "non_fixed_header");
	}
	else if(isHeaderFixed === false && currentScrollValue >= 100){
		isHeaderFixed = true;
		headerDom.classList.replace("non_fixed_header", "fixed_header");
	}
})