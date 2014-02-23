jQuery(document).ready(function(){
	jQuery('#topnav').localScroll(3000);
	jQuery('#startbtn').localScroll(5000);
	jQuery('#novelbtn').localScroll(7000);
	jQuery('#maronbtn').localScroll(9000);
	//.parallax(xPosition, speedFactor, outerHeight) options:
	//xPosition - Horizontal position of the element
	//inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
	//outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
	jQuery('#top-section').parallax("50%", 0.1);
	jQuery('#about').parallax("70%", 0.3);
	jQuery('#graphic-novel').parallax("50%", 0.1);
	jQuery('#maron-pictures').parallax("50%", 0.1);
	
	//hide menu after click on mobile
	jQuery('.navbar .nav > li > a').click(function(){
		jQuery('.navbar-collapse.navbar-ex1-collapse.in').removeClass('in').addClass('collapse').css('height', '0');
	});
	
	jQuery("html").niceScroll({cursorcolor:"#fff"});
});