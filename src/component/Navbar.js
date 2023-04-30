import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../styled/CartStyled";

export const Navbar = () => {
  return (
    <Header>
      <h1 className="icon">
        <Link to="/">Home</Link>
      </h1>
      <div className="shopping">
        <Link to="/shop"> shopping </Link>
        <Link to="/cart"> cart </Link>
      </div>
    </Header>
  );
};
