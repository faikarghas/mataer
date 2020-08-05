import React from 'react'
import {Row,Col} from 'react-bootstrap'

import SideBar from '../components/sidebar/index'
import Link from 'next/link'

const Home = () => {

    return (
        <div className="page_layout home-bg">
            <SideBar activeMenu={{act:'active',menu:'about'}} src="/mataer-logo-light.png"/>
            <div className="page_layout-main d-flex"  initial='initial' animate='animate' exit="exit">
                <div className="menu-first menu-home">
                  <ul>
                    <li><Link href="/about"><a>Tentang Kami</a></Link></li>
                    <li><Link href="/about"><a>Company Profile</a></Link></li>
                    <li><Link href="/about"><a>Layanan</a></Link></li>
                    <li><Link href="/about"><a>Produk dan Sistem Pendukung</a></Link></li>
                  </ul>
                </div>
                <div className="content__wrapper">
                  <h1>Mataer Parking Indonesia (MAPI) merupakan perusahaan penyedia layanan manajemen parkir kendaraan bermotor berbasis teknologi komputerisasi. </h1>
                </div>
            </div>
        </div>
    )
}

export default Home
