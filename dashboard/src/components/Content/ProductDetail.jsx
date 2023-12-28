import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { apiUrl } from "../../config";
import Product from "./Product";
import "./ProductDetail.css";

function ProductDetail({ match }) {
  const { id } = match.params;

  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`${apiUrl}/api/products/${id}`);
      const result = await response.json();
      setProduct(result.data);
    };
    fetchProduct();
  }, [id]);

  return (
    <div className='product-container'>
      <article className='product'>
        {Object.keys(product).length === 0 ? (
          "Cargando..."
        ) : (
          <div>
            <Product
              key={product.id}
              name={product.name}
              brand={product.brand.name}
              category={product.category.name}
              price={product.price}
              description={product.description}
              image={product.image}
            />
          </div>
        )}
      </article>
    </div>
  );
}

ProductDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default withRouter(ProductDetail);
