import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

function MenuCategoryLinks({ name }) {
  return (
    <Link to={`/products/${name}`}>
      <div>{name}</div>
    </Link>
  );
}

MenuCategoryLinks.propTypes = {
  name: PropTypes.string.isRequired,
};

export default MenuCategoryLinks;
