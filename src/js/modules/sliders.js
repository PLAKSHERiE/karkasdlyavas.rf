import $ from "jquery";
import "slick-carousel-latest";

export default () => {
    $(".works__slider").slick({
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '470px',
        arrows: true,
        dots: false,
        prevArrow: $('.works__slider-btn.prev'),
        nextArrow: $('.works__slider-btn.next'),
        responsive: [
            {
                breakpoint: 1788,
                settings: {
                    centerPadding: '400px',
                },
            },
            {
                breakpoint: 1660,
                settings: {
                    centerPadding: '360px',
                },
            },
            {
                breakpoint: 1580,
                settings: {
                    centerPadding: '300px',
                },
            },
            {
                breakpoint: 1460,
                settings: {
                    centerPadding: '250px',
                },
            },
            {
                breakpoint: 1370,
                settings: {
                    centerPadding: '200px',
                },
            },
            {
                breakpoint: 1265,
                settings: {
                    centerPadding: '150px',
                },
            },
            {
                breakpoint: 1180,
                settings: {
                    centerPadding: '0px',
                },
            },
        ],
    });
};
