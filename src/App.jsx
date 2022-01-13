import "./App.css";
import NavBar from "./components/NavBar/NavBar.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart/Cart";

function App() {
  return (

      <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route exact path='/' element={<ItemListContainer greeting="Bienvenido a mi tienda!"/>} />
            <Route exact path='/categoria/:idCategoria' element={<ItemListContainer greeting="Categorias"/>} />
            <Route exact path='/detalle/:idDetalle' element={<ItemDetailContainer/>} />
            <Route exact path='/cart' element={<Cart/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
