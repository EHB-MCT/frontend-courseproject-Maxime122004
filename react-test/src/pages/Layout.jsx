import { Outlet, Link } from "react-router-dom";

function Layout(){
    return(
        <>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/blogs'>Blogs</Link>
                    </li>
                    <li>
                        <Link to='/Contact'>Contact</Link>
                    </li>
                </ul>    
            </nav>
            <Outlet />
        </>
    );
}

export default Layout;