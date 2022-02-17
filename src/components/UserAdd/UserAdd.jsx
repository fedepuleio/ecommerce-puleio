import React from 'react'
import './UserAdd.css'
import { Button,Form } from 'react-bootstrap'

const UserAdd = (addUser) => {
    return (
        <div>
            <Form className='inputsUser'>
                <Form.Group className="mb-2" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Nombre y apellido" />
                </Form.Group>
                <Form.Group className="mb-2" controlId="formBasicPassword" >
                    <Form.Control type="number" placeholder="Numero de teléfono" />
                </Form.Group>
                <Form.Group className="mb-2" controlId="formBasicPassword">
                    <Form.Control type="text" placeholder="Direccion" />
                </Form.Group>
                <Form.Group className="mb-2" controlId="formBasicPassword">
                    <Form.Control type="number" placeholder="Edad" />
                </Form.Group>
                <Button variant="success" type="button" onClick={addUser} className='buttAddUser'>Agregar usuario</Button>
            </Form>
        </div>
    )
}

export default UserAdd