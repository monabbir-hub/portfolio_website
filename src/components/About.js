import React from "react";

import { Link } from "react-scroll";

import CountUp from "react-countup";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="about"
      ref={ref}
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen ">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className=" flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"
          ></motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">About me</h2>
            <h3 className="h3 mb-4">
              I'm a Graphics designer, Front-end Developer and Digital Marketer
              with over 5 years of experience.
            </h3>
            <p className="mb-6">
              As a graphics designer, I create engaging designs that communicate
              the desired message. As a front-end developer, I build responsive
              websites that provide optimal user experience. As a digital
              marketer, I help businesses grow through data-driven strategies
              across various channels. My skills in graphics design, front-end
              development, and digital marketing make me a valuable asset for
              any business looking to succeed in the digital world.
            </p>
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className=" text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={5} duration={5} /> : null}
                </div>
                <div className=" font-primary texm-sm tracking-[2px]">
                  Years of <br /> Experience
                </div>
              </div>
              <div>
                <div className=" text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={500} duration={3} /> : null}
                  +
                </div>
                <div className=" font-primary texm-sm tracking-[2px]">
                  Projects <br /> completed
                </div>
              </div>
              <div>
                <div className=" text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={150} duration={3} /> : null}
                  +
                </div>
                <div className=" font-primary texm-sm tracking-[2px]">
                  Satisfied <br /> Clients
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              <Link to="contact" smooth={true} spy={true}>
                <button className="btn btn-lg">Contact me</button>
              </Link>
              <a href="#" className="text-gradient btn-link">
                My Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
