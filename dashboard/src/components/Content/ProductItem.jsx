import PropTypes from "prop-types";
import { Link, Route } from "react-router-dom";
import { apiUrl } from "../../config";
import ProductDetail from "./ProductDetail";
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

          <div className='contenido'>
            <p>ID: {id}</p>
            <p>Marca: {brand}</p>
            <p>Modelo: {name}</p>
            <p>Categoria: {category}</p>
            <p>Precio:{price}</p>
            <p>Descripcion: {description}</p>
          </div>
        </Link>
      </div>
      <Route path='/productdetail/:id' component={ProductDetail} />
    </article>
  );
}

ProductItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default ProductItem;
