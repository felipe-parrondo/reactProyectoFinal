import "./Nav.css"
import {useContext} from "react"
import {listaCarrito} from "../../Context/listaCarrito/listaCarrito.js"
import Logo from "./logo_cuadrado_confondo.PNG"
import {NavLink} from "react-router-dom"

export default function Nav() {

    const {compras} = useContext(listaCarrito)

    console.log(compras)

    //<img src="https://img.icons8.com/carbon-copy/50/000000/shopping-cart-loaded.png"/> CARRITO EN NEGRO
    //https://img.icons8.com/carbon-copy/50/ffffff/shopping-cart-loaded.png CARRITO EN BLANCO

    return(
        <header>
            <div className="logo-banner">
                <NavLink activeClassName="." exact to="/" id="header--logoCuadrado"> 
                    <img alt="Banner Logo" src={Logo}></img>
                </NavLink>

                <NavLink activeClassName="." exact to="/" id="header--banner">
                    Merceria Tefel
                </NavLink>
            </div>

            <nav className="container-fluid" id="menu">
                <ul className="nav">
                    <NavLink exact to="/" activeClassName="active" className="nav-item menu__border"> Inicio </NavLink>
                    <NavLink exact to="/catalogo" activeClassName="active" className="nav-item menu__border"> Cátalogo </NavLink>
                    <NavLink exact to="/quienes-somos" activeClassName="active" className="nav-item menu__border"> Quienes Somos </NavLink>
                    <NavLink exact to="/preguntas-frecuentes" activeClassName="active" className="nav-item menu__border"> Preguntas Frecuentes </NavLink>
                    <NavLink exact to="/contacto" activeClassName="active" className="nav-item menu__border"> Contacto </NavLink>
                    {compras? 
                    null 
                    : 
                    <NavLink exact to="/carrito" activeClassName="active" className="nav-item menu__border"> <img alt="Icono de Carrito" src="https://img.icons8.com/carbon-copy/50/ffffff/shopping-cart-loaded.png"/> </NavLink>}
                </ul>
            </nav>
        </header>
    )
}