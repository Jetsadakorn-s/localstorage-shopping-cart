import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Btn,
  Description,
  DescriptionSpan,
  Item,
  ProductImg,
  ProductImgDiv,
  Quantity,
  QuantityInput,
  Remove,
  ShoppingCart,
} from "../styled/CartStyled";

const Cart = () => {
  const cart = JSON.parse(localStorage.getItem("cart"));
  const [cartItem, setCartItem] = useState([]);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const result = JSON.parse(localStorage.getItem("cart"));
    setCartItem(result);
    amount();
  }, [quantity]);

  const amount = () => {
    let sum = 0;
    const cartUpdate = JSON.parse(localStorage.getItem("cart"));
    if (cartUpdate.length !== 0) {
      for (let productAmount of cartUpdate) {
        sum += productAmount.quantity;
        setQuantity(sum);
      }
    } else {
      setQuantity(0);
    }
  };

  const removeItem = (productId) => {
    let temp = cartItem.filter((Element) => Element.id !== productId);
    localStorage.setItem("cart", JSON.stringify(temp));
    amount();
  };

  const increaseItem = (productId) => {
    for (let productIc of cart) {
      if (productIc.id === productId) {
        productIc.quantity++;
      }
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    amount();
  };

  const decreaseItem = (productId) => {
    for (let productDe of cart) {
      if (productDe.id === productId) {
        productDe.quantity--;
      }
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    amount();
  };

  return (
    <ShoppingCart>
      <div>amount : {quantity}</div>
      {cartItem.map((item, index) => {
        return (
          <Item key={index}>
              <Link to={`/product/${item.id}`}>
                <ProductImgDiv>
                  <ProductImg
                    src={item.thumbnail}
                    width={300}
                    height={300}
                    alt={item.title}
                  />
                </ProductImgDiv>
              </Link>
                <Description>
                  <DescriptionSpan>{item.title}</DescriptionSpan>
                </Description>
            <Quantity>
              <Btn onClick={() => increaseItem(item.id)}>+</Btn>
              <QuantityInput>{item.quantity}</QuantityInput>
              <Btn onClick={() => decreaseItem(item.id)}>-</Btn>
            </Quantity>
            <Remove onClick={() => removeItem(item.id)}>remove</Remove>
          </Item>
        );
      })}
    </ShoppingCart>
  );
};
export default Cart;
