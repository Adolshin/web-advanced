$('.index__authorization').click(function (e) {
  e.preventDefault();
  $(this).addClass('visuallyhidden');
  $('.flip-container').addClass('flip-container_active');
});
$('#main').click(function (e) {
  e.preventDefault();
  $('.index__authorization').removeClass('visuallyhidden');
  $('.flip-container').removeClass('flip-container_active');
});
//-Параллакс
$(document).ready(function () {

  var layer = $('.parallax').find('.parallax__layer'); // Выбираем все parallax__layer в объект

  layer.map(function (key, value) { // Проходимся по всем элементам объекта
    var bottomPosition = ((window.innerHeight / 2) * (key / 100)); // Вычисляем на сколько нам надо опустить вниз наш слой что бы при перемещении по Y не видно было краев
    $(value).css({ // Выбираем элемент и добавляем css
      'bottom': '-' + bottomPosition + 'px', // Выставляем bottom
      'transform': 'translate3d(0px, 0px, 0)', // Подготавливаем browser к трансформации
    });
  });

  $(window).on('mousemove', function (e) { // Навешиваем событие перемещени мыши на window, первым аргументом в функцию-обработчик события отправляется ссылка на объект события
    var mouse_dx = (e.pageX); // Узнаем положение мышки по X
    var mouse_dy = (e.pageY); // Узнаем положение мышки по Y
    // Т.к. мы делим экран на четыре части что бы в центре оказалась точка координат 0, то нам надо знать когда у нас будет -Х и +Х, -Y и +Y
    var w = (window.innerWidth / 2) - mouse_dx; // Вычисляем для x перемещения
    var h = (window.innerHeight / 2) - mouse_dy; // Вычисляем для y перемещения

    layer.map(function (key, value) { // Проходимся по всем элементам объекта
      var bottomPosition = ((window.innerHeight / 2) * (key / 100)); // Вычисляем на сколько нам надо опустить вниз наш слой что бы при перемещении по Y не видно было краев
      var widthPosition = w * (key / 100); // Вычисляем коофицент смешения по X
      var heightPosition = h * (key / 100); // Вычисляем коофицент смешения по Y
      $(value).css({ // Выбираем элемент и добавляем css
        'bottom': '-' + bottomPosition + 'px', // Выставляем bottom
        'transform': 'translate3d(' + widthPosition + 'px, ' + heightPosition + 'px, 0)', // Используем translate3d для более лучшего рендеринга на странице
      });
    });
  });
});
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

