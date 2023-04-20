import Auth from "../Auth/Auth";
import CartLink from "../CartLink/CartLink";
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
        <CartLink />
        <Auth />
      </header>
      <main>{props.children}</main>
      <aside>
        <CategoryList />
      </aside>
      <footer>FOOTER</footer>
    </div>
  );
}
