import React from 'react'
import ItemCount from '../../ItemCount/ItemCount'


const ItemDetail = ({producto}) => {
    return (
        <div>
            {producto.titulo}
            <ItemCount stock={15} initial={1} />
        </div>
    )
}

export default ItemDetail
