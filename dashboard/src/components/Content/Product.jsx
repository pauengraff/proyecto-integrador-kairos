import PropTypes from "prop-types";
import { apiUrl } from "../../config";
import "./Product.css";

function Product({ name, brand, price, description, category, image }) {
  const imageRoute = `${apiUrl}/images/products/`;

  return (
    <article className='article-container'>
      <figure className='image-container '>
        <img src={imageRoute + image} alt='imagenReloj' className='image' />
      </figure>

      <div className='text-container'>
        <h2>{brand}</h2>
        <p>Modelo: {name}</p>
        <p>Precio: {price}</p>
        <p>Descripción: {description}</p>
        <button className="button-productCard">Editar</button>
        <button className="button-productCard">Eliminar</button>
      </div>
    </article>
  );
}

Product.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default Product;
