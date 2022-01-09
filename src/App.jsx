import "./App.css";
import NavBar from "./components/NavBar/NavBar.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (

      <center>
        <NavBar/>
        <ItemListContainer greeting="Bienvenido a mi tienda!"/>
        <ItemDetailContainer/>
      </center>
  );
}

export default App;
