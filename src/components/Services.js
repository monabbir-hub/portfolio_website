import React from "react";

import { Link } from "react-scroll";

import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const services = [
  {
    name: "UI/UX Design",
    description:
      "In UI/UX design, I create visually appealing and user-friendly interfaces that meet the needs of your target audience. Using tools like Adobe XD and Figma, I design intuitive and efficient user experiences that enhance engagement and drive conversions.",
    link: "Learn More",
  },

  {
    name: "Front-End Development",
    description:
      "In front-end development, for your business, I use HTML, CSS, and JavaScript to create engaging and responsive websites and applications. I am specialized in using React and Flutter to build dynamic user interfaces that provide an optimal user experience across platforms.",
    link: "Learn More",
  },

  {
    name: "Digital Marketing",
    description:
      "In digital marketing, I create and implement data-driven strategies across various channels, including social media, email marketing, and search engine marketing. My expertise in analytics enables me to continually optimize campaigns for maximum ROI and help businesses grow and achieve their marketing goals.",
    link: "Learn More",
  },

  {
    name: "Graphics Design",
    description:
      "In graphics design, I specialize in creating stunning graphics, logos, and branding elements that effectively communicate your message to your target audience. Using Adobe Creative Suite, I craft visually appealing designs that capture your brand's essence and elevate your brand identity to the next level.",
    link: "Learn More",
  },
];

const Services = () => {
  return (
    <section
      className="min-h-[100vh] lg:min-h-[90vh] flex items-center"
      id="services"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            // className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">What I Do.</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              Creating the perfect environment to startup your business.
            </h3>
            <Link to="work" smooth={true} spy={true}>
              <button className="btn btn-sm">See my work</button>
            </Link>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className=" flex-1"
          >
            <div>
              {services.map((service, index) => {
                const { name, description, link } = service;

                return (
                  <div
                    className=" border-b border-white/20 h-[170px] mb-[30px] flex"
                    key={index}
                  >
                    <div className="max-w-[800px]">
                      <h4 className=" text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                    {/* <div className=" flex flex-col flex-1 items-end">
                      <a
                        href="#"
                        className=" btn w-9 h-9 mb-[42px] flex justify-center items-center"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a href="#" className=" text-gradient text-sm ">
                        {link}
                      </a>
                    </div> */}
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
