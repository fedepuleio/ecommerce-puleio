import React from "react";
import Item from "../Item/Item";


const ItemList = (items) => {

    const {libros} = items

    return (
        <div>
            {libros.map(libro => <Item/>
            )}
        </div>
    )
};

export default ItemList;
