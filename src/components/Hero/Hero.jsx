import React from "react";
import BgImage from "../../assets/bg-slate.png";
import BlackCoffee from "../../assets/black.png";
import Navbar from "../Navbar/Navbar";
import {motion} from "framer-motion"
import {FaFacebookF,FaTwitter,FaInstagram} from "react-icons/fa";

const bgImage = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};
const Hero = () => {
  const [sidebar, setSidebar] = React.useState(false);
  return (
    <main style={bgImage}>
      <section className="relative min-h-[650px] w-full">
        <div className="container">
            <Navbar sidebar={sidebar} setSidebar={setSidebar}/>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 place-items-center min-h-[550px]">
            <div className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-24">
              <motion.h1 
              initial = {{opacity:0, y:-100}} 
              whileInView={{opacity:1,y:0}} 
              transition={{
                type:"spring",
                stiffness:100,
                damping:10,
                delay:1
              }}
              className="text-7xl font-bold leading-tight ml-20">
                Blvck Tumbler
              </motion.h1>
              <motion.div 
              initial = {{opacity:0, y:100}} 
              whileInView={{opacity:1,y:0}} 
              transition={{
                type:"spring",
                stiffness:100,
                damping:10,
                delay:1.2
              }}
              className="relative">
                <div className="relative z-10 space-y-6">
                  <h1 className="text-2xl">Black Lifestyle Lovers,</h1>
                  <h1 className="text-sm opacity-55 leading-loose">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Natus ab harum quaerat animi mollitia atque provident, ipsum
                    quisquam tenetur dolorem quo sed veniam saepe ut nulla
                    veritatis aspernatur qui corrupti.
                  </h1>
                </div>
                <div className="absolute -top-6 -left-10 w-[250px] h-[180px] bg-gray-700/25"></div>
              </motion.div>
            </div>
            <div className="relative">
              <motion.img
              initial = {{opacity:0, scale:0}} 
              whileInView={{opacity:1,scale:1}} 
              transition={{
                type:"spring",
                stiffness:100,
                damping:10,
                delay:0.4
              }}
                src={BlackCoffee}
                className="relative mt-12 z-40 h-[400px] md:h-[800px] img-shadow"
              />
              <motion.div 
              initial = {{opacity:0, y:100}} 
              whileInView={{opacity:1,y:0}} 
              transition={{
                type:"spring",
                stiffness:100,
                damping:10,
                delay:0.8
              }}
              
              className="h-[180px] w-[180px] absolute top-28 -right-16 border-primary border-[20px] rounded-full z-10"></motion.div>
            </div>
            <motion.div 
            initial={{opacity:0,x:-100}}
            whileInView={{opacity:1,x:0}} 
            transition={{
              type:"spring",
              stiffness:100,
              damping:10,
              delay:0.8
            }}
            className="absolute -top-1 left-[200px] z-[1]">
              <h1 className="text-[120px] scale-150 font-bold text-darkGray/40 leading-none">
                Blvck Tumbler
              </h1>
            </motion.div>
            <motion.div 
            initial = {{opacity:0, y:100}} 
            whileInView={{opacity:1,y:0}} 
            transition={{
              type:"spring",
              stiffness:100,
              damping:10,
              delay:1.2
            }}
            className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-24">
            <h1 className="opacity-0 text-7xl font-bold leading-tight ml-20">
                Blvck Tumbler
              </h1>
              <div className="relative">
                <div className="relative z-10 space-y-6">
                  <h1 className="text-2xl">Blvck Tumbler,</h1>
                  <h1 className="text-sm opacity-55 leading-loose">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Natus ab harum quaerat animi mollitia atque provident.
                  </h1>
                </div>
                <div className="absolute -top-4 right-10 w-[250px] h-[180px] bg-darkGray/50"></div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* </div> */}

            {/* sidebar menu section */}
            {sidebar && (
 <motion.div initial={{x:"100%"}} whileInView={{x:0}} className="absolute top-0 right-0 w-[140px] h-full bg-gradient-to-b from-primary/80 to-primaryDarl/80 backdrop-blur-sm z-10">
 <div className="w-full h-full flex justify-center items-center">
   <div className=" flex flex-col justify-center items-center gap-6 text-white">
     <div className="w-[1px] h-[70px] bg-white"> </div>
     {/* social icons */}
     <div className="inline-block p-2 cursor-pointer rounded-full border border-white"><FaFacebookF
     className="text-2xl"/></div>
     <div className="inline-block p-2 cursor-pointer rounded-full border border-white"><FaTwitter className="text-2xl"/></div>
     <div className="inline-block p-2 cursor-pointer rounded-full border border-white"><FaInstagram className="text-2xl"/></div>

     <div className="w-[1px] h-[70px] bg-white"> </div>
   </div>
 </div>
 </motion.div>
            )}
           
      </section>
    </main>
  );
};

export default Hero;
