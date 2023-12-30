import PropTypes from "prop-types";

import "./UsersId.css";
import { apiUrl } from "../../config";

function UsersId({ first_name, last_name, email, rol, avatar }) {
  const imageRoute = `${apiUrl}/images/users/`;

  return (
    <article className='userCard'>
      <img src={imageRoute + avatar} alt='avatar' className='imgProduct' />
      <div>
        <div>Nombre: {first_name}</div>
        <div>Apellido: {last_name}</div>
        <div>Email: {email}</div>
        <div>Categoria: {rol}</div>
      </div>
    </article>
  );
}

UsersId.propTypes = {
  first_name: PropTypes.string.isRequired,
};

export default UsersId;
