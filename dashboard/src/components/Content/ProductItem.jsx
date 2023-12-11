import PropTypes from "prop-types";
import "./ProductItem.css";

function ProductItem({ name, brand, description, category, image }) {
  return (
    <article className='productitem'>
      <div>{name}</div>
      <div>{brand}</div>
      <div>{category}</div>
      <div>{description}</div>
      <div>{image}</div>
    </article>
  );
}

ProductItem.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ProductItem;
