import CategoryList from "../CategoryList/CategoryList";
import Nav from "../Nav/Nav";
import "./Layout.css";
import Logo from "./Logo/Logo";

export default function Layout(props) {
  return (
    <div className="Layout">
      <header>
        <Nav />
        <Logo />
      </header>
      <main>{props.children}</main>
      <aside>
        <CategoryList />
      </aside>
      <footer>FOOTER</footer>
    </div>
  );
}
