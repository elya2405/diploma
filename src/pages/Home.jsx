import CategoryList from "../components/CategoryList/CategoryList";

export default function Home() {
  return (
    <div className="Home">
      <aside>
        <CategoryList />
      </aside>
      <h1>Welcom to my Sportwear store.</h1>
      <p>This is my very aestetic shop.</p>
    </div>
  );
}
