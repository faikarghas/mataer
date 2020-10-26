import React from 'react'
import Link from 'next/link'

const Index = () => {
    return (
        <div className="menuAct forMobile">
        <ul>
            <li><Link href="/event"><a>Tentang MEM</a></Link></li>
            <ul>
                <li><Link href="/event#layanan"><a>Layanan</a></Link></li>
            </ul>
            <li><Link href="/event-portfolio"><a>Portfolio</a></Link></li>
            <ul>
                <li><Link href="/event-portfolio#exhibition"><a>Exhibition</a></Link></li>
                <li><Link href="/event-portfolio#forum"><a>Forum</a></Link></li>
                <li><Link href="/event-portfolio#media"><a>Media</a></Link></li>
            </ul>
            <li><Link href="/event-legal"><a>Legal Perusahaan</a></Link></li>
            <ul>
                <li><Link href="/event-legal#strukturOrganisasi"><a>Struktur Organisasi</a></Link></li>
            </ul>
            <li><Link href="/event-kontak"><a>Kontak</a></Link></li>
        </ul>
        <div className="scrollToTop"></div>

    </div>
    )
}

export default Index
