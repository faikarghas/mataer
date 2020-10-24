import React,{useState,useEffect} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'


const Index = () => {
    const [url, setUrl] = useState()
    const [url2, setUrl2] = useState()
    const router = useRouter()

    useEffect(() => {
        // get url
        let a = window.location.href.split('/')[3].split('#')[0]
        let b = window.location.href.split('/')[3].split('#')[1]

        setUrl(a)
        setUrl2(b)

        const handleRouteChange = (url) => {
            let c = url.split('#')[1]

            setUrl2(c)
        }

        router.events.on('hashChangeComplete', handleRouteChange)

        // If the component is unmounted, unsubscribe
        // from the event with the `off` method:
        return () => {
            router.events.off('hashChangeComplete', handleRouteChange)
        }
    }, [])

    return (
        <ul className="sidebar__menu-ul">
            <li className={`${url === 'event' ? 'active':'' }`}><Link href="/event"><a>Tentang MEM</a></Link></li>
            <ul>
                <li className={`${url2 === 'layanan' ? 'active':'' }`}><Link href="/event#layanan"><a>Layanan</a></Link></li>
            </ul>
            <li className={`${url === 'event-portfolio' ? 'active':'' }`}><Link href="/event-portfolio"><a>Portfolio</a></Link></li>
            <ul>
                <li className={`${url2 === 'exhibition' ? 'active':'' }`}><Link href="/event-portfolio#exhibition"><a>Exhibition</a></Link></li>
                <li className={`${url2 === 'forum' ? 'active':'' }`}><Link href="/event-portfolio#forum"><a>Forum</a></Link></li>
                <li className={`${url2 === 'media' ? 'active':'' }`}><Link href="/event-portfolio#media"><a>Media</a></Link></li>
            </ul>
            <li className={`${url === 'event-legal' ? 'active':'' }`}><Link href="/event-legal"><a>Legal Perusahaan</a></Link></li>
            <ul>
                <li className={`${url2 === 'strukturOrganisasi' ? 'active':'' }`}><Link href="/event-legal#strukturOrganisasi"><a>Struktur Organisasi</a></Link></li>
            </ul>
            <li className={`${url === 'event-kontak' ? 'active':'' }`}><Link href="/event-kontak"><a>Kontak</a></Link></li>
        </ul>
    )
}

export default Index
