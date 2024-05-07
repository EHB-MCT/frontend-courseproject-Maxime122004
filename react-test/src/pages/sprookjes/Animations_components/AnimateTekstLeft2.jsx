import {animated, useInView} from "@react-spring/web";

function Tekst2(){

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
        <animated.p ref={refSlideIn} style={slideIn}>Ouders laten hen in &apos;t bos achter,<br /> met stenen en broodkruimels,<br />een zoektocht vol klater.</animated.p>
    )   
}

export default Tekst2;