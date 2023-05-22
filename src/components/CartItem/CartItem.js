import React from "react"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"



export const CartItem = ({
    name, price, quantity, id
}) => {
    const {removeItem} = useContext (CartContext)

    return (
        <div className='containerPrincipal'>
            <section className='cartItem'>
                <h4>{name}</h4>
                <div>Precio: ${price}</div>
                <div>Cantidad: {quantity}</div>
                <div>Subtotal: ${price*quantity}</div>
                <button onClick={() => removeItem(id)} className='boton'>Eliminar producto</button>
            </section>
        </div>
    )
}

export default CartItem