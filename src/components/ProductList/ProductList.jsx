import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../App";
import AddProduct from "../AddProduct/AddProduct";
import AddToCart from "../AddToCart/AddToCart";
import "./ProductList.css";
export default function ProductList({ category }) {
  const { products } = useContext(AppContext);

  const output = products
    .filter((product) => product.category === category.id)
    .map((product) => (
      <div className="Product" key={product.id}>
        <img src={product.picture} alt={product.name} />
        <div className="Product-content">
          <span>{product.price} $</span>
          <Link className="Product-name" to={"/product/" + product.path}>
            {product.name}
          </Link>
          <AddToCart className="Addtocard" product={product} />
        </div>
      </div>
    ));
  return (
    <div className="ProductList">
      {output}
      <AddProduct/>
    </div>
  );
}
