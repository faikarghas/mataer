import React from 'react'
import Link from 'next/link'

import ScrollToTop from '../scrollToTop'

const Index = ({page}) => {
    return (
        <div className="menuAct forMobile">
        <ul>
            <li className={page === 'event' ? 'active' : ''}><Link href="/event"><a>Tentang Mataer Event & Media</a></Link></li>
            <ul>
                <li><Link href="/event#layanan"><a>Layanan</a></Link></li>
            </ul>
            <li className={page === 'event-portfolio' ? 'active' : ''}><Link href="/event-portfolio"><a>Portfolio</a></Link></li>
            <ul>
                <li><Link href="/event-portfolio#exhibition"><a>Exhibition</a></Link></li>
                <li><Link href="/event-portfolio#forum"><a>Forum</a></Link></li>
                <li><Link href="/event-portfolio#media"><a>Media</a></Link></li>
            </ul>
            <li className={page === 'event-legal' ? 'active' : ''}><Link href="/event-legal"><a>Legal Perusahaan</a></Link></li>
            <ul>
                <li><Link href="/event-legal#strukturOrganisasi"><a>Struktur Organisasi</a></Link></li>
            </ul>
            <li className={page === 'event-kontak' ? 'active' : ''}><Link href="/event-kontak"><a>Kontak</a></Link></li>
        </ul>
        <ScrollToTop/>
    </div>
    )
}

export default Index
