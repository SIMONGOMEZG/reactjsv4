import React, { useState } from "react";
import { Link } from "react-router-dom";
import Description from "./Description";
import ItemQuantitySelector from "./ItemQuantitySelector";
import AddItemButton from "./AddItemButton";

const ItemDetail = ({ product }) => {
  const [addedToCart, setAddedToCart] = useState(false);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="container mt-4">
      <h2>{product.name}</h2>
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "100%", maxWidth: "400px", objectFit: "contain" }}
        className="mb-3"
      />
      <p className="text-muted">Categoría: {product.category}</p>
      <p className="h4">Precio: ${product.price}</p>
      <Description description={product.description} />
      {addedToCart ? (
        <Link to="/checkout" className="btn btn-success">
          Ir al Carrito
        </Link>
      ) : (
        <>
          <ItemQuantitySelector quantity={quantity} setQuantity={setQuantity} />
          <AddItemButton
            product={product}
            quantity={quantity}
            onAdd={() => setAddedToCart(true)}
          />
        </>
      )}
    </div>
  );
};

export default ItemDetail;
