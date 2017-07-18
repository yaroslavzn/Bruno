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

    // Interier Slider
    $('.interier__slide-list').slick({
        dots: true
    });

    // Category Slider
    $('.category__list').slick({
        slidesToShow: 4
    });

    // Contacts Popup
    var openPopupBtn = $('.contacts-btn');
    var contactsPopup = $('.contacts-popup');

    openPopupBtn.on('click', function(e) {
        e.preventDefault();
        contactsPopup.toggleClass('contacts-popup--active');
    });

    openPopupBtn.on('click', function(e) {
        e.preventDefault();
        openPopupBtn.toggleClass('contacts-btn--active');
    });

    //  Mobile Menu

    var menuBtn = $('.menu-btn');
    var menu = $('.nav__list');

    menuBtn.on('click', function (e) {
        e.preventDefault();
        menu.toggleClass('nav__list--active');
        menuBtn.toggleClass('menu-btn--close');
    })
});
