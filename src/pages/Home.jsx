import CategoryList from "../components/CategoryList/CategoryList";
import "./Home.css";
import image from "../assets/header-background.png";
import image_for_cart_1 from "../assets/cart_1_img.jpg";
import image_for_cart_2 from "../assets/cart_2_img.jpg";
import image_for_cart_3 from "../assets/cart_3_img.jpg";

export default function Home() {
  return (
    <div className="Home">
      <img className="Image-for-header" src={image} />
      <div className="FirstSlogan">
        <h1>Sportswear that never goes out of fashion</h1>
      </div>
      <aside>
        <CategoryList />
      </aside>
      <h1>Here you will find</h1>
      <div className="Carts">
        <div className="Cart_1">
          <h3>comfort</h3>
          <img src={image_for_cart_1} />
        </div>
        <div className="Cart_2">
          <h3>style</h3>
          <img src={image_for_cart_2} />
        </div>
        <div className="Cart_3">
          <h3>large selection</h3>
          <img src={image_for_cart_3} />
        </div>
      </div>
    </div>
  );
}
