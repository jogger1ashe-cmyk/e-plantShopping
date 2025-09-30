import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from './CartSlice'
import CartItem from './CartItem'
import './ProductList.css'

// ✅ Example plantsArray (make sure this is defined in your file)
const plantsArray = [
  {
    category: 'Indoor Plants',
    plants: [
      {
        name: 'Snake Plant',
        image: 'https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg',
        description: 'Produces oxygen at night, improving air quality.',
        cost: '$15',
      },
      {
        name: 'Spider Plant',
        image: 'https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg',
        description: 'Filters formaldehyde and xylene from the air.',
        cost: '$12',
      },
      {
        name: "Peace Lily",
        image:
          "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg",
        description: "Removes mold spores and purifies the air.",
        cost: "$18",
      },
    ],
  },
]      

function ProductList() {
  const [showCart, setShowCart] = useState(false)
  const dispatch = useDispatch()

  const cartItems = useSelector((state) => state.cart.items)
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant))
  }

  return (
    <div>
      <div className="navbar">
        <h2>Paradise Nursery</h2>
        <button onClick={() => setShowCart(true)}>
          🛒 Cart ({totalQuantity})
        </button>
      </div>

      {!showCart ? (
        <div className="product-grid">
          {plantsArray.map((category, index) => (
            <div key={index}>
              <h1>{category.category}</h1>
              <div className="product-list">
                {category.plants.map((plant, i) => (
                  <div className="product-card" key={i}>
                    <img className="product-image" src={plant.image} alt={plant.name} />
                    <div className="product-title">{plant.name}</div>
                    <div className="product-description">{plant.description}</div>
                    <div className="product-cost">{plant.cost}</div>
                    <button onClick={() => handleAddToCart(plant)}>
                      Add to Cart
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={() => setShowCart(false)} />
      )}
    </div>
  )
}

export default ProductList
