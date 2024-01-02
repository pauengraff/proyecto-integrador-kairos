import "../../components/Home.css";
import { Link } from "react-router-dom";
import { apiUrl } from "../../config";
import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";

function NewProducts() {
  const [NewProducts, setNewProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${apiUrl}/api/products/count`);
      const result = await response.json();

      const allProducts = result.data;

      const latestProducts = allProducts.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
      console.log("latestProducts", latestProducts);
      const lastThreeProducts = latestProducts.slice(0, 3);
      console.log("lastThreeProducts", lastThreeProducts);

      setNewProducts(lastThreeProducts);
    };
    fetchData();
  }, []);

  return (
    <div className='ml'>
      <h2>Novedades</h2>

      {NewProducts.length === 0
        ? "Cargando..."
        : NewProducts.map((product) => (
            <ProductItem
              key={product.id}
              id={product.id}
              name={product.name}
              brand={product.brand.name}
              category={product.category.name}
              price={product.price}
              date={product.created_at}
              description={product.description}
              image={product.image}
            />
          ))}
    </div>
  );
}
export default NewProducts;
