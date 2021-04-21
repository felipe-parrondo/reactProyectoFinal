import "./Footer.css"
import Logo from "./logo_cuadrado.png"
import MPIcon from "./mp_icon.png"

export default function Footer() {
    return(
        <footer className="container-fluid"> 
            <ul>
                <li> <img alt="description" src="https://img.icons8.com/color/48/ffffff/phone.png"/> +54 9 11-3486-1961 </li>
                <li> <img alt="description" src="https://img.icons8.com/color/48/ffffff/message-group.png"/> merceriatefel@gmail.com </li>
                <li> <img alt="description" src="https://img.icons8.com/color/48/ffffff/shop.png"/> Larrea 1121 </li>
                <li> <img alt="description" src="https://img.icons8.com/color/48/ffffff/clock.png"/> Abierto de 10 a 21 </li>
            </ul>

            <ul>
                <li> <img alt="description" src="https://img.icons8.com/color/48/ffffff/mastercard-credit-card.png"/> Crédito </li>
                <li> <img alt="description" src="https://img.icons8.com/color/48/ffffff/bank-card-front-side.png"/> Débito </li>
                <li> <img alt="description" src="https://img.icons8.com/color/48/ffffff/cash-.png"/> Efectivo </li>
                <li> <img alt="description" src={MPIcon}/> Mercadopago </li>
            </ul>

            <ul>
                <li> <img alt="description" src="https://img.icons8.com/color/48/ffffff/facebook-new.png"/> Facebook </li>
                <li> <img alt="description" src="https://img.icons8.com/color/48/ffffff/instagram-new--v1.png"/> Instagram </li>
                <li> <img alt="description" src="https://img.icons8.com/color/48/ffffff/twitter--v1.png"/> Twitter </li>
                <li> <img alt="description" src="https://img.icons8.com/color/48/ffffff/whatsapp--v1.png"/> Whatsapp </li>
            </ul>

            <a href="index.html">
                <img alt="description" src={Logo}/> 
            </a>
        </footer>
    )
}