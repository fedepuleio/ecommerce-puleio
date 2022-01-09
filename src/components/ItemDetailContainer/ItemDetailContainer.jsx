import React from 'react'
import {useState, useEffect} from 'react'
import { getFetch } from '../Helpers/mock'
import ItemDetail from './ItemDetail/ItemDetail'


const ItemDetailContainer = () => {
const [producto, setproducto] = useState({})

    useEffect (() => {

        getFetch
        .then (respuesta => setproducto(respuesta.find(prod => prod.id === '1')))
    }, [])
    return (
        <div>
            <ItemDetail  producto={producto}/>
        </div>
    )
}

export default ItemDetailContainer
