import 'react-bootstrap'
import './App.css'
import Nav from './Components/Nav/Nav.js'
import LandingBody from "./Components/LandingBody/LandingBody.js"
import Footer from "./Components/Footer/Footer.js"

function App() {
  return (
    <div className="App">
        <Nav/>

        <LandingBody/>

        <Footer/>
    </div>
  );
}

export default App;
