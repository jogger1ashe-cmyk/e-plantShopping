import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateQuantity, removeItem } from './CartSlice'
import './CartItem.css'

function CartItem({ onContinueShopping }) {
  const items = useSelector((state) => state.cart.items)
  const dispatch = useDispatch()

  const calculateTotalAmount = () => {
    return items
      .reduce((total, item) => {
        const price = parseFloat(item.cost.replace('$', ''))
        return total + price * item.quantity
      }, 0)
      .toFixed(2)
  }

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }))
  }

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }))
    } else {
      dispatch(removeItem(item.name))
    }
  }

  const handleRemove = (item) => {
    dispatch(removeItem(item.name))
  }

  const handleCheckoutShopping = () => {
    alert('Functionality to be added for future reference')
  }

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {items.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          {items.map((item, idx) => (
            <div className="cart-item" key={idx}>
              {/* ✅ Show product image */}
              <img src={item.image} alt={item.name} className="cart-item-image" />

              <div className="cart-item-details">
                <span className="cart-item-name">{item.name}</span>
                <span className="cart-item-price">{item.cost}</span>
                <span className="cart-item-qty">Qty: {item.quantity}</span>
              </div>

              <div className="cart-item-actions">
                <button onClick={() => handleIncrement(item)}>+</button>
                <button onClick={() => handleDecrement(item)}>-</button>
                <button onClick={() => handleRemove(item)}>Remove</button>
              </div>

              {/* ✅ Subtotal */}
              <span className="cart-item-subtotal">
                Subtotal: $
                {(
                  parseFloat(item.cost.replace('$', '')) * item.quantity
                ).toFixed(2)}
              </span>
            </div>
          ))}
          <h3>Total: ${calculateTotalAmount()}</h3>
          <button onClick={onContinueShopping}>Continue Shopping</button>
          <button onClick={handleCheckoutShopping}>Checkout</button>
        </>
      )}
    </div>
  )
}

export default CartItem
