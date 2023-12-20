import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

function MenuCategoryLink({ name }) {
  return (
    <Link to={`/products/${name}`}>
      <div>{name}</div>
    </Link>
  );
}

MenuCategoryLink.propTypes = {
  name: PropTypes.string.isRequired,
};

export default MenuCategoryLink;
