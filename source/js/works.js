//Гамбургер-меню 
$('.hamburger-menu').click(function() {
    $(this).toggleClass('hamburger-menu_active');
    $('.overlay').toggleClass('overlay_open');
	$('body').toggleClass('body_block');  
	$('.overlay__left').toggleClass('left'); 
	$('.overlay__right').toggleClass('right');   
	  
  });
  // $('.nav__link').click(function(e){     
  //   $('.hamburger-menu').removeClass('hamburger-menu_active');
  //   $('body').removeClass('body_block'); 
  //   $('.overlay').removeClass('overlay_open');    
  // });
//Плавный переход по якорю
$(document).ready(function () {
	$(".arrow").on("click", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id = $(this).attr('href'),

			//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;

		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({
			scrollTop: top
		}, 500);
	});
});

// Блур
$(document).ready(function () {
	blur();
})
$(window).resize(function () {
	blur();
});

function blur() {
	var imgWidth = $('.reviews__back').width(),
		imgHeight = $('.reviews__back').height(),
		blurSection = $('.reviews'),
		blur = $('.reviews__blur'),
		posY = blurSection.offset().top - blur.offset().top, //   текущее положение элемента относительно документа.
		posX = blurSection.offset().left - blur.offset().left;
	
	blur.css({
		'background-size': imgWidth + 'px' + ' ' + imgHeight + 'px',
		'background-position': posX + 'px' + ' ' + posY + 'px'
	})
}
//Расчет отступа для позиционирования контента над футером

$(document).ready(function () {
	content();
})
$(window).resize(function () {
	content();
});
  function content() {
	var footerHeight = $('.footer').height(),	
		content = $('.reviews__content');	
	
	content.css({
		'margin-bottom': footerHeight + 60 + 'px'		
	})
  }
 //Ширина полосы прокрутки 
//   function scrollbarWidth() {
// 	var documentWidth = parseInt(document.documentElement.clientWidth);
// 	var windowsWidth = parseInt(window.innerWidth);
// 	var scrollbarWidth = windowsWidth - documentWidth;
// 	return scrollbarWidth;
//   } 
//Расчет оверлея
// $(document).ready(function () {
// 	overlay();
// })
// $(window).resize(function () {
// 	overlay();
// });

// function overlay() {
// 	var section = $('.overlay__center'),
// 		sectionWidth = $('.overlay__center').width(),
// 		posL = section.position().left, 
// 		posR = section.position().left + sectionWidth,
// 		left = $('.overlay__left'),
// 		right = $('.overlay__right');
// 		// leftO =$('.left')
// 	console.log(posR);
// 	left.css({
// 		// 'left': posL + 'px',
// 		'right': posL + sectionWidth + 'px',		
// 	});
// 	// leftO.css({
// 	// 	'right': posL + 'px',
		
// 	// });
// 	right.css({
// 		// 'right': posR - sectionWidth + 'px',
// 		'left': posL + sectionWidth + 'px',		
// 	})
// }

