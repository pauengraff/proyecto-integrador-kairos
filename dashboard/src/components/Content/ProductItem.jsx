import PropTypes from "prop-types";

function ProductItem({ name }) {
  return <div>{name}</div>;
}

ProductItem.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ProductItem;
