import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <div>
      <Carousel>
        <div>
          <img src="https://i.ibb.co/TTFK90r/01.jpg" />
        </div>
        <div>
          <img src="https://i.ibb.co/Z8qr5fx/02.jpg" />
        </div>
        <div>
          <img src="https://i.ibb.co/31D7zbn/03.png" />
        </div>
        <div>
          <img src="https://i.ibb.co/Yhq5Y8k/04.jpg" />
        </div>
        <div>
          <img src="https://i.ibb.co/bPJX9xL/05.png" />
        </div>
        <div>
          <img src="https://i.ibb.co/frzkYTG/06.png" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;