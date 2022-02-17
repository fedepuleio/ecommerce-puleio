import React from 'react'
import { Link } from 'react-router-dom'



const Item = ({libro}) => {
    
    return (
        <div>
            <div className="card flex centro" style={{width: 15 + 'rem' , height: 27 +'rem'}} >
                <img style={{height: 150 + 'px', width: 150 + 'px', alignSelf: 'center',marginTop: 0.5 +'rem'}}src={libro.foto} alt={libro.titulo}/>
                <div className="card-body" style={{height: 15 +'rem' , boxShadow: '0.5rem'}}>
                    <h5 className="card-title text-center"> {libro.titulo}</h5>
                    <p className="card-text text-center">{libro.autor}</p>
                    <p className="card-text text-center">$ {libro.precio}</p>
                <div>
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
