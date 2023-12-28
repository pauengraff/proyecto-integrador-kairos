import "../../components/Home.css";
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
          <div className='button-home'>
          <article className='button-item'>
              <Link to={`/products/list`}>
                  <p className="title">Productos</p>
                  <p className="number">{products.length}</p>
              </Link>
          </article>
          </div>
      )
}

export default ProductsButton;