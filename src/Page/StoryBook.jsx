import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Image, Dropdown } from "react-bootstrap";
import InnerHeader from '../Components/InnerHeader';
import humpty from "../Images/Posts/Humpty-red.png";
import drhumpty from "../Images/Posts/Humpty-doctor.png";
import prhumpty from "../Images/Posts/Humpty-singer.png";
import frhumpty from "../Images/Posts/Humpty-fire-fighter.png";
function StoryBook() {
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
            <InnerHeader />
            {/* Header Ends Here */}

            <Container fluid className='inner-content'>
                <Container>
                    <Row>
                        <Col xl="12" lg="12">
                            <Dropdown className='humpty-dropdown'>
                                <Dropdown.Toggle id="dropdown-basic">
                                    <div className='img-pnl'> <Image src={humpty} alt="humpty" /></div> Humpty Host
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1"><div className='user-pnl'><div className='img-pnl'> <Image src={drhumpty} alt="humpty" /></div> Dr. Humpty</div></Dropdown.Item>
                                    <Dropdown.Item href="#/action-1"><div className='user-pnl'><div className='img-pnl'> <Image src={prhumpty} alt="humpty" /></div> Humpty pop star</div></Dropdown.Item>
                                    <Dropdown.Item href="#/action-1"><div className='user-pnl'><div className='img-pnl'> <Image src={frhumpty} alt="humpty" /></div> Humpty Firefighter</div></Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <div className='spacer-50'/>
                            <div className='story-detial-pnl'>
                                <div className='img-pnl'>
                                    <Image src={humpty} alt="humpty" />
                                </div>
                                <div className='txt-pnl'>
                                    <h2>Heading <span>Goes here</span></h2>
                                    <h6>
                                        Lorem ipsum dolor sit amet consectetur. Pretium eros id elementum risus dui tempus. Lacus aliquet pulvinar fusce purus consectetur adipiscing purus feugiat amet. Amet tortor feugiat vulputate vel. Hendrerit felis vitae vel eget eu id. Vulputate morbi sed tempus ac. Penatibus a nisl ornare neque lectus. Sem tincidunt placerat pellentesque etiam odio tellus
                                    </h6>
                                    <h6>
                                        in. Eget eu tempus nec in feugiat magna turpis molestie.Vitae quis habitant varius et. Sed odio ac et sed ornare. Euismod ullamcorper tellus viverra elementum nisl.

                                    </h6>
                                    <h6>
                                        Ante a facilisis ut tincidunt eu turpis proin. Dictum mattis sodales morbi sed id. Feugiat nulla diam est nibh. Cras sed est nec eu diam lobortis eget ut quam. Enim nec commodo dui tempor in tristique purus sit. Tincidunt cursus volutpat tellus scelerisque.
                                    </h6>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>

        </>
    );
}
export default StoryBook; 