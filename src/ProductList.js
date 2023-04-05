import React from 'react';

const ProductList = ({ products }) => {
  return (
    <div>
      <h2>PRODUCTS:</h2>
      
        {products.map(product => (
          <ol key={product.id}>
            < img src={product.image} alt={product.name} />
            <p>{product.name}</p>
            <p>{product.price}</p>
          </ol>
        ))}
      
    </div>
  );
};

export default ProductList;