import React,{useState,useEffect} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Index = () => {
    const [url, setUrl] = useState()
    const router = useRouter()

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

        const handleRouteChange = (url) => {
            if (currUrl > 4) {
                a = window.location.href.split('/')[4].split('#')[0]
                setUrl(a)
            }
        }

        router.events.on('routeChangeComplete', handleRouteChange)

        // If the component is unmounted, unsubscribe
        // from the event with the `off` method:
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
        }

    }, [])


    return (
        <ul className="sidebar__menu-ul">
            <li className={`${url === 'berita' ? 'active':'' }`}><Link href="/berita"><a>Semua Kategori</a></Link></li>
            <li className={`${url === 'press-release' ? 'active':'' }`}><Link href="/berita/[category]" as={`/berita/press-release`}><a>Press Release</a></Link></li>
            {/* <li className={`${url === 'parking-area' ? 'active':'' }`}><Link href="/berita/[category]" as={`/berita/parking-area`}><a>Parking Area</a></Link></li> */}
            {/* <li className={`${url === 'internal-update' ? 'active':'' }`}><Link href="/berita/[category]" as={`/berita/internal-update`}><a>Internal Update</a></Link></li> */}
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
