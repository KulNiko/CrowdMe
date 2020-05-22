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
		arrows: true,       /* Нужность стрелок  */
		// dots: false,        /* Точки навигации */
		// adaptivHeight: false,        /* подстраивает высоту под высоту фотки */
		// slidesToShow: 1,        /* кол-во слайдов на странице */
		// slidesToScroll: 1,        /* колво пролистываемых */
		speed: 3000,
		fade: true,        /* скорость пролистывания */
		easing: 'linear',        /* Тип анимации */
		infinite: true,        /* Будет ли бесконечное листание */
		// initialSlide: 0,        /* С какого слайда стартует прокрутка */
		autoplay: true,        /* Автопрокрутка */
		autoplaySpeed: 8000,        /* Время пролистывания */
		// pauseOnFocus: false,        /* Остановка прокрутки при действии */
		// pauseOnHover: false,        /* Остановка прокрутки при действии */
		// pauseOnDotsHover: false,        /* Остановка прокрутки при действии */
		// draggable: false,        /* прокрутка на компе мышкой */
		// swipe: true,        /* Прокрутка пальцем на телефоне */
		// touchThreshold: 5,        /* расстояние движением пальца чтобы свайп сработал на телефоне */
		// touchMove: true,        /* Все возможности тач скрина */
		waitForAnimate: false,        /* ждать когда анимация закончится */
		// centerMode: false,        /* Первый слайд по центру всегда */
		// variableWidth: false,        /* Ширина между слайдами пропадет */
		// rows: 1,        /* Ряды слайдера */
		// slidesPerRow: 1,        /* колво слайдов в ряду */
		// vertical: false,        /* Вертикальный слайд(сверху вниз) */
		// verticalSwiping: false,        /* Вертикальная прокрутка для тач скрина */
		//         /* показывает только одну картинку и заменяет плавно слайд на слайд (другая анимация) */
		// /*asNavFor: ".slider2",        /* связывает два слайдера вместе*/
		// centerMode: false,        /* Все возможности тач скрина */
		/*responsive: [        /* адаптив для слайдеров */
			/*{
				breakpoint: 768,        /* указываем ширину экрана меньше чем */
				/*settings: {
					slidesToShow: 1,
				}
			},
			{
				breakpoint: 400,        /* указываем ширину экрана меньше чем */
				/*settings: {        /* указываем новые свойства */
					/*slidesToShow: 1,
				}
			}
		],
		mobileFirst: true        /* меняет брейкпоинты на больше чем */
		appendArrows: $('.banner__content'),         /* перемещает стрелки в другой див
		/*appendDots: $('.content'),         /* перемещает точки в другой див*/
		responsive: [        /* адаптив для слайдеров */
			{
				breakpoint: 1023,
				settings: {
					arrows: false,
				}
			}
		],
	});
});

if (window.innerWidth <= '1023'){
	$(document).ready(function(){
		$('.slider2').slick({
					arrows: false,
					slidesToShow: 1,
					centerMode: true,
					slidesToScroll: 1,        /* колво пролистываемых */
					speed: 3000,
					easing: 'linear',        /* Тип анимации */
					infinite: true,        /* Будет ли бесконечное листание */
					initialSlide: 0,        /* С какого слайда стартует прокрутка */
					autoplay: true,        /* Автопрокрутка */
					autoplaySpeed: 5000,        /* Время пролистывания */
					pauseOnFocus: true,        /* Остановка прокрутки при действии */
					pauseOnHover: true,        /* Остановка прокрутки при действии */
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
					slidesToScroll: 1,        /* колво пролистываемых */
					speed: 3000,
					easing: 'linear',        /* Тип анимации */
					infinite: true,        /* Будет ли бесконечное листание */
					initialSlide: 0,        /* С какого слайда стартует прокрутка */
					autoplay: true,        /* Автопрокрутка */
					autoplaySpeed: 5000,        /* Время пролистывания */
					pauseOnFocus: true,        /* Остановка прокрутки при действии */
					pauseOnHover: true,        /* Остановка прокрутки при действии */
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

