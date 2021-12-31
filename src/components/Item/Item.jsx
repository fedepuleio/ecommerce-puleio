import React from 'react'
import ItemCount from '../ItemCount/ItemCount';

const Item = ({libros}) => {

    let titulo = {libros}


    return (
            <div key={libro.id} className="card flex center" style={{width: 18 + 'rem'}} >
                <div className="card-body">
                    <h5 className="card-title"> {libro.titulo}</h5>
                    <p className="card-text">{libro.autor}</p>
                        <ItemCount stock="15" initial={1}/>
                    </div>
            </div>
    )
}

export default Item
