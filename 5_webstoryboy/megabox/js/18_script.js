
// 영화차트 슬라이드
const swiper2 = new Swiper('.movie_chart .swiper', {
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1.5,
            spaceBetween: 15
        },
        // when window width is >= 768px
        768: {
            slidesPerView: 3,
            spaceBetween: 15
        },
        // when window width is >= 960px
        960: {
            slidesPerView: 3.3,
            spaceBetween: 15
        }
    },

    slidesPerView: 4,
    spaceBetween: 15,
    autoplay: {
        delay: 3000,
    },

    direction: 'horizontal',

    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    scrollbar: {
        el: '.swiper-scrollbar',
    },
});


// 영화차트 탭메뉴
const movBtn = $('.movie_title > ul > li');
const movCont = $('.movie_chart .swiper');
movCont.hide().eq(0).show();
movBtn.click(function (e) {
    e.preventDefault();
    const index = $(this).index();
    $(this).addClass('active').siblings().removeClass('active');
    movCont.eq(index).show();
    movCont.eq(index).siblings().hide();
});


// 배너 슬라이드
const swiper = new Swiper('.banner .swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});
