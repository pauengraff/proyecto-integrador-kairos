import "./Buttons.css";
import { Link } from "react-router-dom";
import { apiUrl } from "../../config";
import { useEffect, useState } from "react";

function ProductsButton() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch(`${apiUrl}/api/products/count`);
        const result = await response.json();
        setProducts(result.data);
      };
      fetchData();
    }, []);
  
      return (
          <div>
          <article className='button-home'>
              <Link to={`/products`}>
                  <p>Productos</p>
                  {products.length}
              </Link>
          </article>
          </div>
      )
}

export default ProductsButton;