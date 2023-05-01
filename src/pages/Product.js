import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  AddBtn,
  Layout,
  PdContainer,
  PdDetails,
} from "../styled/CartStyled";
import { CartContext } from "../App";

export const Product = (props) => {
  const cart = JSON.parse(localStorage.getItem("cart"));

  const { one } = useParams();
  const [resultProduct, setResultProduct] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const { setAllAmount } = useContext(CartContext);

  const api = async () => {
    try {
      const res = await fetch(`https://dummyjson.com/product/${one}`);
      const data = await res.json();
      setResultProduct(data);
      setIsLoading(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    api();
     // eslint-disable-next-line
  }, []);
  //   console.log(resultProduct.title);

  //Function เพิ่ม, ลด สินค้า
  const addItem = (productId) => {
    let sum = 0;
    let res = cart.find((Element) => Element.id === productId);
    if (res === undefined) {
      resultProduct.quantity = 1;
      cart.push(resultProduct);
    } else {
      for (let productIc of cart) {
        if (productIc.id === productId) {
          productIc.quantity++;
        }
      }
    }
    for (let product of cart) {
      sum += product.quantity;
      setAllAmount(sum);
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    // console.log("Item Added : ",productId);
  };

  return (
    isLoading && (
      <Layout>
        <PdContainer>
          <div>
            <PdDetails>
              <h1>{resultProduct.title}</h1>
              <img
                src={resultProduct.thumbnail}
                width={300}
                height={300}
                alt={resultProduct.title}
              />
              <h3>price : {resultProduct.price} $</h3>
              <h3>rating : {resultProduct.rating} / 5</h3>
            </PdDetails>
            <h3>Description : </h3>
            <h3>{resultProduct.description}</h3>
            <AddBtn>
              <button onClick={() => addItem(resultProduct.id)}>
                Add to cart
              </button>
            </AddBtn>
          </div>
        </PdContainer>
      </Layout>
    )
  );
};
