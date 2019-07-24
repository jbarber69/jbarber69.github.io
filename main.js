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

$(document).ready(main);