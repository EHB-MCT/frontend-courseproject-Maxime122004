import { Link } from "react-router-dom";


function AboutUs() {
    return (
        <main>
            <div>
                <h1>Populair</h1>
                <section className="sprookjes">
                    <article>
                        <img src="images/portaal_pagina/sprookjes_template_image.png" alt="sprookje" />
                        <h2>Rapunzel</h2>
                        <p>Student</p>
                        <p>Hasan Taha</p>
                        <img src="images/portaal_pagina/arrow.png" alt="arrow" />
                    </article>
                    <article>
                        <img src="images/portaal_pagina/sprookjes_template_image.png" alt="sprookje" />
                        <h2>Rapunzel</h2>
                        <p>Student</p>
                        <p>Hasan Taha</p>
                        <img src="images/portaal_pagina/arrow.png" alt="arrow" />
                    </article>
                    <article>
                        <img src="images/portaal_pagina/sprookjes_template_image.png" alt="sprookje" />
                        <h2>Rapunzel</h2>
                        <p>Student</p>
                        <p>Hasan Taha</p>
                        <img src="images/portaal_pagina/arrow.png" alt="arrow" />
                    </article>
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