import "../../components/Home.css";
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
          <div className='button-home'> 
          <article className='button-item'>
              <Link to={`/products/category`}>
                  <p className="title">Categorías</p>
                  <p className="number">{categories.length}</p>
              </Link>
          </article>
          </div>
      )
}

export default CategoriesButton;