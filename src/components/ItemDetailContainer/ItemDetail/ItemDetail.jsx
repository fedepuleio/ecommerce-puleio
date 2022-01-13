import React from 'react'
import ItemCount from '../../ItemCount/ItemCount'


const ItemDetail = ({producto}) => {
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
                    <ItemCount stock={producto.stock} initial={1}/>
                </div>
                <div class="card-footer">Stock:{producto.stock} unidades.</div>
            </div>
        </div>
    )
}

export default ItemDetail
