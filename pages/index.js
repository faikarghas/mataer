import React,{useRef,useState,useEffect} from 'react'
import {Row,Col, Container} from 'react-bootstrap'
import {useIntersection} from 'react-use'
import Slider from "react-slick";
import Link from 'next/link'
import { useCountUp} from 'react-countup';

import Menu from '../components/layout/menu'


const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows:false
};


const Home = () => {
    const refSlider = useRef(null)
    const numberRef = useRef(null)
    const [active, setActive] = useState(false)
    const { countUp, start} = useCountUp({
        start: 0,
        end: 150,
        delay: 0,
        duration: 1.5
    });

    const intersection = useIntersection(numberRef,{
        root: null,
        rootMargin:'0px',
        threshold: 0.5
    })

    function _nextArrow(params) {
        refSlider.current.slickNext()
    }

    function _prevArrow(params) {
        refSlider.current.slickPrev()
    }

    useEffect(() => {
        if (intersection && intersection.intersectionRatio < 0.5) {
            console.log('OBS');
        } else {
            start()
        }
    }, [intersection])


    return (
        <React.Fragment>
        <header>
            <Menu logo="mataer-logo-light.png"/>
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
                                        <Link href="/about"><a>Pelajari Lebih Lanjut  <span><img src="/arrow-front.png" /></span></a></Link>
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
                                        <Link href="/about"><a>Pelajari Lebih Lanjut  <span><img src="/arrow-front.png" /></span></a></Link>
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
            <div className="arrow__slider arrow__slider_posHome">
                <ul>
                    <li onClick={_prevArrow}><img src="/right.png" alt="arrow" /></li>
                    <li onClick={_nextArrow}><img src="/arrow-slider-front.png" alt="arrow" /></li>
                </ul>
            </div>
            </Container>
        </header>
        <main>
            <div className="home__section_about" ref={numberRef}>
                <Container>
                    <Row>
                        <Col xs={12} md={6} className="home__section_about-1">
                            <p className="title">Tentang Mataer</p>
                            <h2>Sejak tahun 2014,<br/>PT. Mata Aer Makmurindo<br/>telah menjadi mitra strategis<br/>dalam pelaksanaan dan<br/>pengadaan barang & jasa.</h2>
                            <div className="link__to">
                                <Link href="/about"><a>Lihat Cerita Kami <span><img src="/arrow-front.png" /></span></a></Link>
                                <div className="am__bg-link"></div>
                            </div>
                        </Col>
                        <Col xs={12} md={6} className="align-items-center d-flex">
                            <Row noGutters>
                                <Col xs={12} >
                                    <div className="pm">
                                        <p className="text-center fs-big">{countUp}</p>
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
                                <li><Link href="/"><a>Mata Aer Parking Indonesia <span><img src="/arrow-front.png" /></span></a></Link></li>
                                <li><Link href="/"><a>Mata Aer Event & Media <span><img src="/arrow-front.png" /></span></a></Link></li>
                                <li><Link href="/"><a>Mata Aer Adspro <span><img src="/arrow-front.png" /></span></a></Link></li>
                                <li><Link href="/"><a>Mata Aer Business & Consultant <span><img src="/arrow-front.png" /></span></a></Link></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="home__section_artikel">
                <Container>
                    <div className="artikel__firstBorder">
                        <Row>
                            <Col xs={12} md={6}>
                                <div className="artikel__wrapper_desc1">
                                    <Link href="/"><a>Pagelaran Budaya Jakarta Berlangsung Ramai, PT. Mata Aer Makmurindo Berhasil Menarik 1000 Pengunjung dalam Sehari. Rekor Terbanyak Selama 5 Tahun Terakhir</a></Link>
                                    <span>14 Agustus 2020</span>
                                </div>
                            </Col>
                            <Col xs={12} md={6}>
                                <div className="artikel__wrapper_img1">
                                    <img src="/Article1.jpg" width="100%" alt="img artikel" className="forDesktop"/>
                                    <div className="linkToArtikel forDesktop"><Link href=""><a><img src="/arrow-front.png" /></a></Link></div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                        <Row>
                            <Col xs={12} md={6}>
                                <div className="artikel__secondBorder">
                                    <Row>
                                        <Col xs={12} md={8}>
                                            <div className="artikel__wrapper_desc2">
                                                <Link href="/"><a>Pagelaran Budaya Jakarta Berlangsung Ramai, PT. Mata Aer Makmurindo Berhasil Menarik 1000 Pengunjung dalam Sehari. Rekor Terbanyak Selama 5 Tahun Terakhir</a></Link>
                                                <span>14 Agustus 2020</span>
                                            </div>
                                        </Col>
                                        <Col xs={12} md={4}>
                                            <div className="artikel__wrapper_img2">
                                                <img src="/Article1.jpg" width="100%" alt="img artikel" className="forDesktop"/>
                                                <div className="linkToArtikel linkToArtikel_bottom-zero forDesktop" ><Link href=""><a><img src="/arrow-front.png" /></a></Link></div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col xs={12} md={6}>
                                <div className="artikel__secondBorder">
                                    <Row>
                                        <Col xs={12} md={6}>
                                            <div className="artikel__wrapper_desc2">
                                                <Link href="/"><a>Pagelaran Budaya Jakarta Berlangsung Ramai, PT. Mata Aer Makmurindo Berhasil Menarik 1000 Pengunjung dalam Sehari. Rekor Terbanyak Selama 5 Tahun Terakhir</a></Link>
                                                <span>14 Agustus 2020</span>
                                            </div>
                                        </Col>
                                        <Col xs={12} md={6}>
                                            <div className="artikel__wrapper_img2">
                                                <img src="/Article1.jpg" width="100%" alt="img artikel" className="forDesktop"/>
                                                <div className="linkToArtikel linkToArtikel_bottom-zero forDesktop" ><Link href=""><a><img src="/arrow-front.png" /></a></Link></div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col xs={12} md={6}>
                                <div className="artikel__secondBorder">
                                    <Row>
                                        <Col xs={12} md={8}>
                                            <div className="artikel__wrapper_desc2">
                                                <Link href="/"><a>Pagelaran Budaya Jakarta Berlangsung Ramai, PT. Mata Aer Makmurindo Berhasil Menarik 1000 Pengunjung dalam Sehari. Rekor Terbanyak Selama 5 Tahun Terakhir</a></Link>
                                                <span>14 Agustus 2020</span>
                                            </div>
                                        </Col>
                                        <Col xs={12} md={4}>
                                            <div className="artikel__wrapper_img2">
                                                <img src="/Article1.jpg" width="100%" alt="img artikel" className="forDesktop"/>
                                                <div className="linkToArtikel linkToArtikel_bottom-zero forDesktop" ><Link href=""><a><img src="/arrow-front.png" /></a></Link></div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col xs={12} md={6}>
                                <div className="artikel__secondBorder">
                                    <Row>
                                        <Col xs={12} md={6}>
                                            <div className="artikel__wrapper_desc2">
                                                <Link href="/"><a>Pagelaran Budaya Jakarta Berlangsung Ramai, PT. Mata Aer Makmurindo Berhasil Menarik 1000 Pengunjung dalam Sehari. Rekor Terbanyak Selama 5 Tahun Terakhir</a></Link>
                                                <span>14 Agustus 2020</span>
                                            </div>
                                        </Col>
                                        <Col xs={12} md={6}>
                                            <div className="artikel__wrapper_img2">
                                                <img src="/Article1.jpg" width="100%" alt="img artikel" className="forDesktop"/>
                                                <div className="linkToArtikel linkToArtikel_bottom-zero forDesktop" ><Link href=""><a><img src="/arrow-front.png" /></a></Link></div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <div className="button_toArtikel">
                                <Col xs={12}>
                                    <div className="link__to">
                                        <Link href="/about"><a>Lihat Cerita Kami <span><img src="/arrow-front.png" /></span></a></Link>
                                        <div className="am__bg-link"></div>
                                    </div>
                                </Col>
                            </div>
                        </Row>
                </Container>
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
