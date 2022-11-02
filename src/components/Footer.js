import '../css/style.css';
import { FaFacebook, FaInstagram, FaPaperPlane, FaWhatsapp, } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import {MdGpsFixed} from 'react-icons/md';
const Footer = () => {
    return (
      <footer>
        <div className="row">
            <div className="col">
                <p className="footer_about">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore harum molestias nesciunt, 
                    doloremque magni aspernatur iste blanditiis, fugiat quaerat accusamus ut, vero tempore. 
                    Fugiat, illum!
                </p>
                <p><BsTelephone/> +(56) 999999999</p>
             	<p><HiOutlineMail/> melany.arbieto@tecsup.edu.pe</p>
             	<p><MdGpsFixed/> Av. Los claveles</p>
            </div>

            <div className="col">
                <h3>Correo Electrónico</h3>
                <form>
                    <FaPaperPlane className="icon" name="mail"/>
                    <input type="email" placeholder="Ingresar email"/>
                    <button type="submit"><FaArrowRight class="icon_right" name="arrow-round-forward"></FaArrowRight></button>
                </form>
                <div class="social_icons">
                    <FaFacebook className="social_icon" name="logo-facebook"></FaFacebook>
                    <FaInstagram className="social_icon" name="logo-whatsapp"></FaInstagram>
                    <FaWhatsapp className="social_icon" name="logo-twitter"></FaWhatsapp>
                </div>
            </div>
        </div>

        <p class="copyright">Tecsup Ⓒ 2022 - All Rights Reserved</p>
      </footer>
    );
   };
    
   export default Footer;