import { Link } from 'react-router';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

function NavBar() {
    return (
        <nav style={{ display: "flex", justifyContent: "space-around", backgroundColor: "bisque" }}>
            <p>Logo</p>
            <ul style={{ display: "flex", listStyle: "none", gap: "2rem" }}>
                <li>
                    <Link to="/">
                        Productos
                    </Link>
                </li>
                <li>
                    <Link to="/categoria/javascript">
                        JavaScript
                    </Link>
                </li>
                <li>
                    <Link to="/categoria/otros">
                        Otros
                    </Link>
                </li>
                <li>
                    <Link to="/contacto">
                        Contacto
                    </Link>
                </li>
            </ul>
            <CartWidget />
        </nav>
    );
};

export default NavBar;
