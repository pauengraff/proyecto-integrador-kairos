import UsersId from "./UsersId";
import { Component } from "react";

class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3008/api/user")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        const user = json.data;
        console.log("user", user);
        this.setState({
          user: user,
        });
      });
  }

  render() {
    return (
      <section className=''>
        <h2 className=''>Usuarios</h2>
        <div className=''>
          {this.state.user.length === 0
            ? "Cargando..."
            : this.state.user.map((user) => (
                <UsersId key={user.id} first_name={user.first_name} last_name={user.last_name} email={user.email} />
              ))}
        </div>
      </section>
    );
  }
}

export default Users;
