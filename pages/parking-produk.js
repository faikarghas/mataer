import React,{useRef,useState,useEffect} from 'react'
import {Row,Col, Container} from 'react-bootstrap'
import Link from 'next/link'
import { motion, useViewportScroll } from "framer-motion"
import Slider from "react-slick";

import Menu from '../components/layout/menu'
import MenuAct from '../components/menuParkingMobile'
import MenuParking from '../components/menuParking/menuParking'


const ParkingProduct = () => {
    const refSlider = useRef(null)
    const { scrollY,scrollYProgress } = useViewportScroll()
    const [scrollActive , setScrollActive] = useState('')
    const [currentSlide , setCurrentSlide] = useState(1)

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        arrows:false,
        beforeChange: (current, next) => setCurrentSlide(next + 1)
        // afterChange: current => this.setState({ activeSlide2: current })
    };

    function _nextArrow() {
        refSlider.current.slickNext()
    }

    function _prevArrow() {
        refSlider.current.slickPrev()
    }

    function handleScroll() {
        let currentScroll = Math.round(scrollY.current)
        if (currentScroll >= 540 ) {
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
            <Menu logo="/LogoGrupMataer/logoPark.png" page="parking" scrollActive={scrollActive}/>
        </header>

        <main>
            <div className={`product__wrapper ${scrollActive}`}>
                <div className="sidebar">
                    <div className={`sidebar__menu ${scrollActive}`}>
                        <MenuParking/>
                    </div>
                </div>
                <div className="content__parking">
                    <MenuAct page="parking-produk"/>
                    <div className="content__parking__why">
                    <Container>
                            <Row>
                                <Col xs={12}>
                        <h3>Produk & Sistem</h3>
                        <p>Mataer Parking Indonesia (MAPI) bergerak di bidang pengelolaan perparkiran berbasis teknologi
                        komputerisasi. Penerapan teknologi komputer dalam pengelolaan parkir saat ini sudah menjadi kebutuhan
                        yang tidak dapat dihindari. Dengan pemanfaatan teknologi pengelolaan parkir terbukti memiliki kelebihan
                        lebih efektif dan efisien, aman, dan meminimalisir tingkat kebocoran yang terjadi di lapangan. Dan akan
                        berdampak langsung pada mutu pelayanan, level of service, dan mempengaruhi nilai image positif pada
                        management building.</p>
                        </Col>
                            </Row>
                        </Container>
                    </div>
                    <div className="content__parking__onlyTextOrImg">
                        <img className="forDesktop" src="/Produk.jpg" alt="banner parking" />
                        <img className="forMobile" src="/produk-1.png" alt="banner parking" />
                        <img className="forMobile" src="/produk-2.png" alt="banner parking" />
                    </div>
                    <div className="content__parking__bannerWithBgText">
                        <img src="/Smart-City.jpg" alt="visi" />
                        <div className="content__parking__bannerWithBgText-desc">
                             <h4>Konsep Smart City</h4>
                             <p>Dengan sistem parkir yang
                                kami gunakan dapat
                                terintegrasi dengan instansi/
                                dinas terkait dan pemanfaatan
                                teknologi yang berbasis open
                                data, sehingga kontrol lokasi
                                parkir bisa dimonitor dan
                                dapat diakses dari komputer
                                dan smartphone, diharapkan
                                bisnis parkir yang kami
                                jalankan dapat menjadikan
                                bisnis parkir sebagai salah
                                satu bisnis yang bisa
                                membawa kesejahteraan
                                bersama baik untuk
                                pemerintah, masyarakat dan
                                perusahaan.</p>
                        </div>
                    </div>
                    <div className="content__parking__sistem">
                    <Container>
                            <Row>
                                <Col xs={12}>
                        <h4>Sistem & Infrastruktur Teknologi</h4>
                        <img className="forDesktop" src="/Sistem.png" alt="banner parking" />
                        <img className="forMobile" src="/sistem-1.png" alt="banner parking" />
                        <img className="forMobile" src="/sistem-2.png" alt="banner parking" />
                        </Col>
                            </Row>
                        </Container>
                    </div>
                    <div className="content__parking__human">
                    <Container>
                        <Row>
                            <Col xs={12} md={5} className="left">
                                <h4>Human Resource</h4>
                                <p>Perekrutan seleksi dan
                                pelatihan serta refreshment
                                training menjadi tolak ukur
                                kehandalan operasional di
                                lapangan.
                                </p>
                            </Col>
                            <Col xs={12} md={7}>
                                <ul>
                                    <li><span>1</span><p>Professional</p></li>
                                    <li><span>2</span><p>Experienced</p></li>
                                    <li><span>3</span><p>Teamwork</p></li>
                                    <li><span>4</span><p>People</p></li>
                                    <li><span>5</span><p>Development</p></li>
                                </ul>
                            </Col>
                        </Row>
                        </Container>

                    </div>
                    <div className="content__parking__slider">
                    <Container>
                            <Row>
                                <Col xs={12}>
                        <Slider {...settings} ref={refSlider}>
                            <div className="section__slider_imgWrapper">
                                <img src="/Booth.png" width="100%"/>
                            </div>
                            <div className="section__slider_imgWrapper">
                                <img src="/Neon-Box.png" width="100%"/>
                            </div>
                            <div className="section__slider_imgWrapper">
                                <img src="/Ticket-Machine.png" width="100%"/>
                            </div>
                            <div className="section__slider_imgWrapper">
                                <img src="/Uniform.png" width="100%"/>
                            </div>
                        </Slider>
                        <div className="slick_ia">
                            <p>{currentSlide}<span>/</span> 4</p>
                            <ul className="button_slider">
                                <li onClick={_prevArrow}><img style={{opacity:currentSlide == 1? '0.5' : '1'}} src="/arrow-services.svg" alt="arrow"/></li>
                                <li onClick={_nextArrow}><img style={{opacity:currentSlide == 4? '0.5' : '1'}} src="/arrow-services.svg" alt="arrow"/></li>
                            </ul>
                        </div>
                        </Col>
                        </Row>
                        </Container>
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

export default ParkingProduct
