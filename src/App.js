import React from 'react';
import Cart from './Reduxjs-Toolkit/Cart';
import Products from './Reduxjs-Toolkit/Products';
import products  from './products.json';

function App() {

  return (
    <div className="App">
          <h2>   Main App  </h2>
          <h1> Building Cart with Reduxjs-Toolkit  </h1>
              <Cart />
          <div className="text-center">
            {products.map((product) => (
              <Products  {...product} />
              ))}
            </div>
    </div>

  );
}

export default App;
