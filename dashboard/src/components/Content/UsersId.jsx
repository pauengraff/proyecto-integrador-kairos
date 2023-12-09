import PropTypes from "prop-types";
import "./ProductItem.css";

function UsersId({ first_name, last_name, email }) {
  return (
    <article className="productitem">
      <div>{first_name}</div>
      <div>{last_name}</div>
      <div>{email}</div>
    </article>
  );
}

UsersId.propTypes = {
  first_name: PropTypes.string.isRequired,
};

export default UsersId;