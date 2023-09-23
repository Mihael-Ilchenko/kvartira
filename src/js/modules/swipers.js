const jkSwiper = new Swiper('.jk__swiper', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 15,
        },
        992: {
            slidesPerView: 2,
            spaceBetween: 50,
        }
    }

});

const cardModalSwiper = new Swiper('.card-modal__swiper', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        769: {
            slidesPerView: 4,
            spaceBetween: 45,
        }
    }


});

const questionsSwiper = new Swiper('.questions__swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoHeight: true,
    loop: true

});

const exampleSwiper = new Swiper('.example__swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoHeight: true,
    loop: true,
    slidesPerView: 3,
    spaceBetween: 45,

});