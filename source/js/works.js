//Плавный переход по якорю
$(document).ready(function(){
	$(".arrow").on("click", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 500);
	});
});

// Блур
$(document).ready(function(){
	blur();
  })
  $(window).resize(function(){
	blur();
  });
  
  function blur() {
	var imgWidth = $('.reviews__back').width(),
		imgHeight =$('.reviews__back').height(),
		blurSection = $('.reviews'),
		blur = $('.reviews__blur'),
		posY = blurSection.offset().top - blur.offset().top, //   текущее положение элемента относительно документа.
		posX = blurSection.offset().left - blur.offset().left;
	
	blur.css({
		'background-size': imgWidth + 'px' + ' ' + imgHeight + 'px',
		'background-position': posX + 'px' + ' ' + posY + 'px'
	})
  }