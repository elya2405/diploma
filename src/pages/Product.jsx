import { useContext } from "react";
import { useMatch } from "react-router-dom";
import { AppContext } from "../App";
import NotFound from "./NotFound";
import AddToCart from "../components/AddToCart/AddToCart";
import "./Product.css";

export default function Product() {
  const { params } = useMatch("/product/:path");
  const { products } = useContext(AppContext);

  const product = products.find((product) => product.path === params.path);

  if (!product) {
    return <NotFound />;
  }

  return (
    <div className="Product">
      <h1>{product.name}</h1>
      <div className="display_product">
        <img src={product.picture} alt={product.name} />
        <div className="display_product_2">
        <p>
          We offer a wide range of high-quality sportswear created for an active
          lifestyle. Our sportswear combines stylish design, comfort and
          functionality to help you achieve the best results in training and
          feel confident throughout the day.
        </p>
        <span>{product.price} som</span>
        <AddToCart product={product} />
        </div>
        
      </div>
    </div>
  );
}
