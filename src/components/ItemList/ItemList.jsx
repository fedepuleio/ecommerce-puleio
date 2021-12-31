import React from "react";
import Item from "../Item/Item";

const ItemList = ({libros}) => {


    return (
        <div>
            {libros.map( <Item/>
            )}
        </div>
    )
};

export default ItemList;
