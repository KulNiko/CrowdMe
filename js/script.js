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

//Бургер-меню скрипт

$(document).ready(function() {
	$('.navigation__burger').click(function(event){
		$('.navigation__burger, .navigation__menu').toggleClass('in-work');
		$('body').toggleClass('lock');
		$('.navigation_link').toggleClass('link_null').toggleClass('link_anim');
	});
});

$(document).ready(function(){
	$('.slider').slick({
		arrows: false,
		dots: true,
		adaptivHeight: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 1000,
		fade: true,
		easing: 'linear',
		infinite: true,
		initialSlide: 0,
		autoplay: true,
		autoplaySpeed: 7000,
		pauseOnFocus: false,
		pauseOnHover: false,
		appendDots: $('.banner__sliderpoints'),
		waitForAnimate: true,
		touchMove: false,
		swipe: false,
	});
});

$(document).ready(function(){
	$('.slider2').slick({
		arrows: false,
		dots: false,
		adaptivHeight: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		speed: 300,
		fade: false,
		easing: 'linear',
		infinite: true,
		initialSlide: 0,
		autoplay: true,
		autoplaySpeed: 3000,
		pauseOnFocus: true,
		pauseOnHover: true,
		waitForAnimate: true,
		touchMove: true,
		swipe: true,
		centerMode: true,
		variableWidth: true,
		draggable: true,
	});
});

$('.slider2').on('wheel', (function(e) {
  e.preventDefault();

  if (e.originalEvent.deltaY < 0) {
    $(this).slick('slickNext');
  } else {
    $(this).slick('slickPrev');
  }
}));





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



if(window.innerWidth < 1024) {
	$(document).ready(function(){
		$('.block__title').click(function(event){
			if($('.block').hasClass('one')){
				$('.block__title').not($(this)).removeClass('in-active');
				$('.block__text').not($(this).next()).slideUp(200);
			}
			$(this).toggleClass('in-active').next().slideToggle(200);
		});
	});
}








screen_check();
$(window).on('resize', function(){
    screen_check();
});

function screen_check(){
    if (window.innerWidth > 1023) { 
       $(document).ready(function(){   
		    $(window).scroll(function () {
		        if ($(this).scrollTop() > 0) {
		            $('.scroll').fadeIn();
		        } else {
		            $('.scroll').fadeOut();
		        }
		    });
		    $('.scroll').click(function () {
		        $('body,html').animate({
		            scrollTop: 0
		        }, 400);
		        return false;
		    });
		});
    } else {
       $(document).ready(function(){   
		    $(window).scroll(function () {
		        $('.scroll').classList.remove("scroll");
		    });
		});
    };
}


jQuery('img.svg').each(function(){
            var $img = jQuery(this);
            // var imgID = $img.attr('id');
            var imgClass = $img.attr('class');
            var imgURL = $img.attr('src');

            jQuery.get(imgURL, function(data) {
                // Get the SVG tag, ignore the rest
                var $svg = jQuery(data).find('svg');

                // // Add replaced image's ID to the new SVG
                // if(typeof imgID !== 'undefined') {
                //     $svg = $svg.attr('id', imgID);
                // }
                // Add replaced image's classes to the new SVG
                if(typeof imgClass !== 'undefined') {
                    $svg = $svg.attr('class', imgClass);
                }

                // Remove any invalid XML tags as per http://validator.w3.org
                $svg = $svg.removeAttr('xmlns:a');

                // Replace image with new SVG
                $img.replaceWith($svg);

            }, 'xml');

        });

