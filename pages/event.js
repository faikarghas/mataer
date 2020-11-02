import React,{useRef,useState,useEffect,createRef} from 'react'
import {Row,Col, Container} from 'react-bootstrap'
import Link from 'next/link'
import { motion, useViewportScroll } from "framer-motion"

import Menu from '../components/layout/menu'
import MenuAct from '../components/menuEventMobile'
import MenuEvent from '../components/menuEvent'
import Footer from '../components/layout/footer'

import Section from '../components/layout/refWrapper'

import {dataLayanan} from '../lib/data'

import Slider from "react-slick";

const Event = () => {
    const refslider = useRef(null)
    const { scrollY,scrollYProgress } = useViewportScroll()
    const [scrollActive , setScrollActive] = useState('')
    const [currentSlide , setCurrentSlide] = useState(1)
    const [refSection, setRefSection] = useState()

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
        if (currentScroll >= 540) {
            setScrollActive('active_scroll')
        } else {
            setScrollActive('')
        }
    }

    useEffect(() => {

        let sectionInPage = document.querySelectorAll('section')

        let setcArray = [...sectionInPage].map((item,key)=>{
            return item.id
        })

        var refs = setcArray.reduce((refsObj, indicator) => {
            refsObj[indicator] = createRef();
            return refsObj
        }, {});


        setRefSection(refs);

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
            <Menu logo="/LogoGrupMataer/logoMEM.png" page="event" scrollActive={scrollActive}/>
        </header>

        <main>
            <div className={`product__wrapper ${scrollActive}`}>
                <div className="sidebar">
                    <div className={`sidebar__menu ${scrollActive}`}>
                        <MenuEvent refSec={refSection} threshold={0.8}/>
                    </div>
                </div>
                <div className="content__event">
                    <MenuAct page="event"/>
                    <div className="content__event__headerImg">
                        <img src="/banner-event.jpg" alt="banner event" />
                        <div className="content__event__headerImg-title">
                            <h1>Mataer Event & Media</h1>
                        </div>
                    </div>
                    <div className="content__event__firstSection">
                    <Container>
                            <Row>
                                <Col xs={12}>
                        <p>Mataer Event & Media berpengalaman menangani kegiatan festival
                        maupun expo kebudayaan dan potensi bisnis di tengah komunitas global,
                        membangun kemitraan dan kerjasama dalam kerangka pembangunan
                        ekonomi berkelanjutan. Kami berpengalaman lebih dari 30 tahun
                        memberikan pelayanan konsultasi dan memanajemen kegiatan strategis
                        nasional yang dapat membantu kebutuhan spesifik kegiatan
                        penyelenggaraan Anda.</p>
                        <p>Kami juga berpengalaman dalam perencanaan media, baik untuk promosi dan sosialisasi, maupun
                        pengembangan produk media komersil. Tentu semua kami lakukan berbasis digital. Meskipun tidak
                        meninggalkan output cetak yang masih menawan sesuai kebutuhannya, menjangkau hal penting yang
                        tidak terpikirkan.</p>
                        </Col>
                            </Row>
                        </Container>
                    </div>
                    <Section id="layananImg" className="content__event__layananImg" refSec={refSection}>
                        <img src="/event-layanan.jpg" alt="event-layanan" />
                    </Section>
                    <Section id="layanan" className="content__event__layanan" refSec={refSection}>
                        <Container>
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
                        </Container>
                    </Section>

                    <div className="content__event__slider2">
                    <Container className="p-0">
                        <Row noGutters>
                            <Col xs={12} md={12} className="p-0">
                                <Slider {...settings} ref={refslider}>
                                    {dataLayanan.map((item,i)=>{
                                        return(
                                            <div className="content__event__slider2-wrapper" key={i}>
                                                <div className="content__event__slider2-wrapper--img">
                                                    <img src={`/layanan/${item.img}`} width="100%"/>
                                                </div>
                                                <div className="content__event__slider2-wrapper--desc">
                                                    <ul>
                                                        <li className="prev" onClick={_prevArrow}><img src="/arrow-serviceswhite.svg" alt="arrow"/><p>Sebelumnya</p></li>
                                                        <li className="next" onClick={_nextArrow}><p>Selanjutnya</p><img src="/arrow-serviceswhite.svg" alt="arrow"/></li>
                                                    </ul>
                                                    <h3>{item.judul}</h3>
                                                    <p>{item.deskripsi}</p>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </Slider>
                            </Col>
                        </Row>
                    </Container>
                    </div>

                </div>
            </div>
        </main>
        <Footer/>

        </React.Fragment>
    )
}

export default Event
