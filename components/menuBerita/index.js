import React,{useState,useEffect} from 'react'
import Link from 'next/link'

const Index = () => {
    const [url, setUrl] = useState()

    useEffect(() => {
        // get url
        let currUrl = window.location.href.split('/').length
        let a
        if (currUrl > 4) {
            a = window.location.href.split('/')[4].split('#')[0]
            setUrl(a)
        } else {
            a = window.location.href.split('/')[3].split('#')[0]
            setUrl(a)
        }


    }, [])

    return (
        <ul className="sidebar__menu-ul">
            <li className={`${url === 'berita' ? 'active':'' }`}><Link href="/berita"><a>Semua Kategori</a></Link></li>
            <li className={`${url === 'press-event-release' ? 'active':'' }`}><Link href="/berita/[category]" as={`/berita/press-event-release`}><a>Event Press Release</a></Link></li>
            <li><Link href="/berita"><a>Parking Area</a></Link></li>
            <li><Link href="/berita"><a>Internal Update</a></Link></li>
            <li className="follow">Follow Mataer</li>
            <ul className="sosmed">
                <li><img src="/Facebook.png" /></li>
                <li><img src="/Instagram.png" /></li>
                <li><img src="/Linkedin.png" /></li>
            </ul>
        </ul>
    )
}

export default Index
