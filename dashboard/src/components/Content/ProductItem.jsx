import PropTypes from "prop-types";
import "./ProductItem.css";

function ProductItem({ name, brand, description, category }) {
  return (
    <article className='productitem'>
      <div>{name}</div>
      <div>{brand}</div>
      <div>{category}</div>
      <div>{description}</div>
    </article>
  );
}

ProductItem.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ProductItem;
