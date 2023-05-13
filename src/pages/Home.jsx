import CategoryList from "../components/CategoryList/CategoryList";
import "./Home.css";
import image from "../assets/header-background.png";

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

      <div className="Cart1">
        <div className="CartContent">
          <h1>Your body deserves to look good</h1>
        </div>
        <div className="CartImg">
          <img src="/src/assets/image-for-home1.png" />
        </div>
      </div>
    </div>
  );
}
