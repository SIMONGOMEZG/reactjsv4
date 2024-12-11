import React, { useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { CartContext } from '../context/CartContext';

const CartWidget = () => {
  const { cartItems } = useContext(CartContext);
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="cart-widget">
      <FaShoppingCart size={24} />
      {totalQuantity > 0 && <span className="badge bg-danger">{totalQuantity}</span>}
    </div>
  );
};

export default CartWidget;
