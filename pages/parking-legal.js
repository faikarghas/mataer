import React,{useRef,useState,useEffect} from 'react'
import {Row,Col, Container} from 'react-bootstrap'
import Link from 'next/link'
import { motion, useViewportScroll } from "framer-motion"
import Slider from "react-slick";

import Menu from '../components/layout/menu'


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

    return (
        <React.Fragment>
        <header>
            <Menu logo="mataer-logo-light.png" page="parking" scrollActive={scrollActive}/>
        </header>

        <main>
            <div className={`product__wrapper ${scrollActive}`}>
                <div className="sidebar">
                    <div className={`sidebar__menu ${scrollActive}`}>
                        <ul>
                            <li><Link href="/parking"><a>Tentang MAPI</a></Link></li>
                            <ul>
                                <li><a>Visi & Misi</a></li>
                                <li><a>Layanan</a></li>
                                <li><a>Mengapa Kami</a></li>
                            </ul>
                            <li><Link href="/parking-produk"><a>Produk & Sistem</a></Link></li>
                            <li><Link href="/parking-proyek"><a>Proyek</a></Link></li>
                            <li><Link href="/parking-legal"><a>Legal Perusahaan</a></Link></li>
                            <ul>
                                <li><a>Struktur Organisasi</a></li>
                            </ul>
                            <li><Link href="/parking-kontak"><a>Kontak</a></Link></li>
                        </ul>
                    </div>
                </div>
                <div className="content__parking">
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
                    <div className="content__parking__struktur">
                        <h4>Struktur Organisasi</h4>
                        <div className="list_struktur">
                            <Row>
                                <Col xs={12} md={6}>
                                    <Row>
                                        <Col xs={6} className="mb-5">
                                            <div className="imgAvatar">
                                                <img src="/struktur/ben-stevenson-860px.jpg" />
                                            </div>
                                        </Col>
                                        <Col xs={6} className="mb-5">
                                            <p><b>Anggin Maruf</b></p>
                                            <p>Dewan Komisaris</p>
                                            <a href="mailto: abc@example.com">EMAIL</a>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xs={12} md={6}>
                                    <Row>
                                        <Col xs={6} className="mb-5">
                                            <div className="imgAvatar">
                                                <img src="/struktur/ben-stevenson-860px.jpg" />
                                            </div>
                                        </Col>
                                        <Col xs={6} className="mb-5">
                                            <p><b>Prabadika Hadyan Romadhona</b></p>
                                            <p>Dewan Komisaris</p>
                                            <a href="mailto: abc@example.com">EMAIL</a>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xs={12} md={6}>
                                    <Row>
                                        <Col xs={6} className="mb-5">
                                            <div className="imgAvatar">
                                                <img src="/struktur/ben-stevenson-860px.jpg" />
                                            </div>
                                        </Col>
                                        <Col xs={6} className="mb-5">
                                            <p><b>Buyung Fajri Zaidin</b></p>
                                            <p>Direktur Utama</p>
                                            <a href="mailto: abc@example.com">EMAIL</a>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xs={12} md={6}>
                                    <Row>
                                        <Col xs={6} className="mb-5">
                                            <div className="imgAvatar">
                                                <img src="/struktur/ben-stevenson-860px.jpg" />
                                            </div>
                                        </Col>
                                        <Col xs={6} className="mb-5">
                                            <p><b>Puguh Susatyo</b></p>
                                            <p>Direktur Operasional</p>
                                            <a href="mailto: abc@example.com">EMAIL</a>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xs={12} md={6}>
                                    <Row>
                                        <Col xs={6} className="mb-5">
                                            <div className="imgAvatar">
                                                <img src="/struktur/ben-stevenson-860px.jpg" />
                                            </div>
                                        </Col>
                                        <Col xs={6} className="mb-5">
                                            <p><b>Hanik B. A.</b></p>
                                            <p>Direktur Keuangan </p>
                                            <a href="mailto: abc@example.com">EMAIL</a>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xs={12} md={6}>
                                    <Row>
                                        <Col xs={6} className="mb-5">
                                            <div className="imgAvatar">
                                                <img src="/struktur/ben-stevenson-860px.jpg" />
                                            </div>
                                        </Col>
                                        <Col xs={6} className="mb-5">
                                            <p><b>Constancia R.</b></p>
                                            <p>Direktur SDM & Umum</p>
                                            <a href="mailto: abc@example.com">EMAIL</a>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xs={12} md={6}>
                                    <Row>
                                        <Col xs={6} className="mb-5">
                                            <div className="imgAvatar">
                                                <img src="/struktur/ben-stevenson-860px.jpg" />
                                            </div>
                                        </Col>
                                        <Col xs={6} className="mb-5">
                                            <p><b>Agus Ruspendy</b></p>
                                            <p>Direktur Marketing</p>
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
