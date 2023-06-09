import { useContext } from "react";
import "./Auth.css";
import { AppContext } from "../../App";
import { logIn, logOut } from "../../firebase";
import { Link } from "react-router-dom";
import icon_1 from "/src/assets/sign-in-icon.png";
import icon_2 from "/src/assets/sign-out-icon.png";

export default function Auth() {
  const { user } = useContext(AppContext);

  // показывается гостю
  let output = (
    <span>
      <div className="SignIn">
        <img
          onClick={logIn}
          className="SignInIcon"
          src={icon_1}
          alt="sign in icon"
        />
        <a href="#" onClick={logIn}>
          Sign in
        </a>
      </div>
    </span>
  );
  // показывается пользователю
  if (user) {
    output = (
      <span>
        <div className="SignOut">
          <Link className="Auth_link" to="/orders">
            <img src={user.photoURL} alt={user.displayName} />
            <div className="User">{user.displayName}</div>
          </Link>
        </div>
      </span>
    );
  }

  return <div className="Auth">{output}</div>;
}
