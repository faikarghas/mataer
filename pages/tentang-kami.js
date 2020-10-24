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


const About = () => {
    const [showContact, setShowContact] = useState({
        item1: 0,
        item2: 100
    })


    function _showContactHandler() {
        setShowContact({
            item1:50,
            item2:50,
        })
    }

    function _closeContactHandler() {
        setShowContact({
            item1:0,
            item2:100,
        })
    }


    return (
        <React.Fragment>
        <div className="all__wrapper">
            <div className="all__wrapper-item2" style={{width:`${showContact.item2}%`}}>
                <header>
                    <Menu showContact={_showContactHandler} logo="mataer-logo-light.png"/>
                    <div className="header__slider header__about">
                        <div className="header__slider_item">
                            <img src="/tentangKami.jpg" alt="banner 1" style={{transform:'none'}}/>
                            <div className="text__banner">
                                <Container>
                                    <Row>
                                        <Col xs={12}>
                                        <h1>Ketertarikan kami<br/>terhadap dunia usaha<br/>menjadi salah satu<br/>kunci keberhasilan<br/>Anda.</h1>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </div>
                    </div>
                </header>
                <main>
                    <div className="about__section_about">
                        <Container>
                            <p className="title">TENTANG PERUSAHAAN</p>
                            <Row>
                                <Col xs={12} md={6} className="home__section_about-1">
                                    <h2>PT. Mata Aer Makmurindo <br/> merupakan induk perusahaan yang bergerak di berbagai bidang dan layanan.</h2>
                                </Col>
                                <Col xs={12} md={6} className="">
                                    <p>Sejak didirikan pada tahun 2014, seluruh grup perusahaan kami telah menjadi mitra strategis instansi pemerintah maupun swasta dalam pelaksanaan dan pengadaan barang dan jasa.</p>
                                    <br/>
                                    <p>Selain menyediakan seluruh kebutuhan dasar klien, kami juga memberikan penawaran yang potensial untuk memberikan nilai tambah kepada klien kami. Seluruh penawaran yang kami berikan berdasarkan customer & profit oriented.</p>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <div id="visiMisi" className="about__section_visi">
                        <img src="/visiMataer.jpg" alt="visi" />
                        <div className="about__section_visi-desc">
                            <h4>Visi</h4>
                            <p>“Menjadi perusahaan prioritas dalam penyedia barang & jasa mitra pemerintahan dan swasta terpercaya di Indonesia.”</p>
                        </div>
                    </div>
                    <div className="about__section_grup">
                        <Container>
                            <p className="title">GRUP KAMI</p>
                            <Row>
                                <Col xs={12} md={6} lg={3} style={{paddingRight:'2rem'}}>
                                    <div className="about__section_grup-box">
                                        <div className="img_wrapper">
                                            <img src="/LogoGrupMataer/logoPark.png" width="100px"/>
                                        </div>
                                        <p>Memberikan layanan pengelolaan parkir kendaraan bermotor yang profitable dengan mitra. Meningkatkan mutu dan kualitas pengelolaan parkir dengan efisiensi pekerjaan melalui penggunaan teknologi dan sumber daya manusia yang professional.</p>
                                    </div>
                                </Col>
                                <Col xs={12} md={6} lg={3} style={{padding:'0 2rem'}}>
                                    <div className="about__section_grup-box">
                                        <div className="img_wrapper">
                                            <img src="/LogoGrupMataer/logoMEM.png" width="100px"/>
                                        </div>
                                        <p>Mengadakan event, pameran, dan agenda promosi lainnya, baik secara independen dan kerjasama, dengan mengutamakan kelancaran & kesuksesan agenda melalui pelayanan yang dapat dipercaya dan professional di seluruh aspek dengan penawaran yang kompetitif.</p>
                                    </div>
                                </Col>
                                <Col xs={12} md={6} lg={3} style={{padding:'0 2rem'}}>
                                    <div className="about__section_grup-box">
                                        <div className="img_wrapper">
                                            <img src="/LogoGrupMataer/logoMAP.png" width="100px"/>
                                        </div>
                                        <p>Memberikan layanan pengelolaan parkir kendaraan bermotor yang profitable dengan mitra. Meningkatkan mutu dan kualitas pengelolaan parkir dengan efisiensi pekerjaan melalui penggunaan teknologi dan sumber daya manusia yang professional.</p>
                                    </div>
                                </Col>
                                <Col xs={12} md={6} lg={3} style={{paddingLeft:'0 2rem'}}>
                                    <div className="about__section_grup-box">
                                        <div className="img_wrapper">
                                            <img src="/LogoGrupMataer/logoMBIC.png" width="100px"/>
                                        </div>
                                        <p>Memberikan layanan pengelolaan parkir kendaraan bermotor yang profitable dengan mitra. Meningkatkan mutu dan kualitas pengelolaan parkir dengan efisiensi pekerjaan melalui penggunaan teknologi dan sumber daya manusia yang professional.</p>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <div className="about__section_klien">
                        <Container>
                            <p className="title-longb">KLIEN KAMI</p>
                            <hr className="blue"></hr>
                            <Row>
                                <Col className="d-flex align-items-center" xs={12} md={12}>
                                    <img className="forDesktop1" src="/LogoKlien.png" width="100%"/>
                                    <img className="forMobile1" src="/LogoKlienMobile.png" width="100%"/>
                                </Col>
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
            </div>
        </div>
        </React.Fragment>
    )
}

export default About
