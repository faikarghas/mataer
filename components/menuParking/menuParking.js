import React,{useState,useEffect} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'


const MenuParking = ({hash,refSec}) => {
    const [url, setUrl] = useState()
    const [url2, setUrl2] = useState()
    const router = useRouter()
    useEffect(() => {
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
                    // refSec[entry.target.id].current.style.backgroundColor = 'black'
                    console.log(entry.target.id);
                    setUrl2(entry.target.id)
                    // setCurrentSection(entry.target.id);
                } else {
                    // refSec[entry.target.id].current.style.backgroundColor = 'white'
                }
            },
            {
              root: null,
              rootMargin: "0px",
              threshold: 0.7
            }
        );


        if (refSec) {
            observer.observe(refSec['headerImg'].current);
            observer.observe(refSec['firstSection'].current);
            observer.observe(refSec['visiMisi'].current);
            observer.observe(refSec['misiSection'].current);
            observer.observe(refSec['layanan'].current);
            observer.observe(refSec['mengapaKami'].current);

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
            <li className={`${url === 'parking' ? 'active':'' }`}><Link href="/parking"><a>Tentang MAPI</a></Link></li>
            <ul>
                <li className={`${url2 === 'visiMisi' ? 'active':'' }`} ><Link href="/parking#visiMisi"><a>Visi & Misi</a></Link></li>
                <li className={`${url2 === 'layanan' ? 'active':'' }`} ><Link href="/parking#layanan"><a>Layanan</a></Link></li>
                <li className={`${url2 === 'mengapaKami' ? 'active':'' }`} ><Link href="/parking#mengapaKami"><a>Mengapa Kami</a></Link></li>
            </ul>
            <li className={`${url === 'parking-produk' ? 'active':'' }`}><Link href="/parking-produk"><a>Produk & Sistem</a></Link></li>
            <li className={`${url === 'parking-proyek' ? 'active':'' }`}><Link href="/parking-proyek"><a>Proyek</a></Link></li>
            <li className={`${url === 'parking-legal' ? 'active':'' }`}><Link href="/parking-legal"><a>Legal Perusahaan</a></Link></li>
            <ul>
                <li className={`${url2 === 'strukturOrganisasi' ? 'active':'' }`} ><Link href="/parking-legal#strukturOrganisasi"><a>Struktur Organisasi</a></Link></li>
            </ul>
            <li className={`${url === 'parking-kontak' ? 'active':'' }`}><Link href="/parking-kontak"><a>Kontak</a></Link></li>
        </ul>
    )
}

export default MenuParking
