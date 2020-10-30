import React,{useRef,useState,useEffect} from 'react'
import {Row,Col, Container} from 'react-bootstrap'
import Link from 'next/link'
import { motion, useViewportScroll } from "framer-motion"
import Slider from "react-slick";

import Menu from '../components/layout/menu'
import MenuAct from '../components/menuEventMobile'
import MenuEvent from '../components/menuEvent'


const EventPortfolio = () => {
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
        if (currentScroll >= 540) {
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

    function listImgMedia(params) {

        let list = []
        for (let i = 1; i <= 3; i++) {
            list.push(i)
        }

        let imgs = list.map((item,i)=>{
            return(
                <div className="section__slider_imgWrapper" key={i}>
                    <img src={`/media/media-${item}.png`} width="100%"/>
                </div>
            )
        })

        return imgs

    }

    function listImgExhibition(params) {

        let list = []
        for (let i = 1; i <= 29; i++) {
            list.push(i)
        }

        let imgs = list.map((item,i)=>{
            return(
                <Col xs={6} md={3} className="d-flex align-items-center" key={i}>
                    <div className="img__wrapper">
                        <img key={i} src={`/exhibition/exhibition-${item}.png`} width="100%"/>
                    </div>
                </Col>
            )
        })

        return imgs

    }

    function listImgForum(params) {

        let list = []
        for (let i = 1; i <= 12; i++) {
            list.push(i)
        }

        let imgs = list.map((item,i)=>{
            return(
                <Col xs={6} md={3} className="d-flex align-items-center">
                    <div className="img__wrapper">
                        <img key={i} src={`/forum/forum-${item}.png`} width="100%"/>
                    </div>
                </Col>
            )
        })

        return imgs

    }

    return (
        <React.Fragment>
        <header>
            <Menu logo="/LogoGrupMataer/logoMEM.png" page="event" scrollActive={scrollActive}/>
        </header>

        <main>
            <div className={`product__wrapper ${scrollActive}`}>
                <div className="sidebar">
                    <div className={`sidebar__menu ${scrollActive}`}>
                        <MenuEvent/>
                    </div>
                </div>
                <div className="content__event">
                    <MenuAct page="event-portfolio"/>
                    <div className="content__event__why">
                    <Container>
                        <Row>
                            <Col xs={12} md={12}>
                        <h3>Portfolio</h3>
                        <p>Pelayanan industri mice internasional yang tidak lagi berbatas sektoral dan geografis dalam era digital saat ini, dituntut mampu memenuhi berbagai kebutuhan para penggiat perencana kegiatan penyelenggaraan yang semakin berkembang,</p>
                        <p>Berikut adalah institusi dan instansi yang telah bekerjasama dengan kami:</p>
                        </Col>
                            </Row>
                        </Container>
                    </div>
                    <div id="exhibition" className="content__event__listImg">
                        <Container>
                            <Row className="mt-5">
                                <Col xs={12}><h4>EXHIBITION</h4></Col>
                                <Col xs={12}>
                                    <img className="forDesktop" src={`/exhibition/exhibition1.png`} width="100%"/>
                                    <img className="forDesktop" src={`/exhibition/exhibition2.png`} width="100%"/>
                                    <img className="forMobile" src={`/exhibition/[Mobile] Exhibition Batch 1.png`} width="100%"/>
                                    <img className="forMobile" src={`/exhibition/[Mobile] Exhibition Batch 2.png`} width="100%"/>
                                    <img className="forMobile" src={`/exhibition/[Mobile] Exhibition Batch 3.png`} width="100%"/>
                                    <img className="forMobile" src={`/exhibition/[Mobile] Exhibition Batch 4.png`} width="100%"/>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <div id="forum" className="content__event__listImg">
                        <Container>
                            <Row className="mt-5">
                                <Col xs={12}><h4>FORUM</h4></Col>
                                <Col>
                                    <img className="forDesktop" src={`/forum/Forum.png`} width="100%"/>
                                    <img className="forMobile" src={`/forum/[Mobile] Forum Batch 1.png`} width="100%"/>
                                    <img className="forMobile" src={`/forum/[Mobile] Forum Batch 2.png`} width="100%"/>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <div id="media" className="content__event__slider mt-5">
                    <Container>
                        <Row>
                            <Col xs={12} md={12}>
                            <h4>MEDIA</h4>
                            <Slider {...settings} ref={refSlider}>
                                {listImgMedia()}
                            </Slider>
                            <div className="slick_ia">
                                <p>{currentSlide}<span>/</span>3</p>
                                <ul className="button_slider">
                                    <li onClick={_prevArrow}><img style={{opacity:currentSlide == 1? '0.5' : '1'}} src="/arrow-services.svg" alt="arrow"/></li>
                                    <li onClick={_nextArrow}><img style={{opacity:currentSlide == 3? '0.5' : '1'}} src="/arrow-services.svg" alt="arrow"/></li>
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

export default EventPortfolio
