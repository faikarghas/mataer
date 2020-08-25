import React,{useRef,useState} from 'react'
import {Row,Col, Container} from 'react-bootstrap'
import Slider from "react-slick";
import Link from 'next/link'

import Menu from '../components/layout/menu'


const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // fade: true,
};


const Home = () => {
    const refSlider = useRef(null)

    function _nextArrow(params) {
        refSlider.current.slickNext()
    }

    function _prevArrow(params) {
        refSlider.current.slickPrev()
    }

    return (
        <React.Fragment>
        <header>
            <Menu logo="mataer-logo-light.png" page="parking"/>
        </header>

        <main>
            <div className="product__wrapper">
                <div className="sidebar">
                    <div className="sidebar__menu">
                        <ul>
                            <li><a>Tentang MAPI</a></li>
                            <ul>
                                <li><a>Visi & Misi</a></li>
                                <li><a>Layanan</a></li>
                                <li><a>Mengapa Kami</a></li>
                            </ul>
                            <li><a>Produk & Sistem</a></li>
                            <li><a>Proyek</a></li>
                            <li><a>Legal Perusahaan</a></li>
                            <ul>
                                <li><a>Struktur Organisasi</a></li>
                            </ul>
                            <li><a>Kontak</a></li>
                        </ul>
                    </div>
                </div>
                <div className="content">
                    <div className="content__headerImg">
                        <img src="/banner-parking.jpg" alt="banner parking" />
                        <div className="content__headerImg-title">
                            <h1>Mataer Parking Indonesia</h1>
                        </div>
                    </div>
                    <div className="content__firstSection">
                        <h3>Mataer Parking Indonesia (MAPI) merupakan perusahaan penyedia layanan
                        manajemen parkir kendaraan bermotor berbasis teknologi komputerisasi.
                        Telah berdiri sejak tahun 2015, telah memasuki dan memberikan layanan
                        manajemen parkir untuk Kampus/Universitas, Mall, Stasiun, Apartemen,
                        serta tempat fasilitas umum lainnya.</h3>
                        <p>Sebagai salah satu penyedia jasa manajemen parkir di Indonesia, Mataer Parking Indonesia tidak pernah menyediakan layanan yang dirasa tidak bermanfaat untuk para mitra. Setiap manajemen parkir yang telah dikelola dibuat bersama dengan kehati-hatian dan perhatian untuk kebutuhan bisnis anda dalam hal efisiensi pekerjaan, moral pekerja, kelanjutan jangka panjang bisnis, serta keamanan dan kenyamanan untuk para pengguna parkir kendaraan bermotor.</p>
                    </div>
                    <div className="content__visiSection">
                        <img src="/Visi.jpg" alt="visi" />
                        <div className="content__visiSection-desc">
                             <h4>VISI</h4>
                             <p>“Menjadi perusahaan penyedia layanan pengelolaan parkir terpercaya oleh mitra dan pengguna parkir se-Indonesia.”</p>
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

export default Home
