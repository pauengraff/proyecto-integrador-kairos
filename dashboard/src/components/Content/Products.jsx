import ProductItem from "./ProductItem";
import { useEffect, useState } from "react";
import "./Products.css";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3008/api/products");
      const result = await response.json();
      setProducts(result.data);
    };
    fetchData();
  }, []);

  return (
    <section className=''>
      <h2 className=''>Productos</h2>
      <div className='product'>
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
      </div>
    </section>
  );
}

export default Products;
