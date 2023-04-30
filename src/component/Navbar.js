import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <div className="icon">
        <Link to="/">Home</Link>
      </div>
      <div className="shopping">
        <Link to="/shop"> shopping </Link>
        <Link to="/cart"> cart </Link>
      </div>
    </nav>
  );
};
