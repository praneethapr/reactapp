import logo from './logo.svg';
import './App.css';
import TestComponent from './components/FunctionalComponents/testComponent';
import Login from "./components/class_components/LoginClassComponent.jsx";

function App() {
  return (
    <div className="App">
      <TestComponent/>
      <header className="App-header">
        <Login/>
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