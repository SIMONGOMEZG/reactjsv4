import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
  return (
    <div className="card m-2" style={{ width: '18rem' }}>
      <Link to={`/item/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="card-img-top"
          style={{ height: '200px', objectFit: 'cover' }}
          onError={(e) => (e.target.src = '/assets/images/default-image.jpg')}
        />
      </Link>
      <div className="card-body">
        <h5 className="card-title">
          <Link to={`/item/${product.id}`}>{product.name}</Link>
        </h5>
        <p className="card-text">Precio: ${product.price}</p>
        <Link to={`/item/${product.id}`} className="btn btn-primary">
          Ver Detalles
        </Link>
      </div>
    </div>
  );
};

export default Item;
