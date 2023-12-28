import "./Buttons.css";
import { Link } from "react-router-dom";
import { apiUrl } from "../../config";
import { useEffect, useState } from "react";

function CategoriesButton() {
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
          <div>
          <article className='button-home'>
              <Link to={`/products/category`}>
                  <p>Categorías</p>
                  {categories.length}
              </Link>
          </article>
          </div>
      )
}

export default CategoriesButton;