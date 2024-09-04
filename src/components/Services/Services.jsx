import {  motion} from "framer-motion";
import Icon1 from "../../assets/icons/obj1.png";
import Icon2 from "../../assets/icons/obj2.png";
import Icon3 from "../../assets/icons/obj3.png";
import { UpdateFollower } from "react-mouse-follower";


export const FadeUp = (delay) =>{
  return {
    hidden : {
      opacity : 0,
      y : 100,
    },
    show: {
      opacity : 1,
      y : 0,
      transition: {
        duration : 0.5,
        delay : delay,
      }
    },
  }
}

const ServiceData = [
  {
    id: 1,
    icon: Icon1,
    title: "Security",
    subtitle:
      "Our headphones ensure data privacy with encrypted Bluetooth connections, protecting against unauthorized access.",
    delay: 0.5,
  },
  {
    id: 2,
    icon: Icon2,
    title: "Gurantee",
    subtitle:
      "Our headphones offer a solid warranty, guaranteeing durability and customer satisfaction with every purchase and love it",
    delay: 0.8,
  },
  {
    id: 3,
    icon: Icon3,
    title: "Affordability",
    subtitle:
      "Experience premium sound quality at a great price, making high-end headphones accessible for everyone to enjoy.",
    delay: 1.1,
  },
];
const Services = () => {
  return (
    <>
      <section className="bg-gray-100 font-poppins py-8">
        <div className="container py-14">
          <motion.h1 
          variants={FadeUp(0.7)}
          initial = "hidden"
          whileInView="show"
          
          className="text-3xl font-bold text-center pb-8">Services</motion.h1>
       
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {ServiceData.map((item) => {
            return (
              <UpdateFollower
                key={item.id}
                mouseOptions={{
                  backgroundColor: "white",
                  zIndex: 9999,
                  followSpeed: 0.5,
                  scale: 5,
                  rotate: 720,
                  mixBlendMode: "darken",
                  backgroundElement: (
                    <div >
                      <img src={item.icon} alt="" />
                    </div>
                  ),
                }}
              >
                <motion.div 
                 variants={FadeUp(item.delay)}
                 initial = "hidden"
                 whileInView="show"
                className="flex flex-col items-center justify-center p-5 max-w-[300px] mx-auto shadow-lg rounded-xl bg-white ">
                  <img src={item.icon} alt="image" className="w-[100px] mb-4" />
                  <div className="text-center space-y-2">
                    <h1 className="text-2xl font-bold">{item.title}</h1>
                    <p className="text-center text-sm text-black">
                      {item.subtitle}
                    </p>
                  </div>
                </motion.div>
              </UpdateFollower>
            );
          })}
        </div>
        </div>
      </section>
    </>
  );
};

export default Services;
