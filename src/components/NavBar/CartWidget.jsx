import React from 'react'
import { FaCartPlus } from 'react-icons/fa'
import "./NavBar.css"

const CartWidget = () => {
    return (
        <div>
            <FaCartPlus className="cartWidget"/>
        </div>
    )
}

export default CartWidget
