import React,{useRef,useState,useEffect} from 'react'
import {Row,Col, Container} from 'react-bootstrap'
import Link from 'next/link'
import { motion, useViewportScroll } from "framer-motion"
import Slider from "react-slick";

import Menu from '../components/layout/menu'
import MenuAct from '../components/menuParkingMobile'
import ModalProject from '../components/modalProject'
import MenuParking from '../components/menuParking/menuParking'

import {dataProjectParking} from '../lib/data'


const ParkingProyek = () => {
    const refSlider = useRef(null)
    const { scrollY,scrollYProgress } = useViewportScroll()
    const [scrollActive , setScrollActive] = useState('')
    const [currentSlide , setCurrentSlide] = useState(1)
    const [modalShow, setModalShow] = useState(false);
    const [thisData, setThisData] = useState();
    const [activeColor, setActiveColor] = useState('#58b947');
    const [activeColorOther, setActiveColorOther] = useState('#58b947');
    const [slide, setSlide] = useState(false)

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows:false,
        beforeChange: (current, next) => setCurrentSlide(next + 1)
    };

    function showModal1(data){
        setModalShow(!modalShow)
        setThisData(data)
        setActiveColor('#03406f')
        setActiveColorOther('#626362')
    }

    function showModal2(data){
        setModalShow(!modalShow)
        setThisData(data)
    }

    function showModal3(data){
        setModalShow(!modalShow)
        setThisData(data)
    }

    function hideModal(params) {
        setModalShow(false)
        setActiveColor('#58b947')
        setActiveColorOther('#58b947')
        setSlide(false)
        console.log('hide modal');
    }

    function slideHandler(params) {
        setSlide(!slide)
    }

    function _nextArrow() {
        refSlider.current.slickNext()
    }

    function _prevArrow() {
        refSlider.current.slickPrev()
    }

    function handleScroll() {
        let currentScroll = Math.round(scrollY.current)
        if (currentScroll >= 540 && window.innerWidth > 900) {
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
        console.log(thisData);

        // Remove listener (like componentWillUnmount)
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [])

    function listGaleri(params) {

        let list = []
        for (let i = 1; i <= 20; i++) {
            list.push(i)
        }

        let imgs = list.map((item,i)=>{
            return(
                <div className="section__slider_imgWrapper" key={i}>
                    <img src={`/galeri/${item}.jpg`} width="100%"/>
                </div>
            )
        })

        return imgs

    }

    return (
        <React.Fragment>
        <header>
            <Menu logo="/LogoGrupMataer/logoPark.png" page="parking" scrollActive={scrollActive}/>
        </header>

        <main>
            <div className={`product__wrapper ${scrollActive}`}>
                <div className="sidebar">
                    <div className={`sidebar__menu ${scrollActive}`}>
                        <MenuParking/>
                    </div>
                </div>
                <div className="content__parking">
                    <MenuAct/>
                    <div className="content__parking__why">
                        <h3>Proyek</h3>
                        <p>Pengelolaan parkir termasuk dalam image property dan sesungguhnya dapat dikatakan pintu gerbang dalam serangkaian proses pembentukan kredibilitas citra layanan sebuah institusi ataupun instansi pemerintah dan swasta, termasuk juga dalam upaya memberikan pelayanan yang memiliki citra terbaik dan respon positif atas tuntutan masyarakat terhadap citra kinerja institusi tersebut secara keseluruhan.</p>
                        <p>Berikut adalah institusi dan instansi yang telah bekerjasama dengan kami:</p>
                    </div>
                    <div className="content__parking__map">
                        <div className="content__parking__map-bar">
                            <div className="head"></div>
                            <div className="body">
                                <span>10+</span>
                                <p>portfolio di seluruh pulau Jawa</p>
                            </div>
                        </div>
                        <div className="content__parking__map-bar">
                            <div className="head">
                                <p>Pengalaman Kerja</p>
                            </div>
                            <div className="body">
                                <ul>
                                    <li><p>RS Juanda Kuningan</p></li>
                                    <li><p>RS Salak Bogor</p></li>
                                    <li><p>Universitas Muhammadiyah Tangerang</p></li>
                                    <li><p>RS Marzoeki Mahdi</p></li>
                                    <li><p>Ruko Bidex</p></li>
                                    <li><p>Ruko Tol Boulevard</p></li>
                                    <li><p>Ruko Golden Boulevard</p></li>
                                </ul>
                            </div>
                        </div>
                        <div className="content__parking__map-bar">
                        <div className="head">
                                <p>Kerjasama Operasi</p>
                            </div>
                            <div className="body">
                                <ul>
                                    <li><p>Ruko Sektor 4 BSD</p></li>
                                    <li><p>Ruko Sektor 7 BSD</p></li>
                                    <li><p>Ruko Sutra Niaga 1</p></li>
                                    <li><p>Ruko Sutra Niaga 2</p></li>
                                    <li><p>Ruko Sutra Niaga 3</p></li>
                                </ul>
                            </div>
                        </div>
                        <div className="peta__wrapper">
                            <img className="peta" src="/map-indonesia-mataer.png" width="100%"/>
                            <svg className="coordinate" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="1316" height="482" viewBox="0 0 1316 482">
                                <g id="Coordinate_Point" data-name="Coordinate Point" transform="translate(-501 -1000)">
                                    <g id="Kuningan" transform="translate(878 1372)" onClick={()=>showModal1(dataProjectParking.kuningan)}>
                                        <circle id="Ellipse_1" className="hovef" data-name="Ellipse 1" cx="11.5" cy="11.5" r="11.5" fill={activeColor}/>
                                        <circle id="Ellipse_2" data-name="Ellipse 2" cx="3.5" cy="3.5" r="3.5" transform="translate(8 8)" fill="#fff"/>
                                    </g>
                                    <g id="Banten" transform="translate(809 1350)" onClick={()=>showModal2(dataProjectParking.bogor)}>
                                        <circle id="Ellipse_1-2" className="hovef" data-name="Ellipse 1" cx="11.5" cy="11.5" r="11.5" fill={activeColorOther}/>
                                        <circle id="Ellipse_2-2" data-name="Ellipse 2" cx="3.5" cy="3.5" r="3.5" transform="translate(8 8)" fill="#fff"/>
                                    </g>
                                    <g id="Bogor" transform="translate(832 1361)" onClick={()=>showModal3(dataProjectParking.banten)}>
                                        <circle id="Ellipse_1-3" className="hovef" data-name="Ellipse 1" cx="11.5" cy="11.5" r="11.5" fill={activeColorOther}/>
                                        <circle id="Ellipse_2-3" data-name="Ellipse 2" cx="3.5" cy="3.5" r="3.5" transform="translate(8 8)" fill="#fff"/>
                                    </g>
                                </g>
                            </svg>
                            <ModalProject 
                                show={modalShow}
                                onHide={hideModal}
                                data={thisData}
                                slide={slide}
                                slideHandler={slideHandler}
                            />
                            <div className="box-hover"></div>
                        </div>
                    </div>
                    <div className="content__parking__slider">
                        <h4>GALERI</h4>
                        <Slider {...settings} ref={refSlider}>
                            {listGaleri()}
                        </Slider>
                        <div className="slick_ia">
                            <p>{currentSlide} <span>/</span>20</p>
                            <ul className="button_slider">
                                <li onClick={_prevArrow}><img src="/arrow-services.svg" alt="arrow"/></li>
                                <li onClick={_nextArrow}><img src="/arrow-services.svg" alt="arrow"/></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <footer>
            <Container fluid>
                <Row>
                    <Col xs={12} md={6}>
                        <img src="mataer-logo-dark.png" alt="logo mataer" width="70px"/>
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

export default ParkingProyek
