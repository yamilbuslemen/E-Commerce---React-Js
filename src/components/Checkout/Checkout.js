import { useState, useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Timestamp, collection, addDoc } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"
import { CheckoutForm } from  '../CheckoutForm/CheckoutForm'







const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')

    const { cart, total, clearCart } = useContext(CartContext)

    const createOrder = async ({ name, phone, email }) => {
        setLoading(true)

      
            const objOrder = {
                buyer: {
                    name, phone, email
                }, 
                items: cart,
                total: total(),
                date: Timestamp.fromDate(new Date())
            }

         

                const orderRef = collection (db, 'orders')

                const orderAdded = await addDoc(orderRef, objOrder) 

                setOrderId(orderAdded.id)
                clearCart()

      
            setLoading(false)
        }
    

    if (loading) {
        return <h1>Se esta generando su orden...</h1>
    }

    if (orderId) {
        return <h1>El id de su orden es: {orderId}</h1>
    }

    return (
        <div>
            <h1>Checkout</h1>
            <CheckoutForm onConfirm={createOrder}/>
        </div>
    )
}

export default Checkout