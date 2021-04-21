import "./Nav.css"
import Logo from "./logo_cuadrado_confondo.PNG"
import {NavLink} from "react-router-dom"

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
                    <li className="nav-item menu__border"> <NavLink to="index" className="nav-link"> Inicio </NavLink> </li>
                    <li className="nav-item menu__border"> <NavLink to="catalogo" className="nav-link"> Cátalogo </NavLink> </li>
                    <li className="nav-item menu__border"> <NavLink to="quienes-somos" className="nav-link"> Quienes Somos </NavLink> </li>
                    <li className="nav-item menu__border"> <NavLink to="preguntas-frecuentes" className="nav-link"> Preguntas Frecuentes </NavLink> </li>
                    <li className="nav-item menu__border"> <NavLink to="contacto" className="nav-link"> Contacto </NavLink> </li>
                    <li className="nav-item menu__border"> <NavLink to="carrito" className="nav-link"> <img alt="description" src="https://img.icons8.com/carbon-copy/50/ffffff/shopping-cart-loaded.png"/> </NavLink> </li>
                </ul>
            </nav>
        </header>
    )
}