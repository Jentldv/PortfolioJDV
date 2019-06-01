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

let loaderWrapper = document.getElementById('loader-wrapper');
let loader = document.getElementById('loader');
let i = 0;

let verwijderLoadingScreen = function(){
	while (i < 1) {
		loaderWrapper.classList.add('loaded');
		loader.classList.add('loaded');
		i++;
		console.log('Loader is uit beeld!');
	}
}

setInterval(verwijderLoadingScreen, 1000);



let verwijderElementen = function(){
	while (i < 2) {
		loader.parentNode.removeChild(loader);
		loaderWrapper.parentNode.removeChild(loaderWrapper);
		console.log('Loader is verwijderd!');
		i++;
	}
}

setInterval(verwijderElementen, 2000);
