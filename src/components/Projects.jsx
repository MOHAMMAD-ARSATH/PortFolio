import { useNavigate } from "react-router-dom";
import { FaFolderOpen } from "react-icons/fa";

import projects from "../data/projects.json";

const Projects = () => {
  const navigate = useNavigate();
  const lastSixProjects = projects.slice(-6).reverse();

  return (
    <div className="bg-gradient-to-b from-black to-gray-800 w-full text-white py-20 scroll-mt-24">
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between pb-8 gap-4">
          <div>
            <h2 className="text-4xl font-bold inline border-b-4 border-gray-500">
              Projects
            </h2>
            <p className="flex pt-2 text-gray-300 text-sm md:text-base">
              Check out some of my work right here
            </p>
          </div>

          <div className="flex justify-center md:justify-start md:h-12 mt-5">
            <button
              onClick={() => navigate("/allprojects")}
              className="px-4 sm:px-6 py-2 sm:py-3 border border-white text-white rounded-md 
               text-sm sm:text-base font-medium
               hover:bg-white hover:text-black hover:scale-105 
               transition duration-300 ease-in-out"
            >
              View All Projects
            </button>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {lastSixProjects.map((project) => (
            <div
              key={project.projectId}
              className="rounded-xl overflow-hidden bg-white shadow-lg group hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <div className="relative w-full h-52">
                <img
                  src={project.image}
                  alt={project.projectName}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => navigate(`/project/${project.projectId}`)}
                    className="bg-white text-black px-5 py-3 rounded-full shadow-lg hover:bg-gray-100 flex items-center gap-2 text-sm font-semibold"
                  >
                    <FaFolderOpen size={20} />
                    View Project
                  </button>
                </div>
              </div>

              <div className="px-4 py-2">
                <p className="text-center text-black font-bold text-md">
                  {project.projectName}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;