import "./Login.css";

export default function Login() {
  return (
      <div className='form-body'>
        <div>
          <p className='text'>Bienvenido/a</p>
          <p className='text-medium'>Por favor ingresá con tus datos:</p>
        </div>
        <div className='form-login'>
          <input type='text' name='email' id='email' placeholder='Usuario/a' />
        </div>

        <div className='form-login'>
          <input type='password' name='password' id='password' placeholder='Contraseña' />
        </div>

        <button className='buttons' type='submit'>
        Ingresar
      </button>
      </div>
  );
}
