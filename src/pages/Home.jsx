import CategoryList from "../components/CategoryList/CategoryList";
import "./Home.css";
import image_for_home_header from "../assets/image_for_home_header.png";
import image_for_cart_1 from "../assets/cart_1_img.jpg";
import image_for_cart_2 from "../assets/cart_2_img.jpg";
import image_for_cart_3 from "../assets/cart_3_img.jpg";
import image_for_cart_4 from "../assets/cart_4_img.jpg";
import video_for_home_1 from "../assets/video_2023-05-23_20-26-20.mp4";

export default function Home() {
  return (
    <div className="Home">
      <img className="Image_for_home_header" src={image_for_home_header} />

      <aside>
        <CategoryList />
      </aside>

      <section className="Section_1">
        <h1>Here you will find</h1>
        <div className="Carts">
          <div className="Cart_1">
            <img src={image_for_cart_1} />
            <div className="Cart_1_content">
              <h3>Comfort</h3>
              <p>Comfort in every movement</p>
            </div>
          </div>
          <div className="Cart_2">
            <img src={image_for_cart_2} />
            <div className="Cart_1_content">
              <h3>Style</h3>
              <p>A style that you will fall in love with</p>
            </div>
          </div>
          <div className="Cart_3">
            <img src={image_for_cart_3} />
            <div className="Cart_1_content">
              <h3>Large selection</h3>
              <p>You will enjoy shopping with us</p>
            </div>
          </div>
        </div>
      </section>

      <section className="Section_2">
        <p>
          Only we give the lowest prices for our products, and if you find it
          even cheaper, we will lower the price even more.
        </p>
      </section>

      <section className="Section_3">
        <div className="Cartt">
          <div className="Cart_4_content">
            <p>
              In our assortment there are clothes not only for adults, but also
              for children.
            </p>
            <p className="Indentation_for_p">
              Emphasize the individuality of your child with the help of
              sportswear.
            </p>
          </div>
          <div className="Cart_4_img">
            <img src={image_for_cart_4} alt="" />
          </div>
        </div>
      </section>

      <section>
        <div className="Video_for_home">
          <div>
            <video className="Video_media_home" autoPlay muted loop>
              <source src={video_for_home_1} type="video/mp4" />
            </video>
          </div>
        </div>
      </section>
    </div>
  );
}
