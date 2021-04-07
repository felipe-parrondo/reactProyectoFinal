import 'react-bootstrap'
import './App.css'
import Nav from './Components/Nav/Nav'
import LandingBody from "./Components/LandingBody/LandingBody"
import Footer from "./Components/Footer/Footer"
import Contador from "./Components/Contador/Contador"

function App() {
  return (
    <div className="App">

      <Nav/>

      <LandingBody/>

      <Contador/>

      <Footer/>

    </div>
  );
}

export default App;
