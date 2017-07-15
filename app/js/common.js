$(document).ready(function () {
    // Header Slider
    $('.header__slide-list').slick({
        dots: true,
        infinite: false
    });

    // Section Team Slider
    $('.team__slider').slick({
        infinite: false
    });

    // Section Gallery Slider
    $('.gallery__list').slick({
        infinite: false,
        slidesToShow: 3
    });

});
