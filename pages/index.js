import React,{useRef,useState} from 'react'
import {Row,Col, Container} from 'react-bootstrap'
import Slider from "react-slick";
import Link from 'next/link'

import SideBar from '../components/sidebar/index'

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // fade: true,
};


const Home = () => {
    const refSlider = useRef(null)

    function _nextArrow(params) {
        refSlider.current.slickNext()
    }

    function _prevArrow(params) {
        refSlider.current.slickPrev()
    }

    return (
        <React.Fragment>
        <header>
            <menu>
                <Container fluid>
                    <Row>
                        <Col xs={12} md={6}>
                            <img src="mataer-logo-light.png" alt="logo mataer" width="70px"/>
                        </Col>
                        <Col xs={12} md={6}>
                            <div className="menu__link">
                                <ul>
                                    <li>TENTANG KAMI</li>
                                    <li>HUBUNGI KAMI</li>
                                </ul>
                                <ul>
                                    <li>Parking</li>
                                    <li>Event & Media</li>
                                    <li>Adspro</li>
                                    <li>Business & Consultant</li>
                                    <li>Berita & Artikel</li>
                                    <li>Karir</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </menu>
            <div className="header__slider">
                <Slider {...settings} ref={refSlider}>
                    <div className="header__slider_item">
                        <img src="/rsz_banner-min.jpg" alt="banner 1"/>
                        <div className="text__banner">
                            <Container>
                                <Row>
                                    <Col xs={12}>
                                    <h1>Intuisi dan Kreatifitas <br/> dalam membawa nilai <br/>dan solusi kepada <br/> dunia usaha </h1>
                                    <div className="link__to">
                                        <Link href="/about"><a>Pelajari Lebih Lanjut  </a></Link>
                                        <div className="am__bg-link"></div>
                                    </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                    <div className="header__slider_item">
                        <img src="/rsz_banner-min.jpg" alt="banner 1"/>
                        <div className="text__banner">
                            <Container>
                                <Row>
                                    <Col xs={12}>
                                    <h1>Banner 2</h1>
                                    <div className="link__to">
                                        <Link href="/about"><a>Pelajari Lebih Lanjut  </a></Link>
                                        <div className="am__bg-link"></div>
                                    </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                </Slider>
            </div>
            <Container>
            <div className="arrow__slider">
                <ul>
                    <li onClick={_prevArrow}>{`<`}</li>
                    <li onClick={_nextArrow}>{`>`}</li>
                </ul>
            </div>
            </Container>
        </header>
        <main>
            <div className="home__section_about">
                <Container>
                    <Row>
                        <Col xs={12} md={6}>
                            <p className="title">Tentang Mataer</p>
                            <h2>Sejak tahun 2014,<br/>PT. Mata Aer Makmurindo<br/>telah menjadi mitra strategis<br/>dalam pelaksanaan dan<br/>pengadaan barang & jasa.</h2>
                            <div className="link__to">
                                <Link href="/about"><a>Lihat Cerita Kami</a></Link>
                                <div className="am__bg-link"></div>
                            </div>
                        </Col>
                        <Col xs={12} md={6} className="align-items-center d-flex">
                            <Row noGutters>
                                <Col xs={12} >
                                    <div className="pm">
                                        <p className="text-center fs-big">150</p>
                                        <p className="text-center">Proyek dibawah Manajemen</p>
                                    </div>
                                </Col>
                                <Col xs={12} md={6} >
                                    <div className="km">
                                        <p className="text-center fs-med">12</p>
                                        <p className="text-center">Kemitraan</p>
                                    </div>
                                </Col>
                                <Col xs={12} md={6} >
                                    <div className="tp">
                                        <p className="text-center fs-med">5+</p>
                                        <p className="text-center">Tahun Pengalaman</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="home__section_product">
                <Container>
                    <Row>
                        <Col xs={12} md={6} className="d-flex align-items-center">
                            <h2>Kami selalu menyediakan<br/> penawaran yang potensial<br/> untuk memberikan nilai<br/>tambah kepada klien kami.</h2>
                        </Col>
                        <Col xs={12} md={6} className="d-flex align-items-center">
                            <ul>
                                <li><Link href="/"><a>Mata Aer Parking Indonesia <span>{`->`}</span></a></Link></li>
                                <li><Link href="/"><a>Mata Aer Event & Media <span>{`->`}</span></a></Link></li>
                                <li><Link href="/"><a>Mata Aer Adspro <span>{`->`}</span></a></Link></li>
                                <li><Link href="/"><a>Mata Aer Business & Consultant <span>{`->`}</span></a></Link></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="home__section_artikel">

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
