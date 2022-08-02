import logo from './images/LogoReact.png';
import './App.css';
import NavBar from './componentes/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './componentes/Card/Card';
import Greeting from './componentes/Greeting';
import { Button } from '../src/componentes/Button';

const dataProducto = [
  {
    name: "Plato ceramica",
    price: 2350,
    imgurl: "https://i.picsum.photos/id/1068/7117/4090.jpg?hmac=Y6xHXrzHsNlbRTbhzZ53Yk-Ux9lUECBLbbP4wb5a1qY",
    description: "Plato confeccionado a mano",
  },
  {
    name: "Taza ceramica",
    price:1500,
    imgurl: "https://i.picsum.photos/id/1068/7117/4090.jpg?hmac=Y6xHXrzHsNlbRTbhzZ53Yk-Ux9lUECBLbbP4wb5a1qY",
    description: "Taza Sofía"
    }
]
const bienvenida = {
  name: "Greeting"
}

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Greeting bienvenida={bienvenida} />
      <Card dataProducto={dataProducto[0]} />
      <Card dataProducto={dataProducto[1]} />
      <Button text="Ver más"/>
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
