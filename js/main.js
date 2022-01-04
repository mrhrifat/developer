$(document).ready(function(){

	// Photo Filter
	let $btns = $('#portfolio .button-group button');

	$btns.click(function(e){

		$('#portfolio .button-group button').removeClass('active');

		e.target.classList.add('active');


		let selector = $(e.target).attr('data-filter');

		$('#portfolio .grid').isotope({
			filter:selector
		});

		return false;
	});

	// Photo Popup
	$('#portfolio .button-group #btn1').trigger('click');

	$('#portfolio .grid .test-popup-link').magnificPopup({
		type: 'image',
		gallery:{enabled:true}
	});


	//Owl Carousel
	$('#about-me .carousel-items .owl-carousel').owlCarousel({
		loop:true,
		dots:true,
		autoplay:true,
		responsive:{
			0:{
				items:1
			},
			544:{
				items:2
			}
		}
	});


	//Navbar
	let nav_offset_top=$('#header').height()+50;

	function navbarFixed(){
		if($('#header').length){
			$(window).scroll(function(){
				let scroll = $(window).scrollTop();

				if(scroll >= nav_offset_top){
					$('#header .main').addClass('nav_fixed');
				}else{
					$('#header .main').removeClass('nav_fixed');
				}
			});
		}
	}
	navbarFixed();

	// Aos Inntance
	AOS.init();

});