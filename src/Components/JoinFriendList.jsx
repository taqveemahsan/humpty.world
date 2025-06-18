
import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import Post1 from "../Images/Posts/Humpty-police.png";
import Post2 from "../Images/Posts/Humpty-doctor.png";
import Post3 from "../Images/Posts/Humpty-singer.png";
import Post4 from "../Images/Posts/NewHumpty.png";
import Post5 from "../Images/Posts/Humpty-astronot.png";
import icontelegram from "../Images/Icons/icon-telegram.svg";
import iconx from "../Images/Icons/iconX.svg";
import linktree from "../Images/Posts/Linktree.png";
import insta from "../Images/Posts/insta.svg";
import facebook from "../Images/Posts/facebook.svg";
import tiktok from "../Images/Icons/icon-tiktok.svg";
import youtube from "../Images/Icons/icon-youtube.svg";

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
               <span><Link target="_blank" to="https://www.instagram.com/humpty.world/"><Image src={insta} alt="Social Icon" /></Link></span>
                <span><Link target="_blank" to="https://x.com/HumptyAi"><Image src={iconx} alt="Social Icon" /></Link></span>
                <span><Link target="_blank" to="https://linktr.ee/humptyai"><Image src={linktree} alt="Social Icon" /></Link></span>
                <span><Link target="_blank" to="https://t.me/humptyai"><Image src={icontelegram} alt="Social Icon" /></Link></span>
                <span><Link target="_blank" to="https://www.facebook.com/people/Humpty-AI/pfbid0fQbAYL3maqJ7vrXEanMSBxjL9oodxgtZFeKqHtRdggE4mzSMJ6poyvhAS11NVeAkl"><Image src={facebook} alt="Social Icon" /></Link></span>
                <span><Link target="_blank" to="https://www.tiktok.com/@humpty.world"><Image src={tiktok} alt="Social Icon" /></Link></span>
                <span><Link target="_blank" to="https://www.youtube.com/@HumptyAI"><Image src={youtube} alt="Social Icon" /></Link></span>

                
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