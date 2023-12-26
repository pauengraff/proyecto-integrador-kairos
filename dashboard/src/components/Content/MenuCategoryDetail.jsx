import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import { apiUrl } from "../../config";
import ProductItem from "./ProductItem";
import ProductDetail from "./ProductDetail";

import "./MenuCategoryDetail.css";

const MenuCategoryDetail = ({ match }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      let apiUrlToFetch = `${apiUrl}/api/products/category/${match.params.id}`;

      if (match.url === "/products/list") {
        apiUrlToFetch = `${apiUrl}/api/products/count`;
      }

      const response = await fetch(apiUrlToFetch);
      const result = await response.json();
      setProducts(result.data);
    };
    fetchProducts();
  }, [match.params.id, match.url]);

  return (
    <div className='product-container'>
      <article className='product'>
        {products.length === 0
          ? "Cargando..."
          : products.map((product) => (
              <ProductItem
                key={product.id}
                id={product.id}
                name={product.name}
                brand={product.brand.name}
                category={product.category.name}
                price={product.price}
                description={product.description}
                image={product.image}
              />
            ))}
      </article>
      <div>
        <Route path='productdetail/:id' component={ProductDetail} />
      </div>
    </div>
  );
};

MenuCategoryDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default MenuCategoryDetail;
