import React from 'react'
import {useState, useEffect} from 'react'
import { getFetch } from "../Helpers/mock";
import ItemList from '../ItemList/ItemList';

const ItemListContainer = (props) => {
    // hago un destructuring 

    const {greeting} = props
    
    const [libros, setLibros] = useState([])
    const [loading, setLoading] = useState(true)
  //Capturo la respuesta del resolve y el error

    useEffect(() => {
        // simulacro de api 
        getFetch
        .then(respuesta => setLibros(respuesta))
        // Capturamos todos los errores de manera global, y no rompe la app
        .catch((error) => console.log(error))
        //luego, con finally, siempre se va a ejecutar lo que le declaremos
        .finally(() => setLoading(false))
    
    }, [])


    
    return (
        <div>
            <h1>{greeting}</h1>
            { loading ? <h2>Cargando ...</h2>   
                :
            <ItemList items={libros}/>
            }
        </div>
    )
}

export default ItemListContainer
