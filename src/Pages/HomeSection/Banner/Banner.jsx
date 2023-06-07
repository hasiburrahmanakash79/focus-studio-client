import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <div>
      <Carousel>
        <div>
          <img src="https://i.ibb.co/vhfVx9J/banner3.jpg" />
        </div>
        <div>
          <img src="https://i.ibb.co/prskTff/banner1.jpg" />
        </div>
        <div>
          <img src="https://i.ibb.co/smB36dc/banner5.jpg" />
        </div>
        <div>
          <img src="https://i.ibb.co/G7xcJxb/banner4.jpg" />
        </div>
        <div>
          <img src="https://i.ibb.co/brFRVNP/banner6.png" />
        </div>
        <div>
          <img src="https://i.ibb.co/0jGnRfZ/banner2.jpg" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;