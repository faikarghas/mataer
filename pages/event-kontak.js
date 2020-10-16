import React,{useRef,useState,useEffect} from 'react'
import {Row,Col, Container} from 'react-bootstrap'
import Link from 'next/link'
import { motion, useViewportScroll } from "framer-motion"
import Slider from "react-slick";

import Menu from '../components/layout/menu'
import MenuAct from '../components/menuAction'


const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows:true
};


const EventKontak = () => {
    const refSlider = useRef(null)
    const { scrollY,scrollYProgress } = useViewportScroll()
    const [scrollActive , setScrollActive] = useState('')

    function _nextArrow(params) {
        refSlider.current.slickNext()
    }

    function _prevArrow(params) {
        refSlider.current.slickPrev()
    }

    function handleScroll() {
        let currentScroll = Math.round(scrollY.current)
        if (currentScroll >= 540 && window.innerWidth > 900) {
            setScrollActive('active_scroll')
        } else {
            setScrollActive('')
        }
    }

    useEffect(() => {
        function watchScroll() {
            window.addEventListener("scroll", handleScroll);
        }
        watchScroll();
        // Remove listener (like componentWillUnmount)
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [])

    return (
        <React.Fragment>
        <header>
            <Menu logo="mataer-logo-light.png" page="event" scrollActive={scrollActive}/>
        </header>

        <main>
            <div className={`product__wrapper ${scrollActive}`}>
                <div className="sidebar">
                    <div className={`sidebar__menu ${scrollActive}`}>
                        <ul>
                            <li><Link href="/event"><a>Tentang MEM</a></Link></li>
                            <ul>
                                <li><a>Layanan</a></li>
                            </ul>
                            <li><Link href="/event-portfolio"><a>Portfolio</a></Link></li>
                            <li><Link href="/event-legal"><a>Legal Perusahaan</a></Link></li>
                            <ul>
                                <li><a>Struktur Organisasi</a></li>
                            </ul>
                            <li><Link href="/event-kontak"><a>Kontak</a></Link></li>
                        </ul>
                    </div>
                </div>
                <div className="content__event">
                    <MenuAct/>
                    <div className="content__event__kontak">
                        <h3>Kontak MAPI</h3>

                        <div className="kontak__wrapper">
                            <h5>PT. Mataer Makmurindo</h5>
                            <Row>
                                <Col xs={12} md={6}>
                                    <div className="kontak__wrapper-item">
                                        <p className="kontak_title">Jakarta Office</p>
                                        <p>Gd. Griya Upakara Kemenlu, Lt 3B,<br/>
                                        Jalan Cikini IV No 10, Jakarta Pusat<br/>
                                        DKI Jakarta, Indonesia</p>
                                        <br/>
                                        <br/>
                                        <ul>
                                            <li><span>Telepon</span>(021) 3103080, (021) 310 5671</li>
                                            <li><span>Fax</span>(021) 3162315</li>
                                            <li><span>HP</span>0812-8394-1425</li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col xs={12} md={6}>
                                    <div className="kontak__wrapper-item">
                                        <p className="kontak_title">Tangerang Selatan Office</p>
                                        <p>Ruko Golden Madrid 1Blok B - 10,<br/>
                                        BSD City, Kel. Rawa Mekar Jaya,<br/>
                                        Kec. Serpong - Tangerang Selatan, Indonesia</p>
                                        <br/>
                                        <br/>
                                        <ul>
                                            <li><span>Telepon</span>(021) 53191667</li>
                                            <li><span>Email</span>info@mataer.com </li>
                                            <li><span>Web</span>www.mataer.com</li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <footer>
            <Container fluid>
                <Row>
                    <Col xs={12} md={6}>
                        <img src="mataer-logo-dark.png" alt="logo mataer" width="70px"/>
                        <p>PT. Mata Aer Makmurindo</p>
                        <p>Gd. Griya Upakara Kemenlu, Lt 3B,<br/>
                        Jalan Cikini IV No 10, Jakarta Pusat</p>
                        <ul>
                            <li><span>Telepon</span>(021) 3103080, (021) 310 5671</li>
                            <li><span>Fax</span>(021) 3162315</li>
                            <li><span>HP</span>0812-8394-1426</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
        </React.Fragment>
    )
}

export default EventKontak