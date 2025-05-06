import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="container">
      <Header />
      <button className="btn btn-primary">Mostrar productos</button>
      <div className="container d-grid">
        <div className="card">
          <h3>Producto 1</h3>
          <p>$10</p>
          <button className="btn btn-secondary">Comprar</button>
        </div>
        <div className="card">
          <h3>Producto 2</h3>
          <p>$10</p>
          <button className="btn btn-secondary">Comprar</button>
        </div>
        <div className="card">
          <h3>Producto 3</h3>
          <p>$10</p>
          <button className="btn btn-secondary">Comprar</button>
        </div>
      </div>
      <footer>
        <ul>
          <li>Inicio</li>
          <li>Productos</li>
          <li>Contacto</li>
        </ul>
      </footer>
    </div>
  );
};

export default App;
