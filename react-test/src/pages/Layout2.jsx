import { Outlet, Link } from "react-router-dom";

function Layout2() {
    return (
        <>
            <nav id="sprookjesNav">
                <ul>
                    <li>
                        <Link to="/">
                            <img src="images/portaal_pagina/arrow.png" alt="arrow" />
                            <img src="images/portaal_pagina/er_was_eens_logo-zonder_slogan.png" alt="Er Was Eens ..." />
                        </Link>
                    </li>
                    <li>
                        <h3>Project <span>Hans & Grietje</span></h3>
                    </li>
                    <li>
                        <h3>By <span>Bastien Maxime</span></h3>
                    </li>
                    <li>
                        <Link to="/MakingOf">
                            Making of
                        </Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}

export default Layout2;