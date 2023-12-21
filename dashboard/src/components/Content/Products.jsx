import ProductItem from "./ProductItem";
import "./Products.css";
import { useEffect, useState } from "react";

import { apiUrl } from "../../config";

function Products() {
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
    <div className='product-container'>
      <article className='product'>
        {products.length === 0
          ? "Cargando..."
          : products.map((product) => (
              <ProductItem
                key={product.id}
                name={product.name}
                brand={product.brand.name}
                category={product.category.name}
                price={product.price}
                description={product.description}
                image={product.image}
              />
            ))}
      </article>
    </div>
  );
}

export default Products;
