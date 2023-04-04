import {NavLink} from "react-router-dom"

export default function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
      <p>this is my diploma</p>

      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/">About</NavLink>
      </nav>
    </div>
  );
}
