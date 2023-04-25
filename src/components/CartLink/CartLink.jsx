import { useContext } from "react";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";
import "./CartLink.css";

export default function CartLink() {
  const { cart } = useContext(AppContext);

  const total = Object.values(cart).reduce((acc, num) => acc + num, 0);

  return (
    <div className="CartLink">
      <Link to="/cart">
        <img
          src="https://www.reebok.com/us/women-clothing#"
          alt="icon"
        />
        [{total}]
      </Link>
    </div>
  );
}
