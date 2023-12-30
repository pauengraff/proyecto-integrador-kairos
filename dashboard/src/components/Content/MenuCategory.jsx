import { Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { apiUrl } from "../../config";
import MenuCategoryLinks from "./MenuCategoryLinks";
import "./MenuCategory.css";
import ButtonAllProducts from "../../assets/images/button-all-products.png";


function MenuCategory() {
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
    <section className='sectionMenuCategory'>
      <nav>
        {categories.length === 0 ? (
          "Cargando..."
        ) : (
          <div className='link-container'>
            {categories.map((category) => (
              <MenuCategoryLinks key={category.id} id={category.id} name={category.name} />
            ))}

            <Link to='/products/list'>
            <img src={ButtonAllProducts} className='button-all-products' />
            </Link>
          </div>
        )}
      </nav>
    </section>
  );
}
export default MenuCategory;
