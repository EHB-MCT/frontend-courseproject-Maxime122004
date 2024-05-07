import {animated, useInView} from "@react-spring/web";

function Tekst4(){

    const [refSlideDown, slideDown] = useInView(
        () => ({
            from: {
                transform: "translateY(-10%)",
                opacity: 0,
            },
            to: {
                transform: "translateY(0)",
                opacity: 1,
            },
            config: {
                tension: 150,
                friction: 80,
            },
        }),
        {
            rootMargin: "0% 0%",
        }
    );


    return(
        <animated.p ref={refSlideDown} style={slideDown}>Slimme kinderen, ontsnappen aan haar greep,<br />voor dat <span className="heks">de boze heks</span>, hun opeet. </animated.p>
    )   
}

export default Tekst4;