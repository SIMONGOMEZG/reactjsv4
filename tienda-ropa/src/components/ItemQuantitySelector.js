import React from 'react';

const ItemQuantitySelector = ({ quantity, setQuantity }) => {
  const increaseQuantity = () => setQuantity((prev) => Math.min(prev + 1, 10)); // Máximo 10
  const decreaseQuantity = () => setQuantity((prev) => Math.max(prev - 1, 1)); // Mínimo 1

  return (
    <div className="d-flex align-items-center mt-3">
      <button className="btn btn-secondary" onClick={decreaseQuantity} disabled={quantity === 1}>
        -
      </button>
      <span className="mx-3">{quantity}</span>
      <button className="btn btn-secondary" onClick={increaseQuantity} disabled={quantity === 10}>
        +
      </button>
    </div>
  );
};

export default ItemQuantitySelector;
