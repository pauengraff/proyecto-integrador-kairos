import PropTypes from "prop-types";

import "./UsersId.css";
import { apiUrl } from "../../config";

function UsersId({ first_name, last_name, email, avatar }) {
  const imageRoute = `${apiUrl}/images/users/`;

  return (
    <article className='userCard'>
      <div>{first_name}</div>
      <div>{last_name}</div>
      <div>{email}</div>
      <img src={imageRoute + avatar} alt='avatar' className='imgProduct' />
    </article>
  );
}

UsersId.propTypes = {
  first_name: PropTypes.string.isRequired,
};

export default UsersId;
