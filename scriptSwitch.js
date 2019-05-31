let blueLink = document.querySelectorAll("footer nav a")[1];
let redLink = document.querySelectorAll("footer nav a")[0];
let mijnCSS = document.querySelector("#switchcss");

function switchToRed() {
	mijnCSS.setAttribute("href","stijl-red.css");
}

function switchToBlue() {
	mijnCSS.setAttribute("href","stijl-blue.css");
}

redLink.addEventListener("click",switchToRed);
blueLink.addEventListener("click",switchToBlue);
