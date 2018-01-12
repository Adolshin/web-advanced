//Гамбургер-меню 
$('.hamburger-menu').click(function () {
	$(this).toggleClass('hamburger-menu_active');
	$('.overlay').toggleClass('overlay_open');
	$('body').toggleClass('body_block');
});
//Вызов боковой панели
$('.anchors__tab').click(function (e) {
	e.preventDefault();
	$('.blog__aside').toggleClass('blog__aside_active');

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
//Плавный переход по якорям асайда
$(document).ready(function () {
	$(".anchors__link").on("click", function (event) {
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
//Расчет отступа для позиционирования контента над футером

$(document).ready(function () {
	blog();
})
$(window).resize(function () {
	blog();
});

function blog() {
	var footerHeight = $('.footer').height(),
		blog = $('.blog');

	blog.css({
		'margin-bottom': footerHeight + 20 + 'px'
	})
}
//Переход по якорям активный класс
$('.anchors__link').click(function (e) {
	e.preventDefault();
	$('.anchors__link').removeClass('anchors__link_active');
	$(this).addClass('anchors__link_active');
});
//Скролл меню блога
let scrollMenu = (function () {
	const $news = $('.blog__article');
	const $item = $('.anchors__item');
	const $wrapMenu = $('.anchors');
	let positionArticle = [];
	let offsetHeight = 0; // смещение реагирования на сменю меню

	_setPositionArticle = function (element) {
		const len = element.length;
		element.each(function (item) {
			positionArticle[item] = {};
			positionArticle[item].top = $(this).offset().top - offsetHeight;
			positionArticle[item].bottom =
				positionArticle[item].top + $(this).innerHeight();
		});
		// console.log(positionArticle);
	};

	// _scrollPageFixMenu = function(e) {
	//   let scroll = window.pageYOffset;
	//   if (scroll < $news.offset().top) {
	// 	$wrapMenu.removeClass('fixed');
	//   } else {
	// 	$wrapMenu.addClass('fixed');
	//   }
	// };

	_scrollPage = function (e) {
		let scroll = window.pageYOffset;
		positionArticle.forEach((element, index) => {
			if (
				scroll >= element.top - 300 &&
				scroll <= element.bottom
			) {
				$item
					.eq(index)
					.addClass('anchors__item_active')
					.siblings()
					.removeClass('anchors__item_active');
			}
		});
	};

	// _clickMenu = function(e) {
	//   let $element = $(e.target);
	//   let index = $element.index();
	//   let sectionOffset = positionArticle[index].top;

	//   $(document).off('scroll', _scrollPage);
	//   $element.siblings().removeClass('anchors__item_active');
	//   $('body, html').animate(
	// 	{
	// 	  scrollTop: sectionOffset
	// 	},
	// 	1000,
	// 	() => {
	// 	  $element.addClass('anchors__item_active');
	// 	  $(document).on('scroll', _scrollPage);
	// 	}
	//   );
	// };

	addListener = function () {
		//   $('.anchors').on('click', _clickMenu);
		$(document).on('scroll', _scrollPage);
		//   $(document).on('scroll', _scrollPageFixMenu);

		_setPositionArticle($news);

		$(window).on('load', function (e) {
			_setPositionArticle($news);
		});

		$(window).on('resize', function (e) {
			_setPositionArticle($news);
		});

	};

	return {
		init: addListener
	};
})();

console.log(scrollMenu);
scrollMenu.init();
//-Прелоадер
var
  images = document.images,
  images_total_count = images.length,
  images_loaded_count = 0;
perc_display = document.getElementById('count');

for (var i = 0; i < images_total_count; i++) 
{
  image_clone = new Image();
  image_clone.onload = image_loaded;
  image_clone.onerror = image_loaded;
  image_clone.src = images[i].src;
}
// console.log(images_total_count);
// console.log(images_loaded_count);
function image_loaded() {
  images_loaded_count++;
  perc_display.innerHTML = (((100 / images_total_count) * images_loaded_count) << 0) + '%';

  if (images_loaded_count >= images_total_count) {
    $(window).on('load', function () {
      $('.preloader').delay(1000).fadeOut(1000);
    });
  }
};
// new Vue({
// 	el: '#app',
// 	data: {
// 		title: 'Hello'
// 	},
// 	methods: {
// 		changTitle(e) {
// 			this.title = e.target.value
// 		}
// 	}
// })