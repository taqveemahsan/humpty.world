import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Image } from "react-bootstrap";
import Header from '../Components/Header';
import orangediamond from "../Images/Bg/diamond.svg";
import yellowsun from "../Images/Bg/sun-yellow.svg";
import humptyasrtronot from "../Images/Posts/Humpty-astronot.png";
import { Link } from 'react-router-dom';
import PostSlider from '../Components/PostSlider';
import { FriendshipMarquee, TextMarquee } from '../Components/Marquee';
import CardSlider from '../Components/CardSlider';
import JoinFriendList from '../Components/JoinFriendList';
import VideoSection from '../Components/VideoSection.tsx';
// import { ReadyTalkPost } from '../Components/ReadyTalkPost';
function Home() {
    const [animatedElements, setAnimatedElements] = useState([]);

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

            {/* Redy Talk Panel */}
            <Container fluid className='ready-talk-section'>
                <Container>
                    <Row>
                        <Col xl="12" lg="12" md="12" sm="12" className='text-center scroll-anime top' id='series'>
                            <h2>Start Your AI Journey with <br /> Humpty Today!</h2>
                            <div className='btn-pnl'>
                                <Link className='reg-btn red text-uppercase' to="/">Let's go <span className='fa fa-arrow-right' /></Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className='general-post-list scroll-anime right'>
                    <PostSlider />
                </div>
            </Container>
            {/* Video section */}


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
            </Container>
           

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
                        <h4>The hum(py) Dump</h4>
                        <div className='spacer-30' />
                        <span className='red-span' to="/">Tokens</span>
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