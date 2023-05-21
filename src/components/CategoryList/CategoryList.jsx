import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../../App";

import AddCategory from "../AddCategory/AddCategory";
import DeleteCategory from "../DeleteCategory/DeleteCategory";
import "./CategoryList.css";

export default function CategoryList() {
  const { categories } = useContext(AppContext);
  categories.sort((a, b) => b.weight - a.weight);

  const output = categories
    .sort((a, b) => a.weight - b.weight)
    .map((category) => (
      <li key={category.id}>
        <NavLink className="Category" to={"/category/" + category.path}>
          <img src={category.picture} alt={category.name} />
          <div className="Category_name">{category.name}</div>
        </NavLink>
        <DeleteCategory category={category} />
      </li>
    ));
  return (
    <div className="CategoryList">
      <h1>Categories</h1>
      <ul>{output}</ul>
      <AddCategory />
    </div>
  );
}
