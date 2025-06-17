
import React from "react";
import { Image } from "react-bootstrap";
import Post1 from "../Images/Posts/Humpty-police.png";
import Post2 from "../Images/Posts/Humpty-doctor.png";
import Post3 from "../Images/Posts/Humpty-singer.png";
import Post4 from "../Images/Posts/Humpty-fire-fighter.png";
import Post5 from "../Images/Posts/Humpty-astronot.png";
import Post6 from "../Images/Posts/Humpty.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
function CardSlider() {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 992 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 991, min: 767 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 767, min: 0 },
            items: 1
        }
    };
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [

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
                <div className="px-2">
                    <Link to="/" className="card-post orange">
                        <Image src={Post1} alt="Post" />
                        <h3>Humpty <br />soldier</h3>
                    </Link>
                </div>
                <div className="px-2">
                    <Link to="/" className="card-post blue">
                        <Image src={Post2} alt="Post" />
                        <h3>Dr. Humpty</h3>
                    </Link>
                </div>

                <div className="px-2">
                    <Link to="/" className="card-post red active">
                        <Image src={Post6} alt="Post" />
                        <h3>Humpty<br />
                            Host</h3>
                    </Link>
                </div>
                <div className="px-2">
                    <Link to="/" className="card-post shit">
                        <Image src={Post4} alt="Post" />
                        <h3>Humpty <br /> Firefighter</h3>
                    </Link>
                </div>
                <div className="px-2">
                    <Link to="/" className="card-post sharp">
                        <Image src={Post5} alt="Post" />
                        <h3>Humpty<br />
                            Astronaut</h3>
                    </Link>
                </div>
                <div className="px-2">
                    <Link to="/" className="card-post orange">
                        <Image src={Post1} alt="Post" />
                        <h3>Humpty <br />soldier</h3>
                    </Link>
                </div>
                <div className="px-2">
                    <Link to="/" className="card-post blue">
                        <Image src={Post2} alt="Post" />
                        <h3>Dr. Humpty</h3>
                    </Link>
                </div>
                <div className="px-2">
                    <Link to="/" className="card-post purple active">
                        <Image src={Post3} alt="Post" />
                        <h3>Humpty<br />
                            pop star</h3>
                    </Link>
                </div>
                <div className="px-2">
                    <Link to="/" className="card-post shit">
                        <Image src={Post4} alt="Post" />
                        <h3>Humpty <br /> Firefighter</h3>
                    </Link>
                </div>
                <div className="px-2">
                    <Link to="/" className="card-post sharp">
                        <Image src={Post5} alt="Post" />
                        <h3>Humpty<br />
                            Astronaut</h3>
                    </Link>
                </div>
            </Slider >
        </>
    );
}
export default CardSlider;