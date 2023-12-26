import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import "./MenuCategoryLink.css";
import imageCategory1 from "../../assets/images/categories/dash-cat-1.png";
import imageCategory2 from "../../assets/images/categories/dash-cat-2.png";
import imageCategory3 from "../../assets/images/categories/dash-cat-3.png";
import imageCategory4 from "../../assets/images/categories/dash-cat-4.png";

const categoryImages = {
  Clasico: imageCategory1,
  Deportivo: imageCategory2,
  "Moda Alta Gama": imageCategory3,
  "Deporte Profesional": imageCategory4,
};

function MenuCategoryLinks({ id, name }) {
  const imageOnLink = categoryImages[name];
  return (
    <div>
      <Link to={`/products/category/${id}`}>
        <img src={imageOnLink} className='imgLink' />
      </Link>
    </div>
  );
}

MenuCategoryLinks.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default MenuCategoryLinks;
