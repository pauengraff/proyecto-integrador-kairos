import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { apiUrl } from "../../config";
import "./ProductItem.css";

function ProductItem({ id, name, brand, price, description, category, image }) {
  const imageRoute = `${apiUrl}/images/products/`;

  return (
    <article className='productitem'>
      <div className='card'>
        <Link to={`/productdetail/${id}`}>
          <figure>
            <img src={imageRoute + image} alt='imagenReloj' className='imgProduct' />
          </figure>
        </Link>

        <div className='contenido'>
          <p>Marca: {brand}</p>
          <p>Modelo: {name}</p>
          <p>Categoria: {category}</p>
          <p>Precio:{price}</p>
          <p>Descripcion: {description}</p>
        </div>
      </div>
    </article>
  );
}

ProductItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default ProductItem;
