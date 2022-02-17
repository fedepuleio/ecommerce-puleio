import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from "react";
import {collection,getDocs,query,where,getFirestore,addDoc,documentId,writeBatch} from 'firebase/firestore';
import { useCartContext } from '../../Context/CartContext'
import Resumen from '../Resumen/Resumen'


const Cart = () => {
    const {cartList, vaciarCarrito, deleteProd,total} = useCartContext()
    const [condicional, setCondicional] = useState(false);
    const [dataForm , setDataForm ] = useState({
        email: '',
        name: '',
        phone: ''
    });
    const [idOrden, setIdOrden] = useState('');
    const realizarCompra = async (e) => {
        e.preventDefault()   
         // Nuevo objeto de orders    
        let orden = {}
        orden.buyer = dataForm // {name, email, phone}
        orden.total = total();
        orden.items = cartList.map(cartItem => {
            const id = cartItem.id;
            const titulo = cartItem.titulo;
            const precio = cartItem.precio * cartItem.cantidad;
            const cantidad = cartItem.cantidad

            return {id, titulo, precio, cantidad}   
        }) 
             // guardamos la orden en firestore
                const db = getFirestore()

                const ordenCollection = collection(db, 'ordenes')
                await addDoc(ordenCollection, orden) // setDoc
                .then(resp => setIdOrden(resp.id))
                .catch(err => console.log(err))

                const queryCollection = collection(db, 'items')
                const queryActulizarStock = query(
                    queryCollection, 
                    where( documentId() , 'in', cartList.map(it => it.id))          
                ) 
                const batch = writeBatch(db)       
                await getDocs(queryActulizarStock)
                .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
                        stock: res.data().stock - cartList.find(item => item.id === res.id).cantidad
                    }) 
                ))
                .catch(err => console.log(err))
                .finally(()=> console.log('stock actualizado'))
                batch.commit()
                setCondicional(true)    
            }
        
            function handleChange(e) {
                setDataForm({
                    ...dataForm,
                    [e.target.name]: e.target.value
                })
            }
            console.log(dataForm)


    return (

        <div>  
        {
            condicional  ? 
                <Resumen idOrden={idOrden} />
            : 
                <>
                    {cartList?.map((prod) => (
                        <div key={prod.id} className="containerCart">
                            <img src={prod.foto} alt={prod.titulo} />
                            <div style={{alignItems: 'center', justifyContent: 'space-between',width: '300px',}}>
                                <h3>{prod.titulo} - {prod.autor}</h3>
                                <h4>Precio:${prod.precio}.- / Cantidad: {prod.cantidad}</h4>
                                <button onClick={() => deleteProd(prod.id)}> X </button>
                            </div>
                        </div>
                    ))}
                    <button onClick={vaciarCarrito}>Vaciar Carrito</button>
                    <form 
                        onSubmit={realizarCompra} 
                        onChange={handleChange} 
                    >
                        <input 
                            type='text' 
                            name='name' 
                            placeholder='name' 
                            onChange={handleChange}
                            value={dataForm.name}
                        /><br />
                        <input 
                            type='text' 
                            name='phone'
                            placeholder='tel' 
                            onChange={handleChange}
                            value={dataForm.phone}
                        /><br/>
                        <input 
                            type='email' 
                            name='email'
                            placeholder='email' 
                            onChange={handleChange}
                            value={dataForm.email}
                        /><br/>
                    </form>
                    <button onClick={realizarCompra}>Generar Orden</button>
                </>

        }          
    </div>











    )
}

export default Cart


/*
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
                            <img src={prod.foto} alt={prod.titulo} />
                            <div style={{alignItems: 'center', justifyContent: 'space-between',width: '300px',}}>
                                <h3>{prod.titulo} - {prod.autor}</h3>
                                <h4>Precio:${prod.precio}.- / Cantidad: {prod.cantidad}</h4>
                                <button onClick={() => deleteProd(prod.id)}> X </button>
                            </div>
                        </div>
                    ))}
                    <button onClick={vaciarCarrito}>Vaciar Carrito</button>
                    <h3>{total()}</h3>
                </>
            )}
            </div>
            </div>
            </div>
        </>

*/
