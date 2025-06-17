
import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import Post1 from "../Images/Posts/Humpty-police.png";
import Post2 from "../Images/Posts/Humpty-doctor.png";
import Post3 from "../Images/Posts/Humpty-singer.png";
import Post4 from "../Images/Posts/NewHumpty.png";
import Post5 from "../Images/Posts/Humpty-astronot.png";
import icontelegram from "../Images/Icons/icon-telegram.svg";
import iconx from "../Images/Icons/iconX.svg";
import iconeagle from "../Images/Icons/icon-eagle.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
function JoinFriendList() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(prevIndex => (prevIndex + 1) % 5); // because you have 5 <li>s
        }, 5000);

        return () => clearInterval(interval); // cleanup
    }, []);
    return (
        <>
            <ul className="Join-list">
                <span><Link target="_blank" to="/"><Image src={iconx} alt="Social Icon" /></Link></span>
                <span><Link target="_blank" to="/"><Image src={iconeagle} alt="Social Icon" /></Link></span>
                <span><Link target="_blank" to="/"><Image src={icontelegram} alt="Social Icon" /></Link></span>
                <li className={activeIndex === 0 ? "active" : ""}>
                    <Image src={Post1} alt="Post" />
                </li>
                <li className={activeIndex === 1 ? "active" : ""}>
                    <Image src={Post2} alt="Post" />
                </li>
                <li className={activeIndex === 2 ? "active" : ""}>
                    <Image src={Post4} alt="Post" />
                </li>
                <li className={activeIndex === 3 ? "active" : ""}>
                    <Image src={Post3} alt="Post" />
                </li>
                <li className={activeIndex === 4 ? "active" : ""}>
                    <Image src={Post5} alt="Post" />
                </li>
            </ul>
        </>
    );
}
export default JoinFriendList;