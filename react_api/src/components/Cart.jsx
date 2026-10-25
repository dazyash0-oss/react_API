import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity, clearCart } from '../store/cartSlice';

export const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <section className="cart-section">
      <h2>Shopping Cart (Redux Store)</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <span>{item.title.slice(0, 25)}...</span>
                <span>${item.price} x </span>
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) =>
                    dispatch(
                      updateQuantity({
                        id: item.id,
                        quantity: parseInt(e.target.value) || 1,
                      })
                    )
                  }
                />
                <button onClick={() => dispatch(removeFromCart(item.id))}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <h3>Total: ${totalPrice.toFixed(2)}</h3>
          <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
        </div>
      )}
    </section>
  );
};