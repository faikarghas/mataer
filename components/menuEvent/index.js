import React,{useEffect,useState} from 'react'
import Link from 'next/link'

const Index = () => {
    const [url, setUrl] = useState()

    useEffect(() => {
        // get url

        let a = window.location.href.split('/')[3].split('#')[0]

        setUrl(a)

    }, [])

    return (
        <ul className="sidebar__menu-ul">
            <li className={`${url === 'event' ? 'active':'' }`}><Link href="/event"><a>Tentang MEM</a></Link></li>
            <ul>
                <li><Link href="/event/#layanan"><a>Layanan</a></Link></li>
            </ul>
            <li className={`${url === 'event-portfolio' ? 'active':'' }`}><Link href="/event-portfolio"><a>Portfolio</a></Link></li>
            <ul>
                <li><Link href="/event-portfolio/#exhibition"><a>Exhibition</a></Link></li>
                <li><Link href="/event-portfolio/#forum"><a>Forum</a></Link></li>
                <li><Link href="/event-portfolio/#media"><a>Media</a></Link></li>
            </ul>
            <li className={`${url === 'event-legal' ? 'active':'' }`}><Link href="/event-legal"><a>Legal Perusahaan</a></Link></li>
            <ul>
                <li><Link href="/event-legal/#strukturOrganisasi"><a>Struktur Organisasi</a></Link></li>
            </ul>
            <li className={`${url === 'event-kontak' ? 'active':'' }`}><Link href="/event-kontak"><a>Kontak</a></Link></li>
        </ul>
    )
}

export default Index
