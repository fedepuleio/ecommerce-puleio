import "./App.css";
import NavBar from "./components/NavBar/NavBar.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
      <div className="hook-app">
        <NavBar/>
        <ItemListContainer greeting="Bienvenido a mi tienda!"/>
      </div>
  );
}

export default App;
