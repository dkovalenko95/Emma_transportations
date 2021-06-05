window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu__list'),
    menuItem = document.querySelectorAll('.menu__item'),
    hamburger = document.querySelector('.menu__hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('menu__hamburger_active');
        menu.classList.toggle('menu__list_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('menu__hamburger_active');
            menu.classList.toggle('menu__list_active');
        });
    });
});

// Carousel - slick-slider

$(document).ready(function() {
    $('.carousel__slider').slick({
        arrows: true,
        dots: false,
        speed: 1200,
        slidesToShow: 2,
        slidesToScroll: 2,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                dots: true
            }            
        },
        {
            breakpoint: 576,
            settings: {
                arrows: false,
                dots: true,
                slidesToShow: 1,
                slidesToScroll: 1,
            }            
        }
        ]
    });
});
