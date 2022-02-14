import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../Context/CartContext'


const Cart = () => {
    const {cartList, vaciarCarrito, deleteProd} = useCartContext()
    return (
        <>
        <div className="card row centro" style={{width: 100 + 'rem'}}>
        <div className= "dividido">
            <div className="card-body">
            {cartList.length === 0 ? (
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        minHeight: '70vh',
                    }}
                >
                    <h2>Aún no agregaste productos al carrito</h2>
                    <Link to="/">
                        <button className="detail">Ir al catálogo</button>
                    </Link>
                </div>
            ) : (
                <>
                    {cartList?.map((prod) => (
                        <div key={prod.id} className="containerCart">
                            <img src={prod.foto} alt={prod.name} />
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    width: '300px',
                                }}
                            >
                                <h3>{prod.name}</h3>
                                <h3>${prod.price}</h3>
                                <h3>Cantidad: {prod.cantidad}</h3>
                                <button onClick={() => deleteProd(prod.id)}>
                                    X
                                </button>
                            </div>
                        </div>
                    ))}
                    <button onClick={vaciarCarrito}>Vaciar Carrito</button>
                    {/* <h3>{total()}</h3> */}
                </>
            )}
            </div>
            </div>
            </div>
        </>
    )
}

export default Cart