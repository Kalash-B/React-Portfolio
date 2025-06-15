import React from "react";

const ProjectCard = ({ title, desc, img, tech, link }) => {
  return (
    <div className="group [perspective:1000px] h-80">
        <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front Side */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] bg-[#1e293b] rounded-2xl overflow-hidden shadow-lg">
          <img src={img} alt={title} className="w-full h-44 object-cover" />
          <div className="p-5">
            <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
            <p className="text-gray-300 text-sm mb-4 line-clamp-3">{desc}</p>
            <div className="flex flex-wrap gap-2">
              {tech.slice(0, 3).map((t, i) => (
                <span
                  key={i}
                  className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded"
                >
                  {t}
                </span>
              ))}
              {tech.length > 3 && (
                <span className="text-gray-400 text-xs">+{tech.length - 3} more</span>
              )}
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gradient-to-br from-[#1e293b] to-[#334155] rounded-2xl shadow-lg flex flex-col items-center justify-center p-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
            <p className="text-gray-300 text-sm mb-6">{desc}</p>
            <div className="flex flex-wrap gap-2 justify-center mb-6">
              {tech.map((t, i) => (
                <span
                  key={i}
                  className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded"
                >
                  {t}
                </span>
              ))}
            </div>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors duration-300"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                viewBox="0 0 512 512"
                className="text-lg"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M105.2 24.9c-3.1-8.9-15.7-8.9-18.9 0L29.8 199.7h132c-.1 0-56.6-174.8-56.6-174.8zM.9 287.7c-2.6 8 .3 16.9 7.1 22l247.9 184-226.2-294zm160.8-88l94.3 294 94.3-294zm349.4 88l-28.8-88-226.3 294 247.9-184c6.9-5.1 9.7-14 7.2-22zM425.7 24.9c-3.1-8.9-15.7-8.9-18.9 0l-56.6 174.8h132z"></path>
              </svg>
              View Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;