import React from "react";
import Item from "../Item/Item";


const ItemList = ({libros}) => {
    return (
        <div>
            {libros.map((libro) => (
                <Item key={libro.id} item={libro}/>
            ))}
        </div>
    )
}

export default ItemList;
