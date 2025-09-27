import React from "react";
import { Link } from "react-router-dom";

const Breadcrumbs = ({ paths }) => {
  if (!paths || paths.length === 0) {
    paths = [{ label: "Home", link: "/" }];
  }

  const activePath = paths[paths.length - 1];

  return (
    <div className="w-full py-20 h-[40vh] sm:h-[35vh] md:h-[30vh] bg-gradient-to-b from-gray-200 to-gray-600 text-black">
      <div className="max-w-screen-lg mx-auto px-4 py-6">
        <h2 className="text-2xl md:text-4xl font-extrabold tracking-wide mb-2">
          {activePath.label}
        </h2>

        <nav className="flex flex-wrap items-center space-x-2 text-sm md:text-base font-medium">
          {paths.map((path, index) => {
            const isActive = index === paths.length - 1;
            return (
              <React.Fragment key={index}>
                {isActive ? (
                  <span className="text-black font-semibold text-left block">
                    {path.label}
                  </span>
                ) : (
                  <Link to={path.link} className="text-gray-700">
                    {path.label}
                  </Link>
                )}
                {index < paths.length - 1 && (
                  <span className="text-gray-600">/</span>
                )}
              </React.Fragment>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Breadcrumbs;