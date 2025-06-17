import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Image, Modal, Button } from "react-bootstrap";
import Header from '../Components/Header';
import orangediamond from "../Images/Bg/diamond.svg";
import yellowsun from "../Images/Bg/sun-yellow.svg";
import humptyasrtronot from "../Images/Posts/Humpty-astronot.png";
import aithatBg from "../Images/Bg/Aithat.gif";
import groupIcon from "../Images/Icons/Group.svg";
import aiVideoGenIcon from "../Images/Icons/ai_video_generator.svg";
import group1Icon from "../Images/Icons/Group-1.svg";
import { Link } from 'react-router-dom';
import PostSlider from '../Components/PostSlider';
import { FriendshipMarquee, TextMarquee } from '../Components/Marquee';
import CardSlider from '../Components/CardSlider';
import JoinFriendList from '../Components/JoinFriendList';
import VideoSection from '../Components/VideoSection.tsx';
import ocImg1 from "../Images/OurCreations/Image 01.jpg";
import ocImg2 from "../Images/OurCreations/Image 02.jpg";
import ocImg3 from "../Images/OurCreations/Image 03.jpg";
import ocImg4 from "../Images/OurCreations/Image 04.jpg";
import ocImg5 from "../Images/OurCreations/Image 05.jpg";
import ocImg6 from "../Images/OurCreations/Image 06.jpg";
import ocImg7 from "../Images/OurCreations/Image 07.jpg";
import ocImg8 from "../Images/OurCreations/Image 08.jpg";
import ocImg9 from "../Images/OurCreations/Image 09.jpg";
import ocImg10 from "../Images/OurCreations/Image 10.jpg";
import ocImg11 from "../Images/OurCreations/Img 11.jpeg";
import ocImg12 from "../Images/OurCreations/Image 12.jpg";
import ocGif1 from "../Images/OurCreations/Gif 01.gif";
import ocGif2 from "../Images/OurCreations/Gif 02.gif";
import ocGif3 from "../Images/OurCreations/Gif 03.gif";
import ocGif4 from "../Images/OurCreations/Gif 04.gif";
import ocGif5 from "../Images/OurCreations/Gif 05.gif";
import ocGif6 from "../Images/OurCreations/Gif 06.gif";
import ocGif7 from "../Images/OurCreations/gif 07.gif";
import ocGif8 from "../Images/OurCreations/Gif 08.gif";
import ocGif9 from "../Images/OurCreations/Gif 09.gif";
import ocGif10 from "../Images/OurCreations/Gif 10.gif";
import ocGif11 from "../Images/OurCreations/Gif 11.gif";
import ocGif12 from "../Images/OurCreations/Gif 12.gif";
// import { ReadyTalkPost } from '../Components/ReadyTalkPost';
function Home() {
    const [animatedElements, setAnimatedElements] = useState([]);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [showVideo, setShowVideo] = useState(false);

    // Function to check if an element is in the viewport
    function isElementInViewport(elem) {
        const scroll = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const elemTop = elem.getBoundingClientRect().top + scroll;

        return elemTop - scroll < windowHeight;
    }

    // Function to add the "anime" class to sections in the viewport
    function animateSections() {
        const elementsToAnimate = document.querySelectorAll('.scroll-anime');
        const elementsInViewport = [];

        elementsToAnimate.forEach((elem) => {
            if (isElementInViewport(elem)) {
                elem.classList.add('anime');
                elementsInViewport.push(elem);
            }
        });

        setAnimatedElements(elementsInViewport);
    }

    const creations = [
        { img: ocImg1, gif: ocGif1, large: true },
        { img: ocImg2, gif: ocGif2 },
        { img: ocImg3, gif: ocGif3 },
        { img: ocImg4, gif: ocGif4 },
        { img: ocImg5, gif: ocGif5 },
        { img: ocImg6, gif: ocGif6 },
        { img: ocImg7, gif: ocGif7 },
        { img: ocImg8, gif: ocGif8 },
        { img: ocImg9, gif: ocGif9 },
        { img: ocImg10, gif: ocGif10 },
        { img: ocImg11, gif: ocGif11 },
        { img: ocImg12, gif: ocGif12 }
    ];

    const handleCardClick = () => {
        window.open('https://www.youtube.com/@HumptyAI', '_blank');
    };
    const handleCloseModal = () => setShowVideo(false);

    useEffect(() => {
        // Initial check on page load
        animateSections();

        // Add scroll event listener
        window.addEventListener('scroll', animateSections);

        // Cleanup on unmount
        return () => {
            window.removeEventListener('scroll', animateSections);
        };
    }, []);
    return (
        <>
            {/* Header Starts Here */}
            <Header />
            {/* Header Ends Here */}

            {/* AI That Section */}
            <Container fluid className='ai-that-section'>
                <div className="bg-layer" style={{ backgroundImage: `url(${aithatBg})` }} />
                <Container>
                    <Row>
                        <Col xl="12" lg="12" md="12" sm="12" className='text-center scroll-anime top'>
                            <h2 className='ai-that-title'>AI THAT</h2>
                            <h3 className='ai-that-subtitle'>SPEAKS, SEES, AND CREATES.</h3>
                            <div className='social-icons'>
                                <div className='social-icon'>
                                    <Image src={groupIcon} alt='Group Icon' />
                                </div>
                                <div className='social-icon'>
                                    <Image src={aiVideoGenIcon} alt='AI Video Generator Icon' />
                                </div>
                                <div className='social-icon'>
                                    <Image src={group1Icon} alt='Group 1 Icon' />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>

            <Modal
                show={showVideo}
                onHide={handleCloseModal}
                centered
                size="lg"
                className="iframe-modal"
            >
                <Modal.Body className="p-0">
                    <div className="ratio ratio-16x9">
                        <iframe
                            src="https://www.youtube.com/embed/sFNQ5Z9yasE?si=VeJNaZ_E85Wqw4bI"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        />
                    </div>
                </Modal.Body>
                <Button variant="secondary" className="close-btn" onClick={handleCloseModal}>
                    Close
                </Button>
            </Modal>

                        {/* Our Creations Section */}
                        <Container fluid className='our-creations-section'>
                <Container>
                    <Row>
                        <Col xl="12" lg="12" md="12" sm="12" className='scroll-anime top'>
                            <h4 className='section-title'>Our Creations</h4>
                            <div className='creations-grid'>
                                {creations.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`creation-item ${item.large ? 'large' : ''}`}
                                        onMouseEnter={() => setHoveredIndex(index)}
                                        onMouseLeave={() => setHoveredIndex(null)}
                                        onClick={handleCardClick}
                                    >
                                        <img src={hoveredIndex === index ? item.gif : item.img} alt={`Creation ${index + 1}`} loading='lazy' />
                                    </div>
                                ))}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>


            {/* Redy Talk Panel */}
            {/* <Container fluid className='ready-talk-section'>
                <Container>
                    <Row>
                        <Col xl="12" lg="12" md="12" sm="12" className='text-center scroll-anime top' >
                            <h2>Start Your AI Journey with <br /> Humpty Today!</h2>
                            <div className='btn-pnl'>
                                <a className='reg-btn red text-uppercase'  href="https://app.humpty.world" target="_blank" >Let's go <span className='fa fa-arrow-right' /></a>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className='general-post-list scroll-anime right'>
                    <PostSlider />
                </div>
            </Container> */}
            {/* Video section */}

{/* 
            <Container fluid className='video-section'>
                <Container>
                    <Row>
                        <Col xl="12" lg="12" md="12" sm="12" className='text-center scroll-anime top'>
                            <h2 className='mainheaing'>Humptyverse Teaser</h2>
                            <div className='btn-pnl py-5'>
                                <div className='reg-btn2 red text-uppercase' >Watch Now </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className='general-post-list scroll-anime right'>
                <Container>
                <Row>
                  <VideoSection />
                  </Row>
                  </Container>
                </div>
            </Container> */}
           

            {/* Talk To Humpty Panel */}
            {/* <Container fluid className='Talkto-humpty'>
                <div className='general-post-list scroll-anime top'>
                    <Col xl="12" lg="12" md="12" sm="12" className='scroll-anime top'>
                        <h5>Talk to humpty</h5>
                        <div className='spacer-30' />
                    </Col>
                    <PostSlider />
                    <div className='spacer-50' />
                    <Link className='reg-btn white' to="/">Let's go <span className='fa fa-plus' /></Link>
                </div>
            </Container> */}
            {/* Talk To Humpty Panel */}

            {/* Hello Social Section */}
            <Container fluid className='hello-social-section'>
                <span className="yellow-sun scroll-anime" style={{ backgroundImage: `url(${yellowsun})` }} />
                <span className="orange-diamond scroll-anime" style={{ backgroundImage: `url(${orangediamond})` }} />
                <TextMarquee />
                <Container>
                    <Row>
                        <Col xl="12" lg="12" className='scroll-anime top'>
                            <JoinFriendList />
                        </Col>

                        <Col xl="12" lg="12" md="12" sm="12" className='join-friend-pnl text-center scroll-anime top'>
                            <h2>What is Humpty AI?</h2>
                            <div className='spacer-30' />
                            {/* <h5 className='fw-semibold text-capitalize'>Ready for the egg-straordinary squad?</h5>
                            <div className='spacer-20' /> */}
                            <h3 className='fw-semibold'>Humpty AI is an AI-powered cartoon character that creates its own web series and vlogs — and gives the same creative tools to users. With features like text-to-speech, dubbing, talking avatars, and prompt-to-video, anyone can bring their ideas to life. Humpty AI is where entertainment meets creation.</h3>
                            <div className='spacer-50' />
                        </Col>
                        {/* <Col xl="6" lg="6" md="6" sm="12">
                            <div className='social-media-post orange scroll-anime'>
                                <Image src={humptysinger} alt="Humpty" />
                                <span><Link target="_blank" to="/"><Image src={icontiktok} alt="Social Icon" /></Link></span>
                                <span><Link target="_blank" to="/"><Image src={iconplay} alt="Social Icon" /></Link></span>
                                <span><Link target="_blank" to="/"><Image src={iconinstagram} alt="Social Icon" /></Link></span>
                                <span><Link target="_blank" to="/"><Image src={iconfacebook} alt="Social Icon" /></Link></span>
                            </div>
                        </Col>
                        <Col xl="6" lg="6" md="6" sm="12">
                            <div className='social-media-post scroll-anime'>
                                <Image src={humptydoctor} alt="Humpty" />
                                <span><Link target="_blank" to="/"><Image src={icontiktok} alt="Social Icon" /></Link></span>
                                <span><Link target="_blank" to="/"><Image src={iconplay} alt="Social Icon" /></Link></span>
                                <span><Link target="_blank" to="/"><Image src={iconinstagram} alt="Social Icon" /></Link></span>
                                <span><Link target="_blank" to="/"><Image src={iconfacebook} alt="Social Icon" /></Link></span>
                            </div>
                        </Col> */}
                    </Row>
                </Container>
            </Container>
             {/* Join The Freinds Panel */}
             <Container fluid className='Join-Friendship-pnl'>
                <div className='general-post-list scroll-anime top'>
                    <Col xl={{ span: 4, offset: 4 }} lg={{ span: 6, offset: 3 }} md={{ span: 8, offset: 2 }} sm={{ span: 8, offset: 2 }} xs={{ span: 10, offset: 1 }} className='scroll-anime top'>
                        <div className='astronot-animation'>
                            <span>My spaceship is landing soon, and I can’t wait to crack open a chat with you!</span>
                            <div className='img-pnl'>
                                <Image src={humptyasrtronot} alt="Humpty" />
                            </div>
                            <span>Coming in hot from space!</span>
                        </div>
                    </Col>
                </div>
                <div className='scroll-anime right'>
                    <FriendshipMarquee />
                </div>
            </Container>
            {/* Join The Freinds Panel */}
            {/* Hello Social Section */}
                 {/* The Humpty Dumpty Panel */}
                 <Container fluid className='the-humpty-dumpty-pnl'>
                <div className='scroll-anime top'>
                    <Col xl="12" className='text-center scroll-anime top'>
                        <h4 id='series'>The hum(py) Pump</h4>
                        <div className='spacer-30' />
                        <span className='red-span' to="/">Watch</span>
                    </Col>
                    <div className='card-slider-container scroll-anime left'>
                        <CardSlider />
                    </div>
                </div>
            </Container>
            {/* The Humpty Dumpty Panel */}


        </>
    );
}
export default Home; 