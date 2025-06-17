
import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footerlogo from "../Images/Logo/footer-logo.svg";
import iconarrow from "../Images/Icons/icon-arrow.svg";
import outfitlogo from "../Images/Logo/outfit-logo.svg";
import coppalogo from "../Images/Logo/coppa-logo.png";
import cdprlogo from "../Images/Logo/cdpr.png";
import greensun from "../Images/Bg/sun-green.svg";
import redsun from "../Images/Bg/sun-red.svg";
function Footer() {
    return (
        <>
            <div className="footer">
                <span className="sunspan-green scroll-anime" style={{ backgroundImage: `url(${greensun})` }} />
                <span className="sunspan-red scroll-anime" style={{ backgroundImage: `url(${redsun})` }} />
                <div className="footer-inner">
                    <div className="footer-head">
                        <Link to="/" className="footer-logo">
                            <Image src={Footerlogo} alt="Logo" />
                        </Link>
                        <ul className="footer-btn-list m-0">
                            <li>
                                <Link className="reg-btn red" to="/">Talk <span className="fa fa-plus" /></Link>
                            </li>
                            <li>
                                <Link className="reg-btn red" to="/">Watch <span className="fa fa-plus" /></Link>
                            </li>
                        </ul>
                    </div>
                    <hr />
                    <div className="footer-mid">
                        <Row>
                            <Col xl="4" lg="5" md="6">
                                <ul className="footer-link-list">
                                    <li><Link to="/">Story & Characters</Link></li>
                                    <li><Link to="/">Family Guide</Link></li>
                                    <li><Link to="/">Support</Link></li>
                                </ul>
                            </Col>
                       
                        </Row>
                    </div>
                    <hr />
                </div>

            </div>
        </>
    );
}
export default Footer;