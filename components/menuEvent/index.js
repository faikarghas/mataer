import React,{useState,useEffect} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'


const Index = ({hash,refSec,threshold}) => {
    const [url, setUrl] = useState()
    const [url2, setUrl2] = useState()
    const router = useRouter()

    useEffect(() => {
        console.log(threshold,'threshold');
        // get url
        let a = window.location.href.split('/')[3].split('#')[0]
        let b = window.location.href.split('/')[3].split('#')[1]

        setUrl(a)
        setUrl2(hash)

        const handleRouteChange = (url) => {
            let c = url.split('#')[1]

            setUrl2(c)
        }

        router.events.on('hashChangeComplete', handleRouteChange)


        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.target.id  && entry.isIntersecting) {
                    setUrl2(entry.target.id)
                    console.log('its');
                } else {
                    setUrl2('')
                }
            },
            {
              root: null,
              rootMargin: "0px",
              threshold: threshold
            }
        );


        if (refSec) {
            if (a === 'event') {
                 // tentang
                observer.observe(refSec['layanan'].current);
            } else if (a === 'event-portfolio') {
                // legal
                observer.observe(refSec['exhibition'].current);
                observer.observe(refSec['forum'].current);
                observer.observe(refSec['media'].current);
            } else if (a === 'event-legal') {
                observer.observe(refSec['strukturOrganisasi'].current);
            }
        }

        // If the component is unmounted, unsubscribe
        // from the event with the `off` method:
        return () => {
            observer.disconnect()
            router.events.off('hashChangeComplete', handleRouteChange)
        }
    }, [hash,refSec])

    return (
        <ul className="sidebar__menu-ul">
            <li className={`${url === 'event' ? 'active':'' }`}><Link href="/event"><a>Tentang Mataer Event & Media</a></Link></li>
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
