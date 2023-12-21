import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

function MenuCategoryLinks({ id, name }) {
  return (
    <Link to={`/products/${id}`}>
      <div>{name}</div>
    </Link>
  );
}

MenuCategoryLinks.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default MenuCategoryLinks;
