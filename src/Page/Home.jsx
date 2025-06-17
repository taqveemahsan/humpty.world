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

            {/* Hero Content Section */}
            <Container fluid className='hero-content-section'>
                <Container>
                    <Row>
                        <Col xl="12" lg="12" md="12" sm="12" className='text-center scroll-anime top'>
                            <div className='hero-content'>
                                <h2 className='hero-title'>Meet Humpty AI</h2>
                                <p className='hero-subtitle'>The AI-powered cartoon character creating web series, vlogs, and giving you the same creative tools</p>
                                <div className='hero-features'>
                                    <div className='feature-tag'>Text-to-Speech</div>
                                    <div className='feature-tag'>Dubbing</div>
                                    <div className='feature-tag'>Voice Cloning</div>
                                    <div className='feature-tag'>Talking Avatars</div>
                                </div>
                                <div className='btn-pnl'>
                                    <Link className='reg-btn red text-uppercase' to="https://app.humpty.world">Try Humpty AI <span className='fa fa-arrow-right' /></Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>

            {/* AI Features Section */}
            <Container fluid className='ai-features-section'>
                <Container>
                    <Row>
                        <Col xl="12" lg="12" md="12" sm="12" className='text-center scroll-anime top' id='series'>
                            <h2>AI-Powered Creative Tools</h2>
                            <p className='section-subtitle'>Everything you need to create amazing content with AI</p>
                        </Col>
                    </Row>
                </Container>
                <div className='features-slider scroll-anime right'>
                    <PostSlider />
                </div>
            </Container>

            {/* Video Showcase Section */}
            <Container fluid className='video-showcase-section'>
                <Container>
                    <Row>
                        <Col xl="12" lg="12" md="12" sm="12" className='text-center scroll-anime top'>
                            <h2 className='section-title'>Watch Humptyverse</h2>
                            <p className='section-subtitle'>Experience the world of Humpty AI through our original series</p>
                        </Col>
                    </Row>
                    <Row className='video-container'>
                        <Col xl="12" lg="12" md="12" sm="12">
                            <VideoSection />
                        </Col>
                    </Row>
                </Container>
            </Container>

            {/* Characters Section */}
            <Container fluid className='characters-section'>
                <Container>
                    <Row>
                        <Col xl="12" lg="12" md="12" sm="12" className='text-center scroll-anime top'>
                            <h2>Meet the Characters</h2>
                            <p className='section-subtitle'>Discover Humpty's different personalities and adventures</p>
                        </Col>
                    </Row>
                </Container>
                <div className='characters-slider scroll-anime left'>
                    <CardSlider />
                </div>
            </Container>

            {/* About Section */}
            <Container fluid className='about-section'>
                <span className="yellow-sun scroll-anime" style={{ backgroundImage: `url(${yellowsun})` }} />
                <span className="orange-diamond scroll-anime" style={{ backgroundImage: `url(${orangediamond})` }} />
                <TextMarquee />
                <Container>
                    <Row>
                        <Col xl="12" lg="12" className='scroll-anime top'>
                            <JoinFriendList />
                        </Col>
                        <Col xl="12" lg="12" md="12" sm="12" className='about-content text-center scroll-anime top'>
                            <h2>What is Humpty AI?</h2>
                            <div className='spacer-30' />
                            <h3 className='about-description'>Humpty AI is an AI-powered cartoon character that creates its own web series and vlogs — and gives the same creative tools to users. With features like text-to-speech, dubbing, talking avatars, and prompt-to-video, anyone can bring their ideas to life. Humpty AI is where entertainment meets creation.</h3>
                            <div className='spacer-50' />
                            <div className='cta-buttons'>
                                <Link className='reg-btn red' to="https://app.humpty.world">Start Creating <span className='fa fa-arrow-right' /></Link>
                                <Link className='reg-btn white' to="/#series">Watch Series <span className='fa fa-play' /></Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>

            {/* Coming Soon Section */}
            <Container fluid className='coming-soon-section'>
                <div className='coming-soon-content scroll-anime top'>
                    <Col xl={{ span: 6, offset: 3 }} lg={{ span: 8, offset: 2 }} md={{ span: 10, offset: 1 }} sm={{ span: 10, offset: 1 }} xs={{ span: 12 }} className='text-center'>
                        <div className='astronot-animation'>
                            <span>My spaceship is landing soon, and I can't wait to crack open a chat with you!</span>
                            <div className='img-pnl'>
                                <Image src={humptyasrtronot} alt="Humpty Astronaut" />
                            </div>
                            <span>Coming in hot from space!</span>
                        </div>
                    </Col>
                </div>
                <div className='scroll-anime right'>
                    <FriendshipMarquee />
                </div>
            </Container>
        </>
    );
}

export default Home;