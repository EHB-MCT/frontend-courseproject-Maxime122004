import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useInView, animated } from '@react-spring/web';

function HansGrietje() {
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
            once: true,
        }
    );

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
            once: true,
        }
    );

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
            once: true,
        }
    );
    return (
        <>
            <div id="hansGrietje">
                <Parallax pages={2} style={{ top: "0", left: "0" }}>
                    <nav></nav>
                    <header>
                        <img src="images/sprookje/moon.png" alt="moon" id="moon" />
                        <h1>Hans & Grietje</h1>
                        <div id="trees">
                            <ParallaxLayer offset={0} speed={0.01}>
                                <img src="images/sprookje/tree-layer1.png" className="animation-layer" />
                            </ParallaxLayer>
                            <ParallaxLayer offset={0} speed={0.02}>
                                <img src="images/sprookje/tree-layer2.png" className="animation-layer" />
                            </ParallaxLayer>
                            <ParallaxLayer offset={0} speed={0.03}>
                                <img src="images/sprookje/tree-layer3.png" className="animation-layer" />
                            </ParallaxLayer>
                            <ParallaxLayer offset={0} speed={0.04}>
                                <img src="images/sprookje/tree-layer4.png" className="animation-layer" />
                            </ParallaxLayer>
                            <ParallaxLayer offset={0} speed={0.05}>
                                <img src="images/sprookje/tree-layer5.png" className="animation-layer" />
                            </ParallaxLayer>
                            <ParallaxLayer offset={0} speed={0.06}>
                                <img src="images/sprookje/tree-layer6.png" className="animation-layer" />
                                <div className="fix"></div>
                            </ParallaxLayer>
                        </div>
                        <img src="images/sprookje/pathheader.png" />
                        <img src="images/sprookje/house_side.png" />
                    </header>

                    <section className="horizontal-scroll">
                        <div>
                            <animated.p ref={refSlideIn} style={slideIn} >In een dorp ver hier vandaan,<br /><span className="hans">Hans</span> en <span className="grietje">Grietje</span>, arm ontdaan.</animated.p>
                            <animated.p ref={refSlideDown} style={slideDown}>Ouders laten hen in &apos;t bos achter,<br /> met stenen en broodkruimels,<br />een zoektocht vol klater.</animated.p>
                            <img src="images/sprookje/path_to_house.png" />
                        </div>
                    </section>

                    <animated.p ref={refSlideDown} style={slideDown}>Verdwaald in &apos;t bos, een snoephuis ontdekt,<br />
                        maar de <span className="heks">heks</span> binnenin, kwaadaardig onbeperkt. </animated.p>

                    <section id="house">
                        <img src="images/sprookje/house.png" alt="peperkoekenhuisje" />
                        <div className="fix"></div>
                    </section>

                    <section id="door">
                        <div>
                            <img src="images/sprookje/door.png" alt="door" />
                            <animated.img ref={refSlideIn} style={slideIn} src="images/sprookje/eyegap.png" alt="eyegap" />
                            <img src="images/sprookje/eyes.png" alt="eyes" />
                        </div>
                        <div className="fix"></div>
                    </section>

                    <animated.p ref={refSlideDown} style={slideDown}>Slimme kinderen, ontsnappen aan haar greep,<br />voor dat <span className="heks">de boze heks</span>, hun opeet.</animated.p>

                    <section id="prison">
                        <div>
                            <img src="images/sprookje/prison.png" alt="prisonbars" />
                        </div>
                        <img src="images/sprookje/hansel.png" alt="hans" />
                    </section>

                    <div id="fire">
                        <img src="images/sprookje/fire.png" alt="fire" />
                        <div className="fix"></div>
                    </div>

                    <animated.p ref={refSlideDown} style={slideDown}>De weg naar huis, een pad van verlichting,<br />thuis aangekomen, geen stiefmoeder in hun bestaan.</animated.p>
                        <section id="end-horizontal-scroll">
                            <h2>The End.</h2>
                            <div>
                                <animated.p ref={refSlideRight} style={slideRight}p>Met vader verenigd, een gelukkig slot,<br /><span className="hans">Hans</span> en <span className="grietje">Grietje</span>, een sprookje dat blijft, zo zot.</animated.p>
                                <img src="images/sprookje/path_to_house_on_fire.png" />
                            </div>
                        </section>
                </Parallax>
            </div >
        </>
    );
}
export default HansGrietje;