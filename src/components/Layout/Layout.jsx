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
        <Logo />
        <NavToggle callback={toggleDrawer} />
        <Drawer open={drawerOpen} toggle={toggleDrawer} />
        <div className="Together">
          <Auth />
          <CartLink />
        </div>
      </header>
      <img
        className="Image-for-header"
        src="/src/assets/header-background2.png"
      />

      <main>{props.children}</main>

      <footer>FOOTER</footer>
    </div>
  );
}
