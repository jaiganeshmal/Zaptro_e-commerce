import { createContext, useState } from "react";
import { toast } from "react-toastify";



let CartData = createContext()

let CartProvider = ({ children }) => {
    let [cartItem, setCartItem] = useState([])

    let addToCartHanlder = (product) => {
        let itemInCart = cartItem.find((item) => item.id === product.id)
        if (itemInCart) {
            let updateCart = cartItem.map((item) =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            )
            setCartItem(updateCart)
            toast.success('Product quanitiy increased ')
        } else {
            setCartItem([...cartItem, { ...product, quantity: 1 }])
            toast.success('Product is added Cart! ')
        }
    }

    let updateCart = (item, productId, action) => {
        setCartItem(
            item.map((data) => {
            if (data.id === productId) {
                let newUnit = data.quantity
                if (action === 'increase') {
                    newUnit = newUnit + 1
                    toast.success('Product quanitiy increased ')
                } else if (action === 'decrease') {
                    newUnit = newUnit - 1
                    toast.success('Product quanitiy decreased ')
                }
                return newUnit > 0 ? { ...data, quantity: newUnit } : null
            }
            return data
        }).filter(item => item != null) // remove item qunatity 0
        )

    }

    let itemDelete = (productId) => {
        setCartItem(cartItem.filter(item => item.id !== productId))
        toast.success('Product delete successfully ')
    }
    return (
        <CartData.Provider value={{ cartItem, setCartItem, addToCartHanlder, updateCart, itemDelete }}>
            {children}
        </CartData.Provider>
    )
}

export { CartData, CartProvider }

