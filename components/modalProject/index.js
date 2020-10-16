import React,{useState,useRef,useEffect} from 'react'
import {Modal,Button,Row,Col, Container} from 'react-bootstrap'
import Slider from "react-slick";
import Link from 'next/link'

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows:false,
};

function Index(props) {
    const refSlider = useRef(null)
    const [slide, setSlide] = useState(false)
    const [modalData, setModalData] = useState([])

    function slideBox(params) {
        setSlide(!slide)
    }

    function _nextArrow(params) {
        refSlider.current.slickNext()
    }

    function _prevArrow(params) {
        refSlider.current.slickPrev()
    }

    React.useEffect(() => {
        if (props.data) {
            setModalData(props.data)
        }
        console.log(props.data,'adasd');
    }, [])

    if (props.data) {
        var listInstitusi = props.data.institusi.map((item,i)=>{
            return(
                <React.Fragment>
                <div className="bg_institusi" style={{backgroundImage:`url(/proyek/${item.img})`}}></div>
                <div className="deskripsi_institusi" style={{height:'100%'}}>
                    <h3>{item.NamaInstitusi}</h3>
                    <p>{item.DeskripsiSingkat}</p>
                    <hr/>
                    <h4>ALAMAT</h4>
                    <p>{item.Alamat}</p>
                    <hr/>
                    <h4>WAKTU KERJASAMA</h4>
                    <p>{item.WaktuKerjasama}</p>
                    <div className="button__action">
                        <div className="link__toProject" onClick={slideBox}>
                            <a>Back</a>
                            <div className="am__bg-link"></div>
                        </div>
                        <div className="arrow__slider">
                            <ul>
                                <li onClick={_prevArrow}><img src="/right.png" alt="arrow" /></li>
                                <li onClick={_nextArrow}><img src="/arrow-slider-front.png" alt="arrow" /></li>
                            </ul>
                        </div>
                    </div>
                </div>
                </React.Fragment>
            )
        })
    }

    return (
      <Modal
        show={props.show}
        onHide={props.onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modal_project"
      >
        <Modal.Body >
          <div className="desc__wrapper" style={{backgroundImage:`url(/proyek/${slide?`${props.data ? props.data.institusi[0].img : ''}`:`${props.data ? props.data.ringkasan.img : ''}`})`}}>
                <div className="desc__wrapper_box1">

                </div>
                <div className="desc__wrapper_box2" >
                    <div className="desc__wrapper_box2-item" style={{zIndex:`${slide?'0':'1'}`,opacity:`${slide?'0':'1'}`,transform:`translateX(${slide?'10':'0'}px)`}}>
                        <div className="deskripsi_institusi" style={{height:'100%'}}>
                        <h3>{props.data ? props.data.ringkasan.judul : ''}</h3>
                        <p>{props.data ? props.data.ringkasan.deskripsi : ''}</p>
                        <hr/>
                        <ul>
                            <li>JUMLAH PROYEK</li>
                            <li>{props.data ? props.data.ringkasan.jumlahProyek : ''}</li>
                        </ul>
                        <hr/>
                        <ul>
                            <li>TAHUN DIMULAI</li>
                            <li>{props.data ? props.data.ringkasan.tahun: ''}</li>
                        </ul>
                        <div className="link__toProject" onClick={slideBox}>
                            <a>Lihat Proyek<span><img src="/arrow-front.png" /></span></a>
                            <div className="am__bg-link"></div>
                        </div>
                        </div>
                    </div>
                    <div className="desc__wrapper_box2-item" style={{width:'100%',zIndex:`${slide?'1':'0'}`,opacity:`${slide?'1':'0'}`,transform:`translateX(${slide?'0':'10'}px)`}}>
                        <Slider {...settings} ref={refSlider}>
                            {listInstitusi}
                        </Slider>
                    </div>
                </div>
          </div>
        </Modal.Body>
      </Modal>
    );
}

export default Index
