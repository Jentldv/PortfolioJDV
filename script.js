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

let buttonTypo = document.querySelectorAll("main .buttons a")[1];
let buttonIllu = document.querySelectorAll("main .buttons a")[2];
let buttonFoto = document.querySelectorAll("main .buttons a")[3];
let buttonGif = document.querySelectorAll("main .buttons a")[4];
let buttonOef = document.querySelectorAll("main .buttons a")[5];
let buttonCol = document.querySelectorAll("main .buttons a")[6];
let buttonLogo = document.querySelectorAll("main .buttons a")[7];
let buttonAll = document.querySelectorAll("main .buttons a")[0];

let typo = document.getElementsByClassName('typografie');
let oef = document.getElementsByClassName('oefening');
let illu = document.getElementsByClassName('illustratie');
let col = document.getElementsByClassName('collage');
let gif = document.getElementsByClassName('gif');
let foto = document.getElementsByClassName('fotografie');
let logo = document.getElementsByClassName('logo');

let toonEnkelTypo = function() {
	toonAll();
	illu[0].classList.add('displayNone');
	illu[1].classList.add('displayNone');
	illu[2].classList.add('displayNone');
	illu[3].classList.add('displayNone');
	illu[4].classList.add('displayNone');
	illu[5].classList.add('displayNone');
	illu[6].classList.add('displayNone');
	oef[0].classList.add('displayNone');
	oef[1].classList.add('displayNone');
	oef[2].classList.add('displayNone');
	oef[3].classList.add('displayNone');
	oef[4].classList.add('displayNone');
	oef[5].classList.add('displayNone');
	oef[6].classList.add('displayNone');
	col[0].classList.add('displayNone');
	gif[0].classList.add('displayNone');
	gif[1].classList.add('displayNone');
	logo[0].classList.add('displayNone');
	logo[1].classList.add('displayNone');
	logo[2].classList.add('displayNone');
	foto[0].classList.add('displayNone');
	foto[1].classList.add('displayNone');
	foto[2].classList.add('displayNone');
	foto[3].classList.add('displayNone');
	foto[4].classList.add('displayNone');
	foto[5].classList.add('displayNone');
	buttonTypo.classList.add('geselecteerdeButton');
	buttonOef.classList.remove('geselecteerdeButton');
	buttonIllu.classList.remove('geselecteerdeButton');
	buttonCol.classList.remove('geselecteerdeButton');
	buttonGif.classList.remove('geselecteerdeButton');
	buttonFoto.classList.remove('geselecteerdeButton');
	buttonLogo.classList.remove('geselecteerdeButton');
	buttonAll.classList.remove('geselecteerdeButton');
	/*foto[0].classList.add('displayNone');*/
	console.log('Enkel typo is zichtbaar!');
}

buttonTypo.addEventListener('click', toonEnkelTypo);

let toonAll = function() {
	typo[0].classList.remove('displayNone');
	typo[1].classList.remove('displayNone');
	typo[2].classList.remove('displayNone');
	typo[3].classList.remove('displayNone');
	typo[4].classList.remove('displayNone');
	typo[5].classList.remove('displayNone');
	illu[0].classList.remove('displayNone');
	illu[1].classList.remove('displayNone');
	illu[2].classList.remove('displayNone');
	illu[3].classList.remove('displayNone');
	illu[4].classList.remove('displayNone');
	illu[5].classList.remove('displayNone');
	illu[6].classList.remove('displayNone');
	oef[0].classList.remove('displayNone');
	oef[1].classList.remove('displayNone');
	oef[2].classList.remove('displayNone');
	oef[3].classList.remove('displayNone');
	oef[4].classList.remove('displayNone');
	oef[5].classList.remove('displayNone');
	oef[6].classList.remove('displayNone');
	col[0].classList.remove('displayNone');
	gif[0].classList.remove('displayNone');
	gif[1].classList.remove('displayNone');
	logo[0].classList.remove('displayNone');
	logo[1].classList.remove('displayNone');
	logo[2].classList.remove('displayNone');
	foto[0].classList.remove('displayNone');
	foto[1].classList.remove('displayNone');
	foto[2].classList.remove('displayNone');
	foto[3].classList.remove('displayNone');
	foto[4].classList.remove('displayNone');
	foto[5].classList.remove('displayNone');
	buttonTypo.classList.remove('geselecteerdeButton');
	buttonOef.classList.remove('geselecteerdeButton');
	buttonIllu.classList.remove('geselecteerdeButton');
	buttonCol.classList.remove('geselecteerdeButton');
	buttonGif.classList.remove('geselecteerdeButton');
	buttonFoto.classList.remove('geselecteerdeButton');
	buttonLogo.classList.remove('geselecteerdeButton');
	buttonAll.classList.add('geselecteerdeButton');
	/*foto[0].classList.add('displayNone');*/
	console.log('Alles is zichtbaar!');
}

buttonAll.addEventListener('click', toonAll);

let toonEnkelIllu = function() {
	toonAll();
	typo[0].classList.add('displayNone');
	typo[1].classList.add('displayNone');
	typo[2].classList.add('displayNone');
	typo[3].classList.add('displayNone');
	typo[4].classList.add('displayNone');
	typo[5].classList.add('displayNone');
	oef[0].classList.add('displayNone');
	oef[1].classList.add('displayNone');
	oef[2].classList.add('displayNone');
	oef[3].classList.add('displayNone');
	oef[4].classList.add('displayNone');
	oef[5].classList.add('displayNone');
	oef[6].classList.add('displayNone');
	col[0].classList.add('displayNone');
	gif[0].classList.add('displayNone');
	gif[1].classList.add('displayNone');
	logo[0].classList.add('displayNone');
	logo[1].classList.add('displayNone');
	logo[2].classList.add('displayNone');
	foto[0].classList.add('displayNone');
	foto[1].classList.add('displayNone');
	foto[2].classList.add('displayNone');
	foto[3].classList.add('displayNone');
	foto[4].classList.add('displayNone');
	foto[5].classList.add('displayNone');
	buttonTypo.classList.remove('geselecteerdeButton');
	buttonOef.classList.remove('geselecteerdeButton');
	buttonIllu.classList.add('geselecteerdeButton');
	buttonCol.classList.remove('geselecteerdeButton');
	buttonGif.classList.remove('geselecteerdeButton');
	buttonFoto.classList.remove('geselecteerdeButton');
	buttonLogo.classList.remove('geselecteerdeButton');
	buttonAll.classList.remove('geselecteerdeButton');
	console.log('Enkel illu is zichtbaar!');
}

buttonIllu.addEventListener('click', toonEnkelIllu);

let toonEnkelOef = function() {
	toonAll();
	typo[0].classList.add('displayNone');
	typo[1].classList.add('displayNone');
	typo[2].classList.add('displayNone');
	typo[3].classList.add('displayNone');
	typo[4].classList.add('displayNone');
	typo[5].classList.add('displayNone');
	illu[0].classList.add('displayNone');
	illu[1].classList.add('displayNone');
	illu[2].classList.add('displayNone');
	illu[3].classList.add('displayNone');
	illu[4].classList.add('displayNone');
	illu[5].classList.add('displayNone');
	illu[6].classList.add('displayNone');
	col[0].classList.add('displayNone');
	gif[0].classList.add('displayNone');
	gif[1].classList.add('displayNone');
	logo[0].classList.add('displayNone');
	logo[1].classList.add('displayNone');
	logo[2].classList.add('displayNone');
	foto[0].classList.add('displayNone');
	foto[1].classList.add('displayNone');
	foto[2].classList.add('displayNone');
	foto[3].classList.add('displayNone');
	foto[4].classList.add('displayNone');
	foto[5].classList.add('displayNone');
	buttonTypo.classList.remove('geselecteerdeButton');
	buttonOef.classList.add('geselecteerdeButton');
	buttonIllu.classList.remove('geselecteerdeButton');
	buttonCol.classList.remove('geselecteerdeButton');
	buttonGif.classList.remove('geselecteerdeButton');
	buttonFoto.classList.remove('geselecteerdeButton');
	buttonLogo.classList.remove('geselecteerdeButton');
	buttonAll.classList.remove('geselecteerdeButton');
	console.log('Enkel oef is zichtbaar!');
}

buttonOef.addEventListener('click', toonEnkelOef);

let toonEnkelCol = function() {
	toonAll();
	typo[0].classList.add('displayNone');
	typo[1].classList.add('displayNone');
	typo[2].classList.add('displayNone');
	typo[3].classList.add('displayNone');
	typo[4].classList.add('displayNone');
	typo[5].classList.add('displayNone');
	illu[0].classList.add('displayNone');
	illu[1].classList.add('displayNone');
	illu[2].classList.add('displayNone');
	illu[3].classList.add('displayNone');
	illu[4].classList.add('displayNone');
	illu[5].classList.add('displayNone');
	illu[6].classList.add('displayNone');
	oef[0].classList.add('displayNone');
	oef[1].classList.add('displayNone');
	oef[2].classList.add('displayNone');
	oef[3].classList.add('displayNone');
	oef[4].classList.add('displayNone');
	oef[5].classList.add('displayNone');
	oef[6].classList.add('displayNone');
	gif[0].classList.add('displayNone');
	gif[1].classList.add('displayNone');
	logo[0].classList.add('displayNone');
	logo[1].classList.add('displayNone');
	logo[2].classList.add('displayNone');
	foto[0].classList.add('displayNone');
	foto[1].classList.add('displayNone');
	foto[2].classList.add('displayNone');
	foto[3].classList.add('displayNone');
	foto[4].classList.add('displayNone');
	foto[5].classList.add('displayNone');
	buttonTypo.classList.remove('geselecteerdeButton');
	buttonOef.classList.remove('geselecteerdeButton');
	buttonIllu.classList.remove('geselecteerdeButton');
	buttonCol.classList.add('geselecteerdeButton');
	buttonGif.classList.remove('geselecteerdeButton');
	buttonFoto.classList.remove('geselecteerdeButton');
	buttonLogo.classList.remove('geselecteerdeButton');
	buttonAll.classList.remove('geselecteerdeButton');
	console.log('Enkel col is zichtbaar!');
}

buttonCol.addEventListener('click', toonEnkelCol);

let toonEnkelGif = function() {
	toonAll();
	typo[0].classList.add('displayNone');
	typo[1].classList.add('displayNone');
	typo[2].classList.add('displayNone');
	typo[3].classList.add('displayNone');
	typo[4].classList.add('displayNone');
	typo[5].classList.add('displayNone');
	illu[0].classList.add('displayNone');
	illu[1].classList.add('displayNone');
	illu[2].classList.add('displayNone');
	illu[3].classList.add('displayNone');
	illu[4].classList.add('displayNone');
	illu[5].classList.add('displayNone');
	illu[6].classList.add('displayNone');
	oef[0].classList.add('displayNone');
	oef[1].classList.add('displayNone');
	oef[2].classList.add('displayNone');
	oef[3].classList.add('displayNone');
	oef[4].classList.add('displayNone');
	oef[5].classList.add('displayNone');
	oef[6].classList.add('displayNone');
	logo[0].classList.add('displayNone');
	logo[1].classList.add('displayNone');
	logo[2].classList.add('displayNone');
	col[0].classList.add('displayNone');
	foto[0].classList.add('displayNone');
	foto[1].classList.add('displayNone');
	foto[2].classList.add('displayNone');
	foto[3].classList.add('displayNone');
	foto[4].classList.add('displayNone');
	foto[5].classList.add('displayNone');
	buttonTypo.classList.remove('geselecteerdeButton');
	buttonOef.classList.remove('geselecteerdeButton');
	buttonIllu.classList.remove('geselecteerdeButton');
	buttonCol.classList.remove('geselecteerdeButton');
	buttonGif.classList.add('geselecteerdeButton');
	buttonFoto.classList.remove('geselecteerdeButton');
	buttonLogo.classList.remove('geselecteerdeButton');
	buttonAll.classList.remove('geselecteerdeButton');
	console.log('Enkel gif is zichtbaar!');
}

buttonGif.addEventListener('click', toonEnkelGif);

let toonEnkelFoto = function() {
	toonAll();
	typo[0].classList.add('displayNone');
	typo[1].classList.add('displayNone');
	typo[2].classList.add('displayNone');
	typo[3].classList.add('displayNone');
	typo[4].classList.add('displayNone');
	typo[5].classList.add('displayNone');
	illu[0].classList.add('displayNone');
	illu[1].classList.add('displayNone');
	illu[2].classList.add('displayNone');
	illu[3].classList.add('displayNone');
	illu[4].classList.add('displayNone');
	illu[5].classList.add('displayNone');
	illu[6].classList.add('displayNone');
	oef[0].classList.add('displayNone');
	oef[1].classList.add('displayNone');
	oef[2].classList.add('displayNone');
	oef[3].classList.add('displayNone');
	oef[4].classList.add('displayNone');
	oef[5].classList.add('displayNone');
	oef[6].classList.add('displayNone');
	col[0].classList.add('displayNone');
	gif[0].classList.add('displayNone');
	gif[1].classList.add('displayNone');
	logo[0].classList.add('displayNone');
	logo[1].classList.add('displayNone');
	logo[2].classList.add('displayNone');
	buttonTypo.classList.remove('geselecteerdeButton');
	buttonOef.classList.remove('geselecteerdeButton');
	buttonIllu.classList.remove('geselecteerdeButton');
	buttonCol.classList.remove('geselecteerdeButton');
	buttonGif.classList.remove('geselecteerdeButton');
	buttonFoto.classList.add('geselecteerdeButton');
	buttonLogo.classList.remove('geselecteerdeButton');
	buttonAll.classList.remove('geselecteerdeButton');
	console.log('Enkel foto is zichtbaar!');
}

buttonFoto.addEventListener('click', toonEnkelFoto);

let toonEnkelLogo = function() {
	toonAll();
	typo[0].classList.add('displayNone');
	typo[1].classList.add('displayNone');
	typo[2].classList.add('displayNone');
	typo[3].classList.add('displayNone');
	typo[4].classList.add('displayNone');
	typo[5].classList.add('displayNone');
	illu[0].classList.add('displayNone');
	illu[1].classList.add('displayNone');
	illu[2].classList.add('displayNone');
	illu[3].classList.add('displayNone');
	illu[4].classList.add('displayNone');
	illu[5].classList.add('displayNone');
	illu[6].classList.add('displayNone');
	oef[0].classList.add('displayNone');
	oef[1].classList.add('displayNone');
	oef[2].classList.add('displayNone');
	oef[3].classList.add('displayNone');
	oef[4].classList.add('displayNone');
	oef[5].classList.add('displayNone');
	oef[6].classList.add('displayNone');
	col[0].classList.add('displayNone');
	gif[0].classList.add('displayNone');
	gif[1].classList.add('displayNone');
	foto[0].classList.add('displayNone');
	foto[1].classList.add('displayNone');
	foto[2].classList.add('displayNone');
	foto[3].classList.add('displayNone');
	foto[4].classList.add('displayNone');
	foto[5].classList.add('displayNone');
	buttonTypo.classList.remove('geselecteerdeButton');
	buttonOef.classList.remove('geselecteerdeButton');
	buttonIllu.classList.remove('geselecteerdeButton');
	buttonCol.classList.remove('geselecteerdeButton');
	buttonGif.classList.remove('geselecteerdeButton');
	buttonFoto.classList.remove('geselecteerdeButton');
	buttonLogo.classList.add('geselecteerdeButton');
	buttonAll.classList.remove('geselecteerdeButton');
	/*foto[0].classList.add('displayNone');*/
	console.log('Enkel logo is zichtbaar!');
}

buttonLogo.addEventListener('click', toonEnkelLogo);
