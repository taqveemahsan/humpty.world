import React from "react";
import { Image } from "react-bootstrap";
import Post1 from "../Images/Posts/teacher.png";
import Post3 from "../Images/Posts/humpty-series.png";

import Post2 from "../Images/Posts/Humpty.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";

function CardSlider() {
    const slides = [
        {
            id: 1,
            image: Post1,
            title: "Humpty <br /> Vlog",
            className: "orange active"
        },
        {
            id: 2,
            image: Post2,
            title: "Learn <br />with Humpty",
            className: "blue active"
        },
        {
            id: 3,
            image: Post3,
            title: "Humpty<br /> Series",
            className: "red active"
        },
       
    ];

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 2000,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: false,
                },
            },
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: false,
                },
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: false,
                },
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: false,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                },
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                },
            },
        ],
    };

    return (
        <>
            <Slider {...settings}>
                {slides.map((slide) => (
                    <div className="px-2" key={slide.id}>
                        <Link to="/" className={`card-post ${slide.className}`}>
                            <Image src={slide.image} alt="Post" />
                            <h3 dangerouslySetInnerHTML={{ __html: slide.title }} />
                        </Link>
                    </div>
                ))}
            </Slider>
        </>
    );
}
export default CardSlider;