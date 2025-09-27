import Navbar from "../components/Navbar";
import Breadcrumbs from "../components/Breadcrumbs";

import skillsData from "../data/skills.json";

const AllSkills = () => {
  const breadcrumbsPaths = [
    { label: "Home", link: "/" },
    { label: "All Skills" },
  ];

  return (
    <>
      <Navbar />
      <Breadcrumbs paths={breadcrumbsPaths} />
      <div className="bg-gradient-to-b from-gray-800 to-black min-h-screen text-white pt-14 pb-12">
        <div className="max-w-screen-lg mx-auto px-4">
          <p className="text-gray-300 mb-10 text-sm sm:text-base md:text-md leading-relaxed">
            Full list of technologies I’ve worked with.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {skillsData.map(({ skillId, skill, image }) => (
              <div
                key={skillId}
                className="shadow-md hover:scale-105 duration-500 rounded-lg py-4 bg-white/4"
              >
                <img
                  src={image}
                  alt={skill}
                  className="w-24 h-32 object-contain mx-auto"
                />
                <p className="mt-4 font-bold text-lg">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllSkills;