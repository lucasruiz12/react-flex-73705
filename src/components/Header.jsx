import './Header.css';

function Header() {

    const nombreDelProfe = "Pepelepú";

    return (
        <nav>
            <p>Bienvenidos a la página del profesor {nombreDelProfe}</p>
            <ul>
                <li>Inicio {2+2}</li>
                <li>Productos</li>
                <li>Contacto</li>
            </ul>
        </nav>
    );
};

export default Header;
