import logo from './logo.svg';
import './App.css';
//import PropsComponent from './components/FunctionalComponents/propscomponent';
//import StateComponent from "./components/class_components/StateComponent.jsx";
import NavBar from './components/FunctionalComponents/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/FunctionalComponents/Home';
import About from './components/FunctionalComponents/About';
import Experience from './components/FunctionalComponents/Experience';
import Login from './components/FunctionalComponents/Login';
import Footer from './components/FunctionalComponents/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        
        <Routes>
          <Route path="/Home" element={<Home/>}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Experience" element={<Experience />}></Route>
          <Route path="/Login" element={<Login />}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
      {/* <PropsComponent name ="Praneetha" course="MERN"/> */}
      {/* <header className="App-header">
        <StateComponent/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      
    </div>
  );
}

export default App;
