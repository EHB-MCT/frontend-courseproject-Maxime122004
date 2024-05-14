function MakingOf() {
    return (
        <main>
            <div>
                <h1>Making of</h1>
                <section id="makingOf">
                    <article>
                        <img src="images/portaal_pagina/hans_en_grietje_banner.gif" alt="" />
                        <h2>Hans & Grietje</h2>
                        <h3>By <span>Bastien Maxime</span></h3>
                    </article>
                    <article>
                        <iframe width="250" height="250" src="https://www.youtube.com/embed/c8u-AC0Db34?si=pruK8nxIgPbo3kNv" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <div>
                            <h1>Beschrijving</h1>
                            <p>Welkom op mijn parallax website! Deze portaal website 
                                dient als portaal pagina om de websites van andere 
                                studenten te zien. Deze website is gemaakt aan de 
                                hand van React.</p>
                            <p>
                                Voor de sprookjespagina van Hans & grietje heb ik 
                                gebruik gemaakt van verschillende parallax effecten
                                en interactieve elementen zoals:
                            </p>
                            <p>1. Standaard parallax: Op het begin van de pagina 
                                bewegen de bomen op een apparte snelheid. Dit geeft
                                een gevoel van diepte weer. Dit dieptegevoel wordt
                                nog extra versterkt door het huisje en het pad in
                                de achtergrond. 
                            </p>
                            <p>2. Horizontale scroll: Sommige delen van de pagina 
                                hebben een horizontale scroll waardoor ze buiten
                                de maximale breedte van het scherm terecht komen.
                                Hier kan de gebruiker links en rechts scrollen om
                                het verhaal verder te lezen.
                            </p>
                            <p>3. Tekst Animatie: De verschillende tekstblokken 
                                dat verspreid zijn over de pagina zijn allemaal 
                                geanimeerd. Deze animatie speelt alleen af vanaf 
                                dat de gebruiker scrollt tot de positie van de 
                                tekst op de pagina.
                            </p>
                            <p>4. Klikbare objecten: Als je op het huisje klikt 
                                kan je zien dat er een beet uit het huis is genomen.
                                Bij elke klik komt er een beet bij. Het maximum aantal
                                beten is 5.
                            </p>
                        </div>
                    </article>
                    <article>
                        <h1>Extra beeldmateriaal</h1>
                        <article>
                            <div>
                                <img src="images/portaal_pagina/hans_en_grietje_tumbnail.jpg" />
                            </div>
                            <div>
                                <img src="images/portaal_pagina/vector_images_sheet.png" />
                            </div>
                            <div>
                                <img src="images/portaal_pagina/moon.png" />
                            </div>
                        </article>
                    </article>
                </section>
            </div>
        </main>
    );
}

export default MakingOf;