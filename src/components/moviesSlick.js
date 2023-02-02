import { Fragment } from "react";
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
const ReactSlick = ({ slickData }) => {
  return (
    <Fragment>
      <Slider {...settings}>
        {slickData &&
          slickData.length > 0 &&
          slickData.map((eachSlickImage, index) => {
            return (
              <div key={index} className="image-slick-div">
                <img src={eachSlickImage.Poster} alt={"slickImages"} ></img>
              </div>
            );
          })}
      </Slider>
    </Fragment>
  );
};
export default ReactSlick;
