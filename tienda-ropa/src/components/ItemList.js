import React from 'react';
import Item from './Item';

const ItemList = ({ products }) => {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {products.length > 0 ? (
        products.map(product => <Item key={product.id} product={product} />)
      ) : (
        <p>No hay productos disponibles en esta categoría.</p>
      )}
    </div>
  );
};

export default ItemList;
