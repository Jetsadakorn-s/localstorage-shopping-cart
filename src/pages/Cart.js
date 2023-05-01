import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Btn,
  Description,
  DescriptionSpan,
  Footer,
  Item,
  ProductImg,
  Quantity,
  QuantityInput,
  ShoppingCart,
} from "../styled/CartStyled";
import { CartContext } from "../App";
import { TotalPrice } from "../styled/CartStyled";

const Cart = () => {
  const { formatNumber, allAmount, setAllAmount, cartTotal, setCartTotal } =
    useContext(CartContext);
  const cart = JSON.parse(localStorage.getItem("cart"));
  const [cartItem, setCartItem] = useState([]);

  useEffect(() => {
    const result = JSON.parse(localStorage.getItem("cart"));
    setCartItem(result);
    amount();
    // eslint-disable-next-line
  }, [allAmount]);

  const amount = () => {
    let sum = 0;
    let total = 0;
    const cartUpdate = JSON.parse(localStorage.getItem("cart"));
    // if (cartUpdate.length !== 0) {
    for (let product of cartUpdate) {
      sum += product.quantity;
      setAllAmount(sum);
      total += product.quantity * product.price;
      setCartTotal(total);
    }
    // } else {
    // console.log("cartUpdate : ", cartUpdate.length);
    // }
  };

  const removeItem = (productId) => {
    let temp = cartItem.filter((Element) => Element.id !== productId);
    if (temp.length === 0) {
      setAllAmount(0);
      setCartTotal(0);
      // console.log("temp.result : ",temp)
      localStorage.setItem("cart", JSON.stringify(temp));
    } else {
      localStorage.setItem("cart", JSON.stringify(temp));
      console.log(temp);
      amount();
    }
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
        if (productDe.quantity < 1) {
          // console.log("remove item : ", { productId });
          removeItem(productId);
        } else {
          localStorage.setItem("cart", JSON.stringify(cart));
          amount();
        }
      }
    }
  };

  if (cart.length === 0) {
    return (
      <ShoppingCart>
        <h1 className="empty">ไม่มีสินค้าในตะกร้า</h1>
      </ShoppingCart>
    );
  } else {
    return (
      <ShoppingCart>
        {cartItem.map((item, index) => {
          return (
            <Item key={index}>
              <Link to={`/product/${item.id}`}>
                <ProductImg
                  src={item.thumbnail}
                  width={300}
                  height={300}
                  alt={item.title}
                />
              </Link>
              <Description>
                <DescriptionSpan>{item.title}</DescriptionSpan>
                <span>price : {formatNumber(item.price)}</span>
              </Description>
              <Quantity>
                <Btn onClick={() => increaseItem(item.id)}>+</Btn>
                <QuantityInput>{item.quantity}</QuantityInput>
                <Btn onClick={() => decreaseItem(item.id)}>-</Btn>
              </Quantity>
              <TotalPrice>
                {formatNumber(item.quantity * item.price)}
              </TotalPrice>
              <Quantity>
                <Btn onClick={() => removeItem(item.id)}>x</Btn>
              </Quantity>
            </Item>
          );
        })}
        <Footer>Total : {formatNumber(cartTotal)}</Footer>
      </ShoppingCart>
    );
  }
};
export default Cart;
