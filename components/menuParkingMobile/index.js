import React from 'react'
import Link from 'next/link'

import ScrollToTop from '../scrollToTop'

const MenuParkingMobile = ({page}) => {   
    return (
        <div className="menuAct forMobile">
        <ul>
            <li className={page === 'parking' ? 'active' : ''}><Link href="/parking"><a>Tentang MAPI</a></Link></li>
            <ul>
                <li><Link href="/parking#visiMisi"><a>Visi & Misi</a></Link></li>
                <li><Link href="/parking#layanan"><a>Layanan</a></Link></li>
                <li><Link href="/parking#mengapaKami"><a>Mengapa Kami</a></Link></li>
            </ul>
            <li className={page === 'parking-produk' ? 'active' : ''}><Link href="/parking-produk"><a>Produk & Sistem</a></Link></li>
            <li className={page === 'parking-proyek' ? 'active' : ''}><Link href="/parking-proyek"><a>Proyek</a></Link></li>
            <li className={page === 'parking-legal' ? 'active' : ''}><Link href="/parking-legal"><a>Legal Perusahaan</a></Link></li>
            <ul>
                <li><Link href="/parking-legal#strukturOrganisasi"><a>Struktur Organisasi</a></Link></li>
            </ul>
            <li className={page === 'parking-kontak' ? 'active' : ''}><Link href="/parking-kontak"><a>Kontak</a></Link></li>
        </ul>
        <ScrollToTop/>
    </div>
    )
}

export default MenuParkingMobile
