import React, { useState, useEffect } from "react";
import Heroimg from "../Images/Bg/Hero-1.jpg";
function InnerHeader() {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimate(true);
        }, 1600); // 1000 milliseconds = 1 second

        return () => clearTimeout(timer); // Clean up the timer on component unmount
    }, []);
    return (
        <>
            <header className="inner-header">
                <div className="bg-layer" style={{ backgroundImage: `url(${Heroimg})` }} />
                <div className="text-cntnr">
                    <div className={`text-cntnr-inner ${animate ? 'animewidth' : ''}`}>
                        <h1>HUMPTY <span>Story</span></h1>
                    </div>
                </div>
            </header>
        </>
    );
}
export default InnerHeader;