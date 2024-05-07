import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Tekst1 from "./Animations_components/AnimateTekstLeft1";
import Tekst2 from "./Animations_components/AnimateTekstLeft2";
import Tekst3 from "./Animations_components/AnimateTekstDown1";
import Tekst4 from "./Animations_components/AnimateTekstDown2";
import Tekst5 from "./Animations_components/AnimateTekstDown3";
import Tekst6 from "./Animations_components/AnimateTekstRight1";
import Image from "./Animations_components/AnimateImageLeft";

function HansGrietje() {

    mousePos();

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
                            <Tekst1 />
                            <Tekst2 />
                            <img src="images/sprookje/path_to_house.png" />
                        </div>
                    </section>

                    <Tekst3 />

                    <section id="house">
                        <img src="images/sprookje/house.png" alt="peperkoekenhuisje" />
                        <div className="fix"></div>
                    </section>

                    <section id="door">
                        <div>
                            <img src="images/sprookje/door.png" alt="door" />
                            <Image />
                            <img src="images/sprookje/eyes.png" alt="eyes" />
                        </div>
                        <div className="fix"></div>
                    </section>

                    <Tekst4 />

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

                    <Tekst5 />
                    <section id="end-horizontal-scroll">
                        <h2>The End.</h2>
                        <div>
                            <Tekst6 />
                            <img src="images/sprookje/path_to_house_on_fire.png" />
                        </div>
                    </section>
                </Parallax>
            </div >
        </>
    );
}

function mousePos() {

    window.addEventListener('mouseover', (e) => {
        let mouseX = e.pageX;
        let mouseY = e.pageY;
        console.log(mouseX, mouseY);
    })
}
export default HansGrietje;