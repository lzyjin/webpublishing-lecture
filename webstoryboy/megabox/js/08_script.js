
// 영화차트 탭메뉴
const movBtn = $('.movie_title > ul > li');
const movCont = $('.movie_chart .chart_cont');
movCont.hide().eq(0).show();
movBtn.click(function (e) {
    e.preventDefault();
    const index = $(this).index();
    $(this).addClass('active').siblings().removeClass('active');
    movCont.eq(index).show();
    movCont.eq(index).siblings().hide();
});


// 배너 슬라이드
const swiper = new Swiper('.swiper', {
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
