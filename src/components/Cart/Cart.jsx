import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../Context/CartContext'


const Cart = () => {
    const {cartList, vaciarCarrito} = useCartContext()
    return (
        <div>
            Carrito 
            {cartList.map(prod => <li key={prod.id}> {prod.titulo} - Cantidad: {prod.cantidad} </li>)}
            
            <button onClick={ vaciarCarrito }> Vaciar Carrito</button>
            <Link to='/'><button >Volver</button></Link>
        </div>
    )
}

export default Cart
