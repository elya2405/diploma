import { getDoc, getDocs } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../../App";
import { categoryCollection } from "../../firebase";
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
          {category.name}
        </NavLink>
      </li>
    ));
  return (
    <div className="CategoryList">
      <h1>Category</h1>
      <ul>{output}</ul>
    </div>
  );
}
