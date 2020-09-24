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


const Berita = () => {
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
                            <li><Link href="/berita"><a>Semua Kategori</a></Link></li>
                            <li><Link href="/berita"><a>Kategori 1</a></Link></li>
                            <li><Link href="/berita"><a>Kategori 2</a></Link></li>
                            <li><Link href="/berita"><a>Kategori 3</a></Link></li>
                        </ul>
                    </div>
                </div>
                <div className="content__berita">
                    <MenuAct/>
                    <div className="content__berita_wrapper">
                        <h3>Berita & Artikel</h3>
                            <Row>
                                <Col xs={12} md={4} className="mb-5">
                                    <div className="content__berita_wrapper-item">
                                        <img src="/Article1.jpg" width="100%"/>
                                        <Link href="/"><a>Pagelaran Budaya
                                        Jakarta Berlangsung
                                        Ramai, PT. Mata Aer
                                        Makmurindo
                                        Berhasil Menarik
                                        1000 Pengunjung
                                        dalam Sehari</a></Link>
                                        <p>14 AGUSTUS 2020 / EVENT PRESS RELEASE</p>
                                    </div>
                                </Col>
                                <Col xs={12} md={4} className="mb-5">
                                    <div className="content__berita_wrapper-item">
                                        <img src="/Article1.jpg" width="100%"/>
                                        <Link href="/"><a>Pagelaran Budaya
                                        Jakarta Berlangsung
                                        Ramai, PT. Mata Aer
                                        Makmurindo
                                        Berhasil Menarik
                                        1000 Pengunjung
                                        dalam Sehari</a></Link>
                                        <p>14 AGUSTUS 2020 / EVENT PRESS RELEASE</p>
                                    </div>
                                </Col>
                                <Col xs={12} md={4} className="mb-5">
                                    <div className="content__berita_wrapper-item">
                                        <img src="/Article1.jpg" width="100%"/>
                                        <Link href="/"><a>Pagelaran Budaya
                                        Jakarta Berlangsung
                                        Ramai, PT. Mata Aer
                                        Makmurindo
                                        Berhasil Menarik
                                        1000 Pengunjung
                                        dalam Sehari</a></Link>
                                        <p>14 AGUSTUS 2020 / EVENT PRESS RELEASE</p>
                                    </div>
                                </Col>
                                <Col xs={12} md={4} className="mb-5">
                                    <div className="content__berita_wrapper-item">
                                        <img src="/Article1.jpg" width="100%"/>
                                        <Link href="/"><a>Pagelaran Budaya
                                        Jakarta Berlangsung
                                        Ramai, PT. Mata Aer
                                        Makmurindo
                                        Berhasil Menarik
                                        1000 Pengunjung
                                        dalam Sehari</a></Link>
                                        <p>14 AGUSTUS 2020 / EVENT PRESS RELEASE</p>
                                    </div>
                                </Col>
                                <Col xs={12} md={4} className="mb-5">
                                    <div className="content__berita_wrapper-item">
                                        <img src="/Article1.jpg" width="100%"/>
                                        <Link href="/"><a>Pagelaran Budaya
                                        Jakarta Berlangsung
                                        Ramai, PT. Mata Aer
                                        Makmurindo
                                        Berhasil Menarik
                                        1000 Pengunjung
                                        dalam Sehari</a></Link>
                                        <p>14 AGUSTUS 2020 / EVENT PRESS RELEASE</p>
                                    </div>
                                </Col>
                            </Row>
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

export default Berita
