import React, { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaPhone,
  FaChevronRight,
  FaChevronLeft,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

import aboutData from "../data/about.json";

const SocialLinks = () => {
  const [showLinks, setShowLinks] = useState(window.innerWidth >= 1024);
  const [hovering, setHovering] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");

  useEffect(() => {
    const handleResize = () => {
      setShowLinks(window.innerWidth >= 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const showAlert = (msg) => {
    setAlertMsg(msg);
    setTimeout(() => setAlertMsg(""), 10000);
  };

  const links = [
    {
      id: 1,
      label: "LinkedIn",
      icon: <FaLinkedin size={30} />,
      href: `${aboutData.linkedin}`,
      style: "rounded-tr-md",
    },
    {
      id: 2,
      label: "WhatsApp",
      icon: <FaWhatsapp size={30} />,
      href: `${aboutData.whatsapp}`,
    },
    {
      id: 3,
      label: "Mail",
      icon: <HiOutlineMail size={30} />,
      href: `mailto:${aboutData.mail}`,
    },
    {
      id: 4,
      label: "Call",
      icon: <FaPhone size={30} />,
      href: `tel:${aboutData.phone}`,
      onClick: (e) => {
        e.preventDefault();
        if (window.innerWidth >= 1024) {
          showAlert("📞 Contact me at 9790484764");
        } else {
          window.location.href = "tel:9790484764";
        }
      },
    },
    {
      id: 5,
      label: "GitHub",
      icon: <FaGithub size={30} />,
      href: `${aboutData.github}`,
    },
    {
      id: 6,
      label: "Resume",
      icon: <BsFillPersonLinesFill size={30} />,
      href: "/assets/resume.pdf",
      download: `${aboutData.name}_Resume.pdf`,
      style: "rounded-br-md",
    },
  ];

  return (
    <div className="fixed top-[30%] left-0 z-50">
      {alertMsg && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-6 py-3 rounded-xl shadow-lg border border-cyan-500 animate-fadeIn">
          {alertMsg}
        </div>
      )}

      <div className="hidden lg:flex flex-col items-start relative">
        {showLinks ? (
          <>
            <ul
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              {links.map(
                ({ id, label, icon, href, style, download, onClick }) => (
                  <li
                    key={id}
                    className={`flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 ${style}`}
                  >
                    <a
                      href={href}
                      className="flex justify-between items-center w-full text-white"
                      download={download}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={onClick}
                    >
                      {label} {icon}
                    </a>
                  </li>
                )
              )}
            </ul>

            {!hovering && (
              <button
                onClick={() => setShowLinks(false)}
                className="absolute left-[60px] top-[150px] bg-gray-700 text-white p-2 rounded-r-md z-10"
              >
                <FaChevronRight size={20} />
              </button>
            )}
          </>
        ) : (
          <button
            onClick={() => setShowLinks(true)}
            className="bg-gray-700 text-white p-2 rounded-r-md h-14 flex items-center"
          >
            <FaChevronLeft size={20} />
          </button>
        )}
      </div>

      <div className="flex lg:hidden flex-col items-start">
        {!showLinks ? (
          <button
            onClick={() => setShowLinks(true)}
            className="bg-gray-700 text-white p-2 rounded-r-md h-14 flex items-center"
          >
            <FaChevronRight size={20} />
          </button>
        ) : (
          <>
            <ul>
              {links.map(
                ({ id, label, icon, href, style, download, onClick }) => (
                  <li
                    key={id}
                    onClick={onClick}
                    className={`flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 ${style}`}
                  >
                    <a
                      href={href}
                      className="flex justify-between items-center w-full text-white"
                      download={download}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {label} {icon}
                    </a>
                  </li>
                )
              )}
            </ul>
            <button
              onClick={() => setShowLinks(false)}
              className="bg-gray-700 text-white p-2 rounded-r-md h-14 flex items-center mt-2"
            >
              <FaChevronLeft size={20} />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default SocialLinks;