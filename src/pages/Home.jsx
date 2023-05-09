import CategoryList from "../components/CategoryList/CategoryList";

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
      <h1>Welcom to my Sportwear store.</h1>
      <p>This is my very aestetic shop.</p>
    </div>
  );
}
