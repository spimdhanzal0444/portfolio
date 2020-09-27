
//PRELOADER THIS SITE
$(window).on('load',function(){
	$('.preloader').fadeOut();
});

//STICKY MENU

$(document).ready(function(){
	//stiky menu
	$('.js--sticky--menu').waypoint(function(direction){
		if (direction == 'down') {
			$('.main-nav').addClass("sticky");
		}else{
			$('.main-nav').removeClass("sticky");
		}
	});

	$(window).on('scroll',function(direction){
		if (direction == 'down') {
			$('.sticky').addClass("stickyPadding");
		}else{
			$('.sticky').addClass("stickyPadding");
		}
	});

});

//MOBILE MENU
function openNav(){
	document.querySelector('.burger-menu').style.display = "none";
	document.querySelector('.overlay').style.right = "0%";
}
function closeNav(){
	document.querySelector('.overlay').style.right = "-100%";
	document.querySelector('.burger-menu').setAttribute('style','display:block');
}


// typing

var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed : 150,
    backDelay :80,
    loop      : true,
    fadeOut   :false,
    showCursor:false,

  });

// SKILL


function skillFunction(){
	$(document).ready(function(){
	    $('#proSkill-01').barfiller({barColor : "#5569dc",duration: 2000});
	    $('#proSkill-02').barfiller({barColor : "#5569dc",duration: 2000});
	    $('#proSkill-03').barfiller({barColor : "#5569dc",duration: 2000});
	    $('#proSkill-04').barfiller({barColor : "#5569dc",duration: 2000});
	    $('#proSkill-05').barfiller({barColor : "#5569dc",duration: 2000});
	    $('#proSkill-06').barfiller({barColor : "#5569dc",duration: 2000});
	});
}


$(window).on('scroll',function(){
	if ($(window).scrollTop() > '1350') {
		skillFunction();
	}
});

// SCROLL TOP
document.querySelector('.topArrow').addEventListener('click',function(){
	$('html,body').animate({scrollTop:0},1000);
});

