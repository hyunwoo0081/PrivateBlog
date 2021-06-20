const headerDom = document.querySelector("header");
var isHeaderFixed = false;

document.addEventListener("scroll", () => {
	var scrollTop = document.documentElement.scrollTop;
	if(isHeaderFixed === false && scrollTop >= 100){
		isHeaderFixed = true;
		headerDom.classList.replace("non_fixed_header", "fixed_header");
	}
	else if(isHeaderFixed === true && scrollTop < 100){
		isHeaderFixed = false;
		headerDom.classList.replace("fixed_header", "non_fixed_header");
	}
});