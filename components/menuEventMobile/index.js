import React from 'react'
import Link from 'next/link'

const Index = () => {
    return (
        <div className="menuAct forMobile">
        <ul>
            <li><Link href="/event"><a>Tentang MEM</a></Link></li>
            <ul>
                <li><a>Layanan</a></li>
            </ul>
            <li><Link href="/event-portfolio"><a>Portfolio</a></Link></li>
            <ul>
                <li><a>Exhibition</a></li>
                <li><a>Forum</a></li>
                <li><a>Media</a></li>
            </ul>
            <li><Link href="/event-legal"><a>Legal Perusahaan</a></Link></li>
            <ul>
                <li><a>Struktur Organisasi</a></li>
            </ul>
            <li><Link href="/event-kontak"><a>Kontak</a></Link></li>
        </ul>
    </div>
    )
}

export default Index
