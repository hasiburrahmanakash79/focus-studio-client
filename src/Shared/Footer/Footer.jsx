import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" p-10 bg-black text-white mt-5">
      <div className="grid grid-cols-2 md:grid-cols-4">
        <div>
          <img
            src="https://i.ibb.co/98q6Fq5/robot-logo-on-bar.png"
            className="w-20 mb-3"
            alt=""
          />
          <p>
          RoboZone Industries Ltd.
          </p>
          <div className="flex gap-3 mt-3">
            <a href="https://www.facebook.com/HasiburP.Akash/" target="_blank" rel="noreferrer"><FaFacebook></FaFacebook></a>
            <a href="https://www.instagram.com/hasiburrahmanakash79/" target="_blank" rel="noreferrer"><FaInstagram></FaInstagram></a>
            <a href="https://twitter.com/HasiburRakash79" target="_blank" rel="noreferrer"><FaTwitter></FaTwitter></a>
            <a href="https://www.youtube.com/@HasiburRahmanAkash/videos" target="_blank" rel="noreferrer"><FaYoutube></FaYoutube></a>
          </div>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <p className="link link-hover">Buy Toy</p>
          <p className="link link-hover">Sell Toy</p>
          <p className="link link-hover">Repair Toy</p>
          <p className="link link-hover">Advertisement</p>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <p className="link link-hover">Terms of use</p>
          <p className="link link-hover">Privacy policy</p>
          <p className="link link-hover">Cookie policy</p>
        </div>
        <div>
          <span className="footer-title">Address</span>
          <p className="link link-hover">Dhanmondi-32, Shongkor, Dhaka</p>
          <p className="link link-hover">+777 5654 6565</p>
          <p className="link link-hover">sportsAcademy@web.com</p>
          <p className="link link-hover">Copy right 2023</p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
