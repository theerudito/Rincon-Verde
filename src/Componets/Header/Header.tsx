import Logo from "../image/rincon-verde-logo.svg";

export const Header = () => {
  const inicio = (e: any) => {
    //e.preventDefault();
    const element = document.getElementById("inicio");
    element?.scrollIntoView({ behavior: "smooth" });
    console.log("inicio");
  };

  const servicios = (e: any) => {
    e.preventDefault();
    const element = document.getElementById("servicios");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const galeria = (e: any) => {
    e.preventDefault();
    const element = document.getElementById("galeria");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const contacto = (e: any) => {
    e.preventDefault();
    const element = document.getElementById("contacto");
    element?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="Header">
      <img src={Logo} alt="logo" className="logo" onClick={inicio} id="inicio"/>
      <ul>
        <li onClick={inicio}>Inicio</li>
        <li onClick={servicios}> Servicios</li>
        <li onClick={galeria}>Galeria</li>
        <li onClick={contacto}>Contacto</li>
      </ul>
    </div>
  );
};
