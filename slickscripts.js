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
     $('.projectsviewer').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.projects'
      });
    $('.projects').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: false,
        pauseOnHover: true,
        slidesToShow: 3,
        variableWidth: false,
        asNavFor: '.projectsviewer',
    });
});