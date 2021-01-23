import React,{useRef,useState,useEffect,createRef} from 'react'
import {Row,Col, Container} from 'react-bootstrap'
import { motion, useViewportScroll } from "framer-motion"

import Menu from '../components/layout/menu'
import MenuAct from '../components/menuParkingMobile'
import MenuParking from '../components/menuParking/menuParking'
import Footer from '../components/layout/footer'

import Section from '../components/layout/refWrapper'

const ParkingLegal = () => {
    const refSlider = useRef(null)
    const { scrollY,scrollYProgress } = useViewportScroll()
    const [scrollActive , setScrollActive] = useState('')
    const [refSection, setRefSection] = useState()

    function handleScroll() {
        let currentScroll = Math.round(scrollY.current)
        if (currentScroll >= 540 ) {
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
            <Menu logo="/LogoGrupMataer/logoPark.png" page="parking" scrollActive={scrollActive}/>
        </header>

        <main>
            <div className={`product__wrapper ${scrollActive}`}>
                <div className="sidebar">
                    <div className={`sidebar__menu ${scrollActive}`}>
                        <MenuParking refSec={refSection} threshold={0.5}/>
                    </div>
                </div>
                <div className="content__parking">
                    <MenuAct page="parking-legal"/>
                    <Section id="firstLegal" className="content__parking__legal" refSec={refSection} >
                        <Container>
                                <Row>
                                    <Col xs={12}>
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
                                    </Col>
                            </Row>
                        </Container>
                    </Section>
                    <Section id="strukturOrganisasi" className="content__parking__struktur" refSec={refSection} >
                        <Container>
                            <Row>
                                <Col xs={12}>
                                <h4>Struktur Organisasi</h4>
                                </Col>
                            </Row>
                        </Container>
                        <div className="list_struktur">
                        <Container>
                            <Row>
                                <Col xs={12} md={6} className="list_struktur-item">
                                    <Row>
                                        <Col xs={6} md={5} className="mb-5rem">
                                            <div className="imgAvatar">
                                                {/* <img src="/struktur/ben-stevenson-860px.jpg" /> */}
                                            </div>
                                        </Col>
                                        <Col xs={6} md={7} className="mb-5rem">
                                            <p>Anggin Maruf</p>
                                            <p className="dw">Dewan Komisaris</p>
                                            <a href="mailto: abc@example.com">EMAIL</a>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xs={12} md={6} className="list_struktur-item">
                                    <Row>
                                        <Col xs={6} md={5} className="mb-5rem">
                                            <div className="imgAvatar">
                                                {/* <img src="/struktur/steven-gibson-860px.jpg" /> */}
                                            </div>
                                        </Col>
                                        <Col xs={6} md={7} className="mb-5rem">
                                            <p>Prabadika Hadyan Romadhona</p>
                                            <p className="dw">Dewan Komisaris</p>
                                            <a href="mailto: abc@example.com">EMAIL</a>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xs={12} md={6} className="list_struktur-item">
                                    <Row>
                                        <Col xs={6} md={5} className="mb-5rem">
                                            <div className="imgAvatar">
                                                {/* <img src="/struktur/chris-poole-860px.jpg" /> */}
                                            </div>
                                        </Col>
                                        <Col xs={6} md={7} className="mb-5rem">
                                            <p>Buyung Fajri Zaidin</p>
                                            <p className="dw">Direktur Utama</p>
                                            <a href="mailto: abc@example.com">EMAIL</a>
                                        </Col>
                                    </Row>
                                </Col>
                                {/* <Col xs={12} md={6} className="list_struktur-item">
                                    <Row>
                                        <Col xs={6} md={5} className="mb-5rem">
                                            <div className="imgAvatar">
                                                <img src="/struktur/henry-makin-860px.jpg" />
                                            </div>
                                        </Col>
                                        <Col xs={6} md={7} className="mb-5rem">
                                            <p>Puguh Susatyo</p>
                                            <p className="dw">Direktur Operasional</p>
                                            <a href="mailto: abc@example.com">EMAIL</a>
                                        </Col>
                                    </Row>
                                </Col> */}
                                {/* <Col xs={12} md={6} className="list_struktur-item">
                                    <Row>
                                        <Col xs={6} md={5} className="mb-5rem">
                                            <div className="imgAvatar">
                                                <img src="/struktur/joe-hamilton-860px.jpg" />
                                            </div>
                                        </Col>
                                        <Col xs={6} md={7} className="mb-5rem">
                                            <p>Hanik B. A.</p>
                                            <p className="dw">Direktur Keuangan </p>
                                            <a href="mailto: abc@example.com">EMAIL</a>
                                        </Col>
                                    </Row>
                                </Col> */}
                                {/* <Col xs={12} md={6} className="list_struktur-item">
                                    <Row>
                                        <Col xs={6} md={5} className="mb-5rem">
                                            <div className="imgAvatar">
                                                <img src="/struktur/cara-haigh-860px.jpg" />
                                            </div>
                                        </Col>
                                        <Col xs={6} md={7} className="mb-5rem">
                                            <p>Constancia R.</p>
                                            <p className="dw">Direktur SDM & Umum</p>
                                            <a href="mailto: abc@example.com">EMAIL</a>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xs={12} md={6} className="list_struktur-item">
                                    <Row>
                                        <Col xs={6} md={5} className="mb-5rem">
                                            <div className="imgAvatar">
                                                <img src="/struktur/warren-holmes-860px.jpg" />
                                            </div>
                                        </Col>
                                        <Col xs={6} md={7} className="mb-5rem">
                                            <p>Agus Ruspendy</p>
                                            <p className="dw">Direktur Marketing</p>
                                            <a href="mailto: abc@example.com">EMAIL</a>
                                        </Col>
                                    </Row>
                                </Col> */}
                            </Row>
                            </Container>
                        </div>
                    </Section>
                </div>
            </div>
        </main>
        <Footer/>

        </React.Fragment>
    )
}

export default ParkingLegal
