import { useState } from "react";
import Headphone1 from "../../assets/headphone.png";
import Headphone2 from "../../assets/headphone2.png";
import Headphone3 from "../../assets/headphone3.png";
import { FaWhatsapp } from "react-icons/fa";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import { UpdateFollower } from "react-mouse-follower";

const fadeUp = (delay) => {
  return {
    hidden: {
      opacity: 0,
      y: 100,
      scale: 0.5,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: delay,
        duration: 0.5,
        ease : easeInOut,
      },
    },
    exit :{
      opacity : 0,
      y : 50,
      scale : 0.5,
      transition : {
        duration : 0.2,
        ease : easeInOut
      },
    }
  };
};

const HeadphoneData = [
  {
    id: 1,
    image: Headphone1,
    title: "Headphone Wireless",
    price: "$188",
    description:
      "Wireless headphones provide tangle-free convenience with Bluetooth connectivity. Enjoy high-quality sound and mobility wherever you go.",
    modal: "Modal Brown",
    bgColor: "#8b5958",
  },
  {
    id: 2,
    image: Headphone2,
    title: "Headphone Wireless 2",
    price: "$188",
    description:
      "Wireless headphones provide tangle-free convenience with Bluetooth connectivity. Enjoy high-quality sound and mobility wherever you go.",
    modal: "Lime Green",
    bgColor: "#638153",
  },
  {
    id: 3,
    image: Headphone3,
    title: "Headphone Wireless 3",
    price: "$158",
    description:
      "Wireless headphones provide tangle-free convenience with Bluetooth connectivity. Enjoy high-quality sound and mobility wherever you go.",
    modal: "Ocean Blue",
    bgColor: "#5d818c",
  },
];
const Hero = () => {
  const [activeData, setActiveData] = useState(HeadphoneData[0]);
  const handleActiveData = (data) => {
    setActiveData(data);
  };
  return (
    <>
      <section className=" bg-brandDark text-white font-varela">
        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[560px]">
          {/* HeadPhone Info  */}
          <div className="flex flex-col justify-center  py-14 md:py-0 xl:max-w-[500px]">
            <div className="space-y-5 text-center md:text-left">
              <AnimatePresence mode="wait">
                <UpdateFollower
                mouseOptions={{
                  backgroundColor : "white",
                  zIndex : 9999,
                  followSpeed : 0.5,
                  rotate : -720,
                  mixBlendMode : "difference",
                  scale : 10,
                }}
                >
              <motion.h1 
              variants={fadeUp(0.2)}
              initial="hidden"
              animate="show"
              exit="exit"
              key={activeData.id}
              className="text-3xl lg:text-6xl font-bold font-varela">
                {activeData.title}
              </motion.h1>
                </UpdateFollower>
              </AnimatePresence>
              <AnimatePresence mode="wait">

              <motion.p
              variants={fadeUp(0.3)}
              initial="hidden"
              animate="show"
              exit="exit"
              className="text-sm leading-loose text-white/80">
                {activeData.description}
              </motion.p>
              </AnimatePresence>
              <AnimatePresence mode="wait">
              <UpdateFollower
               mouseOptions={{
                backgroundColor : activeData.bgColor,
                zIndex : 9999,
                followSpeed : 0.5,
                rotate : -720,
                scale : 6,
                backgroundElement : <div><img src={activeData.image} alt="" /></div>
              }} 
              >
              <motion.button
               variants={fadeUp(0.3)}
               initial="hidden"
               animate="show"
               exit="exit"
                style={{ backgroundColor: activeData.bgColor }}
                className="px-4 py-2 inline-block font-normal rounded-sm">
                Buy and Listen
              </motion.button>
              </UpdateFollower>
              </AnimatePresence>

              {/* HeadPhone List Separator */}
              <div className="flex items-center justify-center md:justify-start gap-4 !mt-10">
                <div className="w-20 h-[1px] bg-white"></div>
                <p className="uppercase  text-sm">Top Headphones for You</p>
                <div className="w-20 h-[1px] bg-white"></div>
              </div>

              {/* Headphone list Switcher  */}
              <div className="grid grid-cols-3 gap-10">
                {HeadphoneData.map((data) => {
                  return (
                    <UpdateFollower
                    mouseOptions={{
                      backgroundColor : data.bgColor,
                      zIndex : 9999,
                      followSpeed : 0.5,
                      rotate : -720,
                      scale : 5,
                      text : "View Details",
                      textFontSize: "3px"
                    }} key={data.id} >
                    <div
                      className="grid grid-cols-2 place-items-center cursor-pointer gap-3"
                      key={data.id}
                      onClick={() => handleActiveData(data)}
                    >
                      <div>
                        <img src={data.image} alt="" className="w-[200px]" />
                      </div>
                      <div className="space-y-2">
                        <p className="text-base font-bold">{data.price}</p>
                        <p className="text-sm font-normal text-nowrap">
                          {data.modal}
                        </p>
                      </div>
                    </div>
                    </UpdateFollower>
                  );
                })}
              </div>
            </div>
          </div>
          {/* Hero Image  */}
          <div className="flex flex-col justify-end items-center">
            <AnimatePresence mode="wait">
           <UpdateFollower    mouseOptions={{
                backgroundColor : activeData.bgColor,
                zIndex : 9999,
                followSpeed : 0.5,
                rotate : -720,
                scale : 6,
                backgroundElement : <div><img src={activeData.image} alt="" /></div>
              }}>

            <motion.img
            initial = {{opacity : 0 , scale : 0.9 , y: 100}}
            animate = {{opacity : 1 , scale : 1 , y:0}}
            exit={{
              opacity: 0,
              scale : 0.9,
              y : 100,
              transition: {
                duration: 0.2
              }
            }}
            transition={{duration : 0.5 , delay : 0.2, ease : easeInOut
            }}
              src={activeData.image}
              alt="image"
              className="w-[300px] md:w-[400px] lg;w-[550px]"
            />
           </UpdateFollower>
            </AnimatePresence>
          </div>
          {/* Whatsapp Icon  */}
          <div className="text-3xl text-white fixed bottom-10 right-10 hover:rotate-[360deg] duration-500 z-[9999] mix-blend-difference">
            <a href="">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
