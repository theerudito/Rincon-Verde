import facebook from "../image/facebook.svg";
import gmail from "../image/gmail.svg";
import instagram from "../image/instagram.svg";
import whatssap from "../image/whatsapp.svg";
import florAIzq from "../image/floAbajoIz.svg";
import florDerA from "../image/floAbajoDe.svg";

export const Footer = () => {
  return (
    <div>
      <h3 className="titleSocilaMedia">Nuestras Redes</h3>
      <div className="containerSocialMedia">
        <img src={instagram} alt="redes" className="logoSocialMedia" />
        <img src={whatssap} alt="redes" className="logoSocialMedia" />
        <img src={facebook} alt="redes" className="logoSocialMedia" />
        <img src={gmail} alt="redes" className="logoSocialMedia" />
      </div>

      <div className="containerRight">
        <img src={florAIzq} alt="img" className="florIzAb" />

        <h3 className="titleRight">
          Todos Los Derechos Reservados Rincon Verde 2022
        </h3>

        <img src={florDerA} alt="img" className="florDerAb" />
      </div>
    </div>
  );
};
