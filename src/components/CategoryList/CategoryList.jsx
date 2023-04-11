import { getDoc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { categoryCollection } from "../../firebase";
import "./CategoryList.css";

export default function CategoryList() {
  const [categories, setCategories] = useState([]);

  //выполнить эту функцию только один раз
  useEffect(() => {
    //получить категории из списка категорий
    getDocs(categoryCollection).then((snapshot) => {
      //категории будут хранится в snapshot.docs

      //создать массив для категорий
      const newCategories = [];
      //заполнить массив данными из списка категорий
      snapshot.docs.forEach((doc) => {
        const category = doc.data();
        category.id = doc.id;

        newCategories.push(category);
      });
      //задать новый массив как состояние компонента
      setCategories(newCategories);
    });
  }, []);

  const output = categories.map((category) => (
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
