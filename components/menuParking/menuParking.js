import React,{useState,useEffect} from 'react'
import Link from 'next/link'

const MenuParking = () => {
    const [url, setUrl] = useState()

    useEffect(() => {
        // get url

        let a = window.location.href.split('/')[3].split('#')[0]
        setUrl(a)

        console.log(a);
    }, [])

    return (
        <ul className="sidebar__menu-ul">
            <li className={`${url === 'parking' ? 'active':'' }`}><Link href="/parking"><a>Tentang MAPI</a></Link></li>
            <ul>
                <li ><Link href="/parking/#visiMisi"><a>Visi & Misi</a></Link></li>
                <li ><Link href="/parking/#layanan"><a>Layanan</a></Link></li>
                <li ><Link href="/parking/#mengapaKami"><a>Mengapa Kami</a></Link></li>
            </ul>
            <li className={`${url === 'parking-produk' ? 'active':'' }`}><Link href="/parking-produk"><a>Produk & Sistem</a></Link></li>
            <li className={`${url === 'parking-proyek' ? 'active':'' }`}><Link href="/parking-proyek"><a>Proyek</a></Link></li>
            <li className={`${url === 'parking-legal' ? 'active':'' }`}><Link href="/parking-legal"><a>Legal Perusahaan</a></Link></li>
            <ul>
                <li ><Link href="/parking-legal/#strukturOrganisasi"><a>Struktur Organisasi</a></Link></li>
            </ul>
            <li className={`${url === 'parking-kontak' ? 'active':'' }`}><Link href="/parking-kontak"><a>Kontak</a></Link></li>
        </ul>
    )
}

export default MenuParking
