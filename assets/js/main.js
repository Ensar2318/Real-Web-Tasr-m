$(document).ready(function() {
    var heroSwiper = new Swiper(".heroSwiper", {
        fadeEffect: { crossFade: true },
        virtualTranslate: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: true,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        speed: 1000,
        slidersPerView: 1,
        effect: "fade"
    });
});