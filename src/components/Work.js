import React from "react";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";

import Img1 from "../assets/Banner 1.jpg";
import Img2 from "../assets/Banner 2.jpg";
import Img3 from "../assets/SDN.jpg";
import Img4 from "../assets/Watercolor.jpg";
import Img5 from "../assets/Mockup.jpg";

const Work = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="work"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10 ">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
          >
            <div>
              <h2 className="h2 leading-tight text-accent">
                My Latest <br /> Work.
              </h2>
              <p className=" max-w-sm mb-6">
                Here are my past 6 months project showcase.
              </p>
              {/* <button className=" btn btn-sm">View All Projects</button> */}
            </div>
            <div className=" group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className=" group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className=" group-hover:scale-125 transition-all duration-500"
                src={Img1}
                alt=""
              />
              <div className=" absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className=" text-gradient">Graphics Design</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className=" text-3xl text-white">
                  Banner for Smoothie Company
                </span>
              </div>
            </div>

            <div className=" group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className=" group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className=" group-hover:scale-125 transition-all duration-500"
                src={Img4}
                alt=""
              />
              <div className=" absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className=" text-gradient">Graphics Design</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className=" text-3xl text-white">Watercolor Effect</span>
              </div>
            </div>

            <div className=" group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className=" group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className=" group-hover:scale-125 transition-all duration-500"
                src={Img5}
                alt=""
              />
              <div className=" absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className=" text-gradient">Graphics Design</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className=" text-3xl text-white">Mockup</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10"
          >
            <div className=" group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className=" group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className=" group-hover:scale-125 transition-all duration-500"
                src={Img2}
                alt=""
              />
              <div className=" absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className=" text-gradient">Graphics Design</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className=" text-3xl text-white">
                  Banner for Smoothie Company
                </span>
              </div>
            </div>
            <div className=" group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className=" group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className=" group-hover:scale-125 transition-all duration-500"
                src={Img3}
                alt=""
              />
              <div className=" absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className=" text-gradient">Logo Design</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className=" text-3xl text-white">SDN Solutions Logo</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
