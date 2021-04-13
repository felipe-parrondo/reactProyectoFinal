import 'react-bootstrap'
import './App.css'
import Nav from './Components/Nav/Nav'
import LandingBody from "./Components/LandingBody/LandingBody"
import Footer from "./Components/Footer/Footer"
import Contador from "./Components/Contador/Contador"
import ItemList from "./Components/ItemList.js/ItemList"

function App() {
  return (
    <div className="App">

      <Nav/>

      <LandingBody/>

      <ItemList/>

      <Contador/>

      <Footer/>

    </div>
  );
}

export default App;
