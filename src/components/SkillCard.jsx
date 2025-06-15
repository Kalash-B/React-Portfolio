import React from 'react';

const SkillCard = ({ icon, title, color, skills = [] }) => {
  return (
    <div className="bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-700 hover:border-gray-600 transition duration-300">
      <div className="flex items-center mb-4">
        <div className={`p-2 rounded-lg mr-3 bg-${color}-600`}>
          <span className="text-xl">{icon}</span>
        </div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="hover:scale-105 transition duration-200 p-3 bg-gray-700 rounded-lg shadow-sm flex flex-col items-center"
          >
            {skill.svg ? (
              <div className="h-8 w-8 mb-2">{skill.svg}</div>
            ) : (
              <img src={skill.img} alt={skill.name} className="h-8 w-8 mb-2" />
            )}
            <p className="text-white text-sm font-medium text-center">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
    