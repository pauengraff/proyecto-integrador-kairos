import "./Buttons.css";
import { Link } from "react-router-dom";
import { apiUrl } from "../../config";
import { useEffect, useState } from "react";

function UsersButton (){
    const [users, setProducts] = useState([]);

        useEffect(() => {
          const fetchData = async () => {
            const response = await fetch(`${apiUrl}/api/user/count`);
            const result = await response.json();
            setProducts(result.data);
          };
          fetchData();
        }, []);
   
    return (
        <div>
        <article className='button-home'>
            <Link to={`/panel`}>
                <p>Usuarios/as</p>
                {users.length}
            </Link>
        </article>
        </div>
    )
}

export default UsersButton;