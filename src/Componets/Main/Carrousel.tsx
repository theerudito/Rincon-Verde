import Image1 from "../photosRinconVerde/1.jpg";
import Image2 from "../photosRinconVerde/2.jpg";
import Image3 from "../photosRinconVerde/3.jpg";
import Image4 from "../photosRinconVerde/4.jpg";
import Image5 from "../photosRinconVerde/5.jpg";
import Image6 from "../photosRinconVerde/6.jpg";

export const Carrousel = () => {
  return (
    <div className="contenedorCarrousel">
      <i className="fa-solid fa-circle-left" id="left"></i>
      <i className="fa-solid fa-circle-right" id="right"></i>
      <div className="contenedorImage1">
        <img src={Image1} alt="galeria" className="image1" />
      </div>
      <div className="contenedorImage2">
        <img src={Image2} alt="galeria" className="image2" />
      </div>
      <div className="contenedorImage3">
        <img src={Image3} alt="galeria" className="image3" />
      </div>

      <div className="contenedorImage5">
        <img src={Image4} alt="galeria" className="image5" />
      </div>

      <div className="contenedorImage6">
        <img src={Image5} alt="galeria" className="image6" />
      </div>

      <div className="contenedorImage4">
        <img src={Image3} alt="galeria" className="image4" />
      </div>
    </div>
  );
};
