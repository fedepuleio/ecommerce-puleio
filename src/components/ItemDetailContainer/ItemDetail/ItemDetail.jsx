import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../../ItemCount/ItemCount'


const ItemDetail = ({producto}) => {
    const [show,setShow]=useState(true)
    const onAdd =(count)=>{
        setShow(false)
        alert(count)
    }
    return (

        <div>
            <div className="card flex centro " style={{width: 100 + 'rem'}} >
                <div className="card-body col-md-6" >
                    <h5 className="card-title text-start"> {producto.titulo}</h5>
                    <p className="card-text text-start">{producto.autor}</p>
                    <p className="card-text text-start">$ {producto.precio} .-</p>
                </div>
                <div className="col-md-6">
                    <img src={producto.foto} alt={producto.titulo} className="text-center"/>
                    {show ? <ItemCount stock= {producto.stock} initial={1} onAdd={onAdd}/> : <Link to='/cart'><button>Terminar la compra</button></Link>}
                </div>
                <div class="card-footer">Stock:{producto.stock} unidades.</div>
                
            </div>
        </div>
    )
}

export default ItemDetail
