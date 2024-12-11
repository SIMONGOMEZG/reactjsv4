import React, { useState } from "react";

const CheckoutForm = ({ onSubmit }) => {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) {
      alert("Todos los campos son obligatorios.");
      return;
    }
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <input
        type="text"
        name="name"
        placeholder="Nombre completo"
        value={form.name}
        onChange={handleChange}
        className="form-control mb-2"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Correo electrónico"
        value={form.email}
        onChange={handleChange}
        className="form-control mb-2"
        required
      />
      <input
        type="text"
        name="phone"
        placeholder="Teléfono"
        value={form.phone}
        onChange={handleChange}
        className="form-control mb-2"
        required
      />
      <button type="submit" className="btn btn-primary">
        Confirmar
      </button>
    </form>
  );
};

export default CheckoutForm;
