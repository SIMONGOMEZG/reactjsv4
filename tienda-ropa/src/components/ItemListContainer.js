import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import LoadingSpinner from './LoadingSpinner';
import products from '../data/productsData';

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        if (categoryId) {
          const result = products.filter(p => p.category === categoryId);
          setFilteredProducts(result);
        } else {
          setFilteredProducts(products);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryId]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="container mt-4">
      <h2 className="text-center">{greeting}</h2>
      <ItemList products={filteredProducts} />
    </div>
  );
};

export default ItemListContainer;
