import {animated, useInView} from "@react-spring/web";

function Tekst5(){

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
        <animated.p ref={refSlideDown} style={slideDown}>De weg naar huis, een pad van verlichting,<br />thuis aangekomen, geen stiefmoeder in hun bestaan. </animated.p>
    )   
}

export default Tekst5;