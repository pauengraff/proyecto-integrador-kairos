import UsersId from "./UsersId";
import "./Users.css";

import { useEffect, useState } from "react";
import { apiUrl } from "../../config";

function Users() {
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
    <section className='users-container'>
      <div className='users'>
        {users.length === 0
          ? "Cargando..."
          : users.map((user) => (
              <UsersId
                key={user.id}
                first_name={user.first_name}
                last_name={user.last_name}
                email={user.email}
                rol={user.rol.name}
                avatar={user.avatar}
              />
            ))}
      </div>
    </section>
  );
}

export default Users;
