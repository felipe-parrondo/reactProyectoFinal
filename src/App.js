import 'react-bootstrap'
import './App.css'
import Nav from './Components/Nav/Nav.js'
import LandingBody from "./Components/LandingBody/LandingBody.js"
import Footer from "./Components/Footer/Footer.js"

function App() {
  return (
    <div className="App">
      <header>
            <div className="container-fluid d-flex justify-content-start">
                <a href="index.html" id="header--logoCuadrado"> 
                    <img className="img-fluid" src="./multimedia/logos/main/logo_cuadrado.png"></img>
                </a>

                <a href="index.html" id="header--banner">
                    Merceria Tefel
                </a>
            </div>

            <Nav/>

        </header>

        <LandingBody/>
        
        <Footer/>
    </div>
  );
}

export default App;
