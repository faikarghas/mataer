import React from 'react'
import {Row,Col} from 'react-bootstrap'

import SideBar from '../components/sidebar/index'
import Link from 'next/link'

const About = () => {

    return (
        <div className="page_layout">
            <SideBar activeMenu={{act:'active',menu:'about'}} src="/mataer-logo-color.png"/>
            <div className="page_layout-main d-flex"  initial='initial' animate='animate' exit="exit">
                <div className="menu-first menu-main">
                  <ul>
                    <li><Link href="/about"><a>Tentang Kami</a></Link></li>
                    <li><Link href="/about"><a>Company Profile</a></Link></li>
                    <li><Link href="/about"><a>Layanan</a></Link></li>
                    <li><Link href="/about"><a>Produk dan Sistem Pendukung</a></Link></li>
                  </ul>
                  <ul className="information">
                        <li><p>PT. Mataer Makmurindo</p></li>
                        <li><p>info@mataer.com</p></li>
                        <br/>
                        <li><p>Gd. Griya Upakara Kemenlu <br/>Lt 3B, Jl Cikini IV No 10, <br/>Jakarta Pusat</p></li>
                        <br/>
                        <li><p>T (021) 3103080, (021) 3103080</p></li>
                        <li><p>F (021) 3162315</p></li>
                        <li><p>PN 0812-8394-1425</p></li>
                        <br/>
                        <li><p>Ruko Golden Madrid 1 <br/>Blok B - 10, BSD City, <br/>Kel. Rawa Mekar Jaya, Kec. Serpong - Tangerang Selatan</p></li>
                        <br/>
                        <li><p>T (021) 5319 1667</p></li>
                    </ul>
                </div>
                <div className="about-second page_about">
                  <p>Sebagai salah satu penyedia jasa manajemen parkir di Indonesia, Mataer Parking Indonesia tidak pernah menyediakan layanan yang dirasa tidak bermanfaat untuk para mitra. Setiap manajemen parkir yang telah dikelola dibuat bersama dengan kehati-hatian dan perhatian untuk kebutuhan bisnis anda dalam hal efisiensi pekerjaan, moral pekerja, kelanjutan jangka panjang bisnis, serta keamanan dan kenyamanan untuk para pengguna parkir kendaraan bermotor.</p>
                  <br/>
                  <br/>
                  <h4>Visi</h4>
                  <ul>
                    <li>Menjadi Perusahaan Penyedia Layanan Pengelolaan Parkir Terpercaya oleh Mitra dan Pengguna Parkir se-Indonesia.</li>
                  </ul>
                  <br/>
                  <h4>Misi</h4>
                  <ul>
                    <li>Memberikan layanan pengelolaan parkir kendaraan bermotor yang profitable dengan mitra</li>
                    <li>Meningkatkan mutu dan kualitas Pengelolaan parkir dengan efisiensi pekerjaan melalui penggunaan teknologi dan sumber daya manusia yang professional</li>
                    <li>Menyelenggarakan pengelolaan parkir yang aman dan nyaman untuk para customer</li>
                  </ul>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <h4>Mengapa Kami</h4>
                  <p>Pengelolaan parkir termasuk dalam image property dan sesungguhnya dapat dikatakan pintu gerbang dalam serangkaian proses pembentukan kredibilitas citra layanan sebuah institusi ataupun instansi pemerintah dan swasta, termasuk juga dalam upaya memberikan pelayanan yang memiliki citra terbaik dan respon positif atas tuntutan masyarakat terhadap citra kinerja institusi tersebut secara keseluruhan.</p>
                  <br/>
                  <p>Mataer Parking Indonesia (MAPI) memberikan pelayanan yang terbaik untuk memaksimalkan fungsi dan peran pengelola parkir dengan sistem terintegrasi dan perlindungan asuransi penuh. Melalui pelayanan yang profesional, efektif, dan efisien untuk mewujudkan lahan parkir yang aman dan nyaman. Dengan sistem ini akan mempermudah client untuk mewujudkan memiliki :</p>
                  <br/>
                  <br/>
                  <ol>
                    <li>Memiliki lahan parkir yang aman, nyaman, dan tertata dengan baik serta pemaksimalan potensi pendapatan parkir.</li>
                    <li>Pelayanan cepat saat masuk dan keluar lahan parkir dengan teknologi terbaru.</li>
                    <li>Kepuasan pengalaman para pengguna jasa parkir.</li>
                    <li>Jaminan perlindungan asuransi kendaraan.</li>
                    <li>Terkoneksi dengan aplikasi pada smart phone untuk memudahkan pengguna melakukan booking dan payment secara online.</li>
                  </ol>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <h4>Layanan</h4>
                  <ul className="jasa">
                    <li>Parking Management</li>
                    <li>Insurance</li>
                    <li>Consulting</li>
                  </ul>
                </div>
            </div>
        </div>
    )
}

export default About
