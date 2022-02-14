import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../../Context/CartContext'
import ItemCount from '../../ItemCount/ItemCount'


const ItemDetail = ({producto}) => {

    //destructuring de la funcion para no tener que importar todos los contextos cada vez
    const {agregarAlCarrito} = useCartContext()


    // me muestra un boton u otro dependiendo del booleano
    const [show,setShow] = useState(true)

    const onAdd =(count)=>{
        setShow(false)
        agregarAlCarrito({...producto, cantidad : count})
        console.log(producto)
    }
    return (
        <div className="card row centro" style={{width: 100 + 'rem'}}>
            <div className= "dividido">
                <div className="card-body">
                    <img style= {{width:100 + 'px', height: 100 + 'px'}}src={producto.foto} alt={producto.titulo} className="text-center"/>
                    <h5 className="card-title text-center"> {producto.titulo}</h5>
                    <p className="card-text text-center">{producto.autor}</p>
                    <p className="card-text text-center">$ {producto.precio} .-</p>
                </div>
            </div>
            <div className="margin-top align-center card-body dividido">
                <div>
                    <div className="card-text text-center"> 
                        {show ? 
                        <ItemCount stock= {producto.stock} initial={1} onAdd={onAdd}/> 
                        :
                        <div>
                            <Link to='/cart'><button>Terminar la Compra</button></Link>
                            <Link to='/'><button>Seguir Comprando</button></Link>
                        </div>
                        }
                    </div>
                </div>
            </div>
                <div className="card-footer">Stock:{producto.stock} unidades.</div>
            </div>

    )
}

export default ItemDetail
