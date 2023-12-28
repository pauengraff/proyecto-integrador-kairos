import PropTypes from "prop-types";
import { apiUrl } from "../../config";
import "./Product.css";

function Product({ name, brand, price, description, category, image }) {
  const imageRoute = `${apiUrl}/images/products/`;

  return (
    <article className=''>
      <figure>
        <img src={imageRoute + image} alt='imagenReloj' className='image' />
      </figure>

      <div className=''>
        <p>Marca: {brand}</p>
        <p>Modelo: {name}</p>
        <p>Categoria: {category}</p>
        <p>Precio:{price}</p>
        <p>Descripcion: {description}</p>
      </div>
    </article>
  );
}

Product.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default Product;
