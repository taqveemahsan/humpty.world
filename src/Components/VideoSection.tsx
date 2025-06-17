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
    const handlePuase = () => {
        setIsPlaying(false);
      };
  return (
    <section className="text-center  ">
        <div className="ratio ratio-16x9">
          <video controls className="w-100 rounded-5"  ref={videoRef} onPause={handlePuase}>
            <source
              src="https://humpty-ai.s3.us-east-005.backblazeb2.com/HumptyVerse+Teaser+To+be+continued.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

        {!isPlaying && <div className='overlayvideo rounded-5'>
            <Button className='play-btn' onClick={handlePlay}>
              <Image src={Playicon} alt="Play" />
            </Button>
          </div>}
        </div>
  
    </section>
  );
}

export default VideoSection;
