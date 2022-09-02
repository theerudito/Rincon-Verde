import Logotipo from "../image/rincon-verde.svg";
import { Carrousel } from "./Carrousel";
import florIzq from "../image/floArribaIzIz.svg";
import florMIzq from "../image/floMedIz.svg";
import florDerUp from "../image/florArri.svg";
import florDerM from "../image/floMediDe.svg";

export const Main = () => {
  return (
    <div>
      <div className="imageContainer">
        <img src={florIzq} alt="img" className="florUpIz" />
        <img src={florMIzq} alt="img" className="florMeIz" />
        <img src={Logotipo} alt="logotipo" className="logotipo" />
        <img src={florDerUp} alt="img" className="florDerUp" />
        <img src={florDerM} alt="img" className="florDerM" />
      </div>

      <h3>Nosotros</h3>
      <div className="contenedorNosotros">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
          molestiae minus vero sequi et possimus delectus sunt necessitatibus
          consectetur accusamus, blanditiis, consequuntur eveniet, nobis natus
          fugiat. Aspernatur corrupti necessitatibus a.
        </p>
      </div>

      <h3>Servicios</h3>
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

      <h3>Galeria</h3>
      <div>
        <Carrousel />
      </div>

      <h3>Contacto</h3>
      <form className="formulario">
        <label>Nombre</label>
        <input type="text" />
        
        <label>Whatsaap</label>
        <input type="text" />
        <label>Email</label>
        <input type="text" />
        <label>Mensaje</label>
        <textarea></textarea>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};
