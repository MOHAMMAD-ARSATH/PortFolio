import { useState } from "react";

import Navbar from "../components/Navbar";
import Breadcrumbs from "../components/Breadcrumbs";

import experiences from "../data/experiences.json";
import skillsData from "../data/skills.json";

const Experiences = () => {
  const [openCard, setOpenCard] = useState(null);
  const lastExp = [...experiences].reverse();

  const breadcrumbsPaths = [
    { label: "Home", link: "/" },
    { label: "Experiences" },
  ];

  const toggleCard = (id) => {
    setOpenCard(openCard === id ? null : id);
  };

  return (
    <>
      <Navbar />
      <Breadcrumbs paths={breadcrumbsPaths} />
      <div className="bg-gradient-to-b from-black to-gray-800 w-full text-white py-12 min-h-screen">
        <div className="max-w-screen-lg mx-auto px-4">
          <p className="text-gray-300 mb-10 text-sm sm:text-base md:text-md leading-relaxed">
            Check out my experiences and internships right here.
          </p>

          <ul className="space-y-8">
            {lastExp.map((exp) => {
              const matchedSkills = exp.skillId
                .map((id) => skillsData.find((skill) => skill.skillId === id))
                .filter(Boolean);

              return (
                <li
                  key={exp.expId}
                  onClick={() => toggleCard(exp.expId)}
                  className="cursor-pointer flex flex-col gap-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-6 rounded-xl shadow-lg hover:shadow-cyan-100/30 hover:scale-[1.02] transition-transform duration-300 border border-gray-700"
                >
                  <div className="flex flex-col md:flex-row w-full justify-between gap-6">
                    <div className="flex gap-4 items-center md:items-start w-full md:w-1/2">
                      <img
                        src={`/${exp.logo}`}
                        alt={exp.companyname}
                        className="w-20 h-20 object-contain rounded-lg bg-white p-2 shadow-md"
                      />
                      <div>
                        <h2 className="text-xl font-bold text-white">
                          {exp.companyname}
                        </h2>
                        <p className="text-sm text-gray-400">{exp.location}</p>
                      </div>
                    </div>

                    <div className="flex flex-col items-start md:items-end w-full md:w-1/2">
                      <p className="text-lg font-semibold text-cyan-300">
                        {exp.role}
                      </p>
                      <p className="text-sm text-gray-400">{exp.period}</p>
                      <p className="text-sm text-gray-400">{exp.mode}</p>
                    </div>
                  </div>

                  {openCard === exp.expId && (
                    <div className="border-t border-gray-700 pt-4 space-y-6">
                      <div>
                        <h3 className="text-md font-semibold text-white mb-2">
                          Skills Worked:
                        </h3>
                        <div className="flex flex-wrap gap-4">
                          {matchedSkills.map((skill) => (
                            <div
                              key={skill.skillId}
                              className="flex flex-col items-center bg-gray-700/40 px-2 py-2 rounded-lg shadow hover:shadow-cyan-500/20"
                            >
                              <img
                                src={`/${skill.image}`}
                                alt={skill.name}
                                className="w-7 h-8 object-contain"
                              />
                              <p className="text-sm mt-1 text-gray-200">
                                {skill.name}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-md font-semibold text-white mb-2">
                          Tasks:
                        </h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-1">
                          {exp.tasks.map((task, idx) => (
                            <li key={idx}>{task}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Experiences;