import React,{useRef,useState,useEffect} from 'react'
import {Row,Col, Container} from 'react-bootstrap'
import Link from 'next/link'
import { motion, useViewportScroll } from "framer-motion"
import Slider from "react-slick";

import Menu from '../../../components/layout/menu'
import MenuBerita from '../../../components/menuBerita'
import MenuAct from '../../../components/menuBeritaMobile'
import Footer from '../../../components/layout/footer'

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
                                {data.dataCategory.map((data,i)=>{
                                    let category = data.category.split('-').join(' ')
                                    let d = new Date(data.date);
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
                                    return(
                                        <Col xs={12} md={4} className="mb-5" key={i}>
                                            <div className="content__berita_wrapper-item">
                                                <Link href={`/berita/[category]/[slug]`} as={`/berita/press-release/${data.slug}`}>
                                                    <a><img src={`/artikel/${data.image}`} width="100%"/></a>
                                                </Link>
                                                <Link href={`/berita/[category]/[slug]`} as={`/berita/press-release/${data.slug}`}><a className="news_title">{data.title}</a></Link>
                                                <div className="date_title"><p>{`${date} ${month} ${year}`}</p><span>/</span><Link href="/berita/[category]" as={`/berita/${category.split(' ').join('-')}`}><a>{category}</a></Link></div>
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
        <Footer/>
        </React.Fragment>
    )
}


Category.getInitialProps = async (ctx) => {
    const { origin } = absoluteUrl(ctx.req, "localhost:3010");

    const category = ctx.query.category

    const pageRequest = `${origin}/api/getCategory/${category}`
    const res = await fetch(pageRequest)
    const json = await res.json()

    console.log(json    );


    return { data: json }
}


export default Category
