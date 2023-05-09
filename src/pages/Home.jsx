import CategoryList from "../components/CategoryList/CategoryList";
import "./Home.css";

export default function Home() {
  return (
    <div className="Home">
      <img
        className="Image-for-header"
        src="/src/assets/header-background.png"
      />
      <div className="FirstSlogan">
        <h1>Sportswear that never goes out of fashion</h1>
      </div>
      <aside>
        <CategoryList />
      </aside>

      <div className="Cart1">
        <div className="CartContent">
          <h1>gyukfuk</h1>
        </div>
        <div className="CartImg">
          <img src="/src/assets/image-for-home1.jpg" />
        </div>
      </div>
    </div>
  );
}
