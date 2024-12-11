import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import LoadingSpinner from './LoadingSpinner';
import products from '../data/productsData';

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const result = products.find(p => p.id === parseInt(itemId));
        setProduct(result || null);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [itemId]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!product) {
    return <p className="text-center mt-4">Producto no encontrado.</p>;
  }

  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;
