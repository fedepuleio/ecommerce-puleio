import React, { useState } from 'react'

const Formulario = () => {

    const [values, setValues] = useState({
        nombre: '',
        apellido: ''
    })

    const { nombre, apellido } = values

    const handleInputs = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = () => {

        alert(`Hola ${nombre} ${apellido}`)
    }

    return (
        <div>
            <h1>FORMULARIO</h1>
            <form onSubmit={handleSubmit} >
                <label>Nombre:</label>
                <input type="text" name='nombre' onChange={handleInputs} />
                <label>Apellido:</label>
                <input type="text" name='apellido' onChange={handleInputs} />
                <button type='submit'>Enviar</button>
            </form>
        </div>
    )
}

export default Formulario