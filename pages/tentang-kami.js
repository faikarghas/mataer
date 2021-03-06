import React,{useRef,useState,useEffect} from 'react'
import {Row,Col, Container} from 'react-bootstrap'
import {useIntersection} from 'react-use'
import Slider from "react-slick";
import Link from 'next/link'
import { useCountUp} from 'react-countup';

import Menu from '../components/layout/menu'
import Footer from '../components/layout/footer'
import ScrollToTop from '../components/scrollToTop'

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
                    <Menu logo="mataer-logo-light.png" page="tentang-kami"  showContact={_showContactHandler}/>
                    <div className="header__slider header__about">
                        <div className="header__slider_item">
                            <img src="/tentangKami.jpg" alt="banner 1" style={{transform:'none'}}/>
                            <div className="text__banner">
                                <Container>
                                    <Row>
                                        <Col xs={12}>
                                        <h1>Perhitungan tepat, Instuisi, <br/>dan Kreatifitas dalam<br/>menghadirkan solusi<br/>kepada dunia usaha</h1>
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
                                <Col xs={12} md={6} className="about__section_about-1">
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
                            <p>“Menjadi perusahaan prioritas dan terpercaya oleh swasta dan pemerintah untuk setiap industri anak perusahaan di Indonesia.”</p>
                        </div>
                    </div>
                    <div className="about__section_grup">
                        <Container>
                            <p className="title">ANAK PERUSAHAAN</p>
                            <Row>
                                <Col xs={12} md={6} lg={3} style={{paddingRight:'2rem'}}>
                                    <Link href="/parking"><a className="about__section_grup-box">
                                        <div className="img_wrapper">
                                            <img src="/LogoGrupMataer/logoPark.png" width="100px"/>
                                        </div>
                                        <p>Memberikan layanan pengelolaan parkir kendaraan bermotor yang profitable dengan mitra. Meningkatkan mutu dan kualitas pengelolaan parkir dengan efisiensi pekerjaan melalui penggunaan teknologi dan sumber daya manusia yang professional.</p>
                                    </a></Link>
                                </Col>
                                <Col xs={12} md={6} lg={3} style={{padding:'0 2rem'}}>
                                    <Link href="/event"><a className="about__section_grup-box">
                                        <div className="img_wrapper">
                                            <img src="/LogoGrupMataer/logoMEM.png" width="100px"/>
                                        </div>
                                        <p>Mengadakan event, pameran, dan agenda promosi lainnya, baik secara independen dan kerjasama, dengan mengutamakan kelancaran & kesuksesan agenda melalui pelayanan yang dapat dipercaya dan professional di seluruh aspek dengan penawaran yang kompetitif.</p>
                                    </a></Link>
                                </Col>
                                <Col xs={12} md={6} lg={3} style={{padding:'0 2rem'}}>
                                    <Link href=""><a className="about__section_grup-box disable">
                                        <div className="img_wrapper">
                                            <img src="/LogoGrupMataer/logoMAP.png" width="100px"/>
                                        </div>
                                        <p>Memberikan layanan pengelolaan parkir kendaraan bermotor yang profitable dengan mitra. Meningkatkan mutu dan kualitas pengelolaan parkir dengan efisiensi pekerjaan melalui penggunaan teknologi dan sumber daya manusia yang professional.</p>
                                    </a></Link>
                                </Col>
                                <Col xs={12} md={6} lg={3} style={{paddingLeft:'0 2rem'}}>
                                    <Link href=""><a className="about__section_grup-box disable">
                                        <div className="img_wrapper">
                                            <img src="/LogoGrupMataer/logoMBIC.png" width="100px"/>
                                        </div>
                                        <p>Memberikan layanan pengelolaan parkir kendaraan bermotor yang profitable dengan mitra. Meningkatkan mutu dan kualitas pengelolaan parkir dengan efisiensi pekerjaan melalui penggunaan teknologi dan sumber daya manusia yang professional.</p>
                                    </a></Link>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    {/* <div className="about__section_klien">
                        <Container>
                            <p className="title-longb">KLIEN KAMI</p>
                            <hr className="blue"></hr>
                            <Row>
                                <Col className="" xs={12} md={12}>
                                    <img className="forDesktop1" src="/LogoKlien.png" width="100%"/>
                                    <img className="forMobile1" src="/logo-client/[Mobile] Client - Batch 1.png" width="100%"/>
                                    <img className="forMobile1" src="/logo-client/[Mobile] Client - Batch 2.png" width="100%"/>
                                    <img className="forMobile1" src="/logo-client/[Mobile] Client - Batch 3.png" width="100%"/>
                                    <img className="forMobile1" src="/logo-client/[Mobile] Client - Batch 4.png" width="100%"/>
                                </Col>
                            </Row>
                        </Container>
                    </div> */}
                </main>
                <Footer/>
                <ScrollToTop/>
            </div>
        </div>
        </React.Fragment>
    )
}

export default About
