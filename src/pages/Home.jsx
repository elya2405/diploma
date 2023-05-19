import CategoryList from "../components/CategoryList/CategoryList";
import "./Home.css";
import image_for_home_header from "../assets/image_for_home_header.png";
import image_for_cart_1 from "../assets/cart_1_img.jpg";
import image_for_cart_2 from "../assets/cart_2_img.jpg";
import image_for_cart_3 from "../assets/cart_3_img.jpg";


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

      <section className="Store_name">
        <p>
          Only we give the lowest prices for our products, and if you find it
          even cheaper, we will lower the price even more.
        </p>
      </section>
    </div>
  );
}
