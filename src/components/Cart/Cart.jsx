import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from "react";
import {collection,getDocs,query,where,getFirestore,addDoc,documentId,writeBatch} from 'firebase/firestore';
import { useCartContext } from '../../Context/CartContext'
import Resumen from '../Resumen/Resumen'
import "./Cart.css"


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
                <div className='contenedor'>
                    {cartList?.map((prod) => (

                        
                        
                        <div key={prod.id} className="item">
                            <img src={prod.foto} alt={prod.titulo} />
                            <div style={{alignItems: 'center', justifyContent: 'space-between',width: '300px',}}>
                                <h3>{prod.titulo} - {prod.autor}</h3>
                                <h4>Precio:${prod.precio}.- / Cantidad: {prod.cantidad}</h4>
                                <br />
                                <button className="btn btn-danger" onClick={() => deleteProd(prod.id)}> Eliminar del carrito </button>
                                <hr />
                                <button className="btn btn-danger" onClick={vaciarCarrito}>Vaciar CArrito</button>
                                
                            </div>
                        </div>
                        
                        ))}
                </div>


                <div className='contenedorForm'>
                    <form onSubmit={realizarCompra} onChange={handleChange}>
                        <div class="mb-3">
                            <label for="name" class="form-label">Nombre</label>
                            <input type="text" name='name' placeholder='Ingrese su nombre' onChange={handleChange}
                            value={dataForm.name} class="form-control"  />
                            <div id="emailHelp" class="form-text">Tus datos siempre estarán protegidos.</div>
                        </div>
                        <br/>
                        <div class="mb-3">
                            <label for="phone" class="form-label">Telefono</label>
                            <input type='text' 
                            name='phone'
                            placeholder='+549111111111' 
                            onChange={handleChange}
                            value={dataForm.phone} class="form-control"  />
                        </div>
                        <br/>
                        <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email</label>
                        <input type='text' 
                            name='email'
                            placeholder='ejemplo@gmail.com' 
                            onChange={handleChange}
                            value={dataForm.email}class="form-control"/>
                        </div>
                        <br/>
                    </form>
                    <button className="btn btn-warning" onClick={realizarCompra}>Generar Orden</button>
                    </div>
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
