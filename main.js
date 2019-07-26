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

function cv(){
	location.replace("Jack Barber CV.pdf")
}

$(document).ready(main);