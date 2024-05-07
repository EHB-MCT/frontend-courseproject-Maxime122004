import {animated, useInView} from "@react-spring/web";

function Image(){

    const [refSlideIn, slideIn] = useInView(
        () => ({
            from: {
                opacity: 0,
            },
            to: {
                opacity: 1,
            },
            config: {
                tension: 150,
                friction: 40,
            },
        }),
        {
            rootMargin: "0% 0%",
            once: true,
        }
    );

    return(
        <>
            <animated.img src="images/sprookje/eyegap.png" alt="eyegap" ref={refSlideIn} style={slideIn} />
        </>
    )   
}

export default Image;