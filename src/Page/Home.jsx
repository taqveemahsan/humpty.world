import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Image } from "react-bootstrap";
import Header from '../Components/Header';
import orangediamond from "../Images/Bg/diamond.svg";
import yellowsun from "../Images/Bg/sun-yellow.svg";
import humptyasrtronot from "../Images/Posts/Humpty-astronot.png";
import aithatBg from "../Images/Bg/Aithat.gif";
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

            {/* AI That Section */}
            <Container fluid className='ai-that-section'>
                <div className="bg-layer" style={{ backgroundImage: `url(${aithatBg})` }} />
                <Container>
                    <Row>
                        <Col xl="12" lg="12" md="12" sm="12" className='text-center scroll-anime top'>
                            <h2 className='ai-that-title'>AI THAT</h2>
                            <h3 className='ai-that-subtitle'>SPEAKS, SEES, AND CREATES.</h3>
                            <div className='social-icons'>
                                <div className='social-icon discord'>
                                    <i className='fab fa-discord'></i>
                                </div>
                                <div className='social-icon twitter'>
                                    <i className='fab fa-twitter'></i>
                                </div>
                                <div className='social-icon telegram'>
                                    <i className='fab fa-telegram'></i>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>

                        {/* Our Creations Section */}
                        <Container fluid className='our-creations-section'>
                <Container>
                    <Row>
                        <Col xl="12" lg="12" md="12" sm="12" className='scroll-anime top'>
                            <h4 className='section-title'>Our Creations</h4>
                            <div className='creations-grid'>
                                <div className='creation-item large'>
                                    <img src="https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1" alt="Humpty Adventure" />
                                </div>
                                <div className='creation-item'>
                                    <img src="https://images.pexels.com/photos/4792728/pexels-photo-4792728.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1" alt="Humpty Character" />
                                </div>
                                <div className='creation-item'>
                                    <img src="https://images.pexels.com/photos/5428829/pexels-photo-5428829.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1" alt="Humpty World" />
                                </div>
                                <div className='creation-item'>
                                    <img src="https://images.pexels.com/photos/4792729/pexels-photo-4792729.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1" alt="Humpty Friends" />
                                </div>
                                <div className='creation-item'>
                                    <img src="https://images.pexels.com/photos/5428835/pexels-photo-5428835.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1" alt="Humpty Story" />
                                </div>
                                <div className='creation-item'>
                                    <img src="https://images.pexels.com/photos/4792730/pexels-photo-4792730.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1" alt="Humpty Magic" />
                                </div>
                                <div className='creation-item'>
                                    <img src="https://images.pexels.com/photos/5428834/pexels-photo-5428834.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1" alt="Humpty Universe" />
                                </div>
                                <div className='creation-item'>
                                    <img src="https://images.pexels.com/photos/4792731/pexels-photo-4792731.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1" alt="Humpty Dreams" />
                                </div>
                                <div className='creation-item'>
                                    <img src="https://images.pexels.com/photos/5428833/pexels-photo-5428833.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1" alt="Humpty Joy" />
                                </div>
                                <div className='creation-item'>
                                    <img src="https://images.pexels.com/photos/4792732/pexels-photo-4792732.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1" alt="Humpty Fun" />
                                </div>
                                <div className='creation-item'>
                                    <img src="https://images.pexels.com/photos/5428832/pexels-photo-5428832.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1" alt="Humpty Play" />
                                </div>
                                <div className='creation-item'>
                                    <img src="https://images.pexels.com/photos/4792733/pexels-photo-4792733.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1" alt="Humpty Learn" />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>


            {/* Redy Talk Panel */}
            {/* <Container fluid className='ready-talk-section'>
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