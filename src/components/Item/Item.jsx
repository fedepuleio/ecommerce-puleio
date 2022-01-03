import React from 'react'
import ItemCount from '../ItemCount/ItemCount';

const Item = ({item}) => {

 // no se como hacer para que me tome el libro.titulo
    return (
            <div className="card flex center" style={{width: 18 + 'rem'}} >
                <div className="card-body">
                    <h5 className="card-title"> {item.titulo}</h5>
                    <p className="card-text">{item.autor}</p>
                        <ItemCount stock="15" initial={1}/>
                    </div>
            </div>
    )
}

export default Item
