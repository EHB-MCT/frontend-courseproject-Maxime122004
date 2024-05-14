import {animated, useInView} from "@react-spring/web";

function Tekst6(){
    const [refSlideRight, slideRight] = useInView(
        () => ({
            from: {
                transform: "translateX(10%)",
                opacity: 0,
            },
            to: {
                transform: "translateX(0)",
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
        <animated.p ref={refSlideRight} style={slideRight}>Met vader verenigd, een gelukkig slot,<br /><span className="hans">Hans</span> en <span className="grietje">Grietje</span>, een sprookje dat blijft, zo zot.</animated.p>
    )   
}

export default Tekst6;