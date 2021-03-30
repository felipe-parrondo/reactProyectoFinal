import 'react-bootstrap'
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
            <div className="container-fluid d-flex justify-content-start">
                <a href="index.html" id="header--logoCuadrado"> 
                    <img className="img-fluid" src="multimedia/logos/main/logo_cuadrado.png"></img>
                </a>

                <a href="index.html" id="header--banner">
                    Merceria Tefel
                </a>
            </div>

            <nav className="container-fluid" id="menu">
                <ul class="nav d-flex justify-content-around">
                    <li className="nav-item menu__border" id="index--index"> <a href="index.html" className="nav-link text-white"> Inicio </a> </li>
                    <li className="nav-item menu__border"> <a href="catalogo.html" className="nav-link text-white"> Cátalogo </a> </li>
                    <li className="nav-item menu__border"> <a href="quienes-somos.html" className="nav-link text-white"> Quienes Somos </a> </li>
                    <li className="nav-item menu__border"> <a href="preguntas-frecuentes.html" className="nav-link text-white"> Preguntas Frecuentes </a> </li>
                    <li className="nav-item menu__border"> <a href="contacto.html" className="nav-link text-white"> Contacto </a> </li>
                </ul>
            </nav>
        </header>
    </div>
  );
}

export default App;
