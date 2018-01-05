//Гамбургер-меню 
$('.hamburger-menu').click(function () {
    $(this).toggleClass('hamburger-menu_active');
    $('.overlay').toggleClass('overlay_open');
    $('body').toggleClass('body_block');
});
//   $('.nav__link').click(function(e){     
//     $('.hamburger-menu').removeClass('hamburger-menu_active');
//     $('body').removeClass('body_block'); 
//     $('.overlay').removeClass('overlay_open');    
//   });
//Google maps
var map;
var center = {
    lat: 55.74719815519332,
    lng: 37.628716296386756
};

function initMap() {

    map = new google.maps.Map(document.getElementById('map'), {
        center: center,
        zoom: 14,
        zoomControl: true,
        zoomControlOptions: {
            position: google.maps.ControlPosition.RIGHT_CENTER
        },
        // scaleControl: true,
        // scaleControlOptions: {
        //     position: google.maps.ControlPosition.LEFT_CENTER
        // },
        streetViewControl: true,
        streetViewControlOptions: {
            position: google.maps.ControlPosition.TOP_CENTER
        },
        styles: [{
                "featureType": "administrative",
                "elementType": "geometry",
                "stylers": [{
                    "visibility": "on"
                }]
            },
            {
                "featureType": "administrative",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#444444"
                }]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [{
                    "color": "#f2f2f2"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [{
                        "saturation": -100
                    },
                    {
                        "lightness": 45
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [{
                    "visibility": "simplified"
                }]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.icon",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [{
                        "color": "#2ecfc1"
                    },
                    {
                        "visibility": "on"
                    }
                ]
            }
        ]
    });
}
google.maps.event.addDomListener(window, 'load', initMap);

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