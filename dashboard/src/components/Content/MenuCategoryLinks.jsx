import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

function MenuCategoryLinks({ id, name }) {
  return (
    <div>
      <Link to={`/products/${id}`}>
        <div>{name}</div>
      </Link>
    </div>
  );
}

MenuCategoryLinks.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default MenuCategoryLinks;
