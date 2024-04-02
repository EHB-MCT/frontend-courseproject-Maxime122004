import { Outlet, Link } from "react-router-dom";

function Layout() {
    return (
        <>
            <nav>
                <img src="images/portaal_pagina/er_was_eens_logo.png" alt="Er was eens" />
                <input type="text" placeholder='Zoek hier naar een topic' />
                <ul>
                    <li>
                        <Link to='/'>About us</Link>
                    </li>
                    <li>
                        <Link to='/Sprookjes'>Sprookjes</Link>
                    </li>
                    <li>
                        <Link to='/MakingOf'>Making of</Link>
                    </li>
                </ul>
            </nav>
            <aside>
                <ul>
                    <li className="active">
                        <img src="images/portaal_pagina/side-nav_icon1.png" alt="icon" />
                        <h3>Magie en betovering</h3>
                    </li>
                    <li>
                        <img src="images/portaal_pagina/side-nav_icon2.png" alt="icon" />
                        <h3>Queesten en reizen</h3>
                    </li>
                    <li>
                        <img src="images/portaal_pagina/side-nav_icon3.png" alt="icon" />
                        <h3>Moraliteit en lessen</h3>
                    </li>
                    <li>
                        <img src="images/portaal_pagina/side-nav_icon4.png" alt="icon" />
                        <h3>Dierenverhalen</h3>
                    </li>
                    <li>
                        <img src="images/portaal_pagina/side-nav_icon5.png" alt="icon" />
                        <h3>Trucs en slimme helden</h3>
                    </li>
                </ul>
            </aside>
            <Outlet />
            <footer>
                <div>
                    <img src="images/portaal_pagina/er_was_eens_logo-zonder_slogan.png" alt="Er was eens" />
                    <article>
                        <ul>
                            <li>
                                <Link to='/'>About us</Link>
                            </li>
                            <li>
                                <Link to='/Sprookjes'>Sprookjes</Link>
                            </li>
                            <li>
                                <Link to='/MakingOf'>Making of</Link>
                            </li>
                        </ul>
                        <p>&quot;Er Was Eens&quot; is een website waar studenten hun eigen
                            sprookjes maken. Deze verhalen worden tot leven gebracht
                            met parallax-effecten, waardoor de lezers een meeslepende
                            ervaring beleven terwijl ze door het verhaal scrollen.
                            Het is een betoverende plek waar traditionele sprookjes
                            een moderne twist krijgen en waar iedereen kan genieten
                            van de magie van het vertellen. Welkom in ons
                            sprookjesrijk!</p>
                    </article>
                </div>
            </footer>
        </>
    );
}

export default Layout;