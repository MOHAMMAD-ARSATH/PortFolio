import { useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import Breadcrumbs from "../components/Breadcrumbs";

import projects from "../data/projects.json";
import skillsData from "../data/skills.json";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projects.find(
    (project) => project.projectId === parseInt(projectId)
  );

  if (!projectId) {
    return <p className="text-white text-center mt-20">Project not found</p>;
  }

  const matchedSkills = project.skillId
    .map((id) => skillsData.find((skill) => skill.skillId === id))
    .filter(Boolean);

  const breadcrumbsPaths = [
    { label: "Home", link: "/" },
    { label: "All Projects", link: "/allprojects" },
    { label: project.projectName },
  ];

  return (
    <>
      <Navbar />
      <Breadcrumbs paths={breadcrumbsPaths} />
      <div className="bg-gradient-to-b from-black to-gray-800 w-full text-white py-12 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
          <h2 className="text-2xl font-bold text-center mb-10">
            {project.projectName}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <img
              src={`/${project.image}`}
              alt={project.projectName}
              className="w-full h-auto max-h-[400px] object-contain rounded-lg shadow-lg"
            />

            <div className="space-y-5">
              <h3 className="text-xl font-semibold">Purpose</h3>
              <p className="text-gray-300 text-base">{project.purpose}</p>

              <h3 className="text-xl font-semibold">Skills Used</h3>
              <div className="flex flex-wrap gap-4">
                {matchedSkills.map((skill) => (
                  <div
                    key={skill.skillId}
                    className="flex flex-col items-center"
                  >
                    <img
                      src={`/${skill.image}`}
                      alt={skill.name}
                      className="w-12 h-10 object-contain"
                    />
                    <p className="text-sm mt-1">{skill.name}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200 transition duration-200 sm:w-auto text-center"
                >
                  GitHub
                </a>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200 sm:w-auto text-center"
                >
                  Visit Site
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-2xl font-semibold mb-2">Project Details</h3>
            <div className="text-gray-300 text-base leading-relaxed space-y-3">
              {project.detail.map((point, index) => {
                const urlRegex = /<url>(.*?)<\/url>/;
                const match = point.match(urlRegex);

                if (match) {
                  const before = point.substring(0, match.index);
                  const url = match[1];
                  const after = point.substring(match.index + match[0].length);

                  return (
                    <p key={index} className="whitespace-pre-line">
                      {before}
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 underline hover:text-blue-300"
                      >
                        {url}
                      </a>
                      {after}
                    </p>
                  );
                }

                return (
                  <p key={index} className="whitespace-pre-line">
                    {point}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetail;