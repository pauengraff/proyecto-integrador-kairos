import { Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { apiUrl } from "../../config";
import MenuCategoryDetail from "./MenuCategoryDetail";
import MenuCategoryLinks from "./MenuCategoryLinks";
import "./MenuCategory.css";
import allProductsImage from "../../assets/images/categories/all-products.png";

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
      <nav>
        {categories.length === 0 ? (
          "Cargando..."
        ) : (
          <div className='link-container'>
            {categories.map((category) => (
              <MenuCategoryLinks key={category.id} id={category.id} name={category.name} />
            ))}

            <Link to='/products/list'>
              <h3>Todos los productos</h3>
              <img src={allProductsImage} className='all-products-image' alt='allProductsImage' />
            </Link>
          </div>
        )}
      </nav>

      <div>
        <Route path='/products/:id' component={MenuCategoryDetail} />
        <Route path='/products/list'></Route>
      </div>
    </section>
  );
}
export default MenuCategories;
