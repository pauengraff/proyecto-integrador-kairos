import "../../components/Home.css";
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
        <div className='button-home'>
        <article className='button-item'>
            <Link to={`/panel`}>
                <p className="title">Usuarios/as</p>
                <p className="number">{users.length}</p>
            </Link>
        </article>
        </div>
    )
}

export default UsersButton;