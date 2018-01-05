//Гамбургер-меню 
$('.hamburger-menu').click(function() {
    $(this).toggleClass('hamburger-menu_active');
    $('.overlay').toggleClass('overlay_open');
	$('body').toggleClass('body_block');  
	$('.overlay__left').toggleClass('left'); 
	$('.overlay__right').toggleClass('right');   
	  
  });

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

//-Анимация появляющегося текста слайдера
var aviatitle = {
	generate: function (string, block) {
	  var wordsArray = string.split(' '),
		stringArray = string.split(''),
		sentence = [],
		word = '';
	  console.log(wordsArray);
	  console.log(stringArray);
	  block.text('');
  
	  wordsArray.forEach(function (currentWord) {
		var wordsArray = currentWord.split('');
  
		wordsArray.forEach(function (letter) {
		  var letterHtml = '<span class="letter-span">' + letter + '</span>';
  
		  word += letterHtml;
		});
  
		var wordHTML = '<span class="letter-word">' + word + '</span>'
  
		sentence.push(wordHTML);
		word = '';
	  });
  
	  block.append(sentence.join(' '));
  
	  // анимация появления
	  var
		letters = block.find('.letter-span'), // найдем все наши буквы
		duration = 500 / stringArray.length; // находим длительность для каждой буквы
  
	  $.each(letters, function (item, elem) {
		setTimeout(function () {
		  $(elem).addClass('active');
		}, duration * item);
	  });
  
	}
  }

//-Слайдер
var Slider = function (container) {
	var nextBtn = container.find('.slider__button-left'),// левая  кнопка
	  prevBtn = container.find('.slider__button-right'), // правая кнопка
	  items = nextBtn.find('.slider__button-item'), // слайды
	  display = container.find('.slider__content'), // Витрина слайдера
	  title = container.find('.slider__about-title-text'), // заголовок слайда
	  skills = container.find('.slider__about-desc'), // технологии
	  link = container.find('.slider__about-link'), // ссылка
	  itemsLength = items.length, // количество слайдов
	  duration = 500, 
	  flag = true;
  
	// var timeout;
  
	this.counter = 0;
  
	// private Генерация разметки кнопки следующий слайд 
	var generateMarkups = function () {        
	  var list = nextBtn.find('.slider__button-list'),
		markups = list.clone();
  
	  prevBtn
		.append(markups);
		// .find('.works-slider__control-item')
		// .removeClass('active')
		// .eq(this.counter + 1)
		// .addClass('active');
	}
	// Вытащить данные из дата атрибутов для левой части слайдера
	var getDataArrays = function () {
	  var dataObject = {
		pics: [],
		title: [],
		skills: [],
		link: []
	  };
  
	  $.each(items, function () {
		var $this = $(this);
  
		dataObject
		  .pics
		  .push($this.data('full'));
		dataObject
		  .title
		  .push($this.data('title'));
		dataObject
		  .skills
		  .push($this.data('skills'));
		dataObject
		  .link
		  .push($this.data('link'));
	  });
  
	  return dataObject;
	}
  
	var slideInLeftBtn = function (slide) {
	  var reqItem = items.eq(slide - 1),
		activeItem = items.filter('.active');
  
	  activeItem
		.stop(true, true)
		.animate({
		  'top': '100%'
		}, duration);
  
	  reqItem
		.stop(true, true)
		.animate({
		  'top': '0%'
		}, duration, function () {
		  $(this)
			.addClass('active')
			.siblings()
			.removeClass('active')
			.css('top', '-100%')
		});
  
	}
  
	var slideInRightBtn = function (slide) {
	  var items = prevBtn.find('.slider__button-item'),
		activeItem = items.filter('.active'),
		reqSlide = slide + 1;
  
	  if (reqSlide > itemsLength - 1) {
		reqSlide = 0;
	  }
  
	  var reqItem = items.eq(reqSlide);
  
	  activeItem
		.stop(true, true)
		.animate({
		  'top': '-100%'
		}, duration);
  
	  reqItem
		.stop(true, true)
		.animate({
		  'top': '0%'
		}, duration, function () {
		  $(this)
			.addClass('active')
			.siblings()
			.removeClass('active')
			.css('top', '100%')
		});
	};
  
	var changeMainPicture = function (slide) {
	  var image = display.find('.slider__img');
	  var data = getDataArrays();
  
	  image
		.stop(true, true)
		.fadeOut(duration / 2, function () {
		  image.attr('src', data.pics[slide]);
		  $(this).fadeIn(duration / 2);
		});
	}
  
	var changeTextData = function (slide) {
	  var data = getDataArrays();
  
	  // название работы
	  aviatitle.generate(data.title[slide], title, 'ru');
  
	  // описание технологий
	  aviatitle.generate(data.skills[slide], skills, 'en');
  
	  // ссылка
	  link.attr('href', data.link[slide]);
	}
  
	// public
	this.setDefaults = function () {
	  var _that = this,
		data = getDataArrays();
	  console.log(data);
	  // создаем разметку
	  generateMarkups(); 
  
	  // левая кнопка
	  nextBtn
		.find('.slider__button-item')
		.eq(_that.counter - 1)
		.addClass('active');
  
	  // правая кнопка
	  prevBtn
		.find('.slider__button-item')
		.eq(_that.counter + 1)
		.addClass('active');
  
	  // основное изображение
	  display
		.find('.slider__img')
		.attr('src', data.pics[_that.counter]);
  
	  // текстовые описания
	  changeTextData(_that.counter);
  
	};
  
	this.moveSlide = function (direction) {
	  var _that = this;
	  // if (direction === "next") {
	  //   if (_that.counter < itemsLength - 1) {
	  //     _that.counter++;
	  //   } else {
	  //     _that.counter = 0;
	  //   }
	  // } else {
	  //   if (_that.counter > 0) {
	  //     _that.counter--;
	  //   } else {
	  //     _that.counter = itemsLength - 1;
	  //   }
	  // }
  
	  var directions = {
		next: function () {
		  // закольцовывание слайдера
		  if (_that.counter < itemsLength - 1) {
			_that.counter++;
		  } else {
			_that.counter = 0;
		  }
		},
  
		prev: function () {
		  if (_that.counter > 0) {
			_that.counter--;
		  } else {
			_that.counter = itemsLength - 1;
		  }
		}
	  };
  
	  directions[direction]();
  
	  if (flag) {
		flag = false;
  
		if (typeof timeout != 'undefined') {
		  clearTimeout(timeout);
		}
  
		timeout = setTimeout(function () {
		  flag = true;
		}, duration + 50);
  
		slideInLeftBtn(_that.counter);
		slideInRightBtn(_that.counter);
		changeMainPicture(_that.counter);
		changeTextData(_that.counter);
	  }
	};
  };
  
  var slider = new Slider($('.works'));
  slider.setDefaults();
  
  $('.slider__button-left').on('click', function (e) {
	e.preventDefault();
	slider.moveSlide('prev');
  });
  
  $('.slider__button-right').on('click', function (e) {
	e.preventDefault();
	slider.moveSlide('next');
  });
  
  console.dir(slider);
  
