import React from 'react'
import {useState, useEffect} from 'react'
import { getFetch } from '../Helpers/mock'
import ItemDetail from './ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom';
import {doc,getFirestore,getDoc} from 'firebase/firestore';


const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const {idDetalle} = useParams()
    
    useEffect(() => {
        const db = getFirestore();
        const queryProd = doc(db, 'items', idDetalle);
        getDoc(queryProd).then((resp) => {
            setProducto({ id: resp.id, ...resp.data() });
        });
    }, [idDetalle]);

    return (
        <div>
            <ItemDetail  producto={producto}/>
        </div>
    )
}

export default ItemDetailContainer

/*
const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const queryProd = doc(db, 'products', id);
        getDoc(queryProd).then((resp) => {
            setProduct({ id: resp.id, ...resp.data() });
        });
        setLoading(false);
    }, [id]);

*/

// getFetch
//.then (respuesta => setproducto(respuesta.find(prod => prod.id === idDetalle)))
