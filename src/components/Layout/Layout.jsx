import { useState } from "react";
import Drawer from "../Drawer/Drawer";
import NavToggle from "../NavToggle/NavToggle";
import Auth from "../Auth/Auth";
import CartLink from "../CartLink/CartLink";
import CategoryList from "../CategoryList/CategoryList";
import Nav from "../Nav/Nav";
import "./Layout.css";
import Logo from "./Logo/Logo";

export default function Layout(props) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  function toggleDrawer() {
    setDrawerOpen(!drawerOpen);
  }
  return (
    <div className="Layout">
      <header>
        <Nav />
        <Logo />
        <NavToggle callback={toggleDrawer} />
        <Drawer open={drawerOpen} toggle={toggleDrawer} />
        <Auth />
        <CartLink />
      </header>
      <aside>
        <CategoryList />
      </aside>
      <main>{props.children}</main>

      <footer>FOOTER</footer>
    </div>
  );
}
