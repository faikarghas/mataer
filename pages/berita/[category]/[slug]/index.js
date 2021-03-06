import React,{useRef,useState,useEffect} from 'react'
import {Row,Col, Container} from 'react-bootstrap'
import Link from 'next/link'
import { motion, useViewportScroll } from "framer-motion"
import Slider from "react-slick";
import parse from 'html-react-parser';

import Menu from '../../../../components/layout/menu'
import MenuBerita from '../../../../components/menuBerita'
import ShareIcon from '../../../../components/shareIcon'
import MenuAct from '../../../../components/menuBeritaMobile'
import Footer from '../../../../components/layout/footer'

import {absoluteUrl} from '../../../../lib/absoluteUrl'

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows:true
};


const BeritaDetail = ({dataNews}) => {
    const refSlider = useRef(null)
    const refContent = useRef(null)

    const { scrollY,scrollYProgress } = useViewportScroll()
    const [scrollActive , setScrollActive] = useState('')
    const [showShare , setShowShare] = useState(true)
    const [url , setUrl] = useState('')

    function _nextArrow(params) {
        refSlider.current.slickNext()
    }

    function _prevArrow(params) {
        refSlider.current.slickPrev()
    }

    function handleScroll() {
        let currentScroll = Math.round(scrollY.current)
        if (currentScroll >= 540) {
            setScrollActive('active_scroll')
        } else {
            setScrollActive('')
        }

        let contentHeight = refContent.current.clientHeight
        if (currentScroll > contentHeight - 200 ) {
            setShowShare(false)
        } else {
            setShowShare(true)
        }
    }

    useEffect(() => {
        let currentUrl = window.location.href
        setUrl(currentUrl)
        console.log(currentUrl);

        function watchScroll() {
            window.addEventListener("scroll", handleScroll);
        }
        watchScroll();
        // Remove listener (like componentWillUnmount)
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [])

    let d = new Date(dataNews.data[0].date);
    let date = d.getDate()
    let gmonth = d.getMonth()
    let year = d.getFullYear()
    let month;

    switch (gmonth) {
        case 1:
            month = 'Januari'
            break;
        case 2:
            month = 'Februari'
            break;
        case 3:
            month = 'Maret'
            break;
        case 9:
            month = 'September'
            break;
        default:
            break;
    }

    return (
        <React.Fragment>
        <header>
            <Menu logo="/mataer-logo-light.png" page="berita" scrollActive={scrollActive}/>
        </header>

        <main>
            <div className={`product__wrapper ${scrollActive}`}>
                <div className="sidebar">
                    <div className={`sidebar__menu ${scrollActive}`}>
                        <MenuBerita/>
                        <div className="kontak_press">
                            <ul>
                                <li>Kontak Press</li>
                                <li>Agus Ruspendy</li>
                                <li>Direktur Marketing</li>
                                <li>Corporate Communication</li>
                                <li>0812 3456 789</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="content__berita">
                    <MenuAct/>
                    <div className="content__berita_detail">
                        <Container>
                        <Row>
                            <Col xs={12}>
                                <div className="brd">
                                    <Link href="/berita"><a>Berita & Artikel</a></Link><span> {'>'} </span><Link href="/berita/[category]" as={`/berita/press-release`}><a>Press Release</a></Link>
                                </div>
                            </Col>
                            <Col xs={12} md={9}>
                                <div className="content__berita_detail-content" ref={refContent}>
                                    <h1>{dataNews.data[0].title}</h1>
                                    {/* <h4>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.</h4> */}
                                    <div className="date_wrapper">
                                        <div className="date_wrapper-f">
                                            <span >{`${date} ${month} ${year}`}</span>
                                        </div>
                                        <div className="date_wrapper-m">
                                        </div>
                                    </div>
                                    {parse(dataNews.data[0].description)}
                                    <ShareIcon device="forMobile" url={url} showShare={true}/>
                                </div>
                            </Col>
                            <Col xs={12} md={3} className="d-flex justify-content-center">
                                <ShareIcon device="forDesktop" showShare={showShare} url={url}/>
                            </Col>
                        </Row>
                        </Container>
                    </div>
                </div>
            </div>
        </main>
        <Footer/>
        </React.Fragment>
    )
}

BeritaDetail.getInitialProps = async (ctx) => {
    const { origin } = absoluteUrl(ctx.req, "localhost:3010");

    const slug = ctx.query.slug

    const pageRequest = `${origin}/api/getNewsDetail/${slug}`
    const res = await fetch(pageRequest)
    const json = await res.json()

    console.log(json.data[0].title);

    return { dataNews: json }
}



export default BeritaDetail
