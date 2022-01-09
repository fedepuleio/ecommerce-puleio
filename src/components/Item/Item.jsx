import React from 'react'



const Item = ({libro}) => {

 // no se como hacer para que me tome el libro.titulo
    return (
        <div >
            <div className="card flex centro" style={{width: 30 + 'rem'}} >
                <div className="card-body">
                    <h5 className="card-title text-center"> {libro.titulo}</h5>
                    <p className="card-text text-center">{libro.autor}</p>
                    <p className="card-text text-center">{libro.precio}</p>
                    <div>
                    <img src={libro.foto} alt={libro.titulo}/>
                    </div>
                    <button type="button" className="btn btn-outline-dark" >Detalle del libro</button>
                    </div>
            </div>
        </div>
    )
}

export default Item
