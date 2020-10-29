import React,{useEffect} from 'react'
import { useCountUp} from 'react-countup';


const Index = ({numberRef,value}) => {

    const { countUp, start} = useCountUp({
        start: 0,
        end: value,
        delay: 0,
        duration: 1.5
    });

    useEffect(() => {

        const observer = new IntersectionObserver(
            ([entry],self) => {
                if (entry.isIntersecting) {
                    //do your actions here
                    start()
                    self.unobserve(numberRef.current)
                }
            },
            {
              root: null,
              rootMargin: "0px",
              threshold: 0.6
            }
        );

        if (numberRef.current) {
            observer.observe(numberRef.current);
        }


    }, [numberRef])

    return (
        countUp
    )
}

export default Index
