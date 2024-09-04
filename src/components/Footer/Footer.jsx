import { FaFacebook, FaGoogle, FaInstagram, FaPhone, FaTelegram } from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import Cards from '../../assets/credit-cards.webp';
import {motion} from 'framer-motion';
const Footer = () => {
  return (
    <>
      <footer className="bg-primary text-white pt-12 pb-8">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Company details section  */}
            <motion.div 
            initial = {{opacity : 0 , y:100}}
            whileInView={{opacity : 1 , y : 0}}
            transition={{duration : 0.6 , delay : 0.2}}
            className="space-y-6">
              <h1 className="text-3xl font-bold uppercase">TuneTrove</h1>
              <p className="text-sm max-w-[300px]">
                Discover the latest technology in our headphones, offering
                superior sound quality and advanced noise-cancellation. Enjoy
                adaptive audio settings that automatically adjust to your
                environment for the perfect listening experience.
              </p>
              <div>
                <p className="flex items-center gap-2">
                  <FaPhone />
                  +91 (8866) 478-420
                </p>
                <p className="flex items-center gap-2 mt-2">
                  <FaMapLocation /> Bareilly , Uttar Pradesh
                </p>
              </div>
            </motion.div>
            {/* Quick Link Section  */}
            <motion.div
             initial = {{opacity : 0 , y:100}}
             whileInView={{opacity : 1 , y : 0}}
             transition={{duration : 0.6 , delay : 0.4}}
            className="space-y-6">
              <h1 className="font-3xl font-bold">Quick Links</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <ul className="space-y-2">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                  </ul>
                </div>
              </div>
            </motion.div>
            {/* Social Links Section  */}
            <motion.div 
             initial = {{opacity : 0 , y:100}}
             whileInView={{opacity : 1 , y : 0}}
             transition={{duration : 0.6 , delay : 0.6}}
            className="space-y-6">
             <h1 className="text-3xl font-bold">Follow Us</h1>
             <div className="flex items-center gap-3">
              <FaFacebook className="text-3xl hover:scale-105 duration-300"/>
              <FaInstagram className="text-3xl hover:scale-105 duration-300"/>
              <FaTelegram className="text-3xl hover:scale-105 duration-300"/>
              <FaGoogle className="text-3xl hover:scale-105 duration-300"/>
             </div>
             <div className="space-y-2">
              <p>Payment Methods</p>
              <img src={Cards} alt="" className="w-[80%]" />
             </div>
           </motion.div>
          </div>
            {/* CopyRight Section  */}
            <p className="text-white text-center mt-8 border-t-2 pt-8"> &copy; 2024. All Rights Reserved || Anuj Pratap Singh</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
