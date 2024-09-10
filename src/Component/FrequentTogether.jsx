import React, { useState } from 'react';

const FrequentTogether = () => {
  const [selectedProducts, setSelectedProducts] = useState({
    product1: false,
    product2: false,
    product3: false,
  });

  const products = [
    {
      id: 'product1',
      price: 29.99,
      imgSrc: '/add1.png',
      title: '023 - Baccarat 540',
      description: 'Inspired By: M. F. Kurkjian Baccarat Rouge 540',
    },
    {
      id: 'product2',
      price: 12.99,
      imgSrc: '/add2.png',
      title: '023 - Baccarat 540',
      description: 'Inspired By: M. F. Kurkjian Baccarat Rouge 540',
    },
    {
      id: 'product3',
      price: 39.99,
      imgSrc: '/add2.png',
      title: '023 - Baccarat 540',
      description: 'Inspired By: M. F. Kurkjian Baccarat Rouge 540',
    },
  ];

  const handleCheckboxChange = (id) => {
    setSelectedProducts((prevState) => ({
      ...prevState,
      [id]: !prevState[id], // Toggle the selected product
    }));
  };

  const calculateTotal = () => {
    return products
      .reduce((total, product) => {
        if (selectedProducts[product.id]) {
          return total + product.price;
        }
        return total;
      }, 0)
      .toFixed(2);
  };

  return (
    <>
      <div className='heading'>Frequently bought together</div>
      <div className='flex gap'>
        {products.map((product) => (
          <div key={product.id}>
            <input
              type='checkbox'
              className='productCheckbox'
              checked={selectedProducts[product.id]} // Reflect current state
              onChange={() => handleCheckboxChange(product.id)}
            />
            <div className='additionPro'>
              <img src={product.imgSrc} alt={product.title} />
            </div>
            <div className='addTitle'>{product.title}</div>
            <div className='addDec'>{product.description}</div>
            <div className='Price align'>${product.price.toFixed(2)}</div>
          </div>
        ))}
        <div className='addTotalPrice'>
          <div className='flex gap'>
            <div className='addpriceLab'>Total Price</div>
            <div className='Price'>${calculateTotal()}</div>
          </div>
          <div className='addproBtn'>ADD TO CART</div>
        </div>
      </div>
    </>
  );
};

export default FrequentTogether;
