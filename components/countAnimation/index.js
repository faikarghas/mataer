import React,{useEffect} from 'react'
import { useCountUp} from 'react-countup';
import {useIntersection} from 'react-use'


const Index = ({numberRef,value}) => {

    const intersection = useIntersection(numberRef,{
        root: null,
        rootMargin:'0px',
        threshold: 0.5
    })

    const { countUp, start} = useCountUp({
        start: 0,
        end: value,
        delay: 0,
        duration: 1.5
    });

    useEffect(() => {
        if (intersection && intersection.intersectionRatio < 0.5) {
            console.log('OBS');
        } else {
            start()
        }
    }, [intersection])

    return (
        countUp
    )
}

export default Index
