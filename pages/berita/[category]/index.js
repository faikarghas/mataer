import React,{useRef,useState,useEffect} from 'react'
import {Row,Col, Container} from 'react-bootstrap'
import Link from 'next/link'
import { motion, useViewportScroll } from "framer-motion"
import Slider from "react-slick";

import Menu from '../../../components/layout/menu'
import MenuBerita from '../../../components/menuBerita'
import MenuAct from '../../../components/menuBeritaMobile'

import {absoluteUrl} from '../../../lib/absoluteUrl'



const Category = ({data}) => {
    const refSlider = useRef(null)
    const { scrollY,scrollYProgress } = useViewportScroll()
    const [scrollActive , setScrollActive] = useState('')

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
    }

    useEffect(() => {
        function watchScroll() {
            window.addEventListener("scroll", handleScroll);
        }
        watchScroll();
        // Remove listener (like componentWillUnmount)
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [])

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

                    <div className="content__berita_wrapper">
                        <Container>
                            <Row>
                                <Col xs={12}><h3>Berita & Artikel</h3></Col>
                                {data.dataCategory.map((item,i)=>{
                                    let category = item.category.split('-').join(' ')
                                    return(
                                        <Col xs={12} md={4} className="mb-5" key={i}>
                                            <div className="content__berita_wrapper-item">
                                                <Link href={`/berita/[category]/[slug]`} as={`/berita/event-press-release/Pagelaran-Budaya-Jakarta-Berlangsung`}>
                                                    <a><img src="/Article1.jpg" width="100%"/></a>
                                                </Link>
                                                <Link href={`/berita/[category]/[slug]`} as={`/berita/event-press-release/Pagelaran-Budaya-Jakarta-Berlangsung`}><a>{item.title}</a></Link>
                                                <div className="date_title"><p>14 AGUSTUS 2020</p><span>/</span><Link href="/berita/[category]" as={`/berita/${category.split(' ').join('-')}`}><a>{category}</a></Link></div>
                                            </div>
                                        </Col>
                                    )
                                })}
                            </Row>
                        </Container>
                    </div>
                </div>
            </div>
        </main>
        <footer>
            <Container fluid>
                <Row>
                    <Col xs={12} md={6}>
                        <img src="/mataer-logo-dark.png" alt="logo mataer" width="70px"/>
                        <p>PT. Mata Aer Makmurindo</p>
                        <p>Gd. Griya Upakara Kemenlu, Lt 3B,<br/>
                        Jalan Cikini IV No 10, Jakarta Pusat</p>
                        <ul>
                            <li><span>Telepon</span>(021) 3103080, (021) 310 5671</li>
                            <li><span>Fax</span>(021) 3162315</li>
                            <li><span>HP</span>0812-8394-1426</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
        </React.Fragment>
    )
}


Category.getInitialProps = async (ctx) => {
    const { origin } = absoluteUrl(ctx.req, "localhost:3010");

    const category = ctx.query.category

    console.log(origin);

    const pageRequest = `${origin}/api/getCategory/${category}`
    const res = await fetch(pageRequest)
    const json = await res.json()

    return { data: json }
}


export default Category
