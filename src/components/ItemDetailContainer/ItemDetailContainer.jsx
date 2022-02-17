import React from 'react'
import {useState, useEffect} from 'react'
import { getFetch } from '../Helpers/mock'
import ItemDetail from './ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom';
import {collection,getDocs,query,where,getFirestore,getDoc} from 'firebase/firestore';


const ItemDetailContainer = () => {
const [producto, setProducto] = useState({})
const {idDetalle} = useParams()


        useEffect(() => {
            const db = getFirestore();
            const queryProd = getDoc(db, 'items', idDetalle);
            getDoc(queryProd).then((resp) => {
                setProducto({ id: resp.id, ...resp.producto() });
            });
    }, [idDetalle])
    return (
        <div>
            <ItemDetail  producto={producto}/>
        </div>
    )
}

export default ItemDetailContainer



// getFetch
//.then (respuesta => setproducto(respuesta.find(prod => prod.id === idDetalle)))
