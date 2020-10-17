import React from 'react'
import Link from 'next/link'

const Index = () => {
    return (
        <div className="menuAct forMobile">
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
    )
}

export default Index
