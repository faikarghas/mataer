import React,{useRef,useState,useEffect} from 'react'
import {Row,Col, Container} from 'react-bootstrap'
import Slider from "react-slick";
import Link from 'next/link'


import Menu from '../components/layout/menu'
import NumberAnimation from '../components/countAnimation'

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

    function _nextArrow(params) {
        refSlider.current.slickNext()
    }

    function _prevArrow(params) {
        refSlider.current.slickPrev()
    }


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
                                        <Link href="/tentang-kami"><a>Pelajari Lebih Lanjut  <span><img src="/arrow-front.png" /></span></a></Link>
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
                <Row>
                    <Col xs={12}>
                        <div className="arrow__slider arrow__slider_posHome">
                            <ul>
                                <li onClick={_prevArrow}><img src="/right.png" alt="arrow" /></li>
                                <li onClick={_nextArrow}><img src="/arrow-slider-front.png" alt="arrow" /></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </header>
        <main>
            <div className="home__section_about" ref={numberRef}>
                <Container>
                    <Row>
                        <Col xs={12} md={6} className="home__section_about-1">
                            <p className="title" style={{fontSize: '1.2rem'}}>TENTANG MATAER</p>
                            <h2>Sejak tahun 2014,<br/>PT. Mata Aer Makmurindo<br/>telah menjadi mitra strategis<br/>dalam pelaksanaan dan<br/>pengadaan barang & jasa.</h2>
                            <div className="link__to">
                                <Link href="/about"><a>Lihat Cerita Kami <span><img src="/arrow-front.png" /></span></a></Link>
                                <div className="am__bg-link"></div>
                            </div>
                        </Col>
                        <Col xs={12} md={6} className="align-items-center d-flex am_wrapper">
                        <Container>
                            <Row noGutters>
                                <Col xs={12} >
                                    <div className="pm">
                                        <h3 className="text-center fs-big"><NumberAnimation numberRef={numberRef} value={150}/></h3>
                                        <p className="text-center">Proyek di bawah Manajemen</p>
                                    </div>
                                </Col>
                                <Col xs={12} md={6} >
                                    <div className="km">
                                        <h3 className="text-center fs-med"><NumberAnimation numberRef={numberRef} value={12}/></h3>
                                        <p className="text-center">Kemitraan</p>
                                    </div>
                                </Col>
                                <Col xs={12} md={6} >
                                    <div className="tp">
                                        <h3 className="text-center fs-med"><NumberAnimation numberRef={numberRef} value={5}/><span>+</span></h3>
                                        <p className="text-center">Tahun Pengalaman</p>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
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
                                <li><Link href="/parking"><a>Mata Aer Parking Indonesia <span><img src="/arrow-front.png" /></span></a></Link></li>
                                <li><Link href="/event"><a>Mata Aer Event & Media <span><img src="/arrow-front.png" /></span></a></Link></li>
                                <li><Link href="/"><a className="disable">Mata Aer Adspro <span><img src="/arrow-front.png" /></span></a></Link></li>
                                <li><Link href="/"><a className="disable">Mata Aer Business & Consultant <span><img src="/arrow-front.png" /></span></a></Link></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="home__section_artikel">
                <Container>
                    <p className="title2">ARTIKEL TERBARU</p>
                    <div className="artikel__firstBorder">
                        <Row>
                            <Col xs={12} md={6}>
                                <div className="artikel__wrapper_desc1">
                                    <Link href={`/berita/[category]/[slug]`} as={`/berita/event-press-release/Pagelaran-Budaya-Jakarta-Berlangsung`}><a>Pagelaran Budaya Jakarta Berlangsung Ramai, PT. Mata Aer Makmurindo Berhasil Menarik 1000 Pengunjung dalam Sehari. Rekor Terbanyak Selama 5 Tahun Terakhir</a></Link>
                                    <span>14 Agustus 2020</span>
                                </div>
                            </Col>
                            <Col xs={12} md={6}>
                                <div className="artikel__wrapper_img1">
                                    <Link href={`/berita/[category]/[slug]`} as={`/berita/event-press-release/Pagelaran-Budaya-Jakarta-Berlangsung`}><a><img src="/Article1.jpg" width="100%" alt="img artikel" className="forDesktop"/></a></Link>
                                    <div className="linkToArtikel forDesktop"><Link href={`/berita/[category]/[slug]`} as={`/berita/event-press-release/Pagelaran-Budaya-Jakarta-Berlangsung`}><a><img src="/arrow-front.png" /></a></Link></div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                        <Row>
                            <Col xs={12} md={6}>
                                <div className="artikel__secondBorder">
                                    <Row>
                                        <Col xs={12} md={7}>
                                            <div className="artikel__wrapper_desc2">
                                                <Link href={`/berita/[category]/[slug]`} as={`/berita/event-press-release/Pagelaran-Budaya-Jakarta-Berlangsung`}><a>Pagelaran Budaya Jakarta Berlangsung Ramai, PT. Mata Aer Makmurindo Berhasil Menarik 1000 Pengunjung dalam Sehari. Rekor Terbanyak Selama 5 Tahun Terakhir</a></Link>
                                                <span>14 Agustus 2020</span>
                                            </div>
                                        </Col>
                                        <Col xs={12} md={5}>
                                            <div className="artikel__wrapper_img2">
                                                <img src="/berita1.png" width="100%" alt="img artikel" className="forDesktop"/>
                                                <div className="linkToArtikel linkToArtikel_bottom-zero forDesktop" ><Link href=""><a><img src="/arrow-front.png" /></a></Link></div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col xs={12} md={6}>
                                <div className="artikel__secondBorder">
                                    <Row>
                                        <Col xs={12} md={7}>
                                            <div className="artikel__wrapper_desc2">
                                                <Link href={`/berita/[category]/[slug]`} as={`/berita/event-press-release/Pagelaran-Budaya-Jakarta-Berlangsung`}><a>Pagelaran Budaya Jakarta Berlangsung Ramai, PT. Mata Aer Makmurindo Berhasil Menarik 1000 Pengunjung dalam Sehari. Rekor Terbanyak Selama 5 Tahun Terakhir</a></Link>
                                                <span>14 Agustus 2020</span>
                                            </div>
                                        </Col>
                                        <Col xs={12} md={5}>
                                            <div className="artikel__wrapper_img2">
                                                <img src="/berita2.png" width="100%" alt="img artikel" className="forDesktop"/>
                                                <div className="linkToArtikel linkToArtikel_bottom-zero forDesktop" ><Link href=""><a><img src="/arrow-front.png" /></a></Link></div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col xs={12} md={6}>
                                <div className="artikel__secondBorder">
                                    <Row>
                                        <Col xs={12} md={7}>
                                            <div className="artikel__wrapper_desc2">
                                                <Link href={`/berita/[category]/[slug]`} as={`/berita/event-press-release/Pagelaran-Budaya-Jakarta-Berlangsung`}><a>Pagelaran Budaya Jakarta Berlangsung Ramai, PT. Mata Aer Makmurindo Berhasil Menarik 1000 Pengunjung dalam Sehari. Rekor Terbanyak Selama 5 Tahun Terakhir</a></Link>
                                                <span>14 Agustus 2020</span>
                                            </div>
                                        </Col>
                                        <Col xs={12} md={5}>
                                            <div className="artikel__wrapper_img2">
                                                <img src="/berita3.png" width="100%" alt="img artikel" className="forDesktop"/>
                                                <div className="linkToArtikel linkToArtikel_bottom-zero forDesktop" ><Link href=""><a><img src="/arrow-front.png" /></a></Link></div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col xs={12} md={6}>
                                <div className="artikel__secondBorder">
                                    <Row>
                                        <Col xs={12} md={7}>
                                            <div className="artikel__wrapper_desc2">
                                                <Link href={`/berita/[category]/[slug]`} as={`/berita/event-press-release/Pagelaran-Budaya-Jakarta-Berlangsung`}><a>Pagelaran Budaya Jakarta Berlangsung Ramai, PT. Mata Aer Makmurindo Berhasil Menarik 1000 Pengunjung dalam Sehari. Rekor Terbanyak Selama 5 Tahun Terakhir</a></Link>
                                                <span>14 Agustus 2020</span>
                                            </div>
                                        </Col>
                                        <Col xs={12} md={5}>
                                            <div className="artikel__wrapper_img2">
                                                <img src="/berita4.png" width="100%" alt="img artikel" className="forDesktop"/>
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
                                        <Link href="/berita"><a>Lihat Semua Artikel <span><img src="/arrow-front.png" /></span></a></Link>
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
