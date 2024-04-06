import { Link } from "react-router-dom";

function AboutUs() {
    return (
        <main>
            <div>
                <h1>Populair</h1>
                <section className="sprookjes">
                    <Link to='/HansGrietje'>
                        <img src="images/portaal_pagina/sprookjes_template_image.png"/>
                        <img src="images/portaal_pagina/hans_en_grietje_tumbnail.jpg" alt="sprookje" />
                        <h2>Hans en Grietje</h2>
                        <p>Student</p>
                        <p>Maxime Bastien</p>
                        <img src="images/portaal_pagina/arrow.png" alt="arrow" />
                    </Link>
                    <Link to='/HansGrietje'>
                        <img src="images/portaal_pagina/sprookjes_template_image.png"/>
                        <img src="images/portaal_pagina/hans_en_grietje_tumbnail.jpg" alt="sprookje" />
                        <h2>Hans en Grietje</h2>
                        <p>Student</p>
                        <p>Maxime Bastien</p>
                        <img src="images/portaal_pagina/arrow.png" alt="arrow" />
                    </Link>
                    <Link to='/HansGrietje'>
                        <img src="images/portaal_pagina/sprookjes_template_image.png"/>
                        <img src="images/portaal_pagina/hans_en_grietje_tumbnail.jpg" alt="sprookje" />
                        <h2>Hans en Grietje</h2>
                        <p>Student</p>
                        <p>Maxime Bastien</p>
                        <img src="images/portaal_pagina/arrow.png" alt="arrow" />
                    </Link>
                </section>
                <Link to='/Sprookjes' className="loadMore">
                    <img src="images/portaal_pagina/arrow.png" alt="arrow" />
                    Load more
                </Link>
            </div>
        </main>
    );
}

export default AboutUs;