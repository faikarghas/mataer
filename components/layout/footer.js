import React from 'react'
import {Row,Col, Container} from 'react-bootstrap'
import Link from 'next/link'

const Index = () => {
    return (
        <footer>
            <Container fluid>
                <Row>
                    <Col xs={12} md={4}>
                        <img src="/mataer-logo-dark.png" alt="logo mataer" width="70px"/>
                        <p className="cpm">MATAER GROUP | PT. MATAER CAPITAL NUSANTARA</p>
                        <p>Jalan Pahlawan Seribu,CBD Bidex Blok I No. 15,<br/>
                        Kota Tangerang Selatan, Prov. Banten</p>
                        <ul>
                            <li><span>Telepon</span>(021) 222 314 86</li>
                            <li>Layanan konsumen unit usaha : layanan.konsumen@mataer.com</li>
                            <li>Layanan umum : info@mataer.com</li>
                            <li>Layanan Kerjasama Usaha : b2b@mataer.com</li>
                        </ul>
                    </Col>
                    <Col xs={12} md={8} className="sitemap_footer">
                        <Row>
                            <Col xs={12} md={4} className="sitemap_footer-box">
                                <ul>
                                    <li><Link href="" className="disable"><a>Parking</a></Link></li>
                                    <li><Link href="/parking"><a>Tentang MAPI</a></Link></li>
                                    <li><Link href="/parking-produk"><a>Produk & Sistem</a></Link></li>
                                    <li><Link href="/parking-proyek"><a>Proyek</a></Link></li>
                                    <li><Link href="/parking-legal"><a>Legal Perusahaan</a></Link></li>
                                    <li><Link href="/parking-kontak"><a>Kontak</a></Link></li>
                                </ul>
                            </Col>
                            <Col xs={12} md={4} className="sitemap_footer-box">
                                <ul>
                                    <li><Link href="" className="disable"><a>Event & Media</a></Link></li>
                                    <li><Link href="/event"><a>Tentang Mataer Event & Media</a></Link></li>
                                    <li><Link href="/event-portfolio"><a>Portfolio</a></Link></li>
                                    <li><Link href="/event-legal"><a>Legal Perusahaan</a></Link></li>
                                    <li><Link href="/event-kontak"><a>Kontak</a></Link></li>
                                </ul>
                            </Col>
                            <Col xs={12} md={4} className="sitemap_footer-box">
                                <Row noGutters>
                                    <Col xs={12} className="mb-5">
                                        <ul>
                                            <li><Link href="" className="disable"><a>Kontak</a></Link></li>
                                            <li><Link href="/hubungi-kami"><a>Hubungi Kami</a></Link></li>
                                        </ul>
                                    </Col>
                                    <Col xs={12}>
                                        <ul>
                                            <li><Link href="" className="disable"><a>Berita & Artikel</a></Link></li>
                                            <li><Link href="/berita"><a>Semua Kategori</a></Link></li>
                                        </ul>
                                    </Col>
                                    <Col xs={12}>
                                        <ul className="sosmed">
                                            <li><img src="/Facebook.png" /></li>
                                            <li><img src="/Instagram.png" /></li>
                                            <li><img src="/Linkedin.png" /></li>
                                        </ul>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12}>
                        <div className="copyright">
                            <p>Copyright © Mata Aer Makmurindo 2021</p>
                            <a href="https://dignite.studio" target="_blank">Site Created by Dignite Studio</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Index
