import { useState } from "react";
import { PhotosCarrousel } from "../Helper/photos";

export const Carrousel = () => {
  const [current, setCurrent] = useState(0);
  const [carrousel, setCarrousel] = useState<any>(PhotosCarrousel[0]);

  const btnPrev = () => {
    if (current === 0) {
      setCurrent(PhotosCarrousel.length - 1);
      setCarrousel(PhotosCarrousel[PhotosCarrousel.length - 1]);
    } else {
      setCurrent(current - 1);
      setCarrousel(PhotosCarrousel[current - 1]);
    }
  };

  const btnNext = () => {
    if (current === PhotosCarrousel.length - 1) {
      setCurrent(0);
      setCarrousel(PhotosCarrousel[0]);
    } else {
      setCurrent(current + 1);
      setCarrousel(PhotosCarrousel[current + 1]);
    }
  };

  return (
    <div className="contenedorCarrousel">
      <i
        className="fa-solid fa-circle-left"
        id="left"
        onClick={() => btnPrev()}
      ></i>
      <i
        className="fa-solid fa-circle-right"
        id="right"
        onClick={() => btnNext()}
      ></i>

      <div className="contenedorImage1">
        <img
          src={
            carrousel.photo1 ||
            carrousel.photo7 ||
            carrousel.photo13 ||
            carrousel.photo19 ||
            carrousel.photo25
          }
          alt="galeria"
          className="image1"
        />
      </div>
      <div className="contenedorImage2">
        <img
          src={
            carrousel.photo2 ||
            carrousel.photo8 ||
            carrousel.photo14 ||
            carrousel.photo20 ||
            carrousel.photo26
          }
          alt="galeria"
          className="image2"
        />
      </div>
      <div className="contenedorImage3">
        <img
          src={
            carrousel.photo3 ||
            carrousel.photo9 ||
            carrousel.photo15 ||
            carrousel.photo21 ||
            carrousel.photo27
          }
          alt="galeria"
          className="image3"
        />
      </div>

      <div className="contenedorImage5">
        <img
          src={
            carrousel.photo5 ||
            carrousel.photo10 ||
            carrousel.photo16 ||
            carrousel.photo22 ||
            carrousel.photo28
          }
          alt="galeria"
          className="image5"
        />
      </div>

      <div className="contenedorImage6">
        <img
          src={
            carrousel.photo6 ||
            carrousel.photo11 ||
            carrousel.photo17 ||
            carrousel.photo23 ||
            carrousel.photo29
          }
          alt="galeria"
          className="image6"
        />
      </div>

      <div className="contenedorImage4">
        <img
          src={
            carrousel.photo4 ||
            carrousel.photo12 ||
            carrousel.photo15 ||
            carrousel.photo24 ||
            carrousel.photo30
          }
          alt="galeria"
          className="image4"
        />
      </div>
    </div>
  );
};

/* <div className="contenedorImage1">
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
</div> */
