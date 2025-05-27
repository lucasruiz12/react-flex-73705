import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
// import Contador from './components/Contador/Contador';
import NavBar from './components/NavBar/NavBar';

function App() {

  return (
    <div className="container">
      <NavBar />
      <ItemListContainer />
    </div>
  );
};

export default App;
