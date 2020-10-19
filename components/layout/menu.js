import React,{useState} from 'react'
import {Row,Col, Container} from 'react-bootstrap'
import Link from 'next/link'

const Menu = ({logo,page,scrollActive,showContact}) => {
    const [showMenu , setShowMenu] = useState(false)

    function openMenu() {
        setShowMenu(!showMenu)
    }

    return (
        <menu className={scrollActive}>
                <Container fluid>
                    <Row>
                        <Col xs={12} md={6} className="menu_mobile">
                            <Link href="/"><a>
                                <img src={`${showMenu ? '/mataer-logo-dark.png' : logo}`} className={`${showMenu ? 'open' : ''}`} alt="logo mataer" width="70px"/>
                            </a></Link>
                            <div className={`menu_mobile_btn forMobile ${showMenu ? 'open' : ''}`} onClick={openMenu}>
                                <span></span>
                                <span>MENU</span>
                                <span></span>
                            </div>
                            <div className={`menu_mobile_box ${showMenu ? 'openMenu' : ''}`}>
                                <ul>
                                    <li><Link href="/parking"><a className={page === 'parking' ? 'active' : ''}>Parking</a></Link></li>
                                    <li><Link href="/event"><a className={page === 'event' ? 'active' : ''}>Event & Media</a></Link></li>
                                    <li><Link href="/"><a>Adspro</a></Link></li>
                                    <li><Link href="/"><a>Business & Consultant</a></Link></li>
                                    <li><Link href="/berita"><a>Berita & Artikel</a></Link></li>
                                    <li><Link href="/"><a>Karir</a></Link></li>
                                    <li><Link href="/tentang-kami"><a>Tentang Kami</a></Link></li>
                                    <li className="hub" onClick={showContact}><a>Hubungi Kami</a></li>
                                </ul>
                            </div>
                        </Col>
                        <Col xs={12} md={6} className="forDesktop justify-content-end">
                            <div className="menu__link">
                                <ul className="menu__link-top">
                                    <li><Link href="/tentang-kami"><a>TENTANG KAMI <span><img src="/right2.png"/></span></a></Link></li>
                                    <li className="hub" onClick={showContact}><a>HUBUNGI KAMI <span><img src="/right2.png"/></span></a></li>
                                </ul>
                                <div className="menu__link-bottom">
                                    <ul className="menu__link-bottom-left">
                                        <li><Link href="/parking"><a className={page === 'parking' ? 'active' : ''}>Parking</a></Link></li>
                                        <li><Link href="/event"><a className={page === 'event' ? 'active' : ''}>Event & Media</a></Link></li>
                                        <li><Link href="/"><a>Adspro</a></Link></li>
                                        <li><Link href="/"><a>Business & Consultant</a></Link></li>
                                    </ul>
                                    <ul className="menu__link-bottom-right">
                                        <li><Link href="/berita"><a>Berita & Artikel</a></Link></li>
                                        <li><Link href="/"><a>Karir</a></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </menu>
    )
}

export default Menu
