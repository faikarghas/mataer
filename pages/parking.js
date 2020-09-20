import React,{useRef,useState,useEffect} from 'react'
import {Row,Col, Container} from 'react-bootstrap'
import Link from 'next/link'
import { motion, useViewportScroll } from "framer-motion"

import Menu from '../components/layout/menu'
import MenuAct from '../components/menuAction'

const Home = () => {
    const refSlider = useRef(null)
    const { scrollY,scrollYProgress } = useViewportScroll()
    const [scrollActive , setScrollActive] = useState('')


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
                    <MenuAct/>
                    <div className="content__parking__headerImg">
                        <img src="/banner-parking.jpg" alt="banner parking" />
                        <div className="content__parking__headerImg-title">
                            <h1>Mataer Parking Indonesia</h1>
                        </div>
                    </div>
                    <div className="content__parking__firstSection">
                        <p><b>Mataer Parking Indonesia (MAPI) merupakan perusahaan penyedia layanan
                        manajemen parkir kendaraan bermotor berbasis teknologi komputerisasi.
                        Telah berdiri sejak tahun 2015, telah memasuki dan memberikan layanan
                        manajemen parkir untuk Kampus/Universitas, Mall, Stasiun, Apartemen,
                        serta tempat fasilitas umum lainnya.</b></p>
                        <p>Sebagai salah satu penyedia jasa manajemen parkir di Indonesia, Mataer Parking Indonesia tidak pernah menyediakan layanan yang dirasa tidak bermanfaat untuk para mitra. Setiap manajemen parkir yang telah dikelola dibuat bersama dengan kehati-hatian dan perhatian untuk kebutuhan bisnis anda dalam hal efisiensi pekerjaan, moral pekerja, kelanjutan jangka panjang bisnis, serta keamanan dan kenyamanan untuk para pengguna parkir kendaraan bermotor.</p>
                    </div>
                    <div className="content__parking__visiSection">
                        <img src="/Visi.jpg" alt="visi" />
                        <div className="content__parking__visiSection-desc">
                             <h4>VISI</h4>
                             <p>“Menjadi perusahaan penyedia layanan pengelolaan parkir terpercaya oleh mitra dan pengguna parkir se-Indonesia.”</p>
                        </div>
                    </div>
                    <div className="content__parking__misiSection">
                        <Row>
                            <Col xs={12} md={5}>
                                <h4>MISI</h4>
                            </Col>
                            <Col xs={12} md={7}>
                                <ul>
                                    <li><span>1</span><p><b>Memberikan layanan pengelolaan parkir kendaraan bermotor yang profitable dengan mitra.</b></p></li>
                                    <li><span>2</span><p><b>Meningkatkan mutu dan kualitas pengelolaan parkir dengan efisiensi pekerjaan melalui penggunaan teknologi dan sumber daya manusia yang profesional.</b></p></li>
                                    <li><span>3</span><p><b>Menyelenggarakan pengelolaan parkir yang aman dan nyaman untuk para customer.</b></p></li>
                                </ul>
                            </Col>
                        </Row>
                    </div>
                    <div className="content__parking__layanan">
                        <Row>
                            <Col xs={12}>
                                <h4>Layanan</h4>
                            </Col>
                            <Col xs={12} md={12} lg={4}>
                                <div className="content__parking__layanan_top">
                                    <div className="title_wrapper">
                                        <h4>Parking<br/>Management</h4>
                                    </div>
                                    <p><b>Melayani pengelolaan
                                    dan manajemen parkir
                                    termasuk Traditional
                                    Valet, Building Parking,
                                    Parking Management
                                    Consultant, dan
                                    Pengembangan Area
                                    Parkir.</b></p>
                                </div>
                                <div className="content__parking__layanan_img">
                                    <img src="/Parking-Management-min.jpg" width="100%" alt=""/>
                                </div>
                            </Col>
                            <Col xs={12} md={12} lg={4}>
                                <div className="content__parking__layanan_top">
                                    <div className="title_wrapper">
                                    <h4>Insurance</h4>
                                    </div>
                                    <p><b>Menyediakan layanan
                                    asuransi di antaranya
                                    Personal Accident
                                    Insurance, Parking
                                    Insurance, dan Building
                                    & Asset Insurance.</b></p>
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
                                    <p><b>Melayani pembuatan
                                    feasibility study untuk
                                    memaksimalkan alur
                                    dan penggunaan space
                                    gedung atau area untuk
                                    penyelenggaraan
                                    parkir.</b></p>
                                </div>
                                <div className="content__parking__layanan_img">
                                    <img src="/Consulting-min.jpg" width="100%" alt=""/>
                                </div>
                            </Col>
                        </Row>
                    </div>

                    <div className="content__parking__why">
                        <h4>Mengapa Kami</h4>
                        <ul>
                            <li><p>Memiliki lahan parkir yang aman, nyaman, dan tertata dengan baik serta pemaksimalan potensi pendapatan parkir</p></li>
                            <li><p>Pelayanan cepat saat masuk dan keluar lahan parkir dengan teknologi terbaru</p></li>
                            <li><p>Kepuasan pengalaman para pengguna jasa parkir</p></li>
                            <li><p>Jaminan perlindungan asuransi kendaraan</p></li>
                            <li><p>Terkoneksi dengan aplikasi pada smart phone untuk memudahkan pengguna melakukan booking dan payment secara online</p></li>
                        </ul>
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

export default Home
