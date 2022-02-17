// creacon del contexto 
import { useState, useContext, createContext } from "react";


// contexto  creado inicializado en un array vacio 
const cartContext = createContext([])

// funcion que me evita importar el useContext en todos los archivos...
export function useCartContext() {
    return useContext(cartContext)
}

// creacion del componente que maneja el contexto 
export const CartContextProvider = ({children}) => {
    // estados y funciones globales
    // creo el array del carrito de compras, inicializado en un array vacio
    const [cartList, setCartList] = useState([])

    function agregarAlCarrito(items) {
        const indice = cartList.findIndex(index => index.id === items.id)

        if(indice > -1) {
            let cantidadVieja = cartList[indice].cantidad
            let cantidadNueva = cantidadVieja + items.cantidad
            cartList[indice].cantidad = cantidadNueva
            let cartListAuxiliar = [...cartList]
            setCartList(cartListAuxiliar)
            console.log(`modificado la cantidad de ${items.titulo}`)
        }
        else {
            setCartList([...cartList,items])

        }
    }

    function deleteProd (id) {
        setCartList(cartList.filter((producto) => producto.id !== id));
        const itemFiltrado = cartList.findIndex((prod) => prod.id === id);
        cartList.splice(itemFiltrado, 1);
        setCartList([...cartList]);
    };

    function vaciarCarrito() {
        setCartList([])
    }

    const total = () => {
        const totalCarrito = cartList.reduce(
            (prev, curr) => prev + curr.price * curr.cantidad,
            0
        );
        return totalCarrito;
    };




    console.log(cartList)
    return (
        <cartContext.Provider value = {{
            cartList,
            agregarAlCarrito,
            vaciarCarrito,
            deleteProd,
            total
        }}>
            {children}
        </cartContext.Provider>
    )
};

export default cartContext;
