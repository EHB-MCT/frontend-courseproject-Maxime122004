import {animated, useInView} from "@react-spring/web";

function Tekst3(){

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
        <animated.p ref={refSlideDown} style={slideDown}>Verdwaald in &apos;t bos, een snoephuis ontdekt,<br />
        maar de <span className="heks">heks</span> binnenin, kwaadaardig onbeperkt. </animated.p>
    )   
}

export default Tekst3;