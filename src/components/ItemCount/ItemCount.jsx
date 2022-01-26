import React from "react";
import "./ItemCount.css";
import { useState } from "react";
import { useEffect } from "react";
import {Link} from 'react-router-dom'



const ItemCount = ({stock,onAdd,initial }) => {
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
   /*  const onAdd = (stock, count) => {
        if ((count <= stock) && (count = 1)) {
            console.log(`Agregaste `+ count + ` producto al carrito`);
        } else if ((count <= stock) && (count > 1)) {
        console.log(`Agregaste `+ count + ` productos al carrito`);
        } else {
        console.log( "No hay " + count + " disponibles, intentá una cantidad menor");
        }
    } */
    useEffect(() => {
        
        /*  return () => {
            cleanup
        } */
    }, [])


    return (
        <div className ="flex center">
            <div className="card" style={{width: 18 + 'rem'}}>
                <div className ="flex evenly centrado">
                    <button type="button" className="btn btn-outline-dark" onClick={subtractCount}>-</button>
                    {count} 
                    <button type="button" className="btn btn-outline-dark" onClick={addCount}>+</button>
                    <br/>
                </div>
                    <button type="button" className="btn btn-outline-dark" onClick={()=> onAdd(count)}>Agregar al Carrito</button>
            </div>
            <Link to ='/'><button>Volver atrás</button></Link>
        </div>
    );
};

export default ItemCount;
