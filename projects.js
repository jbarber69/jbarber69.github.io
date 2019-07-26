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
	location.replace("./projects.html");
}

function other(){
	location.replace("./other.html");
}

function index(){
	location.replace("./index.html")
}

function theblankhand(){
	location.replace("https://theblankhand.co.uk")
}

$(document).ready(main);