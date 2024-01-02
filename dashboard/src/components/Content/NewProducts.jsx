import "../../components/Home.css";
import { Link } from "react-router-dom";
import { apiUrl } from "../../config";
import { useEffect, useState } from "react";

function NewProducts() {
  const [NewProducts, setNewProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${apiUrl}/api/products/count`);
      const result = await response.json();

      const allProducts = result.data;

      const latestProducts = allProducts.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
      const lastThreeProducts = latestProducts.slice(0, 3);

      setNewProducts(lastThreeProducts);
    };
    fetchData();
  }, []);

  return <div>Ultimos Productos</div>;
}

export default NewProducts;
