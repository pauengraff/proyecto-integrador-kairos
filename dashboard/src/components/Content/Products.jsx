import ProductItem from "./ProductItem";
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
    <section className='section'>
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
                  description={product.description}
                  image={product.image}
                />
              ))}
        </article>
      </div>
    </section>
  );
}

export default Products;
