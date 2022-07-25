import logo from './images/LogoReact.png';
import './App.css';
import NavBar from './componentes/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
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
