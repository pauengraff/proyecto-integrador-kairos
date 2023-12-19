import PropTypes from "prop-types";
import "./ProductItem.css";
import { apiUrl } from "../../config";

function ProductItem({ name, brand, description, category, image }) {
  const imageRoute = `${apiUrl}/images/products/`;

  return (
    <article className='productitem'>
      <div className='card'>
        <figure>
          <img src={imageRoute + image} alt='imagenReloj' className='imgProduct' />
        </figure>
        <div className='contenido'>
          <p>Marca: {brand}</p>
          <p>Modelo: {name}</p>
          <p>Categoria: {category}</p>
          <p>Descripcion: {description}</p>
        </div>
      </div>
    </article>
  );
}

ProductItem.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ProductItem;
