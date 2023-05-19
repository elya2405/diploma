import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AppContext } from "../../App";
import AddProduct from "../AddProduct/AddProduct";
import AddToCart from "../AddToCart/AddToCart";
import DeleteProduct from "../DeleteProduct/DeleteProduct";
import "./ProductList.css";
export default function ProductList({ category }) {
  const { products } = useContext(AppContext);
  const { categories } = useContext(AppContext);

  const output = products
    .filter((product) => product.category === category.id)
    .map((product) => (
      <div className="Product" key={product.id}>
        <div className="Product_content">
          <Link  to={"/product/" + product.path}>
           <div className="Product_link"><span className="Product_name"> {product.name}</span>
           <img
              className="Product_img"
              src={product.picture}
              alt={product.name}
            /></div>
          </Link>
          <span>{product.price} $ </span>
          <AddToCart className="Addtocard" product={product} />
          <DeleteProduct product={product} />
        </div>
      </div>
    ));
  const output_2 = categories.map((category) => (
    <li key={category.id}>
      <NavLink to={`/category/${category.path}`}>
        <span>{category.name}</span>
      </NavLink>
    </li>
  ));

  return (
    <div>
      <div>
        <ul className="Category_name">{output_2}</ul>
      </div>
      <div className="ProductList">
        {output}
        <AddProduct category={category} />
      </div>
    </div>
  );
}
