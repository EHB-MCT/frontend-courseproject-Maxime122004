import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function HansGrietje() {
    return (
        <>
            <div id="hansGrietje">
                <nav></nav>
                <header>
                    <Parallax pages={2} style={{ top: "0", left: "0" }}>
                        <ParallaxLayer offset={0} speed={0.2}>
                            <img src="images/sprookje/tree-layer1.png" className="animation-layer"/>
                        </ParallaxLayer>
                        <ParallaxLayer offset={0} speed={0.4}>
                            <img src="images/sprookje/tree-layer2.png" className="animation-layer"/>
                        </ParallaxLayer>
                        <ParallaxLayer offset={0} speed={0.6}>
                            <img src="images/sprookje/tree-layer3.png" className="animation-layer"/>
                        </ParallaxLayer>
                        <ParallaxLayer offset={0} speed={0.8}>
                            <img src="images/sprookje/tree-layer4.png" className="animation-layer"/>
                        </ParallaxLayer>
                        <ParallaxLayer offset={0} speed={0.9}>
                            <img src="images/sprookje/tree-layer5.png" className="animation-layer"/>
                        </ParallaxLayer>
                        <ParallaxLayer offset={0} speed={1}>
                            <img src="images/sprookje/tree-layer6.png" className="animation-layer"/>
                        </ParallaxLayer>
                    </Parallax>
                    {/* <h1>Hans & Grietje</h1> */}
                </header>

                <main>

                </main>

                <footer>

                </footer>
            </div>
        </>
    );
}

export default HansGrietje;