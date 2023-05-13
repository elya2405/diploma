import CategoryList from "../components/CategoryList/CategoryList";
import "./Home.css";
import image from "../assets/header-background.png";
import image_for_cart_1 from "../assets/cart_1_img.jpg";
import image_for_cart_2 from "../assets/cart_2_img.jpg";
import image_for_cart_3 from "../assets/cart_3_img.jpg";
import image_for_home_1 from "../assets/image_for_home_1.png";

export default function Home() {
  return (
    <div className="Home">
      <img className="Image_for_header" src={image} />
      <div className="FirstSlogan">
        <h1>Sportswear that never goes out of fashion</h1>
      </div>
      <aside>
        <CategoryList />
      </aside>
      <section className="Section_1">
        <h1>Here you will find</h1>
        <div className="Carts">
          <div className="Cart_1">
            <h3>omfort</h3>
            <p>Comfort in every movement</p>
            <img src={image_for_cart_1} />
          </div>
          <div className="Cart_2">
            <h3>Style</h3>
            <p>A style that you will fall in love with</p>
            <img src={image_for_cart_2} />
          </div>
          <div className="Cart_3">
            <h3>Large selection</h3>
            <p>You will enjoy shopping with us.</p>
            <img src={image_for_cart_3} />
          </div>
        </div>
      </section>

      <section className="Store_name">
        <div className="Vertical_inscription">
          <p>S</p>
          <p>P</p>
          <p>O</p>
          <p>R</p>
          <p>T</p>
          <p>W</p>
          <p>E</p>
          <p>A</p>
          <p>R</p>
          <div className="Distance">
            <p>S</p>
            <p>T</p>
            <p>O</p>
            <p>R</p>
            <p>E</p>
          </div>
        </div>
      </section>
    </div>
  );
}
