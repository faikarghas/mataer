import React,{useRef,useState,useEffect} from 'react'
import {Row,Col, Container} from 'react-bootstrap'
import Link from 'next/link'
import { motion, useViewportScroll } from "framer-motion"

import Menu from '../components/layout/menu'
import MenuAct from '../components/menuEventMobile'
import Slider from "react-slick";

const Home = () => {
    const refslider = useRef(null)
    const { scrollY,scrollYProgress } = useViewportScroll()
    const [scrollActive , setScrollActive] = useState('')
    const [currentSlide , setCurrentSlide] = useState(1)

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows:false,
        beforeChange: (current, next) => setCurrentSlide(next + 1)
        // afterChange: current => this.setState({ activeSlide2: current })
    };

    function _nextArrow() {
        refslider.current.slickNext()
    }

    function _prevArrow() {
        refslider.current.slickPrev()
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
                        <ul className="sidebar__menu-ul">
                            <li><Link href="/event"><a>Tentang MEM</a></Link></li>
                            <ul>
                                <li><Link href="/event-portfolio/#layanan"><a>Layanan</a></Link></li>
                            </ul>
                            <li><Link href="/event-portfolio"><a>Portfolio</a></Link></li>
                            <ul>
                                <li><Link href="/event-portfolio/#exhibition"><a>Exhibition</a></Link></li>
                                <li><Link href="/event-portfolio/#forum"><a>Forum</a></Link></li>
                                <li><Link href="/event-portfolio/#media"><a>Media</a></Link></li>
                            </ul>
                            <li><Link href="/event-legal"><a>Legal Perusahaan</a></Link></li>
                            <ul>
                                <li><Link href="/event-legal/#strukturOrganisasi"><a>Struktur Organisasi</a></Link></li>
                            </ul>
                            <li><Link href="/event-kontak"><a>Kontak</a></Link></li>
                        </ul>
                    </div>
                </div>
                <div className="content__event">
                    <MenuAct/>
                    <div className="content__event__headerImg">
                        <img src="/banner-event.jpg" alt="banner event" />
                        <div className="content__event__headerImg-title">
                            <h1>Mataer Event & Media</h1>
                        </div>
                    </div>
                    <div className="content__event__firstSection">
                        <p><b>Mataer Event & Media berpengalaman menangani kegiatan festival
                        maupun expo kebudayaan dan potensi bisnis di tengah komunitas global,
                        membangun kemitraan dan kerjasama dalam kerangka pembangunan
                        ekonomi berkelanjutan. Kami berpengalaman lebih dari 30 tahun
                        memberikan pelayanan konsultasi dan memanajemen kegiatan strategis
                        nasional yang dapat membantu kebutuhan spesifik kegiatan
                        penyelenggaraan Anda.</b></p>
                        <p>Kami juga berpengalaman dalam perencanaan media, baik untuk promosi dan sosialisasi, maupun
                        pengembangan produk media komersil. Tentu semua kami lakukan berbasis digital. Meskipun tidak
                        meninggalkan output cetak yang masih menawan sesuai kebutuhannya, menjangkau hal penting yang
                        tidak terpikirkan.</p>
                    </div>
                    <div id="layanan" className="content__event__layananImg">
                        <img src="/event-layanan.jpg" alt="event-layanan" />
                    </div>
                    <div className="content__event__layanan">
                        <Row>
                            <Col xs={12} md={12}>
                                <h4>Layanan</h4>
                            </Col>
                            <Col xs={12} md={6}>
                                <h5> Reaching<br/><b>the Unthinkable</b></h5>
                            </Col>
                            <Col xs={12} md={6}>
                                <p>Pentingnya mendiskusikan rencana kegiatan Anda
                                kepada pihak yang lebih berpengalaman,
                                mempersiapkan purpose of event, target audience,
                                event benefits and value, event marketing and
                                metrics, dan budgeting planning. Kami dapat
                                membantu untuk semua kebutuhan acara apa pun,
                                merancang kembali rencana kegiatan yang lebih
                                maksimal.</p>
                            </Col>
                        </Row>
                    </div>

                    <div className="content__event__slider2">
                        <Slider {...settings} ref={refslider}>
                            <div className="content__event__slider2-wrapper">
                                <div className="content__event__slider2-wrapper--img">
                                    <img src="/Meeting_Conferences Management.jpg" width="100%"/>
                                </div>
                                <div className="content__event__slider2-wrapper--desc">
                                    <ul>
                                        <li className="prev" onClick={_prevArrow}>Sebelumnya</li>
                                        <li className="next" onClick={_nextArrow}>Selanjutnya</li>
                                    </ul>
                                    <h3>Meeting / Conferences <br/> Management</h3>
                                    <p>Public private forum, business to business forum,
                                    sarasehan/simposium/seminar, peluncuran produk dan
                                    forum sosial.</p>
                                </div>
                            </div>
                            <div className="content__event__slider2-wrapper">
                                <div className="content__event__slider2-wrapper--img">
                                    <img src="/Meeting_Conferences Management.jpg" width="100%"/>
                                </div>
                                <div className="content__event__slider2-wrapper--desc">
                                    <ul>
                                        <li className="prev" onClick={_prevArrow}>Sebelumnya</li>
                                        <li className="next" onClick={_nextArrow}>Selanjutnya</li>
                                    </ul>
                                    <h3>Meeting / Conferences <br/> Management 2</h3>
                                    <p>Public private forum, business to business forum,
                                    sarasehan/simposium/seminar, peluncuran produk dan
                                    forum sosial.</p>
                                </div>
                            </div>
                        </Slider>
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

export default Home
