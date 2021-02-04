//alert("jeff");

function main(){
	$('.mainTable').hide();
    $('.mainTable').fadeIn(1000);
    $('.infotable').hide();
    $('.about').on('click', function(){
    	$('.infotable').slideToggle(400);
    	$('.infotable').toggleClass('active');
    })
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

function cv(){
	window.open("Jack Barber CV.pdf", "_blank");
}

$(document).ready(main);
