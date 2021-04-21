import 'react-bootstrap'
import './App.css'

//COMPS
import Nav from './Components/Nav/Nav'
import Footer from "./Components/Footer/Footer"
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"

//VIEWS
import Home from "./Views/Home/Home.js"
import Catalogo from "./Views/Catalogo/Catalogo.js"


function App() {

  //EL ERROR EN NAVEGACION ES QUE LA TERMINACION EN PAGINA ESTÁ USANDO ".html" Y LOS PATH NO. SE PUEDEN MODIFICAR LOS PATH, PERO ESTARIA BUENO MODIFICAR LO QUE MUESTRA LA PAGINA

  return (
    <Router>
      <div className="App">

        <Nav/>

        <Switch>
          <Route path="/index.html" exact component={Home}/>
          <Route path="/catalogo.html" exact component={Catalogo}/>
          <Route path="/qsomos.html" exact component={Home}/>
          <Route path="/pfrecuentes.html" exact component={Home}/>
          <Route path="/contacto.html" exact component={Home}/>
          <Route path="/carrito.html" exact component={Home}/>
        </Switch>

        <Footer/>

      </div>
    </Router>
  );
}

export default App;
