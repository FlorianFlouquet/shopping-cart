import Nav from './Component/Nav';
import Products from './Component/Products';
import Cart from './Component/Cart';
import Home from './Component/Home';
import { productsData } from './Component/productsData';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [CartItems, setCartItems] = useState([]);
  const [Total, setTotal] = useState(0);

  const handleClick = index => () => {
    var oldArray = CartItems;
    var newArray = [];
    var object = {};
    object.title = productsData[index[0]].products_list[index[1]].title;
    object.price = productsData[index[0]].products_list[index[1]].prix;
    newArray.push(object);
    console.log(newArray[0]);
    oldArray.push(newArray[0]);
    console.log(oldArray);
    setCartItems(oldArray);
    totalChange(object.price);
  }

  const totalChange = (price) => {
    var totalPrice = Total;
    price = parseFloat(price);
    totalPrice += price;
    setTotal(totalPrice);
  }

  return (
    <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/cart" element={<Cart data={CartItems} charge={Total} />} />
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
          } />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
