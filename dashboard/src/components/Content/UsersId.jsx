import PropTypes from "prop-types";
import EmailIcon from '@mui/icons-material/Email';
import "./UsersId.css";
import { apiUrl } from "../../config";

function UsersId({ first_name, last_name, email, rol, avatar }) {
  const imageRoute = `${apiUrl}/images/users/`;

  return (
    <article className='userCard'>
      <img src={imageRoute + avatar} alt='avatar' className='imgUser' />
      <div className="userInfo">
      <div className="userName">{first_name}</div>
      <div className="userLastName">{last_name}</div>
      <div className="userEmail">
        <EmailIcon fontSize="small"/>
        {email}</div>
      <button className="buttonDeleteUser">Eliminar</button>
      </div>
    </article>
  );
}

UsersId.propTypes = {
  first_name: PropTypes.string.isRequired,
};

export default UsersId;
