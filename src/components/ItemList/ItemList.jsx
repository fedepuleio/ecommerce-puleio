import React from "react";
import Item from "../Item/Item";
import './ItemList.css';


const ItemList = ({productos}) => {
    return (
        <div className='flex centro'>
            {productos.map((libro) => (
                <Item key={libro.id} libro={libro}/>
            ))}
        </div>
    )
}

export default ItemList;
