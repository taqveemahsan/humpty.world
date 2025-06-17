import React, { useRef, useState } from 'react';
import { Button, Image } from 'react-bootstrap';
import Playicon from "../Images/Icons/Playicon.svg"

function VideoSection() {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
  
    const handlePlay = () => {
      setIsPlaying(true);
      videoRef.current?.play();
    };
    
    const handlePause = () => {
        setIsPlaying(false);
    };
    
    return (
        <section className="video-player-section">
            <div className="video-wrapper">
                <div className="ratio ratio-16x9">
                    <video 
                        controls 
                        className="w-100 rounded-4"  
                        ref={videoRef} 
                        onPause={handlePause}
                        poster="https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    >
                        <source
                            src="https://humpty-ai.s3.us-east-005.backblazeb2.com/HumptyVerse+Teaser+To+be+continued.mp4"
                            type="video/mp4"
                        />
                        Your browser does not support the video tag.
                    </video>

                    {!isPlaying && (
                        <div className='video-overlay rounded-4'>
                            <Button className='play-button' onClick={handlePlay}>
                                <Image src={Playicon} alt="Play" />
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default VideoSection;