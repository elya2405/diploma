import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Delivery from "./pages/Delivery";
import Category from "./pages/Category";
import { createContext, useEffect, useState } from "react";
import { getDocs } from "firebase/firestore";
import { categoryCollection, productCollection } from "./firebase";

export const AppContext = createContext({
  categories: [],
  products: [],

  //корзина
  cart: {},
  setCart: () => {},
});

export default function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  //корзина
  const [cart, setCart] = useState({});
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
    getDocs(productCollection).then((snapshot) => {
      //продукты будут хранится в snapshot.docs

      //создать массив для продуктов
      const newProducts = [];
      //заполнить массив данными из списка продуктов
      snapshot.docs.forEach((doc) => {
        const product = doc.data();
        product.id = doc.id;

        newProducts.push(product);
      });
      //задать новый массив как состояние компонента
      setProducts(newProducts);
    });
  }, []);

  return (
    <div className="App">
      <AppContext.Provider value={{ categories, products, cart, setCart }}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/category/:path" element={<Category />} />
          </Routes>
        </Layout>
      </AppContext.Provider>
    </div>
  );
}
