import React from 'react';
import ProductList from './ProductList';

const withProducts = products => {
  return () => <ProductList products={products} />;
};

export default withProducts;