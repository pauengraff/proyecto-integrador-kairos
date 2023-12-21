import { Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { apiUrl } from "../../config";
import MenuCategoryDetail from "./MenuCategoryDetail";
import MenuCategoryLinks from "./MenuCategoryLinks";
import "./MenuCategory.css";

function MenuCategories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${apiUrl}/api/products/category`);
      const result = await response.json();
      setCategories(result.data);
    };
    fetchData();
  }, []);

  return (
    <section className='section'>
      <h2>Elegi tu Categoria</h2>
      <div>
        {categories.length === 0
          ? "Cargando..."
          : categories.map((category) => <MenuCategoryLinks key={category.id} name={category.name} />)}
      </div>
      <div>
        <h2>Rutas</h2>
        <Route path='/products/:name' component={MenuCategoryDetail} />
      </div>
    </section>
  );
}
export default MenuCategories;
