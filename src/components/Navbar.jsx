import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "experiences", path: "/experiences" },
    { id: 4, link: "projects" },
    { id: 5, link: "skills" },
    { id: 6, link: "contact" },
  ];

  // const isExperiencesPage = location.pathname === "/experiences";
  const isProjectsPage =
    location.pathname === "/allprojects" ||
    location.pathname.startsWith("/project/");
  const isSkillsPage = location.pathname === "/allskills";

  return (
    <div className="flex justify-between items-center w-full h-20 text-white fixed bg-black px-4 z-50">
      <div>
        <h1 className="text-5xl font-signature ml-2">PortFolio</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link, path }) => {
          const isActive =
            (path && location.pathname === path) || 
            (link === "projects" && isProjectsPage) || 
            (link === "skills" && isSkillsPage) || 
            (!path && location.pathname === "/" && false);

          return (
            <li
              key={id}
              className={`px-4 cursor-pointer capitalize font-medium duration-200 ${
                isActive ? "text-blue-400" : "text-gray-400 hover:text-white"
              }`}
            >
              {path ? (
                <span onClick={() => navigate(path)}>{link}</span>
              ) : location.pathname === "/" ? (
                <ScrollLink
                  to={link}
                  smooth
                  duration={500}
                  activeClass="text-blue-400"
                  spy={true}
                  onClick={() => setNav(false)}
                >
                  {link}
                </ScrollLink>
              ) : (
                <span
                  onClick={() => {
                    navigate("/", { state: { scrollTo: link } });
                  }}
                >
                  {link}
                </span>
              )}
            </li>
          );
        })}
      </ul>

      <div
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
        onClick={() => setNav(!nav)}
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link, path }) => {
            const isActive =
              (path && location.pathname === path) ||
              (link === "projects" && isProjectsPage) ||
              (link === "skills" && isSkillsPage) ||
              (!path && location.pathname === "/" && false);

            return (
              <li
                key={id}
                className={`px-4 cursor-pointer capitalize py-6 text-4xl ${
                  isActive ? "text-blue-400" : ""
                }`}
              >
                {path ? (
                  <span
                    onClick={() => {
                      setNav(false);
                      navigate(path);
                    }}
                  >
                    {link}
                  </span>
                ) : location.pathname === "/" ? (
                  <ScrollLink
                    to={link}
                    smooth
                    duration={500}
                    activeClass="text-blue-400"
                    spy={true}
                    onClick={() => setNav(false)}
                  >
                    {link}
                  </ScrollLink>
                ) : (
                  <span
                    onClick={() => {
                      setNav(false);
                      navigate("/", { state: { scrollTo: link } });
                    }}
                  >
                    {link}
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Navbar;