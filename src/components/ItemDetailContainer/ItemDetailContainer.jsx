import React from 'react'
import {useState, useEffect} from 'react'
import { getFetch } from '../Helpers/mock'
import ItemDetail from './ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {
const [producto, setproducto] = useState({})
const {idDetalle} = useParams()

    useEffect (() => {

        getFetch
        .then (respuesta => setproducto(respuesta.find(prod => prod.id === idDetalle)))
    }, [idDetalle])
    return (
        <div>
            <ItemDetail  producto={producto}/>
        </div>
    )
}

export default ItemDetailContainer
