import React,{useRef,useState,useEffect} from 'react'
import {Row,Col, Container} from 'react-bootstrap'
import Link from 'next/link'
import { motion, useViewportScroll } from "framer-motion"
import Slider from "react-slick";

import Menu from '../components/layout/menu'
import MenuAct from '../components/menuParkingMobile'
import MenuParking from '../components/menuParking/menuParking'

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows:true
};


const ParkingLegal = () => {
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
            <Menu logo="mataer-logo-light.png" page="parking" scrollActive={scrollActive}/>
        </header>

        <main>
            <div className={`product__wrapper ${scrollActive}`}>
                <div className="sidebar">
                    <div className={`sidebar__menu ${scrollActive}`}>
                        <MenuParking/>
                    </div>
                </div>
                <div className="content__parking">
                    <MenuAct/>
                    <div className="content__parking__why">
                        <h3>Legal Perusahaan</h3>
                        <p>PT Mataer Makmurindo didirikan pada tanggal 11 November 2014,
                        berkantor pusat di Ruko Golden Madrid 1 No B 10 Tangerang Selatan
                        dan Gedung Griya Upakara Kemenlu Lt. 3B Jl Cikini IV No 10 Jakarta Pusat.
                        Akte Notaris - No 123. 21 Oktober 2014
                        Keputusan Menteri Hukum dan HAM RI – AHU-0028382.AH.01.02 TAHUN 2019 Domisili Perusahaan –
                        No 503/172-Kel. RMJ
                        Nomor Pokok Wajib Pajak Perusahaan (NPWP) - 71.314.677.7-411.000
                        Surat Ijin Usaha Perdagangan - No 503/000873-BP2T/30-08/PM/XII2104
                        No Pendaftaran BPJS Ketenagakerjaan – 19153228 Tahun 2019
                        </p>
                    </div>
                    <div id="strukturOrganisasi" className="content__parking__struktur">
                        <h4>Struktur Organisasi</h4>
                        <div className="list_struktur">
                            <Row>
                                <Col xs={12} md={6} className="list_struktur-item">
                                    <Row>
                                        <Col xs={5} className="mb-5rem">
                                            <div className="imgAvatar">
                                                <img src="/struktur/ben-stevenson-860px.jpg" />
                                            </div>
                                        </Col>
                                        <Col xs={7} className="mb-5rem">
                                            <p><b>Anggin Maruf</b></p>
                                            <p className="dw">Dewan Komisaris</p>
                                            <a href="mailto: abc@example.com">EMAIL</a>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xs={12} md={6} className="list_struktur-item">
                                    <Row>
                                        <Col xs={5} className="mb-5rem">
                                            <div className="imgAvatar">
                                                <img src="/struktur/cara-haigh-860px.jpg" />
                                            </div>
                                        </Col>
                                        <Col xs={7} className="mb-5rem">
                                            <p><b>Prabadika Hadyan Romadhona</b></p>
                                            <p className="dw">Dewan Komisaris</p>
                                            <a href="mailto: abc@example.com">EMAIL</a>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xs={12} md={6} className="list_struktur-item">
                                    <Row>
                                        <Col xs={5} className="mb-5rem">
                                            <div className="imgAvatar">
                                                <img src="/struktur/chris-poole-860px.jpg" />
                                            </div>
                                        </Col>
                                        <Col xs={7} className="mb-5rem">
                                            <p><b>Buyung Fajri Zaidin</b></p>
                                            <p className="dw">Direktur Utama</p>
                                            <a href="mailto: abc@example.com">EMAIL</a>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xs={12} md={6} className="list_struktur-item">
                                    <Row>
                                        <Col xs={5} className="mb-5rem">
                                            <div className="imgAvatar">
                                                <img src="/struktur/henry-makin-860px.jpg" />
                                            </div>
                                        </Col>
                                        <Col xs={7} className="mb-5rem">
                                            <p><b>Puguh Susatyo</b></p>
                                            <p className="dw">Direktur Operasional</p>
                                            <a href="mailto: abc@example.com">EMAIL</a>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xs={12} md={6} className="list_struktur-item">
                                    <Row>
                                        <Col xs={5} className="mb-5rem">
                                            <div className="imgAvatar">
                                                <img src="/struktur/joe-hamilton-860px.jpg" />
                                            </div>
                                        </Col>
                                        <Col xs={7} className="mb-5rem">
                                            <p><b>Hanik B. A.</b></p>
                                            <p className="dw">Direktur Keuangan </p>
                                            <a href="mailto: abc@example.com">EMAIL</a>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xs={12} md={6} className="list_struktur-item">
                                    <Row>
                                        <Col xs={5} className="mb-5rem">
                                            <div className="imgAvatar">
                                                <img src="/struktur/steven-gibson-860px.jpg" />
                                            </div>
                                        </Col>
                                        <Col xs={7} className="mb-5rem">
                                            <p><b>Constancia R.</b></p>
                                            <p className="dw">Direktur SDM & Umum</p>
                                            <a href="mailto: abc@example.com">EMAIL</a>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xs={12} md={6} className="list_struktur-item">
                                    <Row>
                                        <Col xs={5} className="mb-5rem">
                                            <div className="imgAvatar">
                                                <img src="/struktur/warren-holmes-860px.jpg" />
                                            </div>
                                        </Col>
                                        <Col xs={7} className="mb-5rem">
                                            <p><b>Agus Ruspendy</b></p>
                                            <p className="dw">Direktur Marketing</p>
                                            <a href="mailto: abc@example.com">EMAIL</a>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
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

export default ParkingLegal
