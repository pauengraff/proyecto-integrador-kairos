import "./Contact.css";

export default function Contact() {
  return (
      <div className="form-body-contact">
        <div>
          <p className="text">Dejanos tu consulta</p>
          <p className="text-medium">Por favor completá con tus datos:</p>
        </div>

        <div className="form-contact">
          <input type="text" name="first_name" id="first_name" placeholder="Nombre"/>
        </div>

        <div className="form-contact">
          <input type="text" name="last_name" id="last_name" placeholder="Apellido"/>
        </div>

        <div className="form-contact">
          <input type="text" name="email" id="email" placeholder="Email"/>
        </div>

        <div className="form-contact">
          <input type="number" placeholder="Teléfono"/>
        </div>

        <div className="form-contact">
          <textarea type="text" placeholder="Escribí tu mensaje:"></textarea>
        </div>

        <button className='buttons' type="submit" id="contact-msg">Enviar</button>
      </div>
  );
}
