import { useState } from "react";
import Drawer from "../Drawer/Drawer";
import NavToggle from "../NavToggle/NavToggle";
import Auth from "../Auth/Auth";
import CartLink from "../CartLink/CartLink";
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
        <div className="ggg">
        <Logo />
        <span>Sportwear Store</span>
        </div>
        <NavToggle callback={toggleDrawer} />
        <Drawer open={drawerOpen} toggle={toggleDrawer} />
        <Auth />
        <CartLink />
      </header>

      <main>{props.children}</main>

      <footer>FOOTER</footer>
    </div>
  );
}
