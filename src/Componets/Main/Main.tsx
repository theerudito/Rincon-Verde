import Logotipo from "../image/rincon-verde.svg";
import { Carrousel } from "./Carrousel";
import florIzq from "../image/floArribaIzIz.svg";
import florMIzq from "../image/floMedIz.svg";
import florDerUp from "../image/florArri.svg";
import florDerM from "../image/floMediDe.svg";
import emailjs from "emailjs-com";
import { useRef } from "react";

export const Main = () => {
  const formRef = useRef(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_y7p0vga",
        "template_yeehdte",
        e.target,
        "_oJVZlk-BbkB6rr33"
      )
      .then(
        (result) => {
          console.log(result.text);
          if (result.text === "OK") {
            alert("Mensaje enviado");
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div>
      <div className="imageContainer">
        <img src={florIzq} alt="img" className="florUpIz" />
        <img src={florMIzq} alt="img" className="florMeIz" />
        <img src={Logotipo} alt="logotipo" className="logotipo" />
        <img src={florDerUp} alt="img" className="florDerUp" />
        <img src={florDerM} alt="img" className="florDerM" />
      </div>

      <h3 id="nosotros">Nosotros</h3>
      <div className="contenedorNosotros">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
          molestiae minus vero sequi et possimus delectus sunt necessitatibus
          consectetur accusamus, blanditiis, consequuntur eveniet, nobis natus
          fugiat. Aspernatur corrupti necessitatibus a.
        </p>
      </div>

      <h3 id="servicios">Servicios</h3>
      <div className="list">
        <ul>
          <li>Hospedaje</li>
          <li>Pisina</li>
          <li>Canchas Deportivas</li>
          <li>Garaje</li>
        </ul>

        <ul>
          <li>Salon de Eventos</li>
          <li>Parqueadero</li>
          <li>Internet</li>
          <li>Naturaleza</li>
        </ul>
      </div>

      <h3 id="galeria">Galeria</h3>
      <div>
        <Carrousel />
      </div>

      <h3 id="contacto">Contacto</h3>
      <form className="formulario" ref={formRef} onSubmit={sendEmail}>
        <label>Nombre</label>
        <input type="text" name="nombre" />
        <label>Whatsaap</label>
        <input type="text" name="whatssap" />
        <label>Email</label>
        <input type="text" name="email" />
        <label>Mensaje</label>
        <textarea name="mensaje"></textarea>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};
