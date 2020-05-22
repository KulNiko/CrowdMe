// Скрипт для картинок

function testWebP(callback) {

var webP = new Image();
webP.onload = webP.onerror = function () {
callback(webP.height == 2);
};
webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

if (support == true) {
document.querySelector('body').classList.add('webp');
}else{
document.querySelector('body').classList.add('no-webp');
}
});




$(document).ready(function(){
	$('.slider').slick({
		arrows: true,
		dots: false,
		adaptivHeight: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 3000,
		fade: true,
		easing: 'linear',
		infinite: true,
		initialSlide: 0,
		autoplay: true,
		autoplaySpeed: 8000,

		appendArrows: $('.banner__content'),
		// responsive: [
		// 	{
		// 		breakpoint: 1023,
		// 		settings: {
		// 		arrows: false,
		// 		}
		// 	}
		// ],
	});
});

if (window.innerWidth <= '1023'){
	$(document).ready(function(){
		$('.slider2').slick({
					arrows: false,
					slidesToShow: 1,
					centerMode: true,
					slidesToScroll: 1,
					speed: 3000,
					easing: 'linear',
					infinite: true,
					initialSlide: 0,
					autoplay: true, 
					autoplaySpeed: 5000,
					pauseOnFocus: true,
					pauseOnHover: true,
					pauseOnDotsHover: true,
					variableWidth: true,
		});
	});
} else {$(document).ready(function(){
			$('.slider2').slick({
				settings: unslick,
			});
		});
}

if (window.innerWidth <= '1023'){
	$(document).ready(function(){
		$('.slider3').slick({
					arrows: false,
					slidesToShow: 1,
					centerMode: true,
					slidesToScroll: 1,
					speed: 3000,
					easing: 'linear',
					infinite: true,
					initialSlide: 0,
					autoplay: true,
					autoplaySpeed: 5000,
					pauseOnFocus: true,
					pauseOnHover: true,
					pauseOnDotsHover: true,
					variableWidth: true,
		});
	});
} else {$(document).ready(function(){
			$('.slider3').slick({
				settings: unslick,
			});
		});
}
















let tab = function () {
    let tabNav = document.querySelectorAll('.tabs-nav__item'),
        tabContent = document.querySelectorAll('.tabs__content'),
        tabName;

    tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav)
    });

    function selectTabNav() {
        tabNav.forEach(item => {
            item.classList.remove('is-active');
        });
        this.classList.add('is-active');
        tabName = this.getAttribute('data-tab-name');
        selectTabContent (tabName);
    }

    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
        })
    }
};

tab();

$(function() {  
  $('.btn, .details__btn, .find1__btn, .find2__btn')
    .on('mouseenter', function(e) {
            var parentOffset = $(this).offset(),
            relX = e.pageX - parentOffset.left,
            relY = e.pageY - parentOffset.top;
            $(this).find('span').css({top:relY, left:relX})
    })
    .on('mouseout', function(e) {
            var parentOffset = $(this).offset(),
            relX = e.pageX - parentOffset.left,
            relY = e.pageY - parentOffset.top;
        $(this).find('span').css({top:relY, left:relX})
    });
  $('[href=#]').click(function(){return false});
});



//Бургер-меню скрипт

$(document).ready(function() {
	$('.header__burger').click(function(event){
		$('.header__burger, .header__menu').toggleClass('in-work');
		$('body').toggleClass('lock');
		$('.header__link').toggleClass('link__null').toggleClass('link__anim');
	});
});

