function main(){
	$('.mainBody').hide();
	//$('.projectTable').hide();
    $('.mainBody').fadeIn(1000);
    //$('.projectTable').fadeIn(1000);
}

function toggleDarkLight() {
  //alert("jeff");
  var body = document.getElementById("body");
  var currentClass = body.className;
  //alert(currentClass);
  body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
  //alert(body.className);
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
	window.location.href = "https://theblankhand.co.uk"
}

$(document).ready(main);