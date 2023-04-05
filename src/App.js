import React from 'react';
import withProducts from './withProducts';

function App() {
  const products = [
    { id: 1, name: 'Table', price: '$30', image: 'https://images.pexels.com/photos/2647714/pexels-photo-2647714.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 2, name: 'Chair', price: '$20', image: 'https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 3, name: 'cot', price: '$70', image: 'https://images.pexels.com/photos/3757055/pexels-photo-3757055.jpeg?auto=compress&cs=tinysrgb&w=600' },
  ];

  const ProductListWithProducts = withProducts(products);

  return (
    <div>
      <ProductListWithProducts/>
    </div>
  );
}

export default App;
