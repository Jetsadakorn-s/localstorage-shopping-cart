import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Shop = () => {
  const [result, setResult] = useState([]);

  useEffect(() => {
    const api = async () => {
      const res = await fetch("https://dummyjson.com/product?limit=12")
      .then(function(response){
        return response.json();
      })
      .then(function(data){
        setResult(data.products);
        localStorage.setItem("products",JSON.stringify(data));
        if(!localStorage.getItem("cart")){
          localStorage.setItem("cart","[]");
        }
      })
    };
    api();
  }, []);

  return (
    <div className="container">
      {result.map((item) => {
        // console.log(item)
        return (
          <div key={item.id}>
              <Link to={`/product/${item.id}`} >
                <div className="title">{item.title}</div>
                <img
                  src={item.thumbnail}
                  width={300}
                  height={300}
                  alt={item.title}
                />
              </Link>
          </div>
        );
      })}
    </div>
  );
};
export default Shop;
