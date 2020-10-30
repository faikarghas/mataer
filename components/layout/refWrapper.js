import React,{useEffect, useState} from 'react'

const Index = ({children,refSec,id,className}) => {
    return (
        <section ref={refSec ? refSec[id] : null} id={id} className={`${className}`}>
            {children}
        </section>
    )
}

export default Index
