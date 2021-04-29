import 'react-bootstrap'
import './App.css'

//COMPS
import Nav from './Components/Nav/Nav'
import Footer from "./Components/Footer/Footer"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

//VIEWS
import Home from "./Views/Home/Home.js"
import Catalogo from "./Views/Catalogo/Catalogo.js"
import Contacto from "./Views/Contacto/Contacto.js"
import Carrito from "./Views/Carrito/Carrito.js"
import PFrecuentes from "./Views/PFrecuentes/PFrecuentes.js"
import QuienesSomos from "./Views/QuienesSomos/QuienesSomos.js"
import ItemDetail from "./Views/ItemDetail/ItemDetail.js"


function App() {
  return (
    <Router>
      <div className="App">

        <Nav/>

        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/catalogo" exact component={Catalogo}/>
          <Route path="/qsomos" exact component={QuienesSomos}/>
          <Route path="/pfrecuentes" exact component={PFrecuentes}/>
          <Route path="/contacto" exact component={Contacto}/>
          <Route path="/carrito" exact component={Carrito}/>
          <Route path="/catalogo/:id" component={ItemDetail}/>
        </Switch>

        <Footer/>

      </div>
    </Router>
  );
}

export default App;
