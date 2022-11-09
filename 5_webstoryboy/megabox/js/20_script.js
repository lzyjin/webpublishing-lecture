
// 공지사항 탭메뉴
const notice = $('.notice');
const tab = $('.notice>ul>li>a');

// notice.find('ul li ul').hide();
// notice.find('ul li.active ul').show();
// 나는 이거 css로 처리함
// ->
// html에서 첫 번째 li에 active 클래스를 미리 넣어놓음
// .notice>ul>li ul { display: none; }
// .notice>ul>li.active ul { display: block; }

const activeTabContent = function (e) {
    e.preventDefault();
    const target = $(this);
    target.parent().addClass('active');
    target.parent().siblings().removeClass('active');
};

// ❗️ 핵중요!!!
// tab.click(activeTabContent); // 이것만 하면 탭으로 이동할 때 두번쨔 탭에 포커스 됐을때 두번째에 해당하는 컨텐츠가 안보인다.
tab.click(activeTabContent).focus(activeTabContent); // 이렇게 하면 탭으로 이동해도 잘 이동되어 웹표준 준수할 수 있다.



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
