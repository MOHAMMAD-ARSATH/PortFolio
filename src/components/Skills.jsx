import { useNavigate } from "react-router-dom";

import skillsData from "../data/skills.json";

const Skills = () => {
  const navigate = useNavigate();
  const visibleSkills = skillsData.slice(0, 8);

  return (
    <div className="bg-gradient-to-b from-gray-800 to-black w-full pt-16 text-white">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full">
        <div className="flex justify-between items-center pb-6">
          <div>
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Skills
            </p>
            <p className="pt-2 text-gray-300 text-sm md:text-base">
              Technologies I've worked with
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {visibleSkills.map(({ skillId, skill, image }) => (
            <div
              key={skillId}
              className="shadow-md hover:scale-105 duration-500 rounded-lg py-4"
            >
              <img
                src={image}
                alt={skill}
                className="w-24 h-32 object-contain mx-auto"
              />
              <p className={`mt-4 font-bold text-lg`}>{skill}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center my-10">
          <button
            onClick={() => navigate("/allskills")}
            className="px-4 sm:px-6 py-2 sm:py-3 border border-white text-white rounded-md 
               text-sm sm:text-base font-medium
               hover:bg-white hover:text-black hover:scale-105 
               transition duration-300 ease-in-out"
          >
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Skills;