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
        <NavLink to={"/category/" + category.path}>{category.name}</NavLink>
      </li>
    ));
  return (
    <div className="CategoryList">
      <ul>{output}</ul>
    </div>
  );
}
