import {animated, useInView} from "@react-spring/web";

function Tekst1(){

    const [refSlideIn, slideIn] = useInView(
        () => ({
            from: {
                transform: "translateX(-10%)",
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
        <animated.p ref={refSlideIn} style={slideIn}>In een dorp ver hier vandaan,<br /><span className="hans">Hans</span> en <span className="grietje">Grietje</span>, arm ontdaan.</animated.p>
    )   
}

export default Tekst1;