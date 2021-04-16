import 'react-bootstrap'
import './App.css'

//COMPS
import Nav from './Components/Nav/Nav'
import LandingBody from "./Components/LandingBody/LandingBody"
import Footer from "./Components/Footer/Footer"
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer.js"


function App() {
  return (
    <div className="App">

      <Nav/>

      <LandingBody/>

      <ItemListContainer/>

      <Footer/>

    </div>
  );
}

export default App;
