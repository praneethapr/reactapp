import logo from './logo.svg';
import './App.css';
import PropsComponent from './components/FunctionalComponents/propscomponent';
import StateComponent from "./components/class_components/StateComponent.jsx";
function App() {
  return (
    <div className="App">
      <PropsComponent name ="Praneetha" course="MERN"/>
      <StateComponent/>
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;
