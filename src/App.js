import Nav from './Component/Nav';
import Products from './Component/Products';
import Cart from './Component/Cart';
import Home from './Component/Home';
import { productsData } from './Component/productsData'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import React, { useState } from 'react';

function App() {
  const handleClick = index => () => {
    console.log(productsData[index[0]].products_list[index[1]].title);
  }

  return (
    <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/products" element={
            <div id='product-list'>
              {productsData.map((itemCategory, index) => (
                <Products key={index} categoryName={itemCategory.category_name} content={
                  itemCategory.products_list.map((item, secondIndex) => (
                    <div className="product-article" key={item.title}>
                        <div className="img-holder">
                            <img src={item.img} alt={item.title} />
                        </div>
                        <div className="product-details">
                            <h2>{item.title}</h2>
                            <h3>{item.prix}€</h3>
                            <p>{item.description}</p>
                            <div>
                                <button onClick={handleClick([index, secondIndex])}>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                  ))
                } />
              ))}
            </div>
          }/>
          <Route exact path="/cart" element={<Cart />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
