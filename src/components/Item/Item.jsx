import React from 'react'
import { Link } from 'react-router-dom'



const Item = ({libro}) => {
    
    return (
        <div >
            <div className="card flex centro" style={{width: 30 + 'rem'}} >
                <div className="card-body">
                    <h5 className="card-title text-center"> {libro.titulo}</h5>
                    <p className="card-text text-center">{libro.autor}</p>
                    <p className="card-text text-center">$ {libro.precio}</p>
                    <div>
                    <img src={libro.foto} alt={libro.titulo}/>
                    </div>
                        <Link to={`/detalle/${libro.id}`}>
                            <button type="button" className="btn btn-outline-dark" >
                                Ver detalle
                            </button>
                        </Link>
                    </div>
            </div>
        </div>
    )
}

export default Item
