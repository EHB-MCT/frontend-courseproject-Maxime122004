import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function HansGrietje() {
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
                            <p>In een dorp ver hier vandaan,<br /><span className="hans">Hans</span> en <span className="grietje">Grietje</span>, arm ontdaan.</p>
                            <p>Ouders laten hen in &apos;t bos achter,<br /> met stenen en broodkruimels,<br />een zoektocht vol klater.</p>
                            <img src="images/sprookje/path_to_house.png" />
                        </div>
                    </section>

                    <p>Verdwaald in &apos;t bos, een snoephuis ontdekt,<br />
                        maar de <span className="heks">heks</span> binnenin, kwaadaardig onbeperkt. </p>

                    <section id="house">
                        <img src="images/sprookje/house.png" alt="peperkoekenhuisje" />
                        <div className="fix"></div>
                    </section>

                    <section id="door">
                        <div>
                            <img src="images/sprookje/door.png" alt="door" />
                            <img src="images/sprookje/eyegap.png" alt="eyegap" />
                            <img src="images/sprookje/eyes.png" alt="eyes" />
                        </div>
                        <div className="fix"></div>
                    </section>

                    <p>Slimme kinderen, ontsnappen aan haar greep,<br />voor dat <span className="heks">de boze heks</span>, hun opeet.</p>

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

                    <p>De weg naar huis, een pad van verlichting,<br />thuis aangekomen, geen stiefmoeder in hun bestaan.</p>
                        <section id="end-horizontal-scroll">
                            <h2>The End.</h2>
                            <div>
                                <p>Met vader verenigd, een gelukkig slot,<br /><span className="hans">Hans</span> en <span className="grietje">Grietje</span>, een sprookje dat blijft, zo zot.</p>
                                <img src="images/sprookje/path_to_house_on_fire.png" />
                            </div>
                        </section>
                </Parallax>
            </div >
        </>
    );
}

export default HansGrietje;