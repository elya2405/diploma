import image_for_about_header from "../assets/image_for_about_header.png";
import "./About.css";
import video_for_about_1 from "../assets/video_2023-05-22_20-20-57.mp4";
import about_cart_1 from "../assets/about_cart_1.jpg";
import about_cart_2 from "../assets/about_cart_2.jpg";
export default function About() {
  return (
    <div className="About">
      <img className="Image_for_about_header" src={image_for_about_header} />

      <section className="Welcome">
        <p>
          Welcome to the "Sportwear store" - your ideal destination for
          fashionable and functional sportswear. We are a premium store offering
          a wide selection of quality products for an active lifestyle.
        </p>
      </section>

      <section>
        <div className="Cart_about_1">
          <div className="Cart_about_1_img">
            <img src={about_cart_1} alt="" />
          </div>
          <div className="Cart_about_1_content">
            <p>
              We understand that everyone has unique needs and preferences, so
              we strive to provide a variety of styles, sizes and colors so that
              each client can find the perfect sportswear that reflects his
              personality and is suitable for his workouts.
            </p>
          </div>
        </div>

        <div className="Cart_about_2">
          <div className="Cart_about_2_content">
            <p>
              Our sellers are experts in the field of sports fashion and are
              always ready to help you with the selection of suitable products.
              We strive to create a friendly and inspiring atmosphere so that
              you can enjoy shopping in our store.
            </p>
          </div>
          <div className="Cart_about_1_img">
            <img src={about_cart_2} alt="" />
          </div>
        </div>
      </section>

      <div className="Video_for_about">
        <div>
          <video className="Video_media" autoPlay muted loop>
            <source src={video_for_about_1} type="video/mp4" />
          </video>
        </div>

        <div className="Welcomee">
          <p>
            At the "Sportwear store" we pay special attention to meeting the
            needs of our customers. We strive to provide a high level of
            service, fast delivery and quality assurance for all our products.
            Your satisfaction is our priority.
          </p>
        </div>
      </div>
    </div>
  );
}
