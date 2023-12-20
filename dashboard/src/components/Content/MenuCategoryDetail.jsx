import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const MenuCategoryDetail = ({ match }) => {
  const [name, setName] = useState(match.params.name);

  useEffect(() => {
    const { name: newName } = match.params;
    if (name !== newName) {
      setName(newName);
    }
  }, [match.params, name]);
  return <h3>{name}</h3>;
};

MenuCategoryDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default MenuCategoryDetail;
