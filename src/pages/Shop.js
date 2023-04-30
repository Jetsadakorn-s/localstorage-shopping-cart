import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  ContainerDiv,
  ItemTitle,
  Layout,
} from "../styled/CartStyled";

const Shop = () => {
  const [result, setResult] = useState([]);

  useEffect(() => {
    const api = async () => {
      const res = await fetch("https://dummyjson.com/product?limit=12")
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          setResult(data.products);
          localStorage.setItem("products", JSON.stringify(data));
          if (!localStorage.getItem("cart")) {
            localStorage.setItem("cart", "[]");
          }
        });
    };
    api();
  }, []);

  return (
    <Layout>
      <Container>
        {result.map((item) => {
          // console.log(item)
          return (
            <ContainerDiv key={item.id}>
              <Link to={`/product/${item.id}`}>
                <ItemTitle>{item.title}</ItemTitle>
                <img
                  src={item.thumbnail}
                  width={300}
                  height={300}
                  alt={item.title}
                />
              </Link>
            </ContainerDiv>
          );
        })}
      </Container>
    </Layout>
  );
};
export default Shop;
