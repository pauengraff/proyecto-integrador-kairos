import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import imageCategory1 from "../../assets/images/categories/dash-cat-1.png";
import imageCategory2 from "../../assets/images/categories/dash-cat-2.png";
import imageCategory3 from "../../assets/images/categories/dash-cat-3.png";
import imageCategory4 from "../../assets/images/categories/dash-cat-4.png";

const categoryImages = {
  Category1: imageCategory1,
  Category2: imageCategory2,
  Category3: imageCategory3,
  Category4: imageCategory4,
};

function MenuCategoryLinks({ id, name }) {
  const imageOnLink = categoryImages[name];
  return (
    <div>
      <Link to={`/products/${id}`}>
        <img src={imageOnLink} alt={name} />
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
