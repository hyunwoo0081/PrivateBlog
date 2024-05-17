document.querySelector("#first_layout").style.height = window.innerHeight+"px";
document.querySelector("canvas").style.height = window.innerHeight+"px";
const headerDom = document.querySelector("#main_contents_layout");
const navButton = document.querySelector(".nav_button");
const navLinks = document.querySelector("header > .header_nav_menu > ul");

var isHeaderFixed = false;

document.addEventListener("scroll", () => {
	var currentScrollValue = document.documentElement.scrollTop;
	
	if(isHeaderFixed === true && currentScrollValue <= 100){
		isHeaderFixed = false;
		headerDom.classList.replace("highlighted_header", "normal_header");
	}
	else if(isHeaderFixed === false && currentScrollValue >= 100){
		isHeaderFixed = true;
    headerDom.classList.replace("normal_header", "highlighted_header");		
	}
});

navButton.addEventListener("click", () => {
	navLinks.classList.toggle("nav_open");
});