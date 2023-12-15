import PropTypes from "prop-types";
import "./ProductItem.css";
import { apiUrl } from "../../config";

function ProductItem({ name, brand, description, category, image }) {
  const imageRoute = `${apiUrl}/images/products/`;

  return (
    <article className='productitem'>
      <div>{name}</div>
      <div>{brand}</div>
      <div>{category}</div>
      <div>{description}</div>
      <img src={imageRoute + image} alt='imagenReloj' className='imgProduct' />
    </article>
  );
}

ProductItem.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ProductItem;
