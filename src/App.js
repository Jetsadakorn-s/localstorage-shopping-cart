import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import { Product } from "./pages/Product";
import { Navbar } from "./component/Navbar";
import { createContext, useState } from "react";

export const CartContext = createContext();

const App = () => {
  const [allAmount, setAllAmount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const formatNumber=(num)=> {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

  return (
    <CartContext.Provider value={{ allAmount, setAllAmount,formatNumber,cartTotal, setCartTotal }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:one" Component={Product} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartContext.Provider>
  );
};

export default App;
