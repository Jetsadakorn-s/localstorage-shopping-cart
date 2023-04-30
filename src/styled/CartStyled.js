import styled from "styled-components";

export const Layout = styled.div`
  margin-top: 5rem;
`;

export const PdContainer = styled.div`
  color: white;
  display: flex;
  justify-content: center;
`;

export const PdDetails = styled.div`
  display: flex;
  justify-content: center;
`;

export const HomePage = styled.h1`
  color: #fff;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ContainerDiv = styled.div`
  width: 300px;
  height: 300px;
  margin: 30px 15px;
  background: #333;
  &:hover {
    background: orange;
  }
`;

export const ItemTitle = styled.div`
  color: #fff;
  text-align: center;
  font-size: 1em;
`;

export const Header = styled.div`
  background-color: purple;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2%;
`;

export const Button = styled.div`
  border: none;
  font: inherit;
  background: #4d1601;
  color: #fff;
  padding: 0.75rem 3rem;
  display: flex;
  justify-content: space-around;
  border-radius: 25px;
  align-items: center;
  font-weight: bold;
`;

export const Badge = styled.div`
  background-color: #b94517;
  padding: 0.2rem 1rem;
  border-radius: 25px;
  margin-left: 1rem;
  font-weight: bold;
`;

export const ShoppingCart = styled.div`
  width: 750px;
  height: 420px;
  background: #fff;
  margin: 120px auto;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Item = styled.div`
  padding: 5px 30px;
  height: 100px;
  display: flex;
`;

export const Title = styled.div`
  height: 60px;
  border-bottom: 1px solid #e1e8ee;
  padding: 20px 30px;
  font-size: 25px;
  font-weight: 800;
`;

export const Footer = styled.div`
  height: 60px;
  border-top: 1px solid #e1e8ee;
  padding: 20px 30px;
  font-size: 25px;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const ProductImgDiv = styled.div`
  margin-right: 50px;
`;

export const ProductImg = styled.img`
  width: 120px;
  height: 80px;
`;

//   .item:nth-child(3) {
//     border-top: 1px solid #e1e8ee;
//     border-bottom: 1px solid #e1e8ee;
//   }

export const Description = styled.div`
  align-items: center;
  padding-top: 5px;
  margin-right: 60px;
  min-width: 120px;
`;

export const DescriptionSpan = styled.span`
  display: block;
  margin-top: 5px;
  font-size: 18px;
  color: #000;
  font-weight: 700;
`;

//   .description span:last-child {
//     font-weight: 300;
//     margin-top: 8px;
//     color: #86939e;
//   }

export const Quantity = styled.div`
  padding-top: 20px;
  padding-right: 60px;
  display: flex;
`;

export const QuantityInput = styled.div`
  border: none;
  text-align: center;
  width: 32px;
  font-weight: 300;
  font-size: 18px;
`;

export const Btn = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
`;

//   .plus-btn img {
//     margin-top: 3px;
//   }

//   .minus-btn img {
//     margin-bottom: 3px;
//   }

export const TotalPrice = styled.div`
  width: 83px;
  padding-top: 15px;
  text-align: center;
  font-size: 25px;
  font-weight: 700;
`;

export const Remove = styled.button`
  position: relative;
  padding-top: 25px;
  margin-left: 60px;
`;

//   .remove img {
//     cursor: pointer;
//   }

//   .empty {
//     height: 60px;
//     border-bottom: 1px solid #e1e8ee;
//     text-align: center;
//     font-size: 25px;
//     font-weight: 800;
//     color: red;
//   }
