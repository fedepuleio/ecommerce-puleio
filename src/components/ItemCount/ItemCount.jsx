import React from "react";
import "./ItemCount.css";
import { useState } from "react";
import { useEffect } from "react";

const ItemCount = ({stock, initial}) => {
    const [count, setCount] = useState(initial);

    const addCount = () => {
        if ((count < stock ) && (stock !== 0)) {
            setCount(parseInt(count) + 1);
        }
    };
    const subtractCount = () => {
        if (count !== 1) {
                setCount(parseInt(count) - 1);
        } 
        
    };
    const onAdd = (stock, count) => {
        if ((count <= stock) && (count = 1)) {
            console.log(`Agregaste`+ count + `producto al carrito`);
        } else if ((count <= stock) && (count > 1)) {
        console.log(`Agregaste`+ count + `productos al carrito`);
        } else {
        console.log( "No hay" + count + "disponibles, intentá una cantidad menor");
        }
    }
    useEffect(() => {
        
        /*  return () => {
            cleanup
        } */
    }, [])


    return (
        <div className ="flex center">
            <div className="card" style={{width: 18 + 'rem'}}>
                <div className="card-body">
                    <h5 className="card-title">El Hombre Duplicado - José Saramago</h5>
                    <p className="card-text">Descripcion del libro / $1.500</p>
                </div>
                <div className ="flex evenly centrado">
                    <button type="button" className="btn btn-outline-dark" onClick={subtractCount}>-</button>
                    {count} 
                    <button type="button" className="btn btn-outline-dark" onClick={addCount}>+</button>
                    <br/>
                </div>
                    <button type="button" className="btn btn-outline-dark" onClick={onAdd}>Agregar al Carrito</button>
            </div>
        </div>
    );
};

export default ItemCount;
