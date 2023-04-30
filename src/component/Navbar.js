import { Link } from "react-router-dom";
import { Badge, Button, Header, NavShopBtn } from "../styled/CartStyled";
import { useContext } from "react";
import { CartContext } from "../App";

export const Navbar = () => {
  const { allAmount } = useContext(CartContext);
  return (
    <Header>
      <h1 className="icon">
        <Link to="/">Home</Link>
      </h1>
      <NavShopBtn>
        <Link to="/shop">
          <Button>shopping</Button>
        </Link>
        <Link to="/cart">
          <Button>
            cart
            <Badge>{allAmount}</Badge>
          </Button>
        </Link>
      </NavShopBtn>
    </Header>
  );
};
