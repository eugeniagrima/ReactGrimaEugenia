import logo from './images/LogoReact.png';
import './App.css';
import NavBar from './componentes/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './componentes/Card';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Card />
      <img src={logo} className="App-logo" alt="logo" />
      <header className="App-header">
        <p>
          Cerámica - Elementos de cerámica.
        </p>
      </header>
    </div>
  );
}

export default App;
