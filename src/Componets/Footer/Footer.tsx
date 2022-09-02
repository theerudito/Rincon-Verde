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
        <a href="https://www.instagram.com/quinta_rinconverde/" target="black">
          <img src={instagram} alt="redes" className="logoSocialMedia" />
        </a>

        <a
          href="https://api.whatsapp.com/send/?phone=593993803604&text&type=phone_number&app_absent=0"
          target="black"
        >
          <img src={whatssap} alt="redes" className="logoSocialMedia" />
        </a>
        <a href="https://www.facebook.com/QuintaRinconVerde" target="black">
          <img src={facebook} alt="redes" className="logoSocialMedia" />
        </a>
        <a href="mailto:rinconverdetoachi@gmail.com" target="black">
          <img src={gmail} alt="redes" className="logoSocialMedia" />
        </a>
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
