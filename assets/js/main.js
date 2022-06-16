$(document).ready(function() {

    // Mobile navclick 
    $(".navbar-toggle").click(function(e) {
        e.preventDefault();
        $("#header").toggleClass("mobile");
    });


    // Hero Swiper kod kısmı
    var heroSwiper = new Swiper(".heroSwiper", {
        fadeEffect: { crossFade: true },
        virtualTranslate: true,
        autoplay: {
            delay: 5000,
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

    // bizi secenler kod kısmı
    var biziSecenlerSwiper = new Swiper(".biziSecenlerSwiper", {
        slidesPerView: 1,
        slidesPerColumnFill: 'column',
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
        breakpoints: {

            299: {
                slidesPerView: 2,
                spaceBetweenSlides: 30
            },
            500: {
                slidesPerView: 3,
                spaceBetweenSlides: 40
            },

            800: {
                slidesPerView: 4,
                spaceBetweenSlides: 40
            },

        }

    });
    // bizi secenler kod kısmı


    // References.html referans filtreleme ve ISOTOPE kısmı

    //  İsotope tanımlama
    $refIso = $('.referencesIsotope').isotope({
        itemSelector: '.col-12',
        filter: ".ilksira"
    });


    $("#references ol li").click(function(e) {
        e.preventDefault();
        $("#references ol li").removeClass("active");
        $(this).addClass("active");
        let filteredValue = $(this).attr("filter");
        $refIso.isotope({
            filter: filteredValue
        });
    });


    $("#references .all-product-btn").click(function(e) {
        e.preventDefault();
        $refIso.isotope({
            filter: "*"
        });
    });


    // References Details diğer işler slider tanımlama
    var refDigerSwiper = new Swiper(".refDigerSwiper", {
        slidesPerView: 1,
        slidesPerColumnFill: 'column',
        speed: 1000,
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: ".refD-btn-next",
            prevEl: ".refD-btn-prev"
        },
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            780: {
                slidesPerView: 2,
                spaceBetweenSlides: 40
            },

            1200: {
                slidesPerView: 3,
                spaceBetweenSlides: 40
            },

        }

    });


    // About us slider tanımlama
    var aboutUsSwiper = new Swiper(".aboutUsSwiper", {
        slidesPerView: 1,
        speed: 1000,
        spaceBetween: 30,
        autoplay: {
            delay: 5000,
        },
        watchSlidesVisibility: true,
        centeredSlides: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        }

    });


    // services.html services filtreleme ve ISOTOPE kısmı

    //  İsotope tanımlama
    $refIso = $('.servicesIsotope').isotope({
        itemSelector: '.col-xl-4',
        filter: ".ilksira"
    });


    $("#services ol li").click(function(e) {
        e.preventDefault();
        $("#services ol li").removeClass("active");
        $(this).addClass("active");
        let filteredValue = $(this).attr("filter");
        $refIso.isotope({
            filter: filteredValue
        });
    });


    $("#services .all-product-btn").click(function(e) {
        e.preventDefault();
        $refIso.isotope({
            filter: "*"
        });
    });

    
    // Services-Details slider tanımlama
    var aboutUsSwiper = new Swiper(".servicesDetailSwiper", {
        slidesPerView: 1,
        speed: 1000,
        spaceBetween: 30,
        autoplay: {
            delay: 5000,
        },
        watchSlidesVisibility: true,
        centeredSlides: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        }

    });

});