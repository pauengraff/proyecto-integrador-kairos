import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./ProductDetail.css";
import { apiUrl } from "../../config";

function ProductDetail({ match }) {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`${apiUrl}/api/products/${match.params.id}`);
      const result = await response.json();
      setProduct(result.data);
    };
    fetchProduct();
  }, [match.params.id]);

  console.log("ProductDetail Rendered!", match.params.id, product);

  return (
    <div className='product-container'>
      <article className='product'>
        {product.length === 0
          ? "Cargando..."
          : product.map((product) => (
              <div>
                <p>Modelo={product.name},</p>
                <p>Marca={product.brand.name}</p>
                <p>Categoria={product.category.name}</p>
                <p>Precio={product.price}</p>
                <p>Descripcion={product.description}</p>
                <p>image={product.image}</p>
              </div>
            ))}
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

export default ProductDetail;
