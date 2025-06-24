import { BrowserRouter, Link, Route, Routes } from 'react-router';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemDetail from './components/ItemDetail/ItemDetail';
import NotFound from './components/NotFound/NotFound';
import { ContextProvider } from './context/context';
import './App.css';

// 4. Agregar el ContextProvider y envolver toda nuestra App

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categoria/:categoria" element={<ItemListContainer />} />
          <Route path="/detalle/:id" element={<ItemDetail />} />
          <Route path="/contacto" element={<p>Esta es la sección de contacto</p>} />
          {/* <Route path="/carrito" element={<p>Mostrar el carrito</p>} /> */}
          {/* <Route path="/checkout" element={<p>Formulario para crear la orden</p>} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
};

export default App;
