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
<<<<<<< HEAD
        <h4>Modelo: {name}</h4>
        <p>Categoria: {category}</p>
        <p>Precio:{price}</p>
        <h4>Descripcion</h4>
        <p>{description}</p>
=======
        <p>Modelo: {name}</p>
        <p>Precio: {price}</p>
        <p>Descripción: {description}</p>
        <button className='button-productCard'>Editar</button>
        <button className='button-productCard'>Eliminar</button>
>>>>>>> 276ef179491f813cf7da1a7c1985c0eecb4f37b0
      </div>
    </article>
  );
}

Product.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default Product;
