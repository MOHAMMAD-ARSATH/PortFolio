import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import aboutData from "../data/about.json";

const About = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/experiences");
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white py-16 pt-20 md:pt-24">
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full px-4 md:px-0">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-500 border-gray-500">
            About
          </p>
        </div>

        <div className="mt-6">
          {aboutData.about.map((point, index) => (
            <p key={index} className="text-xl leading-relaxed mb-4">
              {point}
            </p>
          ))}
        </div>

        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
          className="mt-8"
        >
          <button
            onClick={handleNavigate}
            className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 flex items-center rounded-md 
                   hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/50 transition-transform duration-300"
          >
            View Experiences
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default About;