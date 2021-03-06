import React,{useRef,useState,useEffect,createRef} from 'react'
import {Row,Col, Container} from 'react-bootstrap'
import Link from 'next/link'
import { motion, useViewportScroll } from "framer-motion"

import Menu from '../components/layout/menu'
import MenuAct from '../components/menuParkingMobile'
import MenuParking from '../components/menuParking/menuParking'
import Section from '../components/layout/refWrapper'
import Footer from '../components/layout/footer'

const Parking = () => {
    const { scrollY,scrollYProgress } = useViewportScroll()
    const [scrollActive , setScrollActive] = useState('')
    const [currentHash, setCurrentHash] = useState('')
    const [refSection, setRefSection] = useState()

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
            <Menu logo="/LogoGrupMataer/logoPark.png" page="parking" scrollActive={scrollActive} />
        </header>

        <main>
            <div className={`product__wrapper ${scrollActive}`}>
                <div className="sidebar">
                    <div className={`sidebar__menu ${scrollActive}`}>
                        <MenuParking hash={currentHash} refSec={refSection} threshold={0.7}/>
                    </div>
                </div>
                <div className="content__parking">
                    <MenuAct page="parking"/>
                    <Section id="headerImg" className="content__parking__headerImg" refSec={refSection}>
                        <img src="/banner-parking.jpg" alt="banner parking" />
                        <div className="content__parking__headerImg-title">
                            <h1>Mataer Parking Indonesia</h1>
                        </div>
                    </Section>
                    <Section id="firstSection" className="content__parking__firstSection" refSec={refSection}>
                        <Container>
                            <Row>
                                <Col xs={12}>
                                <p>Mataer Parking Indonesia (MAPI) merupakan perusahaan penyedia layanan
                                manajemen parkir kendaraan bermotor berbasis teknologi komputerisasi.
                                Telah berdiri sejak tahun 2015, telah memasuki dan memberikan layanan
                                manajemen parkir untuk Kampus/Universitas, Mall, Stasiun, Apartemen,
                                serta tempat fasilitas umum lainnya.</p>
                                <p>Sebagai salah satu penyedia jasa manajemen parkir di Indonesia, Mataer Parking Indonesia tidak pernah menyediakan layanan yang dirasa tidak bermanfaat untuk para mitra. Setiap manajemen parkir yang telah dikelola dibuat bersama dengan kehati-hatian dan perhatian untuk kebutuhan bisnis anda dalam hal efisiensi pekerjaan, moral pekerja, kelanjutan jangka panjang bisnis, serta keamanan dan kenyamanan untuk para pengguna parkir kendaraan bermotor.</p>
                                </Col>
                            </Row>
                        </Container>
                    </Section>
                    <Section id="visiMisi" className="content__parking__visiSection" refSec={refSection}>
                        <img className="forDesktop" src="/Visi.jpg" alt="visi" />
                        <img className="forMobile" src="/Visi-mobile.jpg" alt="visi" />
                        <div className="content__parking__visiSection-desc">
                             <h4>Visi</h4>
                             <p>“Menjadi perusahaan penyedia layanan pengelolaan parkir terpercaya oleh mitra dan pengguna parkir se-<br/>Indonesia.”</p>
                        </div>
                    </Section>
                    <Section id="misiSection" className="content__parking__misiSection" refSec={refSection}>
                        <Container>
                        <Row>
                            <Col xs={12} md={5}>
                                <h4>Misi</h4>
                            </Col>
                            <Col xs={12} md={7}>
                                <ul>
                                    <li><span>1</span><p>Memberikan layanan pengelolaan parkir kendaraan bermotor yang profitable dengan mitra.</p></li>
                                    <li><span>2</span><p>Meningkatkan mutu dan kualitas pengelolaan parkir dengan efisiensi pekerjaan melalui penggunaan teknologi dan sumber daya manusia yang profesional.</p></li>
                                    <li><span>3</span><p>Menyelenggarakan pengelolaan parkir yang aman dan nyaman untuk para customer.</p></li>
                                </ul>
                            </Col>
                        </Row>
                        </Container>
                    </Section>
                    <Section id="layanan" className="content__parking__layanan" refSec={refSection}>
                        <Container>
                        <Row>
                            <Col xs={12}>
                                <h4>Layanan</h4>
                            </Col>
                            <Col xs={12} md={12} lg={4} className="xs-mb-40">
                                <div className="content__parking__layanan_top">
                                    <div className="title_wrapper">
                                        <h4>Parking<br/>Management</h4>
                                    </div>
                                    <p>Melayani pengelolaan
                                    dan manajemen parkir
                                    termasuk Traditional
                                    Valet, Building Parking,
                                    Parking Management
                                    Consultant, dan
                                    Pengembangan Area
                                    Parkir.</p>
                                </div>
                                <div className="content__parking__layanan_img">
                                    <img src="/Parking-Management-min.jpg" width="100%" alt=""/>
                                </div>
                            </Col>
                            <Col xs={12} md={12} lg={4} className="xs-mb-40">
                                <div className="content__parking__layanan_top">
                                    <div className="title_wrapper">
                                    <h4>Insurance</h4>
                                    </div>
                                    <p>Menyediakan layanan
                                    asuransi di antaranya
                                    Personal Accident
                                    Insurance, Parking
                                    Insurance, dan Building
                                    & Asset Insurance.</p>
                                </div>
                                <div className="content__parking__layanan_img">
                                    <img src="/Insurance-min.jpg" width="100%" alt=""/>
                                </div>
                            </Col>
                            <Col xs={12} md={12} lg={4}>
                                <div className="content__parking__layanan_top">
                                    <div className="title_wrapper">
                                    <h4>Consulting</h4>
                                    </div>
                                    <p>Melayani pembuatan
                                    feasibility study untuk
                                    memaksimalkan alur
                                    dan penggunaan space
                                    gedung atau area untuk
                                    penyelenggaraan
                                    parkir.</p>
                                </div>
                                <div className="content__parking__layanan_img">
                                    <img src="/Consulting-min.jpg" width="100%" alt=""/>
                                </div>
                            </Col>
                        </Row>
                        </Container>
                    </Section>
                    <Section id="mengapaKami" className="content__parking__why" refSec={refSection}>
                        <Container>
                            <Row>
                                <Col xs={12}>
                                <h4>Mengapa Kami</h4>
                                <ul>
                                    <li><p>Memiliki lahan parkir yang aman, nyaman, dan tertata dengan baik serta pemaksimalan potensi pendapatan parkir</p></li>
                                    <li><p>Pelayanan cepat saat masuk dan keluar lahan parkir dengan teknologi terbaru</p></li>
                                    <li><p>Kepuasan pengalaman para pengguna jasa parkir</p></li>
                                    <li><p>Jaminan perlindungan asuransi kendaraan</p></li>
                                    <li><p>Terkoneksi dengan aplikasi pada smart phone untuk memudahkan pengguna melakukan booking dan payment secara online</p></li>
                                </ul>
                                </Col>
                            </Row>
                        </Container>
                    </Section>
                </div>
            </div>
        </main>
        <Footer/>

        </React.Fragment>
    )
}

export default Parking
