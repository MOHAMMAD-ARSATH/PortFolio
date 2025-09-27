import { useNavigate } from "react-router-dom";
import { FaFolderOpen } from "react-icons/fa";

import Navbar from "../components/Navbar";
import Breadcrumbs from "../components/Breadcrumbs";

import projects from "../data/projects.json";

const AllProjects = () => {
  const navigate = useNavigate();
  const lastProjects = [...projects].reverse();

  const breadcrumbsPaths = [
    { label: "Home", link: "/" },
    { label: "All Projects" },
  ];

  return (
    <>
      <Navbar />
      <Breadcrumbs paths={breadcrumbsPaths} />
      <div className="bg-gradient-to-b from-black to-gray-800 w-full text-white py-20 min-h-screen">
        <div className="max-w-screen-lg mx-auto px-4">
          <p className="text-gray-300 mb-10 text-sm sm:text-base md:text-md leading-relaxed">
            Check out some of my work right here.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {lastProjects.map((project) => (
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
    </>
  );
};

export default AllProjects;