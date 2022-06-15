$(document).ready(function() {
    // Hero Swiper kod kısmı
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
    // Hero Swiper kod kısmı



    // What We Do Swiper filtreleme ve kaydırma kısmı
    var whatWeDoSwiper = new Swiper(".whatWeDoSwiper", {
        speed: 1000,
        slidersPerView: 1,
        spaceBetween: 200,
        navigation: {
            nextEl: ".what-btn-next",
            prevEl: ".what-btn-prev",
        }
    });
    $("#whatWeDo ol li").click(function(e) {
        e.preventDefault();
        $("#whatWeDo ol li").removeClass("active");
        $(this).addClass("active");
        let filteredValue = $(this).attr("filter");


        $(".whatWeDoSwiper .swiper-slide").each(function(index, element) {
            // element == this
            if (!$(element).hasClass(filteredValue)) {
                $(element).addClass("remove");
            } else {
                $(element).removeClass("remove");
            }
        });
        whatWeDoSwiper.destroy();
        whatWeDoSwiper = new Swiper(".whatWeDoSwiper", {
            speed: 1000,
            slidersPerView: 1,
            spaceBetween: 200,
            navigation: {
                nextEl: ".what-btn-next",
                prevEl: ".what-btn-prev",
            }
        });

    });

    // What We Do Swiper filtreleme ve kaydırma kısmı


    //What else we do slider kısmı
    var whatElseWeDoSwiper = new Swiper(".whatElseWeDoSwiper", {
        slidesPerView: 1,
        speed: 1000,
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: ".what-else-btn-next",
            prevEl: ".what-else-btn-prev",
        },
        autoplay: {
            delay: 5000,
        },
        breakpoints: {

            499: {
                slidesPerView: 2,
                spaceBetweenSlides: 30
            },
            1000: {
                slidesPerView: 3,
                spaceBetweenSlides: 40
            },

            1200: {
                slidesPerView: 4,
                spaceBetweenSlides: 40
            },
            1400: {
                slidesPerView: 5,
                spaceBetweenSlides: 40
            }
        }
    });
    //What else we do slider kısmı



    //Blog swiper kısmı
    var blogSwiper = new Swiper(".blogSwiper", {
        slidesPerView: 1,
        speed: 1000,
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: ".blog-btn-next",
            prevEl: ".blog-btn-prev",
        },
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {

            499: {
                slidesPerView: 1,
                spaceBetweenSlides: 30
            },
            800: {
                slidesPerView: 2,
                spaceBetweenSlides: 40
            },

            1200: {
                slidesPerView: 3,
                spaceBetweenSlides: 40
            },

        }
    });
    //Blog swiper kısmı

     //Blog Detail swiper kısmı
     var blogDetail = new Swiper(".blogDetailSwiper", {
        slidesPerView: 1,
        speed: 1000,
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: ".blog-Detail-btn-next",
            prevEl: ".blog-Detail-btn-prev",
        },
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

    });
    //Blog Detail swiper kısmı



});