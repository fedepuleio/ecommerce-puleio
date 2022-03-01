import React from 'react'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import Resumen from "../Resumen/Resumen"
import './ItemListContainer.css';
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"


const ItemListContainer = (props) => {
    // hago un destructuring del prop
    const {greeting} = props
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    //const {id} = useParams();

    //me traigo el parametro de categorias

    const {idCategoria} = useParams()

    function traerproductosCategoria() {
        const db = getFirestore();
            const queryProducts = query(
                collection(db, 'items'),
                where('categoria', '==', idCategoria)
            );
            getDocs(queryProducts)
            .then((res) =>
            setProductos(res.docs.map((prod) => ({id: prod.id,...prod.data(),
                    }))
                )
            );
            setLoading(false);
    }
    function traerTodosLosProductos() {
        const db = getFirestore();
            const queryProducts = collection(db, 'items');
            getDocs(queryProducts).then((res) =>
            setProductos(res.docs.map((prod) => ({id: prod.id,...prod.data(),
                    }))
                )
            );
            setLoading(false);
    }

    useEffect(() => {
        if (idCategoria) {
            traerproductosCategoria();
        } else {
            traerTodosLosProductos()
        }
    }, [idCategoria]);

    return (
        <div>
            <h1 className="card-text text-center">{greeting} {idCategoria}</h1>

            { loading ? <h1 style={{fontSize : '30px', color: 'red' }}>Cargando ...</h1>
            :
            <ItemList productos={productos}/>
            }
        </div>
    )
}

export default ItemListContainer


/** 
 * if (idCategoria) {
            getFetch
            .then(respuesta => setProductos(respuesta.filter(libro => libro.categoria === idCategoria)))
            .catch((error) => console.log(error))
            .finally(() => setLoading(false))
        } else {
            getFetch
            .then(respuesta => setProductos(respuesta))
            // Capturamos todos los errores de manera global, y no rompe la app
            .catch((error) => console.log(error))
            //luego, con finally, siempre se va a ejecutar lo que le declaremos
            .finally(() => setLoading(false))
            }
 */