import Logo from "../image/rincon-verde-logo.svg";

export const Header = () => {
  return (
    <div className="Header">
      <img src={Logo} alt="logo" className="logo" />
      <ul>
        <li>Nosotros</li>

        <li>Inicio</li>
        <li>Servicios</li>

        <li>Contacto</li>
      </ul>
    </div>
  );
};
