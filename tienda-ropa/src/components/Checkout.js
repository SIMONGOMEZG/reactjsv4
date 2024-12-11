import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebaseConfig";
import Brief from "./Brief";
import CheckoutForm from "./CheckoutForm";

const Checkout = () => {
  const { cartItems, clearCart, getTotalPrice } = useContext(CartContext);
  const [buyerInfo, setBuyerInfo] = useState(null);

  const handleFormSubmit = async (form) => {
    setBuyerInfo(form);

    const order = {
      items: cartItems,
      total: getTotalPrice(),
      buyer: form,
      date: new Date(),
    };

    const docRef = await addDoc(collection(db, "orders"), order);
    alert(`Compra confirmada. ID de la orden: ${docRef.id}`);
    clearCart();
  };

  if (cartItems.length === 0) {
    return <p className="text-center mt-4">Tu carrito está vacío.</p>;
  }

  return (
    <div className="container mt-4">
      <h2>Resumen de Compra</h2>
      <Brief items={cartItems} />
      {!buyerInfo ? (
        <CheckoutForm onSubmit={handleFormSubmit} />
      ) : (
        <p>Gracias por tu compra, {buyerInfo.name}.</p>
      )}
    </div>
  );
};

export default Checkout;
