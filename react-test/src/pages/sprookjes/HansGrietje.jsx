import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useEffect } from "react";
import Tekst3 from "./Animations_components/AnimateTekstDown1";
import Tekst4 from "./Animations_components/AnimateTekstDown2";
import Tekst5 from "./Animations_components/AnimateTekstDown3";
import Tekst6 from "./Animations_components/AnimateTekstRight1";
import Image from "./Animations_components/AnimateImageLeft";
import HorizontalScroll from "./Components/HorizontalScroll";

function HansGrietje() {

    useEffect(() => {

        let houseImages = document.getElementsByClassName("bite");
        console.log(houseImages);
        let houseBite = 0;
        console.log("houseBite:" + houseBite);
        const handleClick = () => {

            if (houseBite < 5) {
                const image = houseImages[houseBite];
                image.style.display = "none";
                console.log(image);
                houseBite++;
                console.log("houseBite:" + houseBite);
            } else {
                document.querySelector("#house").style.cursor = "auto";
            }
        };

        setTimeout(() => {
            const houseElement = document.querySelector("#house");
            console.log(houseElement);
            if (houseElement) {
                houseElement.addEventListener("click", handleClick);
            }
            return () => {
                if (houseElement) {
                    houseElement.removeEventListener("click", handleClick);
                }
            };
        }, 100);

    }, []);

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

                    <HorizontalScroll />

                    <Tekst3 />

                    <section id="house">
                        <div id="houseBites">
                            <img src="images/sprookje/house.png" className="bite" alt="peperkoekenhuisje" />
                            <img src="images/sprookje/house_bite1.png" className="bite" alt="peperkoekenhuisje" />
                            <img src="images/sprookje/house_bite2.png" className="bite" alt="peperkoekenhuisje" />
                            <img src="images/sprookje/house_bite3.png" className="bite" alt="peperkoekenhuisje" />
                            <img src="images/sprookje/house_bite4.png" className="bite" alt="peperkoekenhuisje" />
                            <img src="images/sprookje/house_bite5.png" className="bite" alt="peperkoekenhuisje" />
                        </div>
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
                        <div>
                            <Tekst6 />
                            <img src="images/sprookje/path_to_house_on_fire.png" />
                            <h2>The End.</h2>
                        </div>
                    </section>
                </Parallax>
            </div >
        </>
    );
}



export default HansGrietje;