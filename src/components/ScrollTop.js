import { useState,useEffect } from "react";
const ScrollTop = () => {
    const [scroll,setScroll] = useState(false);
    useEffect(() => {
        
        window.addEventListener('scroll',() => {
            if(window.scrollY >= 100) {
                setScroll(true)
            } else {setScroll(false)}
        })
    }, []);

    const scrollTop = () => {
        window.scrollTo({
            top:'0',
            behavior:'smooth'
        })
    }
    return (
        <>
        { scroll &&
            <img data-aos="fade-up" onClick={scrollTop} className="scrollTop" src={"../img/top.png"} alt="" />
        }
            
        </>
    );
}

export default ScrollTop;
