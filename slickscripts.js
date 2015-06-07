$(document).ready(function() {
    $('.titlescroll').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: false,
        pauseOnHover: false,
        slidesToShow: 1,
        variableWidth: false,
    });
    $('.projects').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: false,
        pauseOnHover: false,
        slidesToShow: 3,
        variableWidth: false,
    });
});