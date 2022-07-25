import logo from './images/LogoReact.png';
import './App.css';
import NavBar from './NavBar';

const styles = { margin: "20px", color: "black", textAlign: "center", size: "2rem"}

function App() {
  return (
    <div className="App">
      <NavBar>
      style= {styles} //ESTO VA ACA??
        </NavBar> 
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Cerámica - <code>src/App.js</code> elementos de cerámica.
        </p>
      </header>
    </div>
  );
}

export default App;
