function main(){
	$('.mainBody').hide();
  $('.mainBody').fadeIn(1000);
}

function toggleDarkLight() {
  var body = document.getElementById("body");
  var currentClass = body.className;
  body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
}

function projects(){
	window.location.href = "./projects.html";
}

function other(){
	window.location.href = "./other.html";
}

function index(){
	window.location.href = "./index.html";
}

function theblankhand(){
	window.open("https://theblankhand.co.uk", "_blank")
}

$(document).ready(main);
