import { Route, Link } from "react-router-dom";
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
        {categories.length === 0 ? (
          "Cargando..."
        ) : (
          <div>
            {categories.map((category) => (
              <MenuCategoryLinks key={category.id} id={category.id} name={category.name} />
            ))}
            <Link to='/products/list'>Todos los Productos</Link>
          </div>
        )}
      </div>

      <div>
        <Route path='/products/:id' component={MenuCategoryDetail} />
        <Route path='/products/list'></Route>
      </div>
    </section>
  );
}
export default MenuCategories;
