import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const cart = JSON.parse(localStorage.getItem("cart"));
  const [cartItem, setCartItem] = useState([]);
  const [quantity,setQuantity] = useState(0);

  useEffect(() => {
    const result = JSON.parse(localStorage.getItem("cart"));
    setCartItem(result);
    amount()
  }, [quantity]);

  const amount = () => {
    let sum = 0
    const cartUpdate = JSON.parse(localStorage.getItem("cart"))
    if(cartUpdate.length !== 0){
    for (let productAmount of cartUpdate) {
        sum += productAmount.quantity
        setQuantity(sum)
      }
    }else{
        setQuantity(0)
    }
  }

  const removeItem = (productId) => {
    let temp = cartItem.filter((Element) => Element.id !== productId);
    localStorage.setItem("cart", JSON.stringify(temp));
    amount()
  };

  const increaseItem = (productId) => {
    for (let productIc of cart) {
      if (productIc.id === productId) {
        productIc.quantity++;
      }
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    amount()
  };

  const decreaseItem = (productId) => {
    for (let productDe of cart) {
      if (productDe.id === productId) {
        productDe.quantity--;
      }
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    amount()
  };

  return (
    <div>
        <div>amount : {quantity}</div>
      {cartItem.map((item, index) => {
        return (
          <div key={index}>
            <div className="product">
              <Link to={`/product/${item.id}`}>
                <div className="title">{item.title}</div>
                <img
                  src={item.thumbnail}
                  width={300}
                  height={300}
                  alt={item.title}
                />
              </Link>
            </div>
            <div className="btn-container">
              <button onClick={() => increaseItem(item.id)}>+</button>
                <div>{item.quantity}</div>
              <button onClick={() => decreaseItem(item.id)}>-</button>
              <button onClick={() => removeItem(item.id)}>remove</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Cart;
