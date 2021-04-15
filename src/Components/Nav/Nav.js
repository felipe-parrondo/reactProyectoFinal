import "./Nav.css"
import Logo from "./logo_cuadrado_confondo.PNG"

export default function Nav() {
    return(
        <header>
            <div className="container-fluid d-flex justify-content-start">
                <a href="index.html" id="header--logoCuadrado"> 
                    <img alt="description" className="img-fluid" src={Logo}></img>
                </a>

                <a href="index.html" id="header--banner">
                    Merceria Tefel
                </a>
            </div>

            <nav className="container-fluid" id="menu">
                <ul className="nav">
                    <li className="nav-item menu__border" id="index--index"> <a href="index.html" className="nav-link text-white"> Inicio </a> </li>
                    <li className="nav-item menu__border"> <a href="catalogo.html" className="nav-link text-white"> Cátalogo </a> </li>
                    <li className="nav-item menu__border"> <a href="quienes-somos.html" className="nav-link text-white"> Quienes Somos </a> </li>
                    <li className="nav-item menu__border"> <a href="preguntas-frecuentes.html" className="nav-link text-white"> Preguntas Frecuentes </a> </li>
                    <li className="nav-item menu__border"> <a href="contacto.html" className="nav-link text-white"> Contacto </a> </li>
                    <li className="nav-item menu__border"> <a href="carrito.html" className="nav-link text-white"> <img alt="description" src="https://img.icons8.com/carbon-copy/50/ffffff/shopping-cart-loaded.png"/> </a> </li>
                </ul>
            </nav>
        </header>
    )
}